import { useState } from "react";
import { Download, ChevronDown } from "lucide-react";
import "./dashboard.css"

const options = [
  "Today",
  "Last 7 days",
  "Last 30 days",
  "Last 3 Months",
  "Last 6 Months",
  "Last Year",
];

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Last 7 days");

  return (
    <div className="relative flex items-center justify-between dashboard-header-size">

      {/* Left */}

      <h1 className="text-[28px] font-medium text-[#3F434A]">
        Overview
      </h1>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Download */}

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition hover:bg-gray-50">
          <Download
            size={18}
            className="text-[#3F434A]"
          />
        </button>

        {/* Dropdown */}

        <div className="relative">

          <button
            onClick={() => setOpen(!open)}
            className="flex h-12 min-w-[160px] items-center justify-between rounded-2xl bg-white px-5 shadow-sm transition hover:bg-gray-50"
          >
            <span className="text-[15px] font-medium text-[#3F434A]">
              {selected}
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-full overflow-hidden rounded-2xl border border-[#E9EEF5] bg-white shadow-xl z-50">

              {options.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setSelected(item);
                    setOpen(false);
                  }}
                  className={`flex w-full px-5 py-3 text-left text-[14px] transition hover:bg-[#F5F8FC]
                    ${
                      selected === item
                        ? "bg-[#EEF9F1] font-medium text-[#22963F]"
                        : "text-[#3F434A]"
                    }`}
                >
                  {item}
                </button>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default DashboardHeader;