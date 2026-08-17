import { useState } from "react";

import customersData from "../data/customersData";
import CustomersTableHeader from "./CustomersTableHeader";
import CustomerRow from "./CustomerRow";
import CustomersPagination from "../Pagination/CustomersPagination";
import"./table.css"

const CustomersTable = ({ search, onCustomerClick }) => {
  const [customers, setCustomers] = useState(customersData);

  // Select All
  const allSelected =
    customers.length > 0 && customers.every((item) => item.selected);

  const handleSelectAll = () => {
    setCustomers((prev) =>
      prev.map((item) => ({
        ...item,
        selected: !allSelected,
      })),
    );
  };

  // Select Single Row
  const handleCheckboxChange = (id) => {
    setCustomers((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  // Search
  const filteredCustomers = customers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="overflow-hidden rounded-b-[24px] bg-white customers-table-wrapper">
        <div className="customers-table-scroll">
        <table className="w-full border-collapse customers-table">
          <CustomersTableHeader
            checked={allSelected}
            onChange={handleSelectAll}
          />

          <tbody className="table-body">
            {filteredCustomers.map((customer) => (
              <CustomerRow
                key={customer.id}
                customer={customer}
                onCheckboxChange={handleCheckboxChange}
                onCustomerClick={onCustomerClick}
              />
            ))}
          </tbody>
        </table>
        </div>
       </div>
      <CustomersPagination />
    </>
  );
};

export default CustomersTable;
