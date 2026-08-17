const EventCheckboxes = () => {
  return (
    <div className="flex gap-8">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          defaultChecked
          className="h-4 w-4 accent-[#22963F] cursor-pointer"
        />
        <span className="text-[#3F434A] text-[16px]">All Day</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4 accent-[#22963F] cursor-pointer"
        />
        <span className="text-[#3F434A] text-[16px]">Repeat</span>
      </label>
    </div>
  );
};

export default EventCheckboxes;