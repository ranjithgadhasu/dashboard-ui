

const MemberItem = ({ member }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        px-3
        py-3
        transition
        hover:bg-[#F8FAFC]
      "
    >
      {/* Left */}
      <div className="flex items-center gap-3">

        <img
          src={member.avatar}
          alt={member.name}
          className="
            h-10
            w-10
            rounded-full
            object-cover
          "
        />

        <div>

          <h4
            className="
              text-[14px]
              font-normal
              text-[#344054]
            "
          >
            {member.name}
          </h4>

          <p
            className="
              mt-1
              text-[12px]
              font-normal
              text-[#98A2B3]
            "
          >
            {member.role}
          </p>

        </div>

      </div>
    </div>
  );
};

export default MemberItem;