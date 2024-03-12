import { ColorProps, ProductVariant } from "@/props/ProductProps";

// Function to extract sizes and colors from variants
export const getProductColors = (variants: ProductVariant[]) => {
  let colors: ColorProps[] = [];

  variants.forEach((variant) => {
    if (variant.quantity > 0) {
      const colorObject: ColorProps = {
        name: variant.color.name,
        hexCode: variant.color.hexCode,
      };

      // Checking if color already exists in the array
      const colorExists = colors.some(
        (color) => color.name === colorObject.name
      );
      if (!colorExists) {
        colors.push(colorObject); // Adding unique colors to the array
      }
    }
  });

  return colors;
};

export const getProductSizes = (variants: ProductVariant[]) => {
  let sizes: string[] = [];

  variants.forEach((variant) => {
    if (variant.quantity > 0) {
      if (!sizes.includes(variant.size)) {
        sizes.push(variant.size);
      }
    }
  });

  return sizes;
};
