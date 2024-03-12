"use client";
import Image from "next/image";
import React, { useState, useMemo, useCallback } from "react";

interface ProductImagesProps {
  productImages: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ productImages }) => {
  // State to manage the currently selected image.
  const [selectedImage, setSelectedImage] = useState<string>(productImages[0]);

  // Memoizing click handler for image selection.
  const handleImageClick = useCallback(
    (image: string) => {
      setSelectedImage(image);
    },
    [setSelectedImage]
  );

  return (
    <div className="w-full h-full">
      {/* Display the main image */}
      <div className="relative w-full h-4/5">
        <Image
          src={selectedImage}
          alt="img"
          loading="eager"
          height={800}
          width={800}
          quality={100}
          className="w-96 h-96 object-cover aspect-square"
        />
      </div>

      {/* Display the image gallery */}
      <div className="flex items-center justify-center gap-4">
        {productImages?.map((image: string, index) => (
          <button
            onClick={() => handleImageClick(image)}
            key={index}
            aria-label="image-fullview-button"
            className={`relative rounded-lg ${
              selectedImage === image ? "opacity-10" : "opacity-100"
            }`}
          >
            <Image
              src={image}
              alt="image"
              width={500}
              height={100}
              sizes="100"
              quality={100}
              className="w-16 h-16 object-cover rounded-sm"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
