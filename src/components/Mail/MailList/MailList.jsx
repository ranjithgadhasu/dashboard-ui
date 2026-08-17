import MailSearch from "./MailSearch";


import MailItem from "./MailItem";
import { mailData } from "./mailData";

const MailList = ({
  selectedMail,
  onSelectMail,
}) => {
   
  return (
 <div className="flex h-full w-[380px] flex-col border-r border-[#E9EDF5] bg-white">
  {/* Search */}
  <div className="shrink-0 border-b border-[#E9EDF5] p-4">
    <MailSearch
      value=""
      onChange={(value) => console.log(value)}
    />
  </div>

  {/* Mail List */}
  <div className="min-h-0 flex-1 overflow-y-auto">
    {mailData.map((mail) => (
      <MailItem
        key={mail.id}
        mail={mail}
        active={selectedMail?.id === mail.id}
        onClick={() => onSelectMail?.(mail)}
      />
    ))}
  </div>
</div>
  );
};

export default MailList;