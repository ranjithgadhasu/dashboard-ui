//import { Download, ChevronDown } from "lucide-react";
import ExportDropdown from "../OrderDetails/ExportDropdown";
import ProductTable from "./ProductTable";
import productData from "./productData";

const ProductTab = () => {
  return (
    <div className="px-8 py-4">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[28px] font-medium text-[#3F434A]">
          Products
        </h2>

        <ExportDropdown />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border-b-2 border-[#EEF2F6] bg-white">
        <ProductTable products={productData} />
      </div>
    </div>
  );
};

export default ProductTab;