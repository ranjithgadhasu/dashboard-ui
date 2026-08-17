import ProductBadge from "./ProductBadge";
import ProductCheckbox from "./ProductCheckbox";
import ProductImage from "./ProductImage";
import ProductFooter from "./ProductFooter";

const ProductCard = ({
  product,
  onSelect,
}) => {
  return (
    <div
      className={`product-card overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        product.checked
          ? "border-[#22A447] shadow-sm"
          : "border-[#EEF2F6] hover:border-[#22A447]"
      }`}
    >
      {/* Header */}

      <div className="flex items-center justify-between px-5 pt-5">

        <ProductBadge status={product.status} />

        <ProductCheckbox
          checked={product.checked}
          onClick={() => onSelect?.(product.id)}
        />

      </div>

      {/* Image */}

      <ProductImage image={product.image} />

      {/* Footer */}

      <ProductFooter product={product} />

    </div>
  );
};

export default ProductCard;