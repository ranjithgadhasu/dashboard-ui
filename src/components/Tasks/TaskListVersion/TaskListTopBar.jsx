import { ChevronDown, Plus, SlidersHorizontal } from "lucide-react";

import FavoriteImage from "../../../assets/images/FavoriteImage.png";

import "./TaskListTopBar.css";

const TaskListTopBar = () => {
  return (
    <div
      className="
        flex
        h-[76px]
        items-center
        justify-between
        border-b
        border-[#EEF2F7]
        bg-white
        px-10
        task-list-top-bar
      "
    >
      {/* Left */}
      <div className="flex items-center gap-14 task-top-bar-left">
        {/* Project */}
        <button
          type="button"
          className="flex items-center gap-3 task-project-button"
        >
          <h2 className="text-[22px] font-semibold text-[#344054] task-project-title">
            Design Plan
          </h2>

          <ChevronDown
            size={18}
            className="text-[#98A2B3] task-project-arrow"
          />
        </button>

        {/* Members */}
        <div className="flex items-center task-members">
          <div className="-space-x-3 flex task-member-list">
            <img
              src={FavoriteImage}
              alt=""
              className="h-12 w-12 rounded-full border-[3px] border-white object-cover task-member-avatar"
            />

            <img
              src={FavoriteImage}
              alt=""
              className="h-12 w-12 rounded-full border-[3px] border-white object-cover task-member-avatar"
            />

            <img
              src={FavoriteImage}
              alt=""
              className="h-12 w-12 rounded-full border-[3px] border-white object-cover task-member-avatar"
            />

            <img
              src={FavoriteImage}
              alt=""
              className="h-12 w-12 rounded-full border-[3px] border-white object-cover task-member-avatar"
            />
          </div>

          <button
            type="button"
            className="
              ml-2
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#F8FAFC]
              hover:bg-[#EEF2F7]
              task-member-add
            "
          >
            <Plus size={20} className="text-[#344054]" />
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 task-top-bar-right">
        {/* Filter */}
        <button
          type="button"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            hover:bg-[#F8FAFC]
            task-filter-button
          "
        >
          <SlidersHorizontal size={18} className="text-[#344054]" />
        </button>

        {/* Add */}
        <button
          type="button"
          className="
            flex
            h-[54px]
            items-center
            overflow-hidden
            rounded-xl
            bg-[#23963C]
            text-white
            shadow-sm
            task-add-button
          "
        >
          <span className="px-8 text-[18px] font-medium task-add-text">
            Add
          </span>

          <span
            className="
              flex
              h-full
              w-12
              items-center
              justify-center
              border-l
              border-white/20
              bg-[#2FA345]
              task-add-dropdown
            "
          >
            <ChevronDown size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TaskListTopBar;
