import DollarImg from "../../assets/images/DollarImg.png";
import ChartImg from "../../assets/images/ChartImg.png";
import UserImg from "../../assets/images/UserImg.png";

const stats = [
  {
    title: "Total Income",
    value: "$8.500",
    percentage: "50.8%",
    trend: "up",
    icon: DollarImg,
  },
  {
    title: "Total Sales",
    value: "3.500K",
    percentage: "10.5%",
    trend: "down",
    icon: ChartImg,
  },
  {
    title: "New Clients",
    value: "2.500K",
    percentage: "24.9%",
    trend: "up",
    icon: UserImg,
  },
];

const StatCard = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex items-center h-[120px] justify-between rounded-2xl border border-[#EAEAEA] bg-white p-6 shadow-sm"
        >
          <div>
            <p className="text-[#8A9099] text-[15px]">{item.title}</p>

            <div className="mt-3 flex items-center gap-3">
              <h2 className="text-[30px] font-semibold text-[#3F434A]">
                {item.value}
              </h2>

              <span
                className={`text-base font-medium ${
                  item.trend === "up"
                    ? "text-[#22C55E]"
                    : "text-[#FF4D4F]"
                }`}
              >
                {item.trend === "up" ? "↑" : "↓"} {item.percentage}
              </span>
            </div>
          </div>

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#EFFAF8]">
            <img
              src={item.icon}
              alt={item.title}
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCard;