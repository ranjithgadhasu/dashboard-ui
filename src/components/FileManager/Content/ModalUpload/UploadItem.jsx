import {
  Check,
  RotateCw,
} from "lucide-react";

const UploadItem = ({ item }) => {
  return (
    <div className="flex items-start justify-between py-2">

      {/* Left */}

      <div className="flex items-start gap-4">

        <img
          src={item.icon}
          alt={item.name}
          className="h-10 w-10 object-contain"
        />

        <div>

          {/* Name */}

          <h3
            className="
              text-[14px]
              font-normal
              text-[#37393D]
            "
          >
            {item.name}
          </h3>

          {/* Failed */}

          {item.status === "failed" ? (
            <p
              className="
                mt-1
                text-[14px]
                font-normal
                text-[#FF5A5F]
              "
            >
              Upload Failed
            </p>
          ) : (
            <p
              className="
                mt-1
                text-[14px]
                text-[#98A2B3]
              "
            >
              {item.size}
            </p>
          )}

          {/* Progress */}

          {item.status === "uploading" && (
            <div className="mt-3 w-[260px]">

              <div
                className="
                  h-[6px]
                  w-full
                  rounded-full
                  bg-[#EEF2F7]
                "
              >
                <div
                  className="h-full rounded-full bg-[#22C55E]"
                  style={{
                    width: `${item.progress}%`,
                  }}
                />
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center">

        {item.status === "completed" && (
          <Check
            size={22}
            className="text-[#22C55E]"
          />
        )}

        {item.status === "failed" && (
          <button className="rounded-lg p-2 hover:bg-[#F5F7FA]">
            <RotateCw
              size={18}
              className="text-[#98A2B3]"
            />
          </button>
        )}

        {item.status === "uploading" && (
          <span
            className="
              text-[14px]
              font-normal
              text-[#22C55E]
            "
          >
            {item.progress}%
          </span>
        )}

      </div>
    </div>
  );
};

export default UploadItem;