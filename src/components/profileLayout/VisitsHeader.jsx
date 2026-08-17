import CalendarButton from "../common/CalendarButton";

const VisitsHeader = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Visits
        </h2>

       <CalendarButton />
      </div>
    </>
  );
};
export default VisitsHeader;