import "./summarycards.css"

const SummaryCard = ({ item }) => {
  return (
    <div className="flex h-[186px] w-[160px] flex-col items-center justify-center rounded-[14px] border border-[#E9EEF5] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)]  summary-card">

      <img
        src={item.icon}
        alt={item.title}
        className="h-[49px] w-[85px] object-contain"
      />
      <p className="mt-6 text-[14px] font-normal text-[#8A9099]">
        {item.title}
      </p>

      <h2 className="mt-2 text-[32px] font-medium leading-none text-[#3F434A]">
        {item.value}
      </h2>

    </div>
  );
};

export default SummaryCard;