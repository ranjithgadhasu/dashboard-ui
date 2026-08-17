import { Plus } from "lucide-react";
import Modal from "./Modal";

const AddContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="New Contact"
    >
      {/* Upload Photo */}

      <div className="flex justify-center mb-8">
        <div className="w-[88px] h-[88px] rounded-3xl border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-green-500 transition">
          <Plus
            size={30}
            className="text-gray-400"
          />
        </div>
      </div>

      {/* First Name & Last Name */}

      <div className="grid grid-cols-2 gap-4">

        <Input
          label="First Name"
          placeholder="Regina"
        />

        <Input
          label="Last Name"
          placeholder="Cooper"
        />

      </div>

      {/* Email */}

      <Input
        label="Email"
        placeholder="cooper@example.com"
      />

      {/* Phone */}

      <div className="mt-5">

        <label className="block text-sm font-medium text-gray-600 mb-2">
          Phone
        </label>

        <div className="flex gap-3">

          <select className="w-24 h-10 rounded-xl border border-gray-200 px-3 outline-none">
            <option>+1</option>
            <option>+91</option>
            <option>+44</option>
          </select>

          <input
            type="text"
            placeholder="(070) 123-4567"
            className="flex-1 h-10 rounded-xl border border-gray-200 px-4 outline-none"
          />

        </div>

      </div>

      {/* Job */}

      <Input
        label="Job Title"
        placeholder="Manager"
      />

      {/* Address */}

      <Input
        label="Address"
        placeholder="Sochi, Russia"
      />

      {/* Date of Birth */}

      <div className="mt-5">

        <label className="block text-sm font-medium text-gray-600 mb-2">
          Date of Birth
        </label>

        <div className="grid grid-cols-3 gap-4">

          <select className="h-10 rounded-xl border border-gray-200 px-3">
            <option>17</option>
          </select>

          <select className="h-10 rounded-xl border border-gray-200 px-3">
            <option>March</option>
          </select>

          <select className="h-10 rounded-xl border border-gray-200 px-3">
            <option>1995</option>
          </select>

        </div>

      </div>

      {/* Notes */}

      <div className="mt-5">

        <label className="block text-sm font-medium text-gray-600 mb-2">
          Notes
        </label>

        <textarea
          placeholder="Type something..."
          className="
            w-[438px]
            h-[143px]
            border
            border-gray-200
            rounded-xl
            p-4
            resize-none
            outline-none
          "
        />

      </div>

      {/* Button */}

      <div className="mt-8 flex justify-end">

        <button
          className="
            h-10
            px-6
            rounded-xl
            bg-green-600
            text-white
            font-medium
            hover:bg-green-700
            transition
          "
        >
          Add Contact
        </button>

      </div>

    </Modal>
  );
};

export default AddContactModal;

function Input({
  label,
  placeholder,
}) {
  return (
    <div className="mt-5">

      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          h-10
          rounded-xl
          border
          border-gray-200
          px-4
          outline-none
          focus:border-green-500
        "
      />

    </div>
  );
}