import { X } from "lucide-react";
import CustomerTabs from "./CustomerTabs";

const CustomerModalHeader = ({
  activeTab,
  setActiveTab,
  onClose,
}) => {
  return (
    <div className="border-b-1 text-[gray]">

      <div className="flex items-center justify-between px-6 pt-5">

        <CustomerTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <button
          onClick={onClose}
          className="rounded-full bg-[#F5F5F5] p-2"
        >
          <X size={18} />
        </button>

      </div>

    </div>
  );
};

export default CustomerModalHeader;