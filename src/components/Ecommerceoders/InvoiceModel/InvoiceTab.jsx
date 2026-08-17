import ExportDropdown from "../OrderDetails/ExportDropdown";
import ProductTable from "../Productsmodel/ProductTable";
import invoiceData from "./invoiceData"
import "./invoice.css"

const InvoiceTab = () => {
  return (
    <div className="px-8 py-2 invoice-tab">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between invoice-header">
        <h2 className="text-[28px] font-medium text-[#3F434A] invoice-title">
          Invoice
        </h2>

        <div className="invoice-export">
          <ExportDropdown />
        </div>
      </div>

      {/* Invoice Information */}
      <div className="mb-8 flex items-center justify-between invoice-information">
        {/* Left */}
        <div className="flex items-center gap-6 invoice-information-left">
          {/* Invoice Card */}
          <div className="flex h-[160px] w-[150px] flex-col items-center justify-center rounded bg-[#FF6B6B] text-white invoice-card">
            <span className="text-[20px] font-bold tracking-wide uppercase invoice-card-title">
              Invoice
            </span>

            <span className="mt-2 text-[18px] font-normal invoice-number">
              #{invoiceData.invoiceNo}
            </span>
          </div>
          {/* Company */}
          <div className="w-[254px] h-[105px] mt-15 invoice-company">
            <h3 className="mb-0 text-[14px] font-normal text-[#3F434A]">
              {invoiceData.company.name}
            </h3>

            <p className="text-[14px] leading-5 text-[#8A9099]">
              {invoiceData.company.address}
              <br />
              {invoiceData.company.phone}
              <br />
              {invoiceData.company.email}
              <br />
              {invoiceData.company.website}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="text-right invoice-customer">
          <p className="mb-4 text-[14px] text-[#8A9099] invoice-date">
            {invoiceData.date}
          </p>

          <div className="flex items-center justify-end gap-3 invoice-customer-info">
            <img
              src={invoiceData.customer.logo}
              alt={invoiceData.customer.name}
              className="h-10 w-10 rounded-full object-cover invoice-customer-logo"
            />

            <span className="text-[18px] font-medium text-[#3F434A] invoice-customer-name">
              {invoiceData.customer.name}
            </span>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="overflow-hidden  rounded-xl border-b-2 border-[#EEF2F6] invoice-products">
        <ProductTable products={invoiceData.products} />
      </div>

      {/* Summary */}
      <div className="mt-5 flex justify-end invoice-summary">
        <div className="w-[260px] space-y-3 invoice-summary-content">
          <div className="flex justify-between text-[14px]">
            <span className="uppercase text-[15px] font-medium text-[#8A9099]">
              Subtotal
            </span>

            <span className="text-[#3F434A] text-[14px] font-medium">
              {invoiceData.subtotal}
            </span>
          </div>

          <div className="flex justify-between text-[14px]">
            <span className="uppercase text-[#8A9099]">
              Tax(20%)
            </span>

            <span className="text-[#3F434A]">
              {invoiceData.tax}
            </span>
          </div>

          <div className="flex justify-between text-[14px]">
            <span className="uppercase text-[#8A9099]">
              Discount
            </span>

            <span className="text-[#3F434A]">
              {invoiceData.discount}
            </span>
          </div>

          <div className="border-none border-[#EEF2F6] pt-5">
            <div className="flex justify-between">
              <span className="text-[15px] font-medium uppercase text-[#3F434A]">
                Total
              </span>

              <span className="text-[15px] font-medium text-[#3F434A]">
                {invoiceData.total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTab;