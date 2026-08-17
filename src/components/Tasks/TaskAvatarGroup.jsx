const TaskAvatarGroup = ({ members = [] }) => {
  if (!members.length) return null;

  return (
    <div className="flex -space-x-2">
      {members.map((member, index) => (
        <img
          key={index}
          src={member}
          alt={`Member ${index + 1}`}
          className="h-8 w-8 rounded-full border-2 border-white object-cover"
        />
      ))}
    </div>
  );
};

export default TaskAvatarGroup;