import { useState } from "react";
import { X } from "lucide-react";

import OrderTabs from "./OrderTabs";
import OrderHeader from "./OrderHeader";

import CustomerInfo from "./CustomerInfo";
import PaymentSection from "./PaymentSection";
import AddressAccordion from "./AddressAccordion";

// Create these components
import ProductTab from "../Productsmodel/ProductTab";
import InvoiceTab from "../InvoiceModel/InvoiceTab";
import "./oders.css"

const OrderDetailsModal = ({ open, onClose, order }) => {
  const [activeTab, setActiveTab] = useState("details");

  if (!open) return null;

  const getModalHeight = () => {
    switch (activeTab) {
      case "products":
        return "h-[500px]";

      case "invoice":
        return "h-[730px]";

      default:
        return "h-[700px]";
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-6 order-details-overlay">
      <div
        className={`relative w-[1100px] ${getModalHeight()} overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 order-details-modal`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-[#ECECEC]  order-details-close"
        >
          <X size={18} />
        </button>

        <div className="flex h-full flex-col order-details-content">
          {/* Tabs */}
               <div className="order-details-tabs">
            <OrderTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>


          {/* ORDER DETAILS */}
          {activeTab === "details" && (
            <div className="overflow-y-auto px-8 py-3 order-details-body">
              <OrderHeader order={order} />

              <div className="mt-1">
                <CustomerInfo order={order} />
              </div>

              <div className="mt-8">
                <PaymentSection order={order} />
              </div>

              <div className="mt-8">
                <AddressAccordion order={order} />
              </div>
            </div>
          )}

          {/* PRODUCTS */}
          {activeTab === "products" && (
             <div className="order-details-products">
              <ProductTab order={order} />
            </div>
          )}

          {/* INVOICE */}
          {activeTab === "invoice" && (
             <div className="order-details-invoice">
              <InvoiceTab order={order} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;