const TransactionItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-5">

        <img
          src={item.icon}
          alt={item.title}
          className="h-12 w-12"
        />

        <div>

          <h4 className="mt-2.5 text-[14px] font-normal text-[#3F434A]">
            {item.title}
          </h4>

          <p className="mt-1 text-[14px] font-normal text-[#8A9099]">
            {item.time}
            <span className="mx-2">—</span>
            {item.date}
          </p>

        </div>

      </div>

      <span className="text-[14px] font-medium text-[#3F434A]">
        {item.amount}
      </span>

    </div>
  );
};

export default TransactionItem;