const ChatProfileSection = ({
  title,
  action,
  children,
}) => {
  return (
    <div className="border-b border-[#EEF2F7] px-8 py-6 last:border-b-0">
      {/* Section Header */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#98A2B3]">
          {title}
        </h3>

        {action && (
          <button
            type="button"
            className="text-[13px] font-medium text-[#22C55E] transition hover:text-[#16A34A]"
          >
            {action}
          </button>
        )}
      </div>
      {/* Section Content */}
      <div>
        {children}
      </div>
    </div>
  );
};

export default ChatProfileSection;