import ProductCard from "./ProductCard";
import { productDataGrid } from "./productDataGrid";
import "./grid.css"

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-10 products-grid">
      {productDataGrid.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;