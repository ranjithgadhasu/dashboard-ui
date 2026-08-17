import { useState } from "react";
import {
  Download,
  ChevronDown,
  Plus,
  Printer,
  FileSpreadsheet,
  FileText,
} from "lucide-react";
import List from "../../../assets/icons/List.png";
import Grid from "../../../assets/icons/Grid.png";
import AddProductDrawer from "../AddProduct/AddProductDrawer";
import InformationModal from "../AddProduct/InformationModal";
import "./header.css";



const tabs = [
  {
    name: "All",
    count: 283,
  },
  {
    name: "Available",
    count: 268,
  },
  {
    name: "Disabled",
    count: 15,
  },
];

const EcommerceHeader = ({ viewMode, setViewMode }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [showExport, setShowExport] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showInformationModal, setShowInformationModal] = useState(false);

  return (
 <>
    <div className="mb-8 ecommerce-header">
      {/* Top */}

      <div className="flex items-start justify-between ecommerce-header-top">
        <h1 className="text-[28px] font-normal text-[#3F434A]">Products</h1>

        <div className="flex items-center gap-4 ecommerce-header-actions">
          {/* Export */}
          <div className="relative buttons-download">
            <button
              onClick={() => setShowExport(!showExport)}
              className="flex h-12 items-center gap-2 rounded-2xl border border-[#EEF2F6] bg-white px-5 text-[14px] font-normal text-[#3F434A] shadow-sm transition hover:bg-[#F8F9FA] cursor-pointer"
            >
              <Download size={16} />

              <span className="download-button">Export</span>

              <ChevronDown
                size={16}
                className={`transition duration-300 ${
                  showExport ? "rotate-180" : ""
                }`}
              />
            </button>

            {showExport && (
              <div className="absolute right-0 top-14 z-50 w-44 overflow-hidden rounded-2xl border border-[#EEF2F6] bg-white py-2 shadow-xl">
                <button className="flex w-full items-center gap-3 px-4 py-2 text-[15px] font-normal text-[#3F434A] transition hover:bg-[#F8F9FA] cursor-pointer">
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

          {/* Add */}

         <button
  onClick={() => setShowAddProduct(true)}
  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22963F] text-white transition hover:bg-[#1C8237] cursor-pointer"
>
  <Plus size={22} />
</button>

<AddProductDrawer
  open={showAddProduct}
  onClose={() => setShowAddProduct(false)}
/>
        </div>
      </div>

      {/* Tabs */}

      <div className="mt-10 flex items-end justify-between border-b border-[#EEF2F6] commerce-header-tab-list-one">
        <div className="flex items-center gap-8 ecommerce-header-tab-list">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative pb-4 text-[15px] transition ${
                activeTab === tab.name
                  ? "font-medium text-[#3F434A]"
                  : "text-[#8A9099]"
              }`}
            >
              {tab.name}

              <span className="ml-2 rounded-md bg-[#F3F5F7] px-2 py-[2px] text-[11px] text-[#8A9099]">
                {tab.count}
              </span>

              {activeTab === tab.name && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#22963F]" />
              )}
            </button>
          ))}
        </div>

        {/* Information */}
    <button onClick={() => setShowInformationModal(true)}
  className="rounded-md bg-[#22963F] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#1C8237] ecommerce-information-btn"
>
  Information
</button>

        {/* View */}

        <div className="flex items-center rounded-2xl border border-[#EEF2F6] bg-white p-1 shadow-sm ecommerce-view-toggle-two">
          {/* List */}

          <button
            onClick={() => setViewMode("list")}
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
              viewMode === "list"
                ? "bg-[#22963F] "
                : "bg-transparent hover:bg-[#F7F8FA]"
            }`}
          >
            <img
              src={List}
              alt="List"
              className={`h-4 w-4 transition-all duration-300 ${
                viewMode === "list" ? "brightness-0 invert" : ""
              }`}
            />
          </button>

          {/* Grid */}

          <button
            onClick={() => setViewMode("grid")}
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
              viewMode === "grid"
                ? "bg-[#22963F]"
                : "bg-transparent hover:bg-[#F7F8FA]"
            }`}
          >
            <img
              src={Grid}
              alt="Grid"
              className={`h-4 w-4 transition-all duration-300 ${
                viewMode === "grid" ? "brightness-0 invert" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
        {/* Other page content */}

    <InformationModal
      open={showInformationModal}
      onClose={() => setShowInformationModal(false)}
    />
 </>
  );
};

export default EcommerceHeader;
