

const ContactBadge = ({ designation }) => {
  const badgeStyles = {
    Manager: {
      bg: "bg-green-50",
      text: "text-green-600",
    },
    Designer: {
      bg: "bg-red-50",
      text: "text-red-500",
    },
    Developer: {
      bg: "bg-sky-50",
      text: "text-sky-500",
    },
    "Creative Director": {
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
  };

  const style = badgeStyles[designation] || {
    bg: "bg-gray-100",
    text: "text-gray-600",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        px-4
        py-1
        rounded-full
        text-[11px]
        font-medium
        ${style.bg}
        ${style.text}
      `}
    >
      {designation}
    </span>
  );
};

export default ContactBadge;