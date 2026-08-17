import { useState } from "react";

import CustomersHeader from "../../components/Customers/Header/CustomersHeader";
import CustomerTabs from "../../components/Customers/Header/CustomerTabs";
import SearchToolbar from "../../components/Customers/Header/SearchToolbar";
import CustomersTable from "../../components/Customers/Table/CustomersTable";
import CustomerModal from "../../components/Customers/CustomerModal/CustomerModal";
import "./customer.css"


const Customers = () => {
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
const [showCustomerModal, setShowCustomerModal] = useState(false);


  const handleCustomerClick = (customer) => {
  setSelectedCustomer(customer);
  setShowCustomerModal(true);
};

  return (
   <>
    <div className="rounded-3xl bg-[#F8F9FB] p-6 customers-page">
      <div className="customer-header">
        <CustomersHeader />
      </div>
      <div className="mt-8">
        <CustomerTabs />
      </div>
      <div className="mt-5">
        <SearchToolbar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="mt-5 customer-table-size">
        <CustomersTable
          search={search}
          onCustomerClick={handleCustomerClick}
        />
      </div>
    </div>
    <CustomerModal
  open={showCustomerModal}
  customer={selectedCustomer}
  onClose={() => setShowCustomerModal(false)}
/>
   </>
  );
};

export default Customers;