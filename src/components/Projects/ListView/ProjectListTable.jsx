import ProjectTableToolbar from "./ProjectTableToolbar";
import ProjectTableHeader from "./ProjectTableHeader";
import ProjectTableRow from "./ProjectTableRow";

import { projectListData } from "./ProjectDataList";
import ProjectPagination from "./ProjectPagination";

const ProjectListTable = () => {
  return (
    <div
      className="
        mt-2
        rounded-2xl
        border
        border-[#EEF2F7]
        bg-white
      "
    >

      <ProjectTableToolbar />

      <ProjectTableHeader />

      {projectListData.map((project) => (

        <ProjectTableRow
          key={project.id}
          project={project}
        />

      ))}
       <ProjectPagination />
    </div>
  );
};

export default ProjectListTable;