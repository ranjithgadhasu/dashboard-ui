import { onlineUsersData } from "./onlineUsersData";

const OnlineUsersLegend = () => {
  return (
    <div className="space-y-8">

      {onlineUsersData.map((item) => (

        <div key={item.name}>

          <div className="flex items-center gap-3">

            <span
              className="h-3 w-3 rounded-full"
              style={{
                background: item.color,
              }}
            />

            <span className="text-[14px] font-normal text-[#8A9099]">
              {item.name}
            </span>

          </div>

          <h3 className="mt-2 text-[18px] font-medium text-[#3F434A]">
            {item.value}%
          </h3>

        </div>

      ))}

    </div>
  );
};

export default OnlineUsersLegend;