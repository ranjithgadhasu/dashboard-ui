import ProjectImageUpload from "./ProjectImageUpload";
import ProjectStatus from "./ProjectStatus";
import ProjectBasicInfo from "./ProjectBasicInfo";
import ProjectDescription from "./ProjectDescription";
import ProjectDates from "./ProjectDates";
import ProjectMembers from "./ProjectMembers";
import ProjectBudget from "./ProjectBudget";
import ProjectFooter from "./ProjectFooter";

const EditProjectModal = ({
  open,
  project,
  onClose,
}) => {
  if (!open || !project) return null;

  const handleSave = () => {
    console.log("Save Project", project);

    // Later you can update your state/API here

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/25">

      <div
        className="
          h-[920px]
          w-[470px]
          overflow-hidden
          rounded-[20px]
          bg-white
          shadow-[0_25px_60px_rgba(16,24,40,.18)]
        "
      >
        <div className="h-full overflow-y-auto">

          <ProjectImageUpload
            project={project}
            onClose={onClose}
          />

          <ProjectStatus
            project={project}
          />

          <ProjectBasicInfo
            project={project}
          />

          <ProjectDescription
            project={project}
          />

          <ProjectDates
            project={project}
          />

          <ProjectMembers
            project={project}
          />

          <ProjectBudget
            project={project}
          />

          <ProjectFooter
            onClose={onClose}
            onSave={handleSave}
          />

        </div>

      </div>

    </div>
  );
};

export default EditProjectModal;