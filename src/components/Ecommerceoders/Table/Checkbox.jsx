const Checkbox = ({ checked, onChange }) => {
  return (
<div className="ml-2">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="
        h-4
        w-4
        cursor-pointer
        rounded
        border
        border-[#D1D5DB]
        accent-[#21943A]
        focus:ring-0
        focus:ring-offset-0
      "
    />
</div>
  );
};

export default Checkbox;