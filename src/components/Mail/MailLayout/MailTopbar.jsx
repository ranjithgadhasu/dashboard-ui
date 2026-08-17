import { ChevronDown } from "lucide-react";
import Menu from "../../../assets/icons/Menu.png";
import FavoriteImage from "../../../assets/images/FavoriteImage.png";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";
import MailIcon from "../../../assets/icons/MailIcon.png";
import "./MailLayout.css"

const MailTopbar = ({ onMobileMenuClick }) => {
  const { setIsSidebarOpen } = useOutletContext();

  return (
    <header className="flex h-[64px] items-center justify-between border-b border-[#E9EDF5] bg-white px-6">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Main hamburger */}
        <button
          onClick={() => {
            setIsSidebarOpen((prev) => !prev);
          }}
          className="rounded-lg p-2 transition hover:bg-[#F5F7FA]"
        >
          <img
            src={Menu}
            alt="Menu"
            className="h-[18px] w-[18px]"
          />
        </button>

        {/* Mail icon - opens Mail Sidebar */}
        <button
          type="button"
          onClick={onMobileMenuClick}
          className="rounded-lg p-2 transition hover:bg-[#F5F7FA]"
        >
          <img
            src={MailIcon}
            alt="Mail"
            className="mobile-mail-icon h-[18px] w-[18px]"
          />
        </button>

      </div>

      <div className="ml-[-590px] flex gap-2 font-medium">
        <CiSearch size={20} />
      </div>

      {/* Right */}
      <div className="flex cursor-pointer items-center gap-3">

        <CiSearch />

        <FaRegBell />

        <img
          src={FavoriteImage}
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />

        <div className="flex flex-col leading-none">
          <span className="text-sm font-semibold text-[#2D4058]">
            ArtTemplate
          </span>

          <span className="text-xs text-[#8A9099]">
            Administrator
          </span>
        </div>

        <ChevronDown
          size={16}
          className="text-[#8A9099]"
        />

      </div>

    </header>
  );
};

export default MailTopbar;