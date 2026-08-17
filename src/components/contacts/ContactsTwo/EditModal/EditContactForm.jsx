import UploadAvatar from "./UploadAvatar";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

const EditContactForm = ({ contact }) => {
  if (!contact) return null;

  const [firstName = "", lastName = ""] = (contact.name || "").split(" ");


  const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  // Days (1-31)
const days = Array.from({ length: 31 }, (_, index) => ({
  label: String(index + 1),
  value: String(index + 1),
}));

// Years (1950 to Current Year)
const currentYear = new Date().getFullYear();

const years = Array.from(
  { length: currentYear - 1950 + 1 },
  (_, index) => ({
    label: String(1950 + index),
    value: String(1950 + index),
  })
);

  return (
    <div className="space-y-5">

      <UploadAvatar
        image={contact.avatar}
        name={contact.name}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="First Name"
          value={firstName}
        />

        <FormInput
          label="Last Name"
          value={lastName}
        />
      </div>

      <FormInput
        label="Email"
        value={contact.email}
      />

      <div>
        <label className="block mb-2 text-[14px] font-normal text-[#8B8F9C]">
          Phone
        </label>

        <div className="flex gap-3">

          <div className="w-24">
            <FormSelect
              value="+1"
              options={[
                { label: "+1", value: "+1" },
                { label: "+91", value: "+91" },
              ]}
            />
          </div>

          <div className="flex-1">
            <FormInput
              value={contact.phone}
            />
          </div>

        </div>
      </div>

      <FormInput
        label="Job Title"
        value={contact.designation}
      />

      <FormInput
        label="Address"
        value={contact.location}
      />

      <div>

        <label className="block mb-2 text-[14px] font-normal text-[#8B8F9C]">
          Date of Birth
        </label>

        <div className="grid grid-cols-3 gap-4">

          <FormSelect
            value="17"
            options={days}
          />

          <FormSelect
            value="March"
            options={months}
          />

          <FormSelect
            value="1995"
            options={years}
          />

        </div>

      </div>

      <FormTextarea
        label="Notes"
        value={contact.notes || ""}
      />

      <div className="flex justify-end pt-2">

        <button
          className="
            h-[38px]
            px-6
            rounded-xl
            bg-green-600
            text-white
            text-[15px]
            font-medium
            hover:bg-green-700
          "
        >
          Add Contact
        </button>

      </div>

    </div>
  );
};

export default EditContactForm;