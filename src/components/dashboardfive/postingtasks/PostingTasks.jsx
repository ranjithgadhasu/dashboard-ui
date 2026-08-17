import { MoreHorizontal } from "lucide-react";

import PostingGrid from "./PostingGrid";
import "./posting.css"

const PostingTasks = () => {
  return (
    <div className="rounded-[20px] border border-[#E9EEF5] bg-white p-6 posting-tasks-card">

      <div className="mb-6 flex items-start justify-between posting-tasks-header">

         <div className="posting-tasks-header-content">

          <h2 className="text-[20px] font-medium text-[#3F434A]">
            Posting Tasks
          </h2>

          <p className="mt-2 text-[14px] font-normal text-[#3F434A] cursor-pointer posting-tasks-description">
            Immediate tasks:
            <span className="font-medium border-b-1">
              {" "}Wensday at 10AM{" "}
            </span>

            /

            <span className="border-b-1 cursor-pointer">
                <span className="font-medium text-[14px]">
              {" "}Wensday at 4PM{" "}
            </span>

          <span>[<span className="text-[#FFC83D]">⚡</span></span>  

            <span className="font-medium">
              Important]
            </span>
            </span>

          </p>

        </div>

        <MoreHorizontal
          size={22}
          className="text-[#8A9099] posting-tasks-menu"
        />

      </div>

     <div className="posting-tasks-grid">
        <PostingGrid />
      </div>


    </div>
  );
};

export default PostingTasks;