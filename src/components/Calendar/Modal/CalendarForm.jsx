import { useState } from "react";
import CalendarColorPicker from "./CalendarColorPicker";

const CalendarForm = () => {
  const [formData, setFormData] = useState({
    name: "Personal",
    description: "",
    color: "#7ED957",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorSelect = (color) => {
    setFormData({
      ...formData,
      color,
    });
  };

  return (
    <div className="space-y-6">
      {/* Name */}
      <div>
        <label className="mb-2 block text-[13px] font-medium text-[#8A9099]">
          Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Personal"
          className="h-[40px] w-full rounded-lg border border-[#E5E7EB] px-4 text-[14px] text-[#3F434A] outline-none transition focus:border-[#22963F]"
        />
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-[13px] font-medium text-[#8A9099]">
          Description
        </label>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Type something"
          className="w-full h-[140px] resize-none rounded-lg border border-[#E5E7EB] p-4 text-[14px] text-[#3F434A] outline-none transition focus:border-[#22963F]"
        />
      </div>

      {/* Color */}
      <div>
        <label className="mb-3 block text-[13px] font-medium text-[#8A9099]">
          Color
        </label>

        <CalendarColorPicker
          selectedColor={formData.color}
          onSelect={handleColorSelect}
        />
      </div>
    </div>
  );
};
export default CalendarForm;
