import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddColumnCard = () => {
    const navigate = useNavigate();
  return (
    <button
    onClick={() => navigate("/tasks-version")}
      className="
        flex
        h-[48px]
        items-center
        gap-3
        rounded-xl
        bg-[#EAEBEC]
        px-5
        text-[#22983A]
      "
    >
      <Plus size={18} />

      <span className="font-medium">
        Add Column
      </span>
    </button>
  );
};

export default AddColumnCard;