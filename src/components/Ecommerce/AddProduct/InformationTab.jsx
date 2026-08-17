import { useState } from "react";
import { X } from "lucide-react";
import RichTextEditor from "./RichTextEditor";

const InformationTab = () => {

     const [tags, setTags] = useState([
        "Apple",
        "iPhone",
        "64GB",
      ]);
    
      const removeTag = (tag) => {
        setTags(tags.filter((x) => x !== tag));
      };
  return (
    <div>
      <h2 className="mb-8 text-[28px] font-medium text-[#374151]">
        Information
      </h2>

      {/* Product Name */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
          Product Name
        </label>

        <input
          type="text"
          placeholder="Enter Product Name"
          className="h-[40px] w-full rounded-xl border border-[#E5E7EB] px-4 outline-none focus:border-[#22963F]"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
          Description
        </label>
<RichTextEditor />
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
          Category
        </label>

        <select className="h-[40px] w-full rounded-xl border border-[#E5E7EB] px-4 outline-none focus:border-[#22963F]">
          <option className="text-[14px] font-normal">Select Category</option>
          <option>Phone</option>
          <option>Laptop</option>
          <option>Tablet</option>
          <option>Accessories</option>
        </select>
      </div>

      {/* Tags */}
     <div className="flex min-h-[44px] flex-wrap gap-2 rounded-xl border border-[#EEF2F6] p-2">

          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-1 rounded-lg bg-[#F5F6F8] px-3 py-1 text-sm"
            >
              {tag}

              <button
                type="button"
                onClick={() => removeTag(tag)}
              >
                <X size={14} />
              </button>
            </div>
          ))}

        </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="rounded-lg h-[40px] w-[110px] text-[15px] font-medium bg-[#22963F] px-8 py-3 text-white">
          Save
        </button>
        <button className="rounded-lg h-[40px] w-[110px] text-[15px] font-medium border border-[#D1D5DB] px-8 py-3 text-[#374151]">
          Cancel
        </button>
      </div>
    </div>
  );
};
export default InformationTab;