const CalendarFooter = ({
  onCreate,
  loading = false,
}) => {
  return (
    <div className="border-t-none border-[#E9EDF5] bg-white px-6 py-5">
      <button
        type="button"
        onClick={onCreate}
        disabled={loading}
        className="h-11 w-full rounded-lg bg-[#22963F] text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#1D8137] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Creating..." : "Create"}
      </button>
    </div>
  );
};

export default CalendarFooter;