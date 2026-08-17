import { useState } from "react";
import {
  Download,
  ChevronDown,
  Printer,
  FileSpreadsheet,
  FileText,
  Plus,
} from "lucide-react";
import ProductDetailsModal from "../ProductDetails/ProductDetailsModal";
import OrderDetailsModal from "../OrderDetails/OrderDetailsModal";
import "./header.css";


const EcommerceHeader = () => {
  const [showExport, setShowExport] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mb-8 ecommerce-header">
        {/* Top */}
        <div className="flex items-start justify-between ecommerce-header-top">
          <h1 className="text-[28px] font-normal text-[#3F434A] ecommerce-header-title">Orders</h1>
          <div className="ecommerce-modal-button-wrapper">
            <button
            onClick={() => setIsModalOpen(true)}
              className="flex h-12 ml-190 w-20 items-center justify-center rounded-xl bg-[#22963F] text-white transition hover:bg-[#1C8237] cursor-pointer  ecommerce-modal-button"
            >Modals
            </button>
          </div>
          <div className="flex items-center gap-4 ecommerce-header-actions">
            {/* Export */}

            <div className="relative ecommerce-export-wrapper">
              <button
                onClick={() => setShowExport(!showExport)}
                className="flex h-12 items-center gap-2 rounded-2xl border border-[#EEF2F6] bg-white px-5 text-[14px] font-normal text-[#3F434A] shadow-sm transition hover:bg-[#F8F9FA] cursor-pointer ecommerce-export-button"
              >
                <Download size={16} />

                <span>Export</span>

                <ChevronDown
                  size={16}
                  className={`transition duration-300 ${
                    showExport ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showExport && (
                <div className="absolute right-0 top-14 z-50 w-44 overflow-hidden rounded-2xl border border-[#EEF2F6] bg-white py-2 shadow-xl ecommerce-export-menu">
                  <button className="flex w-full items-center gap-3 px-4 py-2 text-[15px] font-normal text-[#3F434A] transition hover:bg-[#F8F9FA] cursor-pointer cursor-pointer">
                    <Printer size={16} />
                    Print
                  </button>

                  <button className="flex w-full items-center gap-3 px-4 py-2 text-[15px] font-normal text-[#3F434A] transition hover:bg-[#F8F9FA] cursor-pointer">
                    <FileSpreadsheet size={16} />
                    Excel
                  </button>

                  <button className="flex w-full items-center gap-3 px-4 py-2 text-[15px] font-normal text-[#3F434A] transition hover:bg-[#F8F9FA]">
                    <FileText size={16} />
                    PDF
                  </button>

                  <button className="flex w-full items-center gap-3 px-4 py-2 text-[15px] font-normal text-[#3F434A] transition hover:bg-[#F8F9FA] cursor-pointer">
                    <FileText size={16} />
                    CSV
                  </button>
                </div>
              )}
            </div>
            {/*Add Button */}
            <button
              onClick={() => setShowProductModal(true)}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22963F] text-white transition hover:bg-[#1C8237] cursor-pointer ecommerce-add-button"
            >
              <Plus size={22} />
            </button>
          </div>
        </div>
      </div>
      <ProductDetailsModal
        open={showProductModal}
        onClose={() => setShowProductModal(false)}
      />

      <OrderDetailsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default EcommerceHeader;
