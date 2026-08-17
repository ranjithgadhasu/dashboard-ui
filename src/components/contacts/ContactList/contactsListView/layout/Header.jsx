import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import profileImage from "../../../../assets/images/avatars/avatar-1.png";

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        <button className="text-gray-600 hover:text-black">
          <Menu size={20} />
        </button>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        <button className="text-gray-500 hover:text-black transition">
          <Search size={18} />
        </button>

        <button className="relative text-gray-500 hover:text-black transition">

          <Bell size={18} />

          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-2 cursor-pointer">

          <img
            src={profileImage}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />

          <span className="text-sm font-semibold text-gray-700">
            ArtTemplate
          </span>

          <ChevronDown
            size={16}
            className="text-gray-500"
          />

        </div>

      </div>

    </header>
  );
};

export default Header;