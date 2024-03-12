import NoProductFound from "@/components/NoProductFound";
import ProductListItem from "@/components/product/ProductListItem";
import SearchBar from "@/components/SearchBar";
import ServerError from "@/components/ServerError";
import fetchSearchResults from "@/libs/FetchSearchResults";
import { ProductProps } from "@/props/ProductProps";
import React from "react";

interface SearchProps {
  searchParams: { q: string };
}
const Search: React.FC<SearchProps> = async ({ searchParams }) => {
  // If products for provided query
  const products = await fetchSearchResults(searchParams.q);

  // If there's an server error
  if (products === undefined) {
    return <ServerError />;
  }

  return (
    <div className="min-h-dvh py-16">
      {/* Search bar */}
      <div className="w-[95%] md:w-[35rem] mx-auto text-center my-4">
        <SearchBar variant="PAGE" />
      </div>

      {/* Heading */}
      <div className="px-6 lg:px-32">
        <h3 className="text-lg text-white ">
          Search results for <b>{searchParams.q}</b>
        </h3>
      </div>

      {/* Products list */}
      <div className="flex flex-wrap items-center justify-center gap-10 p-6 lg:gap-16 lg:px-10">
        {/* If no product found */}
        {products === null || products.length <= 0 ? (
          <NoProductFound />
        ) : (
          products.map((product: ProductProps) => (
            <ProductListItem key={product.productId} {...product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
