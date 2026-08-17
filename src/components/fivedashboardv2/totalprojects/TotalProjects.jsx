import { MoreHorizontal } from "lucide-react";
import { totalProjectsData } from "./totalProjectsData";

const TotalProjects = () => {
  return (
    <div className="flex h-[450px] flex-col rounded-[20px] border border-[#E9EEF5] bg-white p-6">

      {/* Header */}

      <div className="mb-10 flex items-center justify-between">

        <h2 className="text-[20px] font-medium text-[#3F434A] mt-2">
          Total Projects
        </h2>

        <MoreHorizontal
          size={20}
          className="text-[#8A9099]"
        />

      </div>

      {/* Projects */}

      <div className="flex flex-1 flex-col justify-between">

        {totalProjectsData.map((item) => (

          <div key={item.id}>

            {/* Title */}

            <div className="mb-3 flex items-center justify-between">

              <h3 className="text-[15px] font-normal text-[#3F434A]">
                {item.title}
              </h3>

              <span className="text-[15px] font-normal text-[#3F434A]">
                {item.value}
              </span>

            </div>

            {/* Progress */}

            <div className="h-[7px] w-full overflow-hidden rounded-full bg-[#F3F5F8] mb-10">

              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.progress}%`,
                  backgroundColor: item.color,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TotalProjects;