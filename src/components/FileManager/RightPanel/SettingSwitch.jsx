import { useState } from "react";

const SettingSwitch = ({
  title,
  checked = false,
}) => {

  const [enabled, setEnabled] = useState(checked);

  return (

    <div className="flex items-center justify-between">

      <span className="text-[15px] text-[#5E6673]">
        {title}
      </span>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`
          relative
          w-[34px]
          h-[20px]
          rounded-full
          transition
          ${enabled ? "bg-[#34A853]" : "bg-[#E4E7EC]"}
        `}
      >

        <span
          className={`
            absolute
            top-[2px]
            h-4
            w-4
            rounded-full
            bg-white
            transition-all
            ${enabled ? "left-[16px]" : "left-[2px]"}
          `}
        />

      </button>

    </div>

  );
};

export default SettingSwitch;