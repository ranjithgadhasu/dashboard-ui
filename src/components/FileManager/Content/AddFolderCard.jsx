import { useState } from "react";
import { Plus } from "lucide-react";
import UploadDrawer from "../Content/ModalUpload/UploadDrawer";
import "./filetoolbar.css"

const AddFolderCard = () => {

  const [open, setOpen] = useState(false);

  return (
    <>

      <button
        onClick={() => setOpen(true)}
        className="
        folder-card
          group
          flex
          h-[177px]
          w-[177px]
          flex-col
          items-center
          justify-center
          rounded-3xl
          border-2
          border-dashed
          border-[#D9E1EC]
          bg-white
          transition-all
          hover:border-[#22C55E]
        "
      >

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F7FA]">
          <Plus size={30} />
        </div>

        <h3 className="mt-6 text-[15px]">
          Add Folder
        </h3>

      </button>

      <UploadDrawer
        open={open}
        onClose={() => setOpen(false)}
      />

    </>
  );
};

export default AddFolderCard;