import { MdOutlineModeEditOutline } from "react-icons/md";

const UploadAvatar = ({
  image,
  name,
  onImageChange,
}) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">

        {/* Hidden File Input */}
        <input
          id="contact-avatar"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageChange}
        />

        {/* Avatar */}
        <label
          htmlFor="contact-avatar"
          className="
            flex
            items-center
            justify-center
            w-[88px]
            h-[88px]
            rounded-[20px]
            border-2
            border-dashed
            border-[#D9DDE5]
            cursor-pointer
            overflow-hidden
            bg-white
            hover:border-[#22C55E]
            transition
          "
        >
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
        </label>

        {/* Edit Icon */}
        <label
          htmlFor="contact-avatar"
          className="
            absolute
            -top-1
            -right-1
            w-7
            h-7
            rounded-full
            bg-white
            border
            border-gray-200
            shadow-md
            flex
            items-center
            justify-center
            cursor-pointer
            hover:bg-gray-100
            transition
          "
        >
          <MdOutlineModeEditOutline
            size={14}
            className="text-gray-600"
          />
        </label>

      </div>
    </div>
  );
};

export default UploadAvatar;