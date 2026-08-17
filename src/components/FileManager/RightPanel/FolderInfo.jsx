import InfoItem from "./InfoItem";
import { fileManagerData } from "../data/fileManagerData";

const FolderInfo = () => {
  const { selectedFolder } = fileManagerData;

  return (
    <div className="mt-10 px-7">

      <h3 className="text-[15px] font-medium uppercase text-[#37393D]">
        INFO
      </h3>

      <div className="mt-5 space-y-3">

        <InfoItem label="Type" value={selectedFolder.info.type} />

        <InfoItem label="Size" value={selectedFolder.info.size} />

        <InfoItem label="Owner" value={selectedFolder.info.owner} />

        <InfoItem
          label="Location"
          value={selectedFolder.info.location}
          valueClass="text-[#34A853]"
        />

        <InfoItem label="Modified" value={selectedFolder.info.modified} />

        <InfoItem label="Created" value={selectedFolder.info.created} />

      </div>

      <hr className="my-8 border-[#EEF2F7]" />

    </div>
  );
};

export default FolderInfo;