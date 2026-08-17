import orderDetailsData from "./orderDetailsData"; 
import "./custmorinfo.css"

const CustomerInfo = ({ order }) => {
  const data = order || orderDetailsData;
  const customer = data.customer;

  return (
    <div className="mt-5 customer-info">
      <h3 className="mb-3 text-[20px] font-medium text-[#3F434A] customer-info-title">
        Customer
      </h3>

      {/* Header */}
      <div className="grid grid-cols-[60px_220px_220px_180px_250px] border-b border-[#EEF2F6] pb-3 customer-info-header">
        <div className="text-[14px] uppercase text-[#9CA3AF] customer-info-heading">NAME</div>

        <div className="text-[14px] uppercase text-[#9CA3AF] customer-info-heading">EMAIL</div>

        <div className="text-[14px] uppercase text-[#9CA3AF] customer-info-heading">PHONE</div>

        <div className="text-[14px] uppercase text-[#9CA3AF] customer-info-heading">LOCATION</div>
      </div>

      {/* Data */}
      <div className="grid grid-cols-[60px_220px_220px_180px_250px] items-center border-b border-[#EEF2F6] py-4 customer-info-row">
        <img
          src={customer.avatar}
          alt={customer.name}
          className="h-10 w-10 rounded-full object-cover customer-info-avatar"
        />

        <div className="text-[14px] font-normal text-[#3F434A] customer-info-name">
          {customer.name}
        </div>

        <div className="text-[14px] font-normal text-[#6B7280] customer-info-email">
          {customer.email}
        </div>

        <div className="text-[14px]  font-normal text-[#6B7280] customer-info-phone">
          {customer.phone}
        </div>

        <div className="text-[14px] font-normal text-[#6B7280] customer-info-location">
          {customer.location}
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;