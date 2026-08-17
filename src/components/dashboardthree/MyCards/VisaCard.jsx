import VisaBg from "../../../assets/images/VisaBg.png";

const VisaCard = () => {
  return (
    <div>

      {/* Card */}

      <div className="relative overflow-hidden rounded-[20px]">

        {/* Background Image */}

        <img
          src={VisaBg}
          alt="Visa Card"
          className="h-[265px] w-full object-cover"
        />

        {/* Content */}

        <div className="absolute inset-0 flex flex-col justify-between p-8">

          {/* Top */}

          <div className="flex justify-between">

            <div>

              <p className="text-[14px] font-normal text-white/90">
                Current Balance
              </p>

              <h2 className="mt-2 text-[28px] font-semibold text-white">
                80,700.00
              </h2>

            </div>

            <h3 className="text-[25px] font-bold italic text-white">
              VISA
            </h3>

          </div>

          {/* Bottom */}

          <div className="flex items-end justify-between">

            <div>

              <h4 className="text-[14px] font-medium text-white">
                Felecia Brown
              </h4>

              <p className="mt-2 text-[14px] tracking-[2px] font-normal text-white">
                •••• •••• •••• 8854
              </p>

            </div>

            <span className="text-[14px] font-normal text-white">
              12/19
            </span>

          </div>

        </div>

      </div>

      {/* Divider */}

      <hr className="my-10 border-[#EEF2F6]" />

      {/* Button */}

      <button className="flex h-[40px] w-full items-center justify-center rounded-[18px] bg-[#EEF9F1] text-[15px] font-medium text-[#21943A] cursor-pointer">
        + Add Card
      </button>

    </div>
  );
};

export default VisaCard;