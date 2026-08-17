import CalendarButton from "../common/CalendarButton"; 
import "./dashboard.css"

const DashboardHeader = () => {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between dashboard-header">
      <h1 className="text-[28px] font-medium text-[#3F434A]">
        Overview
      </h1>

      <CalendarButton />
    </div>
  )
}

export default DashboardHeader