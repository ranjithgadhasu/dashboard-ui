const CustomerCheckbox = ({ checked, onChange }) => {
  return (
    <div className="flex h-[24px] w-[24px] items-center justify-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-[18px] w-[18px] cursor-pointer accent-[#22963F]"
      />
    </div>
  );
};

export default CustomerCheckbox;