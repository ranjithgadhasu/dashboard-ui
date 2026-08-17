import { Plus } from "lucide-react";
import SearchInput from "../commonlist/SearchInput";
import Button from "../commonlist/Button";

const ContactToolbar = () => {
  return (
    <div className="flex items-center justify-between mb-6 gap-4">

      {/* Search */}

      <div className="flex-1">
        <SearchInput placeholder="Search contact..." />
      </div>

      {/* Add Contact Button */}

      <Button
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 transition"
      >
        <Plus size={18} />
        Add Contact
      </Button>

    </div>
  );
};

export default ContactToolbar;