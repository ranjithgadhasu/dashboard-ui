import "./oderTabs.css"

const tabs = [
  {
    id: "details",
    label: "ORDER DETAILS",
  },
  {
    id: "products",
    label: "PRODUCTS",
  },
  {
    id: "invoice",
    label: "INVOICE",
  },
];

const OrderTabs = ({ activeTab, setActiveTab }) => {


  return (
    <div className="border-b border-[#EEF2F6] bg-white px-8 order-details-tabs-wrapper">
      <div className="flex items-center gap-10 h-[48px] order-details-tabs-list">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative h-full text-[14px] font-medium tracking-wide uppercase transition cursor-pointer order-details-tab ${
              activeTab === tab.id
                ? "text-[#22963F]"
                : "text-[#6B7280] hover:text-[#374151]"
            }`}
          >
            {tab.label}

            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#22963F]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderTabs;