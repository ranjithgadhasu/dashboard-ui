import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import DateRangePicker from "./DateRangePicker";
import PriceSlider from "./PriceSlider";
import "./filter.css";

const categoryOptions = [
  { label: "All", value: "all" },
  { label: "Notebook", value: "Notebook" },
  { label: "Phone", value: "Phone" },
  { label: "Watch", value: "Watch" },
];

const statusOptions = [
  { label: "Available", value: "Available" },
  { label: "Disabled", value: "Disabled" },
];

const FilterModal = ({
  open,
  onClose,
  onSave,
}) => {
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("Available");

  const [startDate, setStartDate] = useState("2020-07-12");
  const [endDate, setEndDate] = useState("2020-07-12");

  const [price, setPrice] = useState({
    min: 500,
    max: 5500,
  });

  if (!open) return null;

  const handleSave = () => {
    onSave({
      category,
      status,
      startDate,
      endDate,
      price,
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <div
        className="w-[400px] ml-150 rounded-3xl bg-white p-8 shadow-2xl filter-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}

        <h2 className="mb-8 text-[28px] font-medium text-[#3F434A]">
          Filter
        </h2>

        <div className="space-y-6">

          {/* Category */}

          <FilterDropdown
            label="Category"
            value={category}
            options={categoryOptions}
            onChange={setCategory}
          />

          {/* Status */}

          <FilterDropdown
            label="Status"
            value={status}
            options={statusOptions}
            onChange={setStatus}
          />

          {/* Date */}

          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />

          {/* Price */}

          <PriceSlider
            value={price}
            onChange={setPrice}
          />

        </div>

        {/* Footer */}

        <div className="mt-10 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="h-12 rounded-xl border border-[#E5E7EB] px-6 text-[15px] font-medium text-[#3F434A] hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="h-12 w-[110px] rounded-xl bg-[#22A447] text-[16px] font-medium text-white transition hover:bg-[#1D923D]"
          >
            Save
          </button>

        </div>
      </div>
    </div>
  );
};

export default FilterModal;