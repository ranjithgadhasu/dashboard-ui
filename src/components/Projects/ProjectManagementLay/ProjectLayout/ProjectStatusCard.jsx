import ProjectStatusBadge from "../Shared/ProjectStatusBadge";

const ProjectStatusCard = ({ project }) => {
  return (
    <div className="rounded-2xl border border-[#EEF2F7] bg-white p-5">
      <h3 className="mb-4 text-[16px] font-semibold text-[#344054]">
        Project Status
      </h3>

      <ProjectStatusBadge
        status={project.status}
        size="lg"
      />
    </div>
  );
};

export default ProjectStatusCard;