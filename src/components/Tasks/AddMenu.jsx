import {
  UserPlus,
} from "lucide-react";
import Grid from "../../assets/icons/Grid.png";
import Tasks from "../../assets/icons/Tasks.png"
import Project from "../../assets/icons/Project.png"

const AddMenu = () => {
  return (
    <div
      className="
        absolute
        right-0
        top-14
        z-50
        w-[260px]
        overflow-hidden
        rounded-3xl
        border
        border-[#EEF2F7]
        bg-white
        shadow-[0_20px_50px_rgba(16,24,40,0.12)]
      "
    >
      <div className="p-3">

        {/* New Task */}
        <button
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-left
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <img src={Tasks}
            size={20}
            className="text-[#22C55E]"
          />

          <span className="text-[16px] font-medium text-[#344054]">
             Task
          </span>
        </button>

        {/* New Board */}
        <button
          className="
            mt-1
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-left
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <img src={Grid}
            size={20}
            className="text-[#3B82F6]"
          />

          <span className="text-[16px] font-medium text-[#344054]">
         Board
          </span>
        </button>

        {/* New Project */}
        <button
          className="
            mt-1
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-left
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <img src={Project}
            size={20}
            className="text-[#F59E0B]"
          />

          <span className="text-[16px] font-medium text-[#344054]">
             Project
          </span>
        </button>

        <div className="border-[#EEF2F7]" />

        {/* Invite Members */}
        <button
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-left
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <UserPlus
            size={20}
            className="text-[#777579]"
          />

          <span className="text-[16px] font-medium text-[#344054]">
            Invite
          </span>
        </button>

      </div>
    </div>
  );
};

export default AddMenu;