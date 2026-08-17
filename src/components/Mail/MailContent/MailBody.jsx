const MailBody = ({ mail }) => {
  if (!mail) return null;

  return (
    <div className="rounded-xl border border-[#E9EDF5] bg-white p-8 shadow-sm">
      {/* Greeting */}
      <p className="mb-6 text-base font-medium text-[#2D4058]">
        Hi,
      </p>

      {/* Email Body */}
      <div className="space-y-5 text-[15px] leading-8 text-[#525C60]">
        {mail.body
          ?.trim()
          .split("\n")
          .filter((line) => line.trim() !== "")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </div>

      {/* Signature */}
      <div className="mt-10 border-t border-[#EEF2F7] pt-6">
        <p className="text-[15px] text-[#525C60]">
          Regards,
        </p>

        <h4 className="mt-2 text-base font-semibold text-[#2D4058]">
          {mail.sender}
        </h4>

        <p className="mt-1 text-sm text-[#8A9099]">
          {mail.email}
        </p>
      </div>
    </div>
  );
};

export default MailBody;