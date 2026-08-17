const FormTextarea = ({
  label,
  name,
  value,
  placeholder = "Type something...",
  rows = 6,
  onChange,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-[13px] font-medium text-[#8B8F9C]">
          {label}
        </label>
      )}

      <textarea
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
        className="
          w-full
          h-[143px]
          rounded-xl
          border
          border-[#E5E7EB]
          bg-white
          p-4
          text-[14px]
          text-[#3E4453]
          resize-none
          outline-none
          transition
          focus:border-[#22C55E]
          focus:ring-2
          focus:ring-green-100
        "
      />
    </div>
  );
};

export default FormTextarea;