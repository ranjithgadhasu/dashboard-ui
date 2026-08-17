import { Paperclip } from "lucide-react";
import TaskAvatarGroup from "./TaskAvatarGroup";
import MessageIcon from "../../assets/icons/MessageIcon.png"

const TaskFooter = ({
  comments,
  attachments,
  members,
}) => {
  return (
    <div className="mt-6 flex items-center justify-between">

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2 text-[#98A2B3]">
          <Paperclip size={18} />
          <span className="text-[16px]">
            {attachments}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#98A2B3]">
          {/*<MessageCircle size={18} />*/}
          <img src={MessageIcon} />
          <span className="text-[16px]">
            {comments}
          </span>
        </div>

      </div>

      <TaskAvatarGroup members={members} />

    </div>
  );
};

export default TaskFooter;