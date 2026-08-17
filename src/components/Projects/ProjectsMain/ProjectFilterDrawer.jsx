import { X, Search, CalendarDays, ChevronDown } from "lucide-react";

import FavoriteImage from "../../../assets/images/FavoriteImage.png";

import "./ProjectFilterDrawer.css";

const ProjectFilterDrawer = ({ open, onClose }) => {
  // Completely remove the drawer when closed
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className="project-filter-overlay" />

      {/* Drawer */}
      <div className="project-filter-drawer project-filter-drawer-size">
        {/* Header */}
        <div className="flex items-center justify-between p-5 project-filter-header">
          <h2 className="text-[28px] font-medium text-[#344054] project-filter-title">
            Filter
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-[#F8FAFC] project-filter-close"
          >
            <X size={20} className="text-[#98A2B3]" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 p-7 project-filter-content">
          {/* Search */}
          <div className="project-filter-section">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
              />

              <input
                placeholder="Search Projects..."
                className="
                  h-[40px]
                  w-full
                  rounded-xl
                  border
                  border-[#E4E7EC]
                  pl-11
                  pr-4
                  outline-none
                  project-filter-input
                "
              />
            </div>
          </div>

          {/* Members */}
          <div className="project-filter-section">
            <label className="mb-2 block text-[14px] text-[#667085] project-filter-label">
              Members
            </label>

            <div className="flex h-[40px] items-center justify-between rounded-xl border border-[#E4E7EC] px-3 project-filter-select">
              <div className="flex items-center gap-2 rounded-lg bg-[#F2F4F7] px-2 py-1 project-filter-member">
                <img
                  src={FavoriteImage}
                  className="h-6 w-6 rounded-full project-filter-avatar"
                  alt=""
                />

                <span className="text-[14px] text-[#344054] project-filter-member-name">
                  Shane Black
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <X size={14} />
                </button>
              </div>

              <Search size={18} className="text-[#98A2B3]" />
            </div>
          </div>

          {/* Due Date */}
          <div className="project-filter-section">
            <label className="mb-2 block text-[14px] text-[#667085] project-filter-label">
              Due Date
            </label>

            <button
              type="button"
              className="flex h-[40px] w-full items-center justify-between rounded-xl border border-[#E4E7EC] px-4 project-filter-select"
            >
              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="project-filter-icon" />

                <span className="text-[14px] text-[#344054] project-filter-value">
                  Due anytime
                </span>
              </div>

              <ChevronDown size={16} />
            </button>
          </div>

          {/* Status */}
          <div className="project-filter-section">
            <label className="mb-2 block text-[14px] text-[#667085] project-filter-label">
              Status
            </label>

            <button
              type="button"
              className="flex h-[40px] w-full items-center justify-between rounded-xl border border-[#E4E7EC] px-4 project-filter-select"
            >
              <span className="text-[14px] text-[#344054] project-filter-value">
                Completed
              </span>

              <ChevronDown size={16} />
            </button>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-4 pt-4 project-filter-footer">
            <button
              type="button"
              className="
                h-[40px]
                rounded-lg
                bg-[#22983A]
                px-5
                font-medium
                text-white
                project-filter-apply
              "
            >
              Apply Filters
            </button>

            <button
              type="button"
              className="
                text-[15px]
                font-medium
                text-[#22983A]
                underline
                underline-offset-4
                decoration-[#22983A]
                hover:text-[#1D7F31]
                project-filter-reset
              "
            >
              Reset all Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectFilterDrawer;
