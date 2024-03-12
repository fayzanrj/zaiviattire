import { CartItemProps } from "@/props/CartItemProps";
import fetchProduct from "./FetchProduct";

const GetCartFromLS = async (parsedCart: any[]) => {
  let totalprice = 0;
  let discountedprice = 0;
  const cartList: CartItemProps[] = [];

  // Map each item in parsedCart to a promise that resolves to the corresponding product
  const productPromises = parsedCart.map(async (item: any) => {
    const product = await fetchProduct(item.productId);
    if (product) {
      const cartI: CartItemProps = {
        id: product.id,
        productId: product.productId,
        designId: product.designId,
        productTitle: product.productTitle,
        price: product.price,
        variant: item.variant,
        totalPrice: product.price * item.variant.quantity,
        discount: product.discount || "N/A",
        productImage: product.productImages[0],
      };
      totalprice += cartI.totalPrice;
      if (typeof cartI.discount === "number") {
        discountedprice += Math.floor(cartI.totalPrice / cartI.discount);
      }
      return cartI;
    }
  });

  // Wait for all product promises to resolve
  const products = await Promise.all(productPromises);

  // Filter out undefined products (if any)
  const validProducts = products.filter(
    (product): product is CartItemProps => !!product
  );

  // Add valid products to cartList
  cartList.push(...validProducts);

  return { cartList, totalprice, discountedprice };
};

export default GetCartFromLS;
