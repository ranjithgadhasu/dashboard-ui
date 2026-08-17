const SummaryCard = ({ item }) => {
  return (
    <div className="flex w-[360px] rounded-[18px] border border-[#E9EEF5] bg-white px-6 py-5 summary-card">

      {/* Left */}

      <div>
        <p className="text-[15px] font-normal text-[#8A9099]">
          {item.title}
        </p>
        <div className="mt-2 flex items-end gap-3">
          <h2 className="text-[30px] font-medium leading-none text-[#3F434A]">
            {item.value}
          </h2>
          <span
            className="mb-1 text-[15px] font-normal"
            style={{ color: item.color }}
          >
            {item.growth}
          </span>

        </div>

      </div>

      {/* Right */}

      <div className="flex h-[64px] w-[64px] ml-15 items-center justify-center rounded-[18px] bg-[#EEF9F7] summary-card-icon">

        <img
          src={item.icon}
          alt={item.title}
          className="h-[48px] w-[48px] object-contain" 
        />

      </div>

    </div>
  );
};

export default SummaryCard;