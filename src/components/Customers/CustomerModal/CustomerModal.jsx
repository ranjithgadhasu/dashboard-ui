import { useState } from "react";
import CustomerModalHeader from "./CustomerModalHeader";
//import CustomerTabs from "./CustomerTabs";

import ProfileTab from "./Profile/ProfileTab";
import AddressTab from "./Address/AddressTab";
import PaymentTab from "./Payment/PaymentTab";
import SubmissionTab from "./Submission/SubmissionTab";
import "./customermodel.css"

const CustomerModal = ({ open, customer, onClose }) => {
  const [activeTab, setActiveTab] = useState("profile");

  if (!open || !customer) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 customer-modal-overlay">
      <div className="h-[736px] w-[500px] overflow-hidden rounded-2xl bg-white customer-modal">
        <CustomerModalHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onClose={onClose}
        />
        <div className="h-[680px] overflow-y-hidden customer-modal-body">
          {activeTab === "profile" && <ProfileTab customer={customer} />}

          {activeTab === "address" && <AddressTab customer={customer} />}

          {activeTab === "payment" && <PaymentTab customer={customer} />}

          {activeTab === "submission" && <SubmissionTab customer={customer} />}
        </div>
      </div>
    </div>
  );
};

export default CustomerModal;
