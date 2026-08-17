import { X } from "lucide-react";

import TaskDetailsLeft from "./TaskDetailsLeft";
import TaskSidebarRight from "./TaskSidebarRight";

import "./TaskDetailsProfileDrawer.css";

const TaskDetailsProfileDrawer = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/20 task-profile-drawer-overlay"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="
          fixed
          top-[72px]
          right-0
          bottom-0
          z-50
          w-[1100px]
          bg-white
          shadow-2xl
          task-profile-drawer
        "
      >

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-5
            right-5
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#F8F9FB]
            task-profile-drawer-close
          "
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Main Layout */}
        <div className="flex h-full task-profile-drawer-layout">

          {/* LEFT */}
          <div className="flex-1 overflow-y-auto p-8 task-profile-drawer-left">
            <TaskDetailsLeft />
          </div>

          {/* Divider */}
          <div className="w-px bg-[#EEF2F7] task-profile-drawer-divider" />

          {/* RIGHT */}
          <div className="w-[340px] overflow-y-auto p-2 task-profile-drawer-right">
            <TaskSidebarRight />
          </div>

        </div>

      </div>
    </>
  );
};

export default TaskDetailsProfileDrawer;