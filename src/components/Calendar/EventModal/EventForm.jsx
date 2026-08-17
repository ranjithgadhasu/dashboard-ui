import { useState } from "react";
import EventDateTime from "./EventDateTime";
import EventCheckboxes from "./EventCheckboxes";
import EventCalendarSelect from "./EventCalendarSelect";
import { defaultEvent } from "./EventData";

const EventForm = () => {
    const [form, setForm] = useState(defaultEvent);
  return (
    <div className="space-y-3">

      {/* Title */}

      <div>
        <label className="mb-1 block text-[14px] font-normal text-[#8A9099]">
          Title
        </label>

        <input
          type="text"
           value={form.title}
          defaultValue="Sending order"
          className="h-[40px] w-full rounded-xl border border-[#E9EDF5] px-4 outline-none"
           onChange={(e) =>
    setForm({...form, title: e.target.value,})}
        />
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-[14px] font-normal text-[#8A9099]">
          Description
        </label>

        <textarea
          rows={4}
          defaultValue="Sending order #25789 Felecia Burke at 5:30"
          className="w-full resize-none rounded-xl border border-[#E9EDF5] p-4 outline-none"
        />
      </div>

      <EventDateTime />

      <EventCheckboxes />

      <EventCalendarSelect />

    </div>
  );
};

export default EventForm;