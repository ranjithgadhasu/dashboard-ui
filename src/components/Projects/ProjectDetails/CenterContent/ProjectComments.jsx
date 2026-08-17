import { useState } from "react";

import CommentTabs from "./CommentTabs";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

const ProjectComments = ({ project }) => {
  const [activeTab, setActiveTab] = useState("comments");

  return (
    <div className="mt-10">

      <CommentTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "comments" ? (
        <>
          <CommentInput />
          <CommentList comments={project.comments} />
        </>
      ) : (
        <div className="py-10 text-center text-[#98A2B3]">
          No Activity Found
        </div>
      )}

    </div>
  );
};

export default ProjectComments;