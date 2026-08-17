import SettingSwitch from "./SettingSwitch";
import { fileManagerData } from "../data/fileManagerData";

const FolderSettings = () => {

  const { selectedFolder } = fileManagerData;

  return (

    <div className="px-7">

      <h3 className="text-[15px] font-medium uppercase text-[#37393D]">
        SETTINGS
      </h3>

      <div className="mt-6 space-y-5">

        <SettingSwitch
          title="File Sharing"
          checked={selectedFolder.settings.fileSharing}
        />

        <SettingSwitch
          title="Backup"
          checked={selectedFolder.settings.backup}
        />

        <SettingSwitch
          title="Sync"
          checked={selectedFolder.settings.sync}
        />

      </div>

    </div>

  );
};

export default FolderSettings;