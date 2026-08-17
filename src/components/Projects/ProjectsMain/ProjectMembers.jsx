const ProjectMembers = ({ members = [] }) => {
  return (
    <div className="flex items-center gap-4">

      {members.map((member, index) => (
        <img
          key={index}
          src={member}
          alt={`Member ${index + 1}`}
          className={`
            h-10
            w-10
            rounded-full
            border-[3px]
            border-white
            object-cover
            shadow-sm
            ${index !== 0 ? "-ml-3" : ""}
          `}
        />
      ))}

    </div>
  );
};

export default ProjectMembers;