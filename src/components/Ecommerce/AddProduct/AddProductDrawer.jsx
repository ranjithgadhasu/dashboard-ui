import { X } from "lucide-react";
import ProductForm from "./ProductForm";
import"./addproduct.css"

const AddProductDrawer = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] add-product-overlay ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 add-product-backdrop  ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}

      <div
        className={`absolute right-0 top-0 h-full w-[420px] bg-white shadow-2xl transition-transform duration-300 ease-in-out add-product-drawer ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#EEF2F6] px-6 py-5 add-product-header">
          <h2 className="text-[28px] font-medium text-[#3F434A] add-product-title">
            Add Product
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-[#8A9099] transition hover:bg-[#F5F6F8] hover:text-[#3F434A] add-product-close"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div className="h-[calc(100%-84px)] overflow-y-auto px-6 py-6 add-product-body">
          <ProductForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AddProductDrawer;