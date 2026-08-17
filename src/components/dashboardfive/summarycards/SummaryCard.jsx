const SummaryCard = ({ item }) => {
  return (
    <div className="flex w-[166px] h-[186px] flex-col items-center justify-center rounded-[16px] border border-[#E9EEF5] bg-white summary-card-mobile">

      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ background: item.bg }}
      >
        <img
          src={item.icon}
          alt={item.title}
          className="h-5 w-5 object-contain"
        />
      </div>

      <h2 className="mt-4 text-[32px] font-medium text-[#3F434A]">
        {item.value}
      </h2>

      <p className="mt-1 text-[14px] font-normal text-[#8A9099]">
        {item.title}
      </p>

    </div>
  );
};

export default SummaryCard;