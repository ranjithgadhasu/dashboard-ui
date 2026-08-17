const ComposeSubject = ({
  value,
  onChange,
}) => {
  return (
    <div>
      {/* Label */}
      <label
        htmlFor="compose-subject"
        className="mb-2 block text-sm font-medium text-[#6B7280]"
      >
        Subject
      </label>

      {/* Input */}
      <input
        id="compose-subject"
        type="text"
        placeholder="Enter subject"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-[40px]
          w-full
          rounded-xl
          border
          border-[#E5E7EB]
          bg-white
          px-4
          text-[15px]
          text-[#374151]
          placeholder:text-[#98A2B3]
          outline-none
          transition-all
          duration-200
          focus:border-[#22C55E]
          focus:ring-2
          focus:ring-[#22C55E]/20
        "
      />
    </div>
  );
};

export default ComposeSubject;