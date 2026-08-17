const InfoItem = ({
  label,
  value,
  valueClass = "",
}) => {
  return (
    <div className="grid grid-cols-[70px_1fr] text-[14px]">

      <span className="text-[#5E6673]">
        {label}
      </span>

      <span className={`text-[#98A2B3] ${valueClass}`}>
        {value}
      </span>

    </div>
  );
};

export default InfoItem;