import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import ProductRow from "./ProductRow";
import { productsData } from "../data/productsData";
import Pagination from "./Pagination";
import "./productTable.css"

const HeaderCell = ({ title }) => (
  <div className="flex items-center gap-1">
    <span className="text-[12px] font-semibold uppercase tracking-wide text-[#8A9099]">
      {title}
    </span>
    <TiArrowSortedDown size={14} className="text-[#AEB5BE]" />
  </div>
);

const ProductTable = () => {
  const [products, setProducts] = useState(productsData);

  const allSelected =
    products.length > 0 && products.every((product) => product.checked);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;

    setProducts((prev) =>
      prev.map((product) => ({
        ...product,
        checked,
      })),
    );
  };

  const handleRowCheck = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              checked: !product.checked,
            }
          : product,
      ),
    );
  };

  return (
   <>
    <div className="overflow-hidden rounded-2xl border border-[#EEF2F6] bg-white products-desktop-table">
      <table className="w-full products-table">
        <thead>
          <tr className="h-14 border-b border-[#EEF2F6] bg-white products-table-head">
            {/* Checkbox */}
            <th className="w-14 text-center products-checkbox-head">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
                className="h-4 w-4 cursor-pointer rounded accent-[#22963F]"
              />
            </th>

            {/* Headers */}

            <th className="px-2 text-left products-product-name-head">
              <HeaderCell title="Product Name" />
            </th>

            <th className=" text-left products-column-head">
              <HeaderCell title="Product No." />
            </th>

            <th className=" text-left products-column-head">
              <HeaderCell title="Category" />
            </th>

            <th className=" text-left products-column-head">
              <HeaderCell title="Date" />
            </th>

            <th className=" text-left products-column-head">
              <HeaderCell title="Price" />
            </th>

            <th className=" text-left products-column-head">
              <HeaderCell title="Status" />
            </th>

            <th className="w-12 products-action-head"></th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              onCheck={handleRowCheck}
            />
          ))}
        </tbody>
      </table>
    </div>
     <div className="products-pagination">
        <Pagination />
      </div>
   </>
  );
};

export default ProductTable;
