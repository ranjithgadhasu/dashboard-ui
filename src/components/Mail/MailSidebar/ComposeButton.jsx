

const ComposeButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex
        h-[48px]
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#22963F]
        text-white
        shadow-sm
        transition-all
        duration-200
        hover:bg-[#1D8137]
        hover:shadow-md
        active:scale-[0.98]
      "
    >
   
      <span className="text-[15px] font-medium tracking-wide uppercase">
        New Message
      </span>
    </button>
    
  );
};

export default ComposeButton;