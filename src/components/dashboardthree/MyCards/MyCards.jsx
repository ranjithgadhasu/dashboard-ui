import VisaCard from "./VisaCard";
import CardDetails from "./CardDetails";
import Mastercard from "../../../assets/images/Mastercard.png"
import { IoIosArrowDown } from "react-icons/io";
import "./mycards.css"


const MyCards = () => {
  return (
    <div className="rounded-[20px] border border-[#E9EEF5] bg-white p-8 my-cards-card">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between my-cards-header">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          My Cards
        </h2>

        {/* Card Selector */}

        <button className="flex h-[52px] items-center gap-3 rounded-[16px] border border-[#E9EEF5] bg-white px-5 shadow-sm my-cards-selector">

          <img
            src="/mastercard.png"
            alt=""
            className="h-7"
          />

          <span className="flex gap-2.5 text-[14px] font-normal text-[#3F434A]">
           <img src={Mastercard} alt="" /> 5880 **** **** 8854
          </span>

         <IoIosArrowDown  className="text-[#8A9099] cursor-pointer"/>


        </button>

      </div>

      {/* Body */}

      <div className="grid grid-cols-2 gap-10 my-cards-body">

        <VisaCard />

        <CardDetails />

      </div>

    </div>
  );
};

export default MyCards;