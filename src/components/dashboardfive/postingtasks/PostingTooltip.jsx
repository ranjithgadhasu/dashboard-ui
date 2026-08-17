const PostingTooltip = () => {
  return (
    <div className="relative w-[218px] rounded-xl bg-[#3F434A] px-5 py-3 text-white shadow-xl">

      <p className="text-[14px] font-medium">
        2 Tasks on Friday at 11AM
      </p>

      <div className="absolute left-1/2 top-full -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-[#3F434A]" />

    </div>
  );
};

export default PostingTooltip;