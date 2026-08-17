import { useRef } from "react";
import { UploadCloud } from "lucide-react";
import {
  GripVertical,
  Image as ImageIcon,
  Trash2,
  CheckCircle,
  Circle,
} from "lucide-react";
import "./image.css";

const ImagesTab = () => {
  const fileInputRef = useRef(null);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFiles = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      console.log(files);
      // We'll display the images in the next step.
    }
  };

  return (
       <div className="images-tab">
      <h2 className="mb-3 text-[28px] font-medium text-[#374151] images-tab-title">Images</h2>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleFiles}
      />

      <div
        onClick={openFilePicker}
        className="flex h-[120px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#D9D9D9] bg-[#FAFAFA] transition hover:border-[#22963F] hover:bg-[#F7FFF8] images-upload-box"
      >
        <UploadCloud size={32} className="mb-4 text-[#9CA3AF] images-upload-icon" />

        <p className="text-[18px] text-[#4B5563] images-upload-text">
          Drag and Drop or{" "}
          <span className="font-medium text-[#22963F]">Browse</span> to upload
        </p>
      </div>
      <div className="mt-8 images-list">
        {/* Header */}
        <div className="grid grid-cols-[90px_1fr_100px_100px_60px] px-4 mb-3 text-start text-[14px] text-[#6B7280] images-list-header">
          <div></div>
          <div>Image</div>
          <div>Position</div>
          <div>Cover</div>
          <div></div>
        </div>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="mb-4 grid h-[92px] w-[540px] grid-cols-[90px_1fr_100px_100px_60px] items-center rounded-2xl border border-[#E5E7EB] bg-white px-2 py-3 images-list-row"
          >
            {/* Drag */}
            <div className="flex justify-center images-drag">
              <GripVertical size={22} className="cursor-grab text-[#9CA3AF]" />
            </div>

            {/* Image */}
            <div className="images-preview-wrapper">
              <div className="flex h-[64px] w-[64px] items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] images-preview">
                <ImageIcon size={30} className="text-[#C4C4C4]" />
              </div>
            </div>

            {/* Position */}
            <div className="flex justify-center images-position">
              <span className="rounded-lg bg-[#F5F5F5] px-3 py-1 text-sm text-[#6B7280]">
                {item}
              </span>
            </div>

            {/* Cover */}
            <div className="flex justify-center images-cover">
              {item === 1 ? (
                <CheckCircle size={22} className="text-[#22963F]" />
              ) : (
                <Circle size={20} className="text-[#D1D5DB]" />
              )}
            </div>

            {/* Delete */}
            <div className="flex justify-center images-delete">
              <Trash2
                size={18}
                className="cursor-pointer text-[#9CA3AF] hover:text-red-500"
              />
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="mt-6 flex gap-4 images-buttons">
          <button className="rounded-lg h-[40px] text-[15px] font-medium bg-[#22963F] px-8 py-3 text-white images-save-btn">
            Save
          </button>

          <button className="rounded-lg border  h-[40px] text-[15px] font-medium border-[#D1D5DB] px-8 py-3 text-[#374151] images-cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesTab;
