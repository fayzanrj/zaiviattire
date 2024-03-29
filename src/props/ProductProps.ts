export type ProductVariant = {
  id: string;
  color: {
    name: string;
    hexCode: string;
  };
  size: string;
  quantity: number;
};

export type ColorProps = { name: string; hexCode: string };

export interface ProductProps {
  id: string;
  productId: string;
  designId: string;
  productTitle: string;
  productDesc: string;
  category: string;
  composition: string;
  gsm: string;
  washCare: string;
  price: number;
  discount?: number;
  variants: ProductVariant[];
  productImages: string[];
}
