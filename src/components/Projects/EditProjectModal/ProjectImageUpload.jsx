import { X, Pencil } from "lucide-react";

const ProjectImageUpload = ({
  project,
  onClose,
}) => {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">

        <h2 className="text-[28px] font-medium text-[#344054]">
          Edit Project
        </h2>

        <button
          onClick={onClose}
          className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-[#F2F4F7]
            transition
            hover:bg-[#E4E7EC]
          "
        >
          <X
            size={15}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

      {/* Logo */}
      <div className="mt-6 flex justify-center">

        <div className="relative">

          <div
            className="
              flex
              h-[90px]
              w-[90px]
              items-center
              justify-center
              rounded-[20px]
              border
              border-dashed
              border-[#D0D5DD]
              bg-white
            "
          >
            <img
              src={project.logo}
              alt={project.title}
              className="h-12 w-12 object-contain"
            />
          </div>

          {/* Edit Button */}
          <button
            className="
              absolute
              -right-2
              -top-2
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-[#D0D5DD]
              bg-white
              shadow-sm
              transition
              hover:bg-[#F8FAFC]
            "
          >
            <Pencil
              size={14}
              className="text-[#667085]"
            />
          </button>

        </div>

      </div>
    </>
  );
};

export default ProjectImageUpload;