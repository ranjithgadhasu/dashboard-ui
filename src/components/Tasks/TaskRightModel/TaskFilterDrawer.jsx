import { X } from "lucide-react";

import FilterSearch from "./FilterSearch";
import FilterLabels from "./FilterLabels";
import FilterMembers from "./FilterMembers";
import FilterDueDate from "./FilterDueDate";
import FilterStatus from "./FilterStatus";
import FilterFooter from "./FilterFooter";
import "./taskrightmodel.css";

const TaskFilterDrawer = ({ open, onClose, onApply }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/20 task-filter-overlay"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="
          fixed
          right-0
          top-[65px]
          bottom-0
          z-50
          w-[420px]
          bg-[#FFFFFF]
          border-l
          border-[#EEF2F7]
          shadow-2xl
          task-filter-drawer
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EEF2F7] px-8 py-2 task-filter-header">
          <h2 className="text-[28px] font-medium text-[#344054] task-filter-title">
            Filter
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F9FB] transition hover:bg-[#EEF2F7] task-filter-close"
            aria-label="Close filter"
          >
            <X size={18} className="text-[#98A2B3]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 task-filter-content">
          <div className="task-filter-search">
            <FilterSearch />
          </div>

          <div className="mt-7 task-filter-section task-filter-labels">
            <FilterLabels />
          </div>

          <div className="mt-7 task-filter-section task-filter-members">
            <FilterMembers />
          </div>

          <div className="mt-7 task-filter-section task-filter-due-date">
            <FilterDueDate />
          </div>

          <div className="mt-7 task-filter-section task-filter-status">
            <FilterStatus />
          </div>

          <div className="mt-8 task-filter-footer">
            <FilterFooter onApply={onApply} onReset={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskFilterDrawer;
