import GoBack from "@/components/GoBack";
import NoProductFound from "@/components/NoProductFound";
import ServerError from "@/components/ServerError";
import ProductImages from "@/components/product/ProductImages";
import ProductPrice from "@/components/product/ProductPrice";
import VariantSelection from "@/components/product/VariantSelection";
import fetchProduct from "@/libs/FetchProduct";
import React from "react";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  // Fetching product
  const product = await fetchProduct(params.productId);

  // If there's an server error
  if (product === undefined) {
    return <ServerError />;
  }

  // If no product is found with provided product ID
  if (product === null) {
    return <NoProductFound />;
  }

  // Destructuring Product
  const {
    productTitle,
    price,
    discount,
    category,
    productImages,
    productDesc,
    composition,
    gsm,
    washCare,
  } = product;

  return (
    <>
      {/* Go back button */}
      <div className="pt-16">
        <GoBack label={category} href={`/category/${category}`} />
      </div>
      <div className="flex flex-wrap justify-center px-4  pt-12 min-h-svh">
        {/* Images div */}
        <section className="w-full sm:h-screen md:h-[34rem] md:w-96 h-[34rem] shadow-2xl drop-shadow-2xl">
          <ProductImages productImages={productImages} />
        </section>

        <section className="w-full md:w-[40rem] p-3 md:px-6 h-[30rem] text-white">
          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold">{productTitle}</h1>
          </div>

          {/* Price */}
          <ProductPrice
            discount={discount}
            price={price}
            variant="ProductDetails"
          />

          {/* Product Variant Selection i.e. Size and Color & Add to cart */}
          <VariantSelection product={product} />
        </section>

        {/* Product Description */}
        <section className="w-full p-2 text-white md:w-3/5">
          <div className="my-8">
            {/* Desc */}
            <ProductDescItem label="Product Description" value={productDesc} />

            {/* Category */}
            <ProductDescItem label="Category" value={category} />

            {/* Composition  */}
            <ProductDescItem label="Composition" value={composition} />

            {/* GSM  */}
            <ProductDescItem label="GSM" value={gsm} />

            {/* Wash Care  */}
            <ProductDescItem label=" Wash Care" value={washCare} />
          </div>

          {/* Order times */}
          <div className="my-8">
            {/* Order process time */}
            <ProductDescItem
              label="Order processing time"
              value="24 - 48 hours"
            />

            {/* Delivery time */}
            <ProductDescItem
              label="Order delivery time"
              value="4 - 6 business fays"
            />
          </div>

          {/* Note */}
          <div className="my-4">
            <ProductDescItem
              label="Important Note"
              value="Product colors mat vary according to your screen brightness and your device's screen. Actual prouct may vary +/- 20%"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;

interface ProductDescItemProps {
  label: string;
  value: string;
}

const ProductDescItem: React.FC<ProductDescItemProps> = ({ label, value }) => (
  <p className="font-bold">
    {label} : <span className={`font-normal`}>{value}</span>
  </p>
);
