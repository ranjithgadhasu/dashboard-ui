import ZoomControls from "./ZoomControls";

const ViewSwitcher = () => {
  return (
    <div
      className="
        flex
        items-center
        justify-end
        border-t
        border-[#EEF2F7]
        bg-white
        px-6
        py-4
      "
    >
      <ZoomControls />
    </div>
  );
};

export default ViewSwitcher;