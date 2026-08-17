import { Folder } from "lucide-react";

const FolderChildren = ({ children }) => {

  return (

    <div
      className="
        ml-12
        border-l
        border-dashed
        border-[#D8DEE9]
      "
    >

      {children.map((child) => (

        <div
          key={child.id}
          className="
            relative
            flex
            items-center
            gap-3
            py-4
            pl-6
          "
        >

          <span
            className="
              absolute
              left-0
              top-1/2
              w-5
              -translate-y-1/2
              border-t
              border-dashed
              border-[#D8DEE9]
            "
          />
          <Folder
            size={16}
            fill="#FFD188"
            color="#FFD188"
          />
          <span className="text-[#667085]">
            {child.name}
          </span>
        </div>

      ))}

    </div>

  );

};

export default FolderChildren;