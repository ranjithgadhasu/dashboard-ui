import { Plus } from "lucide-react";
import { useState } from "react";

import CreditCard from "./CreditCard";
import AddCardModal from "./AddCardModal"
import { cardsData } from "./cardsData";
import "./cards.css"

const Cards = () => {
  const [active, setActive] = useState(0);
  const [showAddCard, setShowAddCard] = useState(false);

  return (
    <div className="rounded-[20px] border-none border-[#E9EEF5] bg-white p-6 cards-sizes">

      {/* Header */}

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-[28px] font-medium text-[#3F434A]">
          Cards
        </h2>
<button
  onClick={() => setShowAddCard(true)}
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8FA] transition hover:bg-[#EEF2F6]"
>
  <Plus
    size={16}
    className="text-[#8A9099] cursor-pointer"
  />
</button>

      </div>

      {/* Cards */}

      <div className="relative h-[160px] overflow-hidden">

        {/* Active Card */}

        <div
          className="absolute left-0 top-0 z-20 cursor-pointer transition-all duration-300"
          onClick={() => setActive(active)}
        >
          <CreditCard card={cardsData[active]} />
        </div>

        {/* Next Card */}

        {cardsData.length > 1 && (
          <div
            className="absolute left-[380px] top-0 z-10 cursor-pointer opacity-55 transition-all duration-300"
            onClick={() =>
              setActive((active + 1) % cardsData.length)
            }
          >
            <CreditCard
              card={cardsData[(active + 1) % cardsData.length]}
            />
          </div>
        )}

      </div>

      {/* Indicators */}

      <div className="mt-5 flex items-center gap-2">

        {cardsData.map((_, index) => (

          <button
            key={index}
            onClick={() => setActive(index)}
            className={`transition-all duration-300 ${
              active === index
                ? "h-[5px] w-5 rounded-full bg-[#22963F]"
                : "h-[5px] w-[5px] rounded-full bg-[#D9DDE4]"
            }`}
          />

        ))}

      </div>
       {showAddCard && (
        <AddCardModal
          onClose={() => setShowAddCard(false)}
        />
      )}

    </div>
  );
};

export default Cards;