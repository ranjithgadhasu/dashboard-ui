import {
  X,
  Plus,
  Search,
  CalendarDays,
  ChevronDown,
  DollarSign,
} from "lucide-react";

import FavoriteImage from "../../../assets/images/FavoriteImage.png";


import "./AddProjectModal.css";

const AddProjectModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20 add-project-overlay"
      />

      {/* Modal */}
      <div
        className="
        add-project-modal
          fixed
          left-1/2
          top-1/2
          z-50
          h-[720px]
          w-[470px]
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-[16px]
          bg-white
          shadow-[0_25px_60px_rgba(16,24,40,.18)]
          add-project-modal
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 add-project-header">
          <h2 className="text-[28px] font-medium text-[#344054] add-project-title">
            Add Project
          </h2>

          <button
            onClick={onClose}
            className="rounded-full bg-[#F8FAFC] p-2 add-project-close"
          >
            <X size={16} className="text-[#98A2B3]" />
          </button>
        </div>

        {/* Body */}
        <div className="h-[600px] overflow-y-auto px-5 pb-5 add-project-body">
          {/* Upload */}
          <div className="my-6 flex justify-center add-project-upload-wrapper">
            <button
              type="button"
              className="
                flex
                h-[70px]
                w-[70px]
                items-center
                justify-center
                rounded-[18px]
                border-2
                border-dashed
                border-[#D0D5DD]
                text-[#98A2B3]
                add-project-upload
              "
            >
              <Plus size={26} />
            </button>
          </div>

          {/* Project Name */}
          <div className="mb-4 add-project-field">
            <label className="mb-2 block text-[14px] font-normal text-[#667085] add-project-label">
              Project Name
            </label>

            <input
              defaultValue="App Development"
              name="app-development"
              className="
                h-[40px]
                w-full
                rounded-xl
                border
                border-[#E4E7EC]
                px-4
                text-[14px]
                outline-none
                add-project-input
                
              "
            />
          </div>

          {/* Client */}
          <div className="mb-4 add-project-field">
            <label
              htmlFor="client-name"
              className="mb-2 block text-[14px] font-normal text-[#667085] add-project-label"
            >
              Client Name
            </label>

            <input
              defaultValue="Dropbox, Inc."
              name="drop"
              id="client-name"
              className="
                h-[40px]
                w-full
                rounded-xl
                border
                border-[#E4E7EC]
                px-4
                text-[14px]
                add-project-input
              "
            />
          </div>

          {/* Description */}
          <div className="mb-4 add-project-field">
            <label
              htmlFor="project-description"
              className="mb-2 block text-[14px] font-normal text-[#667085] add-project-label"
            >
              Description
            </label>

            <textarea
              rows={4}
              defaultValue="Create a mobile application on iOS and Android devices."
              id="project-description"
              name="description"
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-[#E4E7EC]
                p-4
                text-[14px]
                add-project-textarea
              "
            />
          </div>

          {/* Dates */}
          <div className="mb-4 grid grid-cols-2 gap-3 add-project-dates">
            {/* Start */}
            <div className="add-project-field">
              <label className="mb-2 block text-[14px] font-normal text-[#667085] add-project-label">
                Start Date
              </label>

              <button
                type="button"
                className="
                  flex
                  h-[40px]
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#E4E7EC]
                  px-3
                  add-project-date
                "
              >
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="add-project-icon" />

                  <span className="text-[14px] add-project-value">
                    12.07.2020
                  </span>
                </div>

                <ChevronDown size={16} className="add-project-icon" />
              </button>
            </div>

            {/* End */}
            <div className="add-project-field">
              <label className="mb-2 block text-[14px] font-normal text-[#667085] add-project-label">
                End Date
              </label>

              <button
                type="button"
                className="
                  flex
                  h-[40px]
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#E4E7EC]
                  px-3
                  add-project-date
                "
              >
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="add-project-icon" />

                  <span className="text-[14px] add-project-value">
                    12.07.2020
                  </span>
                </div>

                <ChevronDown size={16} className="add-project-icon" />
              </button>
            </div>
          </div>

          {/* Members */}
          <div className="mb-4 add-project-field">
            <label className="mb-2 block text-[14px] font-normal text-[#667085] add-project-label">
              Members
            </label>

            <div
              className="
                flex
                h-[40px]
                items-center
                justify-between
                rounded-xl
                border
                border-[#E4E7EC]
                px-3
                add-project-members
              "
            >
              <div className="flex items-center gap-2 rounded-lg bg-[#F2F4F7] px-2 py-1 add-project-member">
                <img
                  src={FavoriteImage}
                  className="h-5 w-5 rounded-full add-project-avatar"
                  alt=""
                />

                <span className="text-[13px] add-project-member-name">
                  Shane Black
                </span>

                <X size={13} />
              </div>

              <Search size={16} className="text-[#98A2B3]" />
            </div>
          </div>

          {/* Budget */}
          <div className="add-project-field">
            <label className="mb-2 block text-[14px] font-normal text-[#667085] add-project-label">
              Budget
            </label>

            <div
              className="
                flex
                h-[40px]
                items-center
                rounded-xl
                border
                border-[#E4E7EC]
                px-3
                add-project-budget
              "
            >
              <DollarSign
                size={16}
                className="text-[#98A2B3] add-project-icon"
              />

              <input
                defaultValue="2.500.000"
                name="valuess"
                className="
                  ml-2
                  w-full
                  text-[14px]
                  outline-none
                  add-project-budget-input
                "
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-end add-project-footer">
            <button
              type="button"
              className="
                h-[40px]
                rounded-lg
                bg-[#22983A]
                px-8
                text-[14px]
                font-medium
                text-white
                transition
                hover:bg-[#1B7D31]
                add-project-create
              "
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjectModal;
