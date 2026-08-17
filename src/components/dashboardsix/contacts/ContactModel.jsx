import { X } from "lucide-react";
import ProfileDash from "../../../assets/images/ProfileDash.png"; 
import "./contacts.css"

const ContactModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px] contact-modal-overlay"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[450px] h-[700px] rounded-[20px] bg-white p-8 shadow-2xl contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8FA] hover:bg-[#EEF2F6] cursor-pointer"
        >
          <X size={20} className="text-[#5B5B5B]" />
        </button>

        {/* Title */}
        <h2 className="mb-2 text-[28px] font-medium text-[#3F434A]">
          Add Contact
        </h2>

        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-dashed border-[#D6D9DE] p-2">
            <img
              src={ProfileDash}
              alt=""
              className="h-[110px] w-[110px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <div className="mb-6 grid grid-cols-2 gap-5 contact-name-fields">
          <div>
            <label className="mb-1 block text-[14px] font-normal text-[#8A9099]">
              First Name
            </label>

            <input
              defaultValue="Regina"
              className="h-[40px] w-full rounded-2xl border border-[#E5E7EB] font-normal px-5 text-[14px] text-[#3F434A] outline-none focus:border-[#22963F]"
            />
          </div>

          <div>
            <label className="mb-1 block text-[14px] font-normal text-[#8A9099]">
              Last Name
            </label>

            <input
              defaultValue="Cooper"
              className="h-[40px] w-full rounded-2xl font-normal border border-[#E5E7EB] px-5 px-5 text-[14px] text-[#3F434A] outline-none focus:border-[#22963F]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="mb-1 block text-[14px] font-normal text-[#8A9099]">
            Email
          </label>

          <input
            defaultValue="regina_cooper@mail.com"
            className="h-[40px] w-full rounded-2xl font-normal border border-[#E5E7EB] px-5 px-5 text-[14px] text-[#3F434A] outline-none focus:border-[#22963F]"
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label className="mb-1 block text-[14px] font-normal text-[#8A9099]">
            Phone
          </label>

          <div className="flex overflow-hidden rounded-2xl border border-[#E5E7EB]">
            <select className="w-20 border-r px-5 text-[14px] text-[#3F434A] border-[#E5E7EB] bg-[#F7F8FA] text-center outline-none">
              <option>+1</option>
              <option>+91</option>
              <option>+44</option>
            </select>

            <input
              defaultValue="(070) 4567-8800"
              className="h-14 flex-1 px-4 px-5 text-[14px] font-normal text-[#3F434A] outline-none"
            />
          </div>
        </div>

        {/* Job */}
        <div className="mb-8">
          <label className="mb-1 block text-[14px] font-normal text-[#8A9099]">
            Job Title
          </label>

          <input
            defaultValue="Project Manager"
            className="h-[40px] w-full rounded-2xl border border-[#E5E7EB] font-normal px-5 text-[14px] text-[#3F434A] outline-none focus:border-[#22963F]"
          />
        </div>

        {/* Button */}
        <button className="h-[40px] w-full rounded-2xl bg-[#22963F] text-[15px] font-medium text-white transition hover:bg-[#1B8135] cursor-pointer">
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default ContactModal;