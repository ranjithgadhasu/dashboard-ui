import { useState } from "react";

import EcommerceHeader from "../../components/Ecommerce/Header/EcommerceHeader";
import ProductToolbar from "../../components/Ecommerce/Toolbar/ProductToolbar";
import ProductTable from "../../components/Ecommerce/Table/ProductTable";
import ProductGrid from "../../components/Ecommerce/Grid/ProductGrid";
import "./products.css";

const Products = () => {
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="p-8 products-page">
      <EcommerceHeader
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <ProductToolbar />

      {viewMode === "list" ? (
        <ProductTable />
      ) : (
        <ProductGrid />
      )}
    </div>
  );
};

export default Products;