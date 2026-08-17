import { X } from "lucide-react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import "./detailsmodel.css"

const ProductDetailsModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-6 product-details-overlay">
    <div className="relative h-[720px] w-[1054px] overflow-hidden rounded-2xl bg-white shadow-2xl overflow-y-auto product-details-modal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-[#6B7280] transition hover:bg-[#EAEAEA] product-details-close"
        >
          <X size={20} />
        </button>

        {/* Body */}
        <div className="grid h-full grid-cols-[360px_420px] gap-12 p-10 product-details-body">
          {/* Left */}
          <ProductGallery />

          {/* Right */}
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;