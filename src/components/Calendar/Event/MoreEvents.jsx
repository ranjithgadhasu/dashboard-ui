const MoreEvents = ({
  count = 0,
  onClick,
}) => {
  if (count <= 0) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-1 h-[24px] rounded bg-[#FFF4CC] px-2 text-[11px] font-medium text-[#7A6A00] hover:bg-[#FFEAA0]"
    >
      +{count}
    </button>
  );
};

export default MoreEvents;