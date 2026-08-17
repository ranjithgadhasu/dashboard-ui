const details = [
  {
    label: "Card Type:",
    value: "Visa",
  },
  {
    label: "Card Holder:",
    value: "Felecia Brown",
  },
  {
    label: "Expires:",
    value: "12/19",
  },
  {
    label: "Card Number:",
    value: "5880 5087 3288 8854",
  },
  {
    label: "Total Balance:",
    value: "80,700.00",
  },
  {
    label: "Total Debt:",
    value: "8,250.00",
  },
];

const CardDetails = () => {
  return (
    <div className="flex h-full flex-col justify-between">

      <div>

        {details.map((item) => (

          <div
            key={item.label}
            className="mb-5.5 flex justify-between"
          >

            <span className="text-[14px] font-normal text-[#8A9099]">
              {item.label}
            </span>

            <span className="text-[14px] font-normal text-[#3F434A]">
              {item.value}
            </span>

          </div>

        ))}

      </div>

      <hr className="my-8 border-[#EEF2F6]" />

      <div className="flex gap-6">

        <button className="h-[40px] w-[116px] cursor-pointer rounded-[8px] bg-[#21943A] text-[15px] font-medium text-white shadow">

          Pay Debt

        </button>

        <button className="h-[40px] w-[116px] rounded-[8px] cursor-pointer border border-[#E9EEF5] bg-white text-[15px] font-medium text-[#5B6270]">

          Cancel

        </button>

      </div>

    </div>
  );
};
export default CardDetails;