"use client";
import { CHECKOUT_STEPS } from "@/constants/CheckoutSteps";
import useAppContext from "@/hooks/useAppContext";
import { CartItemProps } from "@/props/CartItemProps";
import StepProps from "@/props/CheckoutStepProps";
import { InputsType, formSchema } from "@/utilities/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../Loader";
import CheckoutNavButtons from "./CheckoutNavButtons";
import CheckoutSteps from "./CheckoutSteps";
import OrderConfirmation from "./OrderConfirmation";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import ReceiverInfo from "./ReceiverInfo";
import ShippingInfo from "./ShippingInfo";
import { handleApiError } from "@/libs/handleApiError";
import GetCartFromLS from "@/libs/GetCartFromLS";

const CheckoutForm = () => {
  const { cart, setCart } = useAppContext();
  const router = useRouter();
  // Use form hook
  const {
    getValues,
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = useForm<InputsType>({
    resolver: zodResolver(formSchema),
  });
  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>();
  const [steps, setSteps] = useState<StepProps[]>(CHECKOUT_STEPS);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orderItems, setOrderItems] = useState<CartItemProps[]>([]);
  const [orderPlacementStatus, setOrderPlacementStatus] = useState<
    "PLACED" | "FAILED" | "NOT_PLACED"
  >("NOT_PLACED");
  const [orderNumber, setOrderNumber] = useState<string>("");

  // Fetch cart from localStorage using useLayoutEffect
  useLayoutEffect(() => {
    const fetchCartFromLocalStorage = async () => {
      const cartFromLS = localStorage.getItem("cart");
      if (cartFromLS) {
        const parsedCart = JSON.parse(cartFromLS);
        if (parsedCart.length === 0) {
          router.replace("/"); // redirecting to home if cart is empty
        } else {
          const { totalprice, discountedprice, cartList } = await GetCartFromLS(
            parsedCart
          );
          setOrderItems(cartList);
          setTotal(totalprice);
          setDiscount(discountedprice);
        }
      } else {
        router.push("/"); // redirecting to home if cart is not found
      }
    };

    fetchCartFromLocalStorage();

    // Clean up
    return () => {
      reset();
      setCurrentStep(0);
      steps.forEach((step) => {
        step.isCompleted = false;
      });
    };
  }, []);

  // Form submission
  const processForm: SubmitHandler<InputsType> = async (data) => {
    try {
      document.documentElement.scrollTop = 0;
      setIsLoading(true);
      const items: any[] = [];
      let total = 0;
      orderItems.forEach((item, index) => {
        const obj = {
          productId: item.productId,
          productDBId: item.id,
          discount: item.discount === "N/A" ? 0 : item.discount,
          total:
            item.discount !== "N/A" && item.discount > 0
              ? item.variant.quantity * item.price -
                Math.ceil(item.variant.quantity * item.price) / item.discount
              : item.price * item.variant.quantity,
          variant: {
            variantId: item.variant.id,
            color: {
              name: item.variant.color.name,
              hexCode: item.variant.color.hexCode,
            },
            quantity: item.variant.quantity,
            size: item.variant.size,
          },
        };

        total += obj.total;
        items.push(obj);
      });
      const placeOrder = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/order/placeOrder`,
        {
          shippingInfo: getValues(),
          items,
          total,
        },
        {
          //@ts-ignore
          headers: {
            "Content-Type": "application/json",
            accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
          },
        }
      );
      setOrderNumber(placeOrder.data.orderNumber);
      setOrderPlacementStatus("PLACED");
      toast.success(placeOrder.data.message);
    } catch (error) {
      console.error(error);
      handleApiError(error);
      setOrderPlacementStatus("FAILED");
    } finally {
      setIsLoading(false);
      setCart([]);
      localStorage.removeItem("cart");
      setSteps((prevSteps) => {
        const updatedSteps = [...prevSteps];
        updatedSteps[3].isCompleted = true;
        return updatedSteps;
      });
    }
  };

  return (
    <div className="text-center text-white">
      {/* Steps */}
      <CheckoutSteps steps={steps} currentStep={currentStep} />

      {isLoading ? (
        <div className=" w-full h-96">
          <Loader />
        </div>
      ) : (
        <div className={`flex w-full min-h-96 h-fit md:flex-nowrap flex-wrap`}>
          <section className="order-2 w-full overflow-hidden md:w-1/2 h-fit md:order-1">
            <form
              className="w-full min-h-80 md:min-h-72 px-3.5 sm:p-0 sm:w-[28rem] md:w-[23rem] lg:w-[30rem] mx-auto text-center lg:float-right lg:mr-10 pt-6 pb-4"
              onSubmit={handleSubmit(processForm)}
            >
              {/* Step 1 */}
              {currentStep === 0 && (
                <ReceiverInfo
                  register={register}
                  errors={errors}
                  watch={watch}
                />
              )}

              {/* Step 2 */}
              {currentStep === 1 && (
                <ShippingInfo
                  register={register}
                  errors={errors}
                  watch={watch}
                />
              )}

              {/* Step 3 */}
              {currentStep === 2 && <Payment />}

              {/* Step 4 */}
              {currentStep === 3 && (
                <OrderConfirmation
                  getValues={getValues}
                  orderPlacementStatus={orderPlacementStatus}
                  total={total}
                  discount={discount || 0}
                  orderNumber={orderNumber}
                />
              )}
            </form>

            {/* Form navigation buttons */}
            {orderPlacementStatus === "NOT_PLACED" && (
              <CheckoutNavButtons
                setSteps={setSteps}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                trigger={trigger}
              />
            )}
          </section>

          {/* Order summary i.e. all cart items */}
          <section className="order-2 w-full overflow-hidden text-center md:w-1/2 md:order-1">
            <OrderSummary
              orderItems={orderItems}
              total={total}
              discount={discount || 0}
            />
          </section>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
