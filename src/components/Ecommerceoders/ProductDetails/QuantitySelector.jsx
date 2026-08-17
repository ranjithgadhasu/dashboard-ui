import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex h-12 items-center overflow-hidden rounded-xl border border-[#E6EBF1] bg-white">
      <button
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        className="flex h-full w-12 items-center justify-center hover:bg-[#F5F7FA]"
      >
        <Minus size={16} />
      </button>

      <div className="flex h-full w-12 items-center justify-center border-x border-[#E6EBF1] text-[16px] font-medium">
        {quantity}
      </div>

      <button
        onClick={() => setQuantity(quantity + 1)}
        className="flex h-full w-12 items-center justify-center hover:bg-[#F5F7FA]"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;