import { CHECKOUT_STEPS } from "@/constants/CheckoutSteps";
import StepProps from "@/props/CheckoutStepProps";
import { InputsType, formSchema } from "@/utilities/formSchema";
import React from "react";
import { z } from "zod";

interface CheckoutNavButtonsProps {
  setSteps: React.Dispatch<React.SetStateAction<StepProps[]>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  trigger: any;
}
const CheckoutNavButtons: React.FC<CheckoutNavButtonsProps> = ({
  currentStep,
  setCurrentStep,
  trigger,
  setSteps,
}) => {
  type FieldName = keyof InputsType;
  // Function to mark and unmark a step completed
  const handleStepCompletion = (stepIndex: number, isCompleted: boolean) => {
    setSteps((prevSteps) => {
      const updatedSteps = [...prevSteps];
      updatedSteps[stepIndex].isCompleted = isCompleted;
      return updatedSteps;
    });
  };

  // Function to move forwards in steps
  const next = async () => {
    // Checking if current step's fields are filled
    const fields = CHECKOUT_STEPS[currentStep].fields;
    const isFormCompleted = await trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    // Exiting function
    if (!isFormCompleted) return;

    // If there is more step to go
    if (currentStep < CHECKOUT_STEPS.length) {
      handleStepCompletion(currentStep, true);
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Function to move backwards in steps
  const prev = () => {
    if (currentStep > 0) {
      handleStepCompletion(currentStep - 1, false);
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full px-3.5 sm:p-0 sm:w-[28rem] md:w-[23rem] lg:w-[30rem] mx-auto text-center lg:float-right lg:mr-10 h-10 relative mb-10">
      {/* Navigation Buttons */}
      <CheckoutNavButton
        isDisabled={currentStep === 0}
        handleClick={prev}
        variant="Previous"
      />
      <CheckoutNavButton
        isDisabled={currentStep === CHECKOUT_STEPS.length - 1}
        handleClick={next}
        variant="Next"
      />
    </div>
  );
};

export default CheckoutNavButtons;

// Check out button component
type CheckoutNavButtonProps = {
  variant: "Previous" | "Next";
  isDisabled: boolean;
  handleClick: () => void;
};
const CheckoutNavButton: React.FC<CheckoutNavButtonProps> = ({
  variant,
  handleClick,
  isDisabled,
}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`w-24 py-1.5 font-bold text-black bg-white rounded-lg disabled:bg-stone-400 absolute ${
        variant === "Previous" ? "left-4" : "right-4"
      } `}
      aria-label={`checkout ${variant} button`}
      disabled={isDisabled}
    >
      <p>{variant}</p>
    </button>
  );
};
