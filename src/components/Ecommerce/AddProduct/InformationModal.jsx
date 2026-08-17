import { useState } from "react";
import { X } from "lucide-react";

import InformationTab from "./InformationTab";
import ImagesTab from "./ImagesTab";
import PricingTab from "./PricingTab";
import InventoryTab from "./InventoryTab";
import ShippingTab from "./ShippingTab";
import "./informmationmodal.css"

const InformationModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("information");

  if (!open) return null;

  const tabs = [
    { id: "information", label: "Information" },
    { id: "images", label: "Images" },
    { id: "pricing", label: "Pricing" },
    { id: "inventory", label: "Inventory" },
    { id: "shipping", label: "Shipping" },
  ];

  // Modal height
  const modalHeights = {
    information: "690px",
    images: "690px",
    pricing: "690px",
    inventory: "470px",
    shipping: "470px",
  };

  // Body height
  const bodyHeights = {
    information: "620px",
    images: "620px",
    pricing: "620px",
    inventory: "402px",
    shipping: "450px",
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 information-modal-overlay">
      <div
        className="overflow-hidden rounded-lg bg-white shadow-2xl transition-all duration-300 information-modal"
        style={{
          width: "600px",
          height: modalHeights[activeTab],
        }}
      >
        {/* Header */}
        <div className="flex items-center border-b border-[#E5E7EB] px-6 pt-4 information-modal-header">
          <div className="information-modal-tabs"></div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`mr-6 border-b-2 pb-3 text-[14px] font-medium uppercase tracking-wide transition-all information-modal-tab ${
                activeTab === tab.id
                  ? "border-[#22963F] text-[#22963F]"
                  : "border-transparent text-[#6B7280] hover:text-[#22963F]"
              }`}
            >
              {tab.label}
            </button>
          ))}

          <button
            onClick={onClose}
            className="ml-auto rounded p-1 hover:bg-gray-100 information-modal-close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div
          className="overflow-hidden px-6 py-2 transition-all duration-300 information-modal-body"
          style={{
            height: bodyHeights[activeTab],
          }}
        >
          {activeTab === "information" && <InformationTab />}
          {activeTab === "images" && <ImagesTab />}
          {activeTab === "pricing" && <PricingTab />}
          {activeTab === "inventory" && <InventoryTab />}
          {activeTab === "shipping" && <ShippingTab />}
        </div>
      </div>
    </div>
  );
};

export default InformationModal;