import {
  Circle,
  LoaderCircle,
  CheckCircle2,
  PauseCircle,
} from "lucide-react";

const statusConfig = {
  Started: {
    icon: Circle,
    bg: "bg-[#FFF8E8]",
    text: "text-[#F59E0B]",
    border: "border-[#FDE68A]",
  },

  "In Progress": {
    icon: LoaderCircle,
    bg: "bg-[#EEF8FF]",
    text: "text-[#2E90FA]",
    border: "border-[#B2DDFF]",
  },

  Completed: {
    icon: CheckCircle2,
    bg: "bg-[#ECFDF3]",
    text: "text-[#22983A]",
    border: "border-[#ABEFC6]",
  },

  "On Hold": {
    icon: PauseCircle,
    bg: "bg-[#F4F3FF]",
    text: "text-[#7A5AF8]",
    border: "border-[#D9D6FE]",
  },
};

const ProjectStatusBadge = ({
  status = "Started",
  size = "md",
}) => {
  const config = statusConfig[status] || statusConfig["Started"];
  const Icon = config.icon;

  const sizes = {
    sm: {
      wrapper: "px-2.5 py-1",
      text: "text-[12px]",
      icon: 14,
    },
    md: {
      wrapper: "px-3 py-1.5",
      text: "text-[13px]",
      icon: 16,
    },
    lg: {
      wrapper: "px-4 py-2",
      text: "text-[14px]",
      icon: 18,
    },
  };

  const current = sizes[size];

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        ${config.bg}
        ${config.text}
        ${config.border}
        ${current.wrapper}
      `}
    >
      <Icon size={current.icon} />

      <span className={`font-medium ${current.text}`}>
        {status}
      </span>
    </span>
  );
};

export default ProjectStatusBadge;