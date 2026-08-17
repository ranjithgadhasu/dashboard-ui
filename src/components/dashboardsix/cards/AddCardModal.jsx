import { X } from "lucide-react";
import MasterCard from "../../../assets/images/Mastercard.png"; 
import"./cards.css"

const AddCardModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px] add-card-modal-overlay"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[480px] rounded-[18px] bg-white p-10 shadow-2xl add-card-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8FA] transition hover:bg-[#EEF2F6]"
        >
          <X size={20} className="text-[#555] cursor-pointer" />
        </button>

        {/* Title */}
        <h2 className="mb-10 text-[28px] font-medium text-[#3F434A]">
          Add Card
        </h2>

        {/* Card Number */}
        <div className="mb-8">
          <label className="mb-3 block text-[14px]font-normal text-[#8A9099]">
            Card Number
          </label>

          <div className="relative">
            <input
              type="text"
              defaultValue="5890 - 6858 - 6332 - 9843"
              className="h-14 w-full rounded-2xl border border-[#E6E8EC] bg-white px-5 pr-16 text-[18px] text-[#3F434A] outline-none transition focus:border-[#22963F]"
            />

            <img
              src={MasterCard}
              alt="Master Card"
              className="absolute right-5 top-1/2 h-8 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Card Holder */}
        <div className="mb-8">
          <label className="mb-3 block text-[14px] font-normal text-[#8A9099]">
            Card Holder
          </label>

          <input
            type="text"
            defaultValue="Regina Cooper"
            className="h-14 w-full rounded-2xl border border-[#E6E8EC] bg-white px-5 text-[18px] text-[#3F434A] outline-none transition focus:border-[#22963F]"
          />
        </div>

        {/* Month & Year */}
        <div className="mb-10 grid grid-cols-2 gap-6 add-card-expiry">
          <div>
            <label className="mb-3 block text-[14px] font-normal text-[#8A9099]">
              Month
            </label>

            <input
              type="text"
              defaultValue="12"
              className="h-14 w-full rounded-2xl border border-[#E6E8EC] bg-white px-5 text-[18px] text-[#3F434A] outline-none transition focus:border-[#22963F]"
            />
          </div>

          <div>
            <label className="mb-3 block text-[14px] font-normal text-[#8A9099]">
              Year
            </label>

            <input
              type="text"
              defaultValue="2023"
              className="h-14 w-full rounded-2xl border border-[#E6E8EC] bg-white px-5 text-[18px] text-[#3F434A] outline-none transition focus:border-[#22963F]"
            />
          </div>
        </div>

        {/* Button */}
        <button className="h-14 w-full rounded-2xl bg-[#22963F] text-[15px] font-medium text-white transition hover:bg-[#1D8137] cursor-pointer">
          Add Card
        </button>
      </div>
    </div>
  );
};

export default AddCardModal;