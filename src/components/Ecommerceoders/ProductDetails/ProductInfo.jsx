import QuantitySelector from "./QuantitySelector";
import AddToCart from "./AddToCart";
import ProductSpecifications from "./ProductSpecifications";

const ProductInfo = () => {
  return (
    <div className="flex h-full flex-col">
      {/* Title */}
      <h2 className="text-[20px] line-through font-medium leading-none text-[#3F434A]">
        Apple iPhone 11
      </h2>

      {/* SKU */}
     <p className="mt-2 line-through text-[14px] font-normal text-[#A8ADB5]">
    SKU: 0547081
</p>

      {/* Description */}
      <p className="mt-5 w-[320px] text-[14px] line-through font-normal leading-6 text-[#70757D]">
        iPhone 11 features a 6.1-inch Liquid Retina HD display powered by
        the A13 Bionic chip. Capture stunning photos with the dual-camera
        system and enjoy all-day battery life.
      </p>

      {/* Quantity & Price */}
      <div className="mt-8 flex items-end justify-between">
        <div>
          <p className="mb-3 text-[14px] line-through font-normal text-[#6B7280]">
            Quantity
          </p>

          <QuantitySelector />
        </div>

        <h3 className="text-[24px] line-through font-medium text-[#3F434A]">
          $699
        </h3>
      </div>

      {/* Add To Cart */}
      <div className="mt-6">
        <AddToCart />
      </div>

      {/* Specifications */}
      <div className="mt-10 flex-1">
        <ProductSpecifications />
      </div>
    </div>
  );
};

export default ProductInfo;