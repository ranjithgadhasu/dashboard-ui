import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import orderDetailsData from "./orderDetailsData";

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E8EDF3] bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-2"
      >
        <span className="text-[20px] font-medium text-[#3F434A]">
          {title}
        </span>

        {isOpen ? (
          <ChevronUp size={18} className="text-[#8A9099]" />
        ) : (
          <ChevronDown size={18} className="text-[#8A9099]" />
        )}
      </button>

      {isOpen && (
        <div className="border-t border-[#EEF2F6] px-6 py-5">
          {children}
        </div>
      )}
    </div>
  );
};

const AddressGrid = ({ address }) => (
  <div className="grid grid-cols-3 gap-x-12 gap-y-4 text-[15px]">
    {/* Column 1 */}
    <div className="space-y-2">
      <p>
        <span className="font-medium text-[14px] text-[#3F434A]">First name:</span>{" "}
        <span className="text-[#6B7280]">{address.firstName}</span>
      </p>

      <p>
        <span className="font-medium text-[14px] text-[#3F434A]">Last name:</span>{" "}
        <span className="text-[#6B7280]">{address.lastName}</span>
      </p>

      <p>
        <span className="font-medium text-[14px] text-[#3F434A]">Address:</span>{" "}
        <span className="text-[#6B7280]">{address.address}</span>
      </p>
    </div>

    {/* Column 2 */}
    <div className="space-y-2">
      <p>
        <span className="font-medium text-[14px] text-[#3F434A]">State/Region:</span>{" "}
        <span className="text-[#6B7280]">{address.state}</span>
      </p>

      <p>
        <span className="font-medium text-[14px] text-[#3F434A]">City:</span>{" "}
        <span className="text-[#6B7280]">{address.city}</span>
      </p>

      <p>
        <span className="font-medium text-[14px] text-[#3F434A]">Country:</span>{" "}
        <span className="text-[#6B7280]">{address.country}</span>
      </p>
    </div>

    {/* Column 3 */}
    <div className="space-y-2">
      <p>
        <span className="font-medium text-[14px] text-[#3F434A]">Phone:</span>{" "}
        <span className="text-[#6B7280]">{address.phone}</span>
      </p>

      <p>
        <span className="font-medium text-[14px] text-[#3F434A]">Email:</span>{" "}
        <span className="text-[#6B7280]">{address.email}</span>
      </p>

      <p>
        <span className="font-medium text-[14px] text-[#3F434A]">Postcode:</span>{" "}
        <span className="text-[#6B7280]">{address.postcode}</span>
      </p>
    </div>
  </div>
);

const AddressAccordion = ({ order }) => {
  const data = order || orderDetailsData;

  return (
    <div className="space-y-4">
      <AccordionItem title="Billing address" defaultOpen>
        <AddressGrid address={data.billingAddress} />
      </AccordionItem>

      <AccordionItem title="Shipping address">
        <AddressGrid address={data.shippingAddress} />
      </AccordionItem>

      {/*<AccordionItem title="Order Notes">
        <p className="text-[15px] leading-7 text-[#6B7280]">
          {data.orderNotes}
        </p>
      </AccordionItem>*/}
    </div>
  );
};

export default AddressAccordion;