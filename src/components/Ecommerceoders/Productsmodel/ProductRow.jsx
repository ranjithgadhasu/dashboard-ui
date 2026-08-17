const ProductRow = ({ product }) => {
  return (
    <tr className="border-b border-[#EEF2F6] last:border-0">
      <td className="py-5 pl-4 text-[14px] font-normal text-[#3F434A]">
        {product.product}
      </td>

      <td className="py-5 text-center text-[14px] font-normal text-[#3F434A]">
        {product.price}
      </td>

      <td className="py-5 text-center text-[14px] font-normal text-[#3F434A]">
        {product.quantity}
      </td>

      <td className="py-5 pr-4 text-right text-[14px] font-normal text-[#3F434A]">
        {product.total}
      </td>
    </tr>
  );
};

export default ProductRow;