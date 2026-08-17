import { ChevronRight } from "lucide-react";

const PageTitle = ({
  title,
  subtitle,
  breadcrumbs = [],
  action,
}) => {
  return (
    <div className="mb-8 flex items-start justify-between">

      {/* Left */}
      <div>

        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <div className="mb-3 flex items-center gap-2">

            {breadcrumbs.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <span
                  className={`
                    text-[14px]
                    ${
                      index === breadcrumbs.length - 1
                        ? "font-medium text-[#344054]"
                        : "text-[#98A2B3]"
                    }
                  `}
                >
                  {item}
                </span>

                {index !== breadcrumbs.length - 1 && (
                  <ChevronRight
                    size={16}
                    className="text-[#98A2B3]"
                  />
                )}
              </div>
            ))}

          </div>
        )}

        {/* Title */}
        <h1
          className="
            text-[32px]
            font-semibold
            text-[#344054]
          "
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="
              mt-2
              text-[15px]
              text-[#98A2B3]
            "
          >
            {subtitle}
          </p>
        )}

      </div>

      {/* Right Action */}
      {action && (
        <div>
          {action}
        </div>
      )}

    </div>
  );
};

export default PageTitle;