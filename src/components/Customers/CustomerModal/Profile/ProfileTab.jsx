import { ChevronDown } from "lucide-react";
import { Pencil } from "lucide-react";

const ProfileTab = ({ customer }) => {
  const firstName = customer?.name?.split(" ")[0] || "";
  const lastName = customer?.name?.split(" ").slice(1).join(" ") || "";

  return (
    <div className="px-6 py-5">
      {/* Title */}
      <h2 className="mb-6 text-[28px] font-medium text-[#3F434A]">
        Profile
      </h2>

      {/* Avatar */}
      <div className="mb-8 flex justify-center">
        <div className="relative">

          <div className="flex h-[130px] w-[130px] items-center justify-center rounded-full border border-dashed border-[#D7DCE5] p-[6px]">
            <img
              src={customer.avatar}
              alt={customer.name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

 <button
  className="absolute right-0 top-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#D9DEE7] bg-white shadow-sm transition hover:bg-[#F8F9FB]"
>
  <Pencil
    size={15}
    strokeWidth={2}
    className="text-[#3F434A]"
  />
</button>

        </div>
      </div>

      {/* First & Last Name */}
      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="mb-2 block text-[14px] text-[#8A9099]">
            First Name
          </label>

          <input
            type="text"
            value={firstName}
            readOnly
            className="h-[42px] w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] text-[#3F434A] outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-[14px] text-[#8A9099]">
            Last Name
          </label>

          <input
            type="text"
            value={lastName}
            readOnly
            className="h-[42px] w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] text-[#3F434A] outline-none"
          />
        </div>

      </div>

      {/* Email */}
      <div className="mt-5">
        <label className="mb-2 block text-[14px] text-[#8A9099]">
          Email
        </label>

        <input
          type="text"
          value={customer.email}
          readOnly
          className="h-[42px] w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] text-[#3F434A] outline-none"
        />
      </div>

      {/* Phone */}
      <div className="mt-5">
        <label className="mb-2 block text-[14px] text-[#8A9099]">
          Phone
        </label>

        <div className="flex overflow-hidden rounded-xl border border-[#E5E7EB]">

          <div className="flex w-[70px] items-center justify-center border-r border-[#E5E7EB] bg-[#F8F9FB] text-[14px] text-[#3F434A]">
            +1
          </div>

          <input
            type="text"
            value={customer.phone}
            readOnly
            className="h-[42px] flex-1 px-4 text-[14px] text-[#3F434A] outline-none"
          />

        </div>
      </div>

      {/* Status */}
      <div className="mt-5">
        <label className="mb-2 block text-[14px] text-[#8A9099]">
          Status
        </label>

        <div className="relative">

          <select
            defaultValue={customer.status}
            className="h-[42px] w-full appearance-none rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] text-[#3F434A] outline-none"
          >
            <option>Active</option>
            <option>Blocked</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8A9099]"
          />

        </div>
      </div>

      {/* Button */}
      <div className="mt-5 flex justify-end">

        <button className="h-[44px] rounded-lg bg-[#22963F] px-8 text-[15px] font-medium text-white transition hover:bg-[#1E8538]">
          Next Step
        </button>

      </div>
    </div>
  );
};

export default ProfileTab;