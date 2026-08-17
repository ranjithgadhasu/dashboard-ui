import { MoreVertical } from "lucide-react";
import StatusBadge from "./StatusBadge";




const ProductRow = ({ product, onCheck }) => {
  return (
    <tr className="h-[54px] border-b border-[#EEF2F6] transition hover:bg-[#FAFBFC]">

      {/* Checkbox */}
      <td className="w-14 text-center">
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => onCheck(product.id)}
          className="h-4 w-4 cursor-pointer accent-[#22963F]"
        />
      </td>

      {/* Product Name */}
      <td className="whitespace-nowrap py-5 text-[15px] font-normal text-[#3F434A]">
        {product.productName} 
      </td>

      {/* Product Number */}
      <td className="text-[15px] font-normal text-[#8A9099]">
        {product.productNo}
      </td>

      {/* Category */}
      <td className="text-[15px] font-normal text-[##8A9099]">
        {product.category}
      </td>

      {/* Date */}
      <td className="text-[16px] text-[#8A9099]">
        {product.date}
      </td>

      {/* Price */}
      <td className="text-[15px] font-normal text-[#3F434A]">
        {product.price}
      </td>

      {/* Status */}
      <td>
        <StatusBadge status={product.status} />
      </td>

      {/* More */}
      <td className="text-center">
        <button className="rounded-lg p-2 transition hover:bg-[#F5F7FA]">
          <MoreVertical
            size={18}
            className="text-[#8A9099]"
          />
        </button>
      </td>
    </tr>
  );
};
export default ProductRow;