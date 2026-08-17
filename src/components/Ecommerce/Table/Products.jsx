import { useState } from "react";
import EcommerceHeader from "../Header/EcommerceHeader";
import SearchBar from "../Toolbar/SearchBar";
import ProductTable from "../Table/ProductTable";
import ProductGrid from "../Table/ProductGrid";

const Products = () => {
  const [viewMode, setViewMode] = useState("list");

  return (
    <>
      <EcommerceHeader
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <SearchBar />

      {viewMode === "list" ? (
        <ProductTable />
      ) : (
        <ProductGrid />
      )}
    </>
  );
};

export default Products;