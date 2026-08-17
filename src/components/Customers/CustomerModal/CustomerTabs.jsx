import "./customermodel.css"

const tabs = [
  {
    id: "profile",
    label: "PROFILE",
  },
  {
    id: "address",
    label: "ADDRESS",
  },
  {
    id: "payment",
    label: "PAYMENT",
  },
  {
    id: "submission",
    label: "SUBMISSION",
  },
];

const CustomerTabs = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex gap-8 tabs-button">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-4 text-[14px] font-medium transition text-button ${
            activeTab === tab.id
              ? "border-b-2 border-[#22963F] text-[#22963F]"
              : "text-[#8A9099]"
          }`}
        >
          {tab.label}
        </button>
      ))}

    </div>
  );
};

export default CustomerTabs;