const ChatProfileInfo = ({ info }) => {
  if (!info) {
    return null;
  }

  return (
    <div className="border-b border-[#EEF2F7] px-8 py-8">
      <h4 className="mb-6 text-[15px] font-medium uppercase tracking-wider text-[#0b0b0b]">
        Info
      </h4>

      <div className="space-y-6">
        <div>
          <p className="text-[11px] uppercase text-[#98A2B3]">Email</p>
          <p className="mt-1 text-sm text-[#344054]">{info.email}</p>
        </div>

        <div>
          <p className="text-[11px] uppercase text-[#98A2B3]">Phone</p>
          <p className="mt-1 text-sm text-[#344054]">{info.phone}</p>
        </div>

        <div>
          <p className="text-[11px] uppercase text-[#98A2B3]">Birthday</p>
          <p className="mt-1 text-sm text-[#344054]">{info.birthday}</p>
        </div>

        <div>
          <p className="text-[11px] uppercase text-[#98A2B3]">Location</p>
          <p className="mt-1 text-sm text-[#344054]">{info.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatProfileInfo;