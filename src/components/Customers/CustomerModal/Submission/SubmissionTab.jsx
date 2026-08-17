const SubmissionTab = ({ customer }) => {
  return (
    <div className="px-6 py-6">
      {/* Title */}
      <h2 className="mb-3 text-[28px] font-medium text-[#3F434A]">
        Submission
      </h2>

      {/* Profile Details */}
      <div className="mb-6">
        <h3 className="mb-3 text-[15px] font-medium text-[#3F434A]">
          Profile Details
        </h3>

        <div className="space-y-2 text-[15px]">
          <p>
            <span className="text-[#8A9099]">Name:</span>{" "}
            <span className="text-[#3F434A]">{customer?.name}</span>
          </p>

          <p>
            <span className="text-[#8A9099]">Email:</span>{" "}
            <span className="text-[#3F434A]">{customer?.email}</span>
          </p>

          <p>
            <span className="text-[#8A9099]">Phone:</span>{" "}
            <span className="text-[#3F434A]">{customer?.phone}</span>
          </p>
        </div>
      </div>
      <hr className="mb-4 border-[#ECECEC]" />

      {/* Address Details */}
      <div className="mb-1">
        <h3 className="mb-4 text-[18px] font-medium text-[#3F434A]">
          Address Details
        </h3>

        <div className="space-y-2 text-[15px]">
          <p>
            <span className="text-[#8A9099]">Address Line 1:</span>{" "}
            <span className="text-[#3F434A]">{customer?.address1}</span>
          </p>

          {customer?.address2 && (
            <p>
              <span className="text-[#8A9099]">Address Line 2:</span>{" "}
              <span className="text-[#3F434A]">{customer.address2}</span>
            </p>
          )}

          <p>
            <span className="text-[#8A9099]">City:</span>{" "}
            <span className="text-[#3F434A]">{customer?.city}</span>
          </p>

          <p>
            <span className="text-[#8A9099]">Country:</span>{" "}
            <span className="text-[#3F434A]">{customer?.country}</span>
          </p>

          <p>
            <span className="text-[#8A9099]">State/Region:</span>{" "}
            <span className="text-[#3F434A]">{customer?.state}</span>
          </p>

          <p>
            <span className="text-[#8A9099]">Postcode:</span>{" "}
            <span className="text-[#3F434A]">{customer?.postcode}</span>
          </p>
        </div>
      </div>

      <hr className="mb-4 border-[#ECECEC]" />

      {/* Payment Details */}
      <div className="mb-4">
        <h3 className="mb-4 text-[18px] font-medium text-[#3F434A]">
          Payment Details
        </h3>

        <div className="space-y-2 text-[15px]">
          <p>
            <span className="text-[#8A9099]">Card Number:</span>{" "}
            <span className="text-[#3F434A]">
              5890 - 6858 - 6332 - 9843
            </span>
          </p>

          <p>
            <span className="text-[#8A9099]">Card Name:</span>{" "}
            <span className="text-[#3F434A]">{customer?.name}</span>
          </p>

          <p>
            <span className="text-[#8A9099]">Card Expiry:</span>{" "}
            <span className="text-[#3F434A]">12/2023</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2">
        <button className="h-[44px] rounded-xl border border-[#E5E7EB] bg-white px-8 text-[15px] font-medium text-[#3F434A] transition hover:bg-[#F8F9FB]">
          Previous
        </button>

        <button className="h-[44px] rounded-lg bg-[#22963F] px-10 text-[15px] font-medium text-white transition hover:bg-[#1E8538]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmissionTab;