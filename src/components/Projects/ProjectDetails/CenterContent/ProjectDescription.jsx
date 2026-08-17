const ProjectDescription = ({ project }) => {
  return (
    <div
      className="
        mt-4
        rounded-2xl
        bg-white
        p-6
      "
    >
      {/* Heading */}
      <div className="mb-5">

        <h3
          className="
            text-[14px]
            font-normal
            uppercase
            text-[#344054]
          "
        >
          Description
        </h3>

      </div>

      {/* Description */}
      <p
        className="
          text-[14px]
            font-normal
          leading-8
          text-[#667085]
        "
      >
        {project.description}
       {/*You need to develop an application on something like React native, so that it is for Android and IOS. There are about 30 screens, the design and layout in the sketch is ready. The main pages are login, getting a task, a list of tasks, a map, a history of tasks, calling the camera to complete a task. The storage and processing server is on our side, there is a ready-made api for the web service that you will need to use.*/}
      </p>

    </div>
  );
};

export default ProjectDescription;