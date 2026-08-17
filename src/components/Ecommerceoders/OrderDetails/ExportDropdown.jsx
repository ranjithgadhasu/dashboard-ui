import { useEffect, useRef, useState } from "react";
import {
  Download,
  ChevronDown,
  Printer,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

const exportOptions = [
  {
    id: "print",
    label: "Print",
    icon: Printer,
  },
  {
    id: "excel",
    label: "Excel",
    icon: FileSpreadsheet,
  },
  {
    id: "pdf",
    label: "PDF",
    icon: FileText,
  },
  {
    id: "csv",
    label: "CSV",
    icon: FileText,
  },
];

const ExportDropdown = ({ onSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleSelect = (value) => {
    setOpen(false);

    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 items-center gap-2 rounded-xl border border-[#DCE3EA] bg-white px-4 text-[14px] font-medium text-[#3F434A] transition hover:bg-[#F8FAFC]"
      >
        <Download size={16} />

        <span>Export</span>

        <ChevronDown
          size={16}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-2xl border border-[#EEF2F6] bg-white shadow-xl">

          {exportOptions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-[#4B5563] transition hover:bg-[#F7FAF8]"
              >
                <Icon size={16} />

                {item.label}
              </button>
            );
          })}

        </div>
      )}
    </div>
  );
};
export default ExportDropdown;