import { useEffect, useRef, useState } from "react";
import {
  Download,
  ChevronDown,
  Plus,
  Printer,
  FileSpreadsheet,
  FileText,
  FileType,
} from "lucide-react";
import "./customer.css"

const CustomersHeader = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    {
      icon: <Printer size={18} className="text-[#8A9099]" />,
      label: "Print",
    },
    {
      icon: <FileSpreadsheet size={18} className="text-[#8A9099]" />,
      label: "Excel",
    },
    {
      icon: <FileText size={18} className="text-[#8A9099]" />,
      label: "PDF",
    },
    {
      icon: <FileType size={18} className="text-[#8A9099]" />,
      label: "CSV",
    },
  ];

  return (
    <div className="mb-8 flex items-center justify-between customers-header">
      <h1 className="text-[28px] font-medium text-[#3F434A] customers-header-title">
        Customers
      </h1>

      <div className="flex items-center gap-3 customers-header-actions">
        {/* Export */}
        <div className="relative customers-export-wrapper" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 text-[14px] font-medium text-[#3F434A] hover:bg-[#F8F9FB] customers-export-button"
          >
            <Download size={16} />
            Export
            <ChevronDown
              size={16}
              className={`transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-[180px] rounded-3xl bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,0.12)] z-50 customers-export-menu">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  className="mb-1 flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-[18px] font-medium text-[#4B5563] transition hover:bg-[#F3F4F6] customers-export-menu-item"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Add */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#22963F] text-white hover:bg-[#1E8538] customers-add-button">
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
};

export default CustomersHeader;