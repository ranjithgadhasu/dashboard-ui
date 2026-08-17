import ProductRow from "./ProductRow";
//import productData from "./productData";
import "./product.css"

const ProductTable = ({ products }) => {
  return (
    <div className="product-table-wrapper">

      <table className="w-full border-collapse product-table">

        <thead>
          <tr className="border-b border-[#EEF2F6]">

            <th className="pb-4 pl-4 text-left text-[14px] font-medium uppercase tracking-wide text-[#8A9099] product-table-header">
              Product
            </th>

            <th className="pb-4 text-center text-[14px] font-medium uppercase tracking-wide text-[#8A9099] product-table-header">
              Price
            </th>

            <th className="pb-4 text-center text-[14px] font-medium uppercase tracking-wide text-[#8A9099] product-table-header">
              Quantity
            </th>

            <th className="pb-4 pr-4 text-right text-[14px] font-medium uppercase tracking-wide text-[#8A9099] product-table-header">
              Total
            </th>

          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <ProductRow
              key={item.id}
              product={item}
            />
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default ProductTable;