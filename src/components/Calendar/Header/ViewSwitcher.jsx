import { useState } from "react";
import "./calendar.css"

const ViewSwitcher = ({ defaultView = "Month", onChange }) => {
  const [activeView, setActiveView] = useState(defaultView);

  const handleChange = (view) => {
    setActiveView(view);
    onChange?.(view);
  };

  return (
    <div className="flex items-center rounded-xl border border-[#E9EDF5] bg-white p-1 calendar-view-switcher-box">
      {["Month", "Week", "Day"].map((view) => (
        <button
          key={view}
          onClick={() => handleChange(view)}
          className={`min-w-[72px] rounded-lg px-5 py-2 calendar-view-button ${
            activeView === view
              ? "bg-[#22963F] text-white"
              : "text-[#3F434A]"
          }`}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ViewSwitcher;