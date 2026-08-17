import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import MasterCard from "../../../../assets/images/Mastercard.png";

const PaymentTab = ({ customer }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="px-6 py-5">
      {/* Title */}
      <h2 className="mb-8 text-[28px] font-medium text-[#3F434A]">
        Payment
      </h2>

      {/* Payment Method */}
      <div className="mb-8">
        <label className="mb-4 block text-[15px] text-[#8A9099]">
          Choose payment method:
        </label>

        <div className="grid grid-cols-2 gap-6">
          {/* Credit Card */}
          <div
            onClick={() => setPaymentMethod("card")}
            className={`flex h-[54px] cursor-pointer items-center gap-3 rounded-2xl px-5 transition-all ${
              paymentMethod === "card"
                ? "border-2 border-[#22963F] bg-white"
                : "border border-[#E5E7EB] bg-[#F8F9FB]"
            }`}
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded border ${
                paymentMethod === "card"
                  ? "border-[#22963F] bg-[#22963F]"
                  : "border-[#D9DEE7]"
              }`}
            >
              {paymentMethod === "card" && (
                <Check size={14} className="text-white" />
              )}
            </div>

            <span className="text-[16px] font-medium text-[#3F434A]">
              Credit Card
            </span>
          </div>

          {/* PayPal */}
          <div
            onClick={() => setPaymentMethod("paypal")}
            className={`flex h-[54px] cursor-pointer items-center gap-3 rounded-2xl px-5 transition-all ${
              paymentMethod === "paypal"
                ? "border-2 border-[#22963F] bg-white"
                : "border border-[#E5E7EB] bg-[#F8F9FB]"
            }`}
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded border ${
                paymentMethod === "paypal"
                  ? "border-[#22963F] bg-[#22963F]"
                  : "border-[#D9DEE7]"
              }`}
            >
              {paymentMethod === "paypal" && (
                <Check size={14} className="text-white" />
              )}
            </div>

            <span className="text-[16px] font-medium text-[#3F434A]">
              PayPal
            </span>
          </div>
        </div>
      </div>

      {/* Card Number */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] text-[#8A9099]">
          Card Number
        </label>

        <div className="relative">
          <input
            type="text"
            defaultValue="5890 - 6858 - 6332 - 9843"
            className="h-[48px] w-full rounded-2xl border border-[#E5E7EB] px-4 pr-16 text-[15px] text-[#3F434A] outline-none focus:border-[#22963F]"
          />

          <img
            src={MasterCard}
            alt="MasterCard"
            className="absolute right-4 top-1/2 h-6 w-10 -translate-y-1/2 object-contain"
          />
        </div>
      </div>

      {/* Card Holder */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] text-[#8A9099]">
          Card Holder
        </label>

        <input
          type="text"
          defaultValue={customer?.name}
          className="h-[48px] w-full rounded-2xl border border-[#E5E7EB] px-4 text-[15px] text-[#3F434A] outline-none focus:border-[#22963F]"
        />
      </div>

      {/* Month & Year */}
      <div className="mb-10 grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-[14px] text-[#8A9099]">
            Month
          </label>

          <div className="relative">
            <select
              defaultValue="12"
              className="h-[48px] w-full appearance-none rounded-2xl border border-[#E5E7EB] px-4 text-[15px] outline-none focus:border-[#22963F]"
            >
              {Array.from({ length: 12 }, (_, i) => {
                const month = String(i + 1).padStart(2, "0");
                return (
                  <option key={month} value={month}>
                    {month}
                  </option>
                );
              })}
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8A9099]"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[14px] text-[#8A9099]">
            Year
          </label>

          <div className="relative">
            <select
              defaultValue="2025"
              className="h-[48px] w-full appearance-none rounded-2xl border border-[#E5E7EB] px-4 text-[15px] outline-none focus:border-[#22963F]"
            >
              {[2025, 2026, 2027, 2028, 2029].map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8A9099]"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <button className="h-[44px] rounded-xl border border-[#E5E7EB] bg-white px-8 text-[15px] font-medium text-[#3F434A]">
          Previous
        </button>

        <button className="h-[44px] rounded-lg bg-[#22963F] px-8 text-[15px] font-medium text-white">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PaymentTab;