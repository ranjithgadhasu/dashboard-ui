const PaymentItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full"
          style={{ backgroundColor: item.color }}
        >
          <img
            src={item.icon}
            alt={item.title}
            className="h-[40px] w-[40px] object-contain"
          />
        </div>

        <div>
          <h3 className="mt-4 text-[14px] fontnormal text-[#3F434A]">
            {item.title}
          </h3>

          <p className="mt-1 text-[14px] font-normal text-[#A1A8B3]">
            {item.date}
          </p>
        </div>

      </div>

      {/* Right */}

      <span
        className={`text-[14px] font-medium ${
          item.positive ? "text-[#3F434A]" : "text-[#3F434A]"
        }`}
      >
        {item.amount}
      </span>

    </div>
  );
};
export default PaymentItem;