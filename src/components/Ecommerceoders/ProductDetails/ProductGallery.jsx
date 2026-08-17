import { useState } from "react";
import ThumbnailList from "./ThumbnailList";

import Picture from "../../../assets/images/picture.png"; // adjust path

const images = [
  Picture,
  Picture,
  Picture,
  Picture,
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex h-full flex-col">
      {/* Main Image */}
      <div className="flex h-[520px] items-center justify-center rounded-2xl bg-[#F8F9FA]">
        <img
          src={selectedImage}
          alt="Product"
          className="max-h-[460px] max-w-[320px] object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-6">
        <ThumbnailList
          images={images}
          selectedImage={selectedImage}
          onSelect={setSelectedImage}
        />
      </div>
    </div>
  );
};

export default ProductGallery;