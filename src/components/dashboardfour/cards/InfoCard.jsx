import { MoreHorizontal } from "lucide-react"; 
import "./infoCard.css"

const InfoCard = ({
  icon,
  title,
  name,
  sessions,
}) => {
  return (
    <div className="mt-3 rounded-[18px] border border-[#E9EEF5] bg-white p-7 info-card">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex items-start gap-4">

          <img
            src={icon}
            alt={name}
            className="h-12 w-12 object-contain"
          />

          <div>

            <p className="text-[15px] font-normal text-[#8A9099]">
              {title}
            </p>

            <h3 className="mt-1 text-[15px] font-medium text-[#3F434A]">
              {name}
            </h3>

          </div>

        </div>

        <button>
          <MoreHorizontal
            size={22}
            className="text-[#8A9099]"
          />
        </button>

      </div>

      {/* Sessions */}

      <div className="mt-8 flex justify-center">

        <div className="flex h-[88px] w-[225px] items-center justify-center rounded-[26px] bg-[#F8F9FB]">

          <h2 className="text-[30px] font-medium leading-none text-[#3F434A]">
            {sessions}
          </h2>

          <span className="mt-5 text-[12px] font-normal text-[#5B6270]">
            /Sessions
          </span>

        </div>

      </div>

    </div>
  );
};
export default InfoCard;