const ProductBadge = ({ status }) => {
  const available = status === "Available";

  return (
    <span
      className={`rounded-full px-3 py-1 text-[11px] font-medium ${
        available
          ? "bg-[#ECF9F1] text-[#22A447]"
          : "bg-[#FFF3EB] text-[#FF7A00]"
      }`}
    >
      {status}
    </span>
  );
};

export default ProductBadge;