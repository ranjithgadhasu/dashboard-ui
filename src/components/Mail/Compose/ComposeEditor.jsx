const ComposeEditor = ({
  value,
  onChange,
}) => {
  return (
    <div className="bg-white">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type something"
        className="
          h-[300px]
          w-full
          resize-none
          border-0
          bg-white
          p-6
          text-[15px]
          leading-7
          text-[#374151]
          placeholder:text-[#9CA3AF]
          outline-none
          focus:outline-none
        "
      />
    </div>
  );
};

export default ComposeEditor;