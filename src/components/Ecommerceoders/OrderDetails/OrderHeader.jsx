import ExportDropdown from "./ExportDropdown";

const OrderHeader = ({ order }) => {
  const handleExport = (type) => {
    switch (type) {
      case "print":
        window.print();
        break;

      case "excel":
        console.log("Export Excel");
        break;

      case "pdf":
        console.log("Export PDF");
        break;

      case "csv":
        console.log("Export CSV");
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex items-start justify-between">
      {/* Left */}
      <div>
        <h1 className="text-[28px] font-medium text-[#3F434A]">
          Orders{" "}
          <span className="font-medium text-[#8A9099]">
            #{order?.orderNo || "790841"}
          </span>
        </h1>
      </div>

      {/* Right */}
      <ExportDropdown onSelect={handleExport} />
    </div>
  );
};

export default OrderHeader;