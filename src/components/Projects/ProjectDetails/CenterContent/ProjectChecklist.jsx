import ChecklistProgress from "./ChecklistProgress";
import ChecklistItem from "./ChecklistItem";
import AddChecklistItem from "./AddChecklistItem";

const ProjectChecklist = ({ project }) => {
  const checklist = project.checklist || [];
  const completed = checklist.filter(item => item.completed).length;

  return (
    <div className="mt-4">

      <h4 className="mb-5 text-[14px] font-normal uppercase tracking-wide text-[#344054]">
        CHECKLIST ({Math.round((completed / checklist.length) * 100)}%)
      </h4>

      <ChecklistProgress
        completed={completed}
        total={checklist.length}
      />

      <div className="mt-6">
        {checklist.map(item => (
          <ChecklistItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <AddChecklistItem />

    </div>
  );
};

export default ProjectChecklist;