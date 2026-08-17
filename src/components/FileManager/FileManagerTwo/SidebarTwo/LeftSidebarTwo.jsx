import LeftSidebar from "../../MainLeftSidebar/LeftSidebar";

const LeftSidebarTwo = ({ isOpen, onClose }) => {
  return (
    <div className="left-sidebar-two">
      <LeftSidebar
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default LeftSidebarTwo;