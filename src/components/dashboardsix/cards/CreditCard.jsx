const CreditCard = ({ card }) => {
  return (
    <div
      className="relative h-[160px] w-[260px] overflow-hidden rounded-[16px] bg-cover bg-center p-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
      style={{
        backgroundImage: `url(${card.bg})`,
      }}
    >
      {/* Top */}

      <div className="flex items-start justify-between">

        <div>

          <p className="text-[12px] font-normal text-white/80">
            Current Balance
          </p>

          <h2 className="mt-1 text-[28px] font-semibold leading-none text-white">
            {card.balance}
          </h2>

        </div>

        <h3 className="text-[24px] font-bold italic text-white">
          {card.brand}
        </h3>

      </div>

      {/* Bottom */}

      <div className="absolute bottom-4 left-4 right-4">

        {/* Card Holder */}

        <p className="mb-3 text-[13px] font-medium text-white">
          {card.holder}
        </p>
        {/* Number + Expiry */}
        <div className="flex items-center justify-between">
          <div className="flex text-[14px] ml-[-12px] items-center gap-2 text-white">
            <span>••••</span>
            <span>••••</span>
            <span>••••</span>
            <span className="tracking-widest text-[13px]">
              {card.number}
            </span>
          </div>

          <span className="text-[13px] font-medium text-white">
            {card.expiry}
          </span>

        </div>

      </div>

    </div>
  );
};

export default CreditCard;