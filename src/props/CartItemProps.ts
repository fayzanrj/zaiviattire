import { ProductVariant } from "./ProductProps";

export interface CartItemProps {
  id: string;
  productId: string;
  designId: string;
  productTitle: string;
  price: number;
  variant: ProductVariant;
  totalPrice: number;
  discount: number | "N/A";
  productImage: string;
}
