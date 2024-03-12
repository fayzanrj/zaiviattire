import GoBack from "@/components/GoBack";
import NoProductFound from "@/components/NoProductFound";
import ProductListItem from "@/components/product/ProductListItem";
import ServerError from "@/components/ServerError";
import fetchProductsByCategory from "@/libs/FetchProductsByCategory";
import { ProductProps } from "@/props/ProductProps";
import React from "react";

interface CategoryPageProps {
  params: { category: string };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  // Fetching products
  const products = await fetchProductsByCategory(params.category);

  // If there's an server error
  if (products === undefined) {
    return <ServerError />;
  }

  return (
    <div className="min-h-dvh py-16">
      {/* Go back button */}
      <GoBack label="Home" href="/" />

      {/* Products list */}
      {products === null || products.length <= 0 ? (
        <>
          <NoProductFound />
        </>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-10 p-6 lg:gap-16 lg:px-10">
          {products.map((product: ProductProps) => (
            <ProductListItem key={product.productId} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
