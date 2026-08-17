import { useRef } from "react";
import { UploadCloud, X } from "lucide-react";
import Uploading from "../../../assets/images/Uploading.png";

const ProductImageUpload = ({ images, setImages }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const uploaded = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...uploaded]);

    e.target.value = "";
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="mb-2 block text-sm text-[#8A9099]">
        Product Images
      </label>

      {/* Upload Area */}

      <div
        onClick={() => fileInputRef.current?.click()}
        className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#E5E8EC] bg-[#FAFAFA] transition hover:border-[#22963F]"
      >
        <UploadCloud className="mb-3 text-[#A9B1BA]" size={30} />

        <p className="text-sm text-[#8A9099]">
          Drag and Drop or{" "}
          <span className="font-medium text-[#22963F]">
            Browse
          </span>{" "}
          to upload
        </p>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        hidden
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* Preview */}

      <div className="mt-4 flex flex-wrap gap-3">

        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-16 w-16 overflow-hidden rounded-xl border border-[#EEF2F6]"
          >
            <img
              src={image.preview}
              alt=""
              className="h-full w-full object-cover"
            />

            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow"
            >
              <X size={12} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#EEF2F6] bg-white transition hover:border-[#22963F]"
        >
          <img
            src={Uploading}
            alt="Upload"
            className="h-8 w-8 object-contain"
          />
        </button>

      </div>
    </div>
  );
};

export default ProductImageUpload;