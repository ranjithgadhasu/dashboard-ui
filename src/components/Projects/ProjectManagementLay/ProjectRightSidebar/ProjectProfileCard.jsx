import FavoriteImage from "../../../../assets/images/FavoriteImage.png";

const ProjectProfileCard = ({ data }) => {
  return (
    <div className="pb-8 border-b border-[#EEF2F7]">

      <div className="relative flex justify-center">

        {/* Background */}

        <img
          src={data.profileBg}
          alt=""
          className="h-[180px] w-[180px]"
        />

        {/* Avatar */}
        <img
          src={data.avatar}
          alt=""
          className="
            absolute
            mt-5
            h-40
            w-40
            rounded-full
          "
        />

        {/* Online */}

        <img
          src={FavoriteImage}
          alt=""
          className="
            absolute
            right-[105px]
            h-11
            w-11
            mt-15
            rounded-full
          "
        />

      </div>

      <h3
        className="
          mt-5
          text-center
          text-[24px]
          font-medium
          text-[#344054]
        "
      >
        {data.name}
      </h3>

      <p
        className="
          mt-1
          text-center
          text-[#98A2B3]
        "
      >
        {data.role}
      </p>

    </div>
  );
};

export default ProjectProfileCard;