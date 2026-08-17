import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Building2,
  CalendarDays,
} from "lucide-react";

import { taskDetails } from "./taskDetailsData";

const TaskProfileRight = () => {
  const user = taskDetails.createdBy;

  return (
    <div className="flex h-full flex-col">

      {/* Profile */}
      <div className="flex flex-col items-center border-b border-[#EEF2F7] pb-8">

        <img
          src={user.avatar}
          alt={user.name}
          className="h-28 w-28 rounded-full object-cover shadow-md"
        />

        <h2 className="mt-5 text-[28px] font-semibold text-[#344054]">
          {user.name}
        </h2>

        <p className="mt-2 text-[15px] text-[#98A2B3]">
          {user.role}
        </p>

      </div>

      {/* Contact */}
      <div className="space-y-6 py-8">

        <div className="flex items-start gap-4">
          <Mail size={20} className="mt-1 text-[#98A2B3]" />

          <div>
            <p className="text-[13px] text-[#98A2B3]">
              Email
            </p>

            <p className="text-[15px] font-medium text-[#344054]">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone size={20} className="mt-1 text-[#98A2B3]" />

          <div>
            <p className="text-[13px] text-[#98A2B3]">
              Phone
            </p>

            <p className="text-[15px] font-medium text-[#344054]">
              {user.phone}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Building2 size={20} className="mt-1 text-[#98A2B3]" />

          <div>
            <p className="text-[13px] text-[#98A2B3]">
              Department
            </p>

            <p className="text-[15px] font-medium text-[#344054]">
              Product Design
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Briefcase size={20} className="mt-1 text-[#98A2B3]" />

          <div>
            <p className="text-[13px] text-[#98A2B3]">
              Position
            </p>

            <p className="text-[15px] font-medium text-[#344054]">
              Senior UI / UX Designer
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin size={20} className="mt-1 text-[#98A2B3]" />

          <div>
            <p className="text-[13px] text-[#98A2B3]">
              Location
            </p>

            <p className="text-[15px] font-medium text-[#344054]">
              California, USA
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <CalendarDays size={20} className="mt-1 text-[#98A2B3]" />

          <div>
            <p className="text-[13px] text-[#98A2B3]">
              Joined
            </p>

            <p className="text-[15px] font-medium text-[#344054]">
              January 02, 2020
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-[#EEF2F7] pt-8">

        <h3 className="mb-4 text-[16px] font-semibold text-[#344054]">
          About
        </h3>

        <p className="text-[15px] leading-7 text-[#667085]">
          Creative UI / UX Designer with over 8 years of experience
          designing enterprise dashboards, design systems and modern
          mobile applications. Passionate about building beautiful,
          accessible and scalable user experiences.
        </p>

      </div>

    </div>
  );
};

export default TaskProfileRight;