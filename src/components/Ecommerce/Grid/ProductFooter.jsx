const ProductFooter = ({ product }) => {
  return (
    <div className="border-t border-[#EEF2F6] px-5 py-4">

      <h3 className="min-h-[48px] text-[14px] font-medium text-[#3F434A]">
        {product.productName}
      </h3>

      <div className="mt-4 flex items-center justify-between text-[14px] font-normal text-[#8A9099]">
        <span>{product.date}</span>
        <span >{product.category}</span>
        <span>{product.price}</span>
      </div>

    </div>
  );
};

export default ProductFooter;