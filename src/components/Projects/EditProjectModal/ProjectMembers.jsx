import { Search, X } from "lucide-react";

const ProjectMembers = ({ project }) => {
  return (
    <div className="mt-6 px-6">

      <label
        className="
          mb-2
          block
          text-[14px]
          font-normal
          text-[#344054]
        "
      >
        Members
      </label>

      <div
        className="
          flex
          min-h-[40px]
          w-full
          flex-wrap
          items-center
          gap-2
          rounded-xl
          border
          border-[#E4E7EC]
          bg-white
          px-3
          py-2
        "
      >
        {/* Members */}
        <div className="flex flex-wrap items-center gap-2 flex-1">

          {project.members?.map((member, index) => (

            <div
              key={member.id || index}
              className="
                flex
                h-[28px]
                items-center
                gap-2
                rounded-lg
                bg-[#F2F4F7]
                px-2
              "
            >
              <img
                src={member.avatar || member}
                alt={member.name || "Member"}
                className="h-5 w-5 rounded-full object-cover"
              />

              <span className="text-[13px] text-[#344054]">
                {member.name || `Member ${index + 1}`}
              </span>

              <button
                className="
                  rounded-full
                  transition
                  hover:bg-[#E4E7EC]
                "
              >
                <X
                  size={12}
                  className="text-[#98A2B3]"
                />
              </button>

            </div>

          ))}

        </div>

        {/* Search */}
        <button
          className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-lg
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <Search
            size={16}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

    </div>
  );
};

export default ProjectMembers;