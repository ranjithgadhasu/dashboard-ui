import { useState } from "react";
import OrdersHeader from "../../components/Ecommerceoders/Header/OrdersHeader";
import SearchBar from "../../components/Ecommerceoders/Toolbar/SearchBar";
import OrdersTable from "../../components/Ecommerceoders/Table/OrdersTable";
import Pagination from "../../components/Ecommerceoders/Pagination/Pagination";
import OrdersTabs from "../../components/Ecommerceoders/Header/OrdersTabs";
import "./orders.css"

const Orders = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 orders-page ">
      <div className="mx-auto max-w-[1440px]">
        <OrdersHeader />
        <OrdersTabs />

        <div className="mt-6">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <div className="mt-4">
          <OrdersTable  search={search}/>
        </div>

        <div className="mt-4">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Orders;
