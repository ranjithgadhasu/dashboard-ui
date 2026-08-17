import { useRef } from "react";
import { UploadCloud, Image as ImageIcon, Trash2 } from "lucide-react";

const MAX_IMAGES = 5;

const ImageUpload = ({ images, setImages }) => {
  const fileInputRef = useRef(null);

  const addFiles = (files) => {
    const selected = Array.from(files);

    const imageFiles = selected.filter((file) =>
      file.type.startsWith("image/"),
    );

    const newImages = imageFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages].slice(0, MAX_IMAGES));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="mb-2 block text-sm text-[#8A9099]">
        Product Images
      </label>

      {/* Upload Box */}

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => fileInputRef.current.click()}
        className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#E5E8EC] bg-[#FAFAFA] transition hover:border-[#22963F]"
      >
        <UploadCloud size={26} className="mb-3 text-[#B0B8C2]" />

        <p className="text-sm text-[#8A9099]">
          Drag and Drop or{" "}
          <span className="font-medium text-[#22963F]">Browse</span> to upload
        </p>

        <input
          id="productImageInput"
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          hidden
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {/* Preview */}

      <div className="mt-4 flex flex-wrap gap-3">
        {Array.from({ length: MAX_IMAGES }).map((_, index) => {
          const image = images[index];

          if (image) {
            return (
              <div
                key={index}
                className="group relative h-16 w-16 overflow-hidden rounded-xl border border-[#EEF2F6]"
              >
                <img
                  src={image.preview}
                  alt=""
                  className="h-full w-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute inset-0 hidden items-center justify-center bg-black/50 text-white group-hover:flex"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#EEF2F6] bg-[#FAFAFA]"
            >
              <ImageIcon size={22} className="text-[#B0B8C2]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageUpload;
