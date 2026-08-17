const FormInput = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-[14px] font-normal text-[#8B8F9C]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full
          h-[40px]
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
      />
    </div>
  );
};

export default FormInput;