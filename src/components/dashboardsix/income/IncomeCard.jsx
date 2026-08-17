import { incomeData } from "./incomeData"; 
import "./income.css"

const IncomeCard = () => {
  return (
    <div className="flex flex-col gap-6 income-cards">

      {incomeData.map((item) => {
        const Icon = item.Icon;

        return (
          <div
            key={item.id}
            className="border h-[186px] w-[160px] border-[#E9EEF5] p-6 shadow-sm income-card"
            style={{ background: item.bg }}
          >
            {/* Icon */}

            <div
              className="mb-8 flex h-[40px] w-[40px] items-center justify-center rounded-2xl"
              style={{
                background:
                  item.bg === "#FFFFFF"
                    ? "#48C9BE"
                    : "#FFFFFF",
              }}
            >
              <Icon
                size={18}
                color={
                  item.bg === "#FFFFFF"
                    ? "#FFFFFF"
                    : "#22963F"
                }
                strokeWidth={2.5}
              />
            </div>

            {/* Title */}

            <h4
              className="text-[18px] font-medium"
              style={{ color: item.text }}
            >
              {item.title}
            </h4>

            {/* Amount */}

            <h2
              className="mt-2 text-[20px] font-medium leading-none"
              style={{ color: item.text }}
            >
              {item.amount}
            </h2>

            {/* Progress */}

            <div
              className="mt-4 h-[6px] overflow-hidden rounded-full"
              style={{
                background: item.progressBg,
              }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.progress}%`,
                  background: item.progressFill,
                }}
              />
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default IncomeCard;