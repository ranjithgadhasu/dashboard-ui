const FormSelect = ({
  label,
  name,
  value,
  options = [],
  onChange,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-[13px] font-medium text-[#8B8F9C]">
          {label}
        </label>
      )}

      <select
        name={name}
       defaultValue={value}
        onChange={onChange}
        className="
          w-full
          h-10
          rounded-xl
          border
          border-[#E5E7EB]
          bg-white
          px-4
          text-[14px]
          text-[#3E4453]
          outline-none
          transition
          focus:border-[#22C55E]
          focus:ring-2
          focus:ring-green-100
        "
      >
        {options.map((item) => (
             <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;