import BG from "../../../assets/images/BG.png";
import AvatarFemail from "../../../assets/images/AvatarFemail.png";

const ChatProfileHeader = ({ profile, type }) => {
  return (
  <div className="border-b border-[#EEF2F7] px-8 py-8 text-center">

  {type === "person" ? (
    <div className="relative mx-auto h-[220px] w-[220px]">

      {/* Background */}
      <img
        src={BG}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />

      {/* Illustration */}
      <img
        src={AvatarFemail}
        alt=""
        className="absolute left-1/2 top-10 h-[180px] -translate-x-1/2 object-contain"
      />

      {/* User Avatar */}
      <img
        src={profile.avatar}
        alt={profile.name}
        className="absolute left-1/2 top-[47%] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white object-cover shadow-lg"
      />
    </div>
  ) : (
    <div className="mx-auto flex h-24 w-24 items-center justify-center">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="h-20 w-20 rounded-full object-cover shadow-lg"
      />
    </div>
  )}

  <h2 className="mt-4 text-[24px] font-normal text-[#344054]">
    {profile.name}
  </h2>

  <p className="mt-1 text-[14px]  font-normal text-[#98A2B3]">
    {profile.role}
  </p>

</div>
  );
};

export default ChatProfileHeader;