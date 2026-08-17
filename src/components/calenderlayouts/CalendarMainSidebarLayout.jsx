import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import CalendarSidebar from "../Calendar/Calendarsidebar/Sidebar/CalendarSidebar";
import CalendarModal from "../../components/Calendar/Modal/CalendarModal";


const CalendarMainSidebarLayout = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);

  return (
    <div className="flex h-screen">

      <Sidebar>
        <CalendarSidebar onAddCalendar={openModal} />
      </Sidebar>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      <CalendarModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />

    </div>
  );
};

export default CalendarMainSidebarLayout;