import { useEffect, useState } from "react";

const MIN = 500;
const MAX = 5500;

const PriceSlider = ({ value, onChange }) => {
  const [minPrice, setMinPrice] = useState(value?.min ?? MIN);
  const [maxPrice, setMaxPrice] = useState(value?.max ?? MAX);

  useEffect(() => {
    onChange({
      min: minPrice,
      max: maxPrice,
    });
  }, [minPrice, maxPrice, onChange]);

  const minPercent = ((minPrice - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxPrice - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="space-y-5">
      <label className="block text-[15px] font-medium text-[#8A9099]">
        Price
      </label>

      <div className="relative h-10">

        {/* Background Track */}

        <div className="absolute top-4 h-[4px] w-full rounded-full bg-[#E8EDF3]" />

        {/* Active Track */}

        <div
          className="absolute top-4 h-[4px] rounded-full bg-[#22A447]"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* Minimum Slider */}

        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minPrice}
          onChange={(e) =>
            setMinPrice(
              Math.min(Number(e.target.value), maxPrice - 100)
            )
          }
          className="pointer-events-none absolute h-10 w-full appearance-none bg-transparent
          [&::-webkit-slider-thumb]:pointer-events-auto
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border-4
          [&::-webkit-slider-thumb]:border-[#22A447]
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:shadow-md"
        />

        {/* Maximum Slider */}

        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(
              Math.max(Number(e.target.value), minPrice + 100)
            )
          }
          className="pointer-events-none absolute h-10 w-full appearance-none bg-transparent
          [&::-webkit-slider-thumb]:pointer-events-auto
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border-4
          [&::-webkit-slider-thumb]:border-[#22A447]
          [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:shadow-md"
        />

      </div>

      <div className="flex justify-between text-[16px] font-medium text-[#3F434A]">
        <span>${minPrice.toLocaleString()}</span>
        <span>${maxPrice.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PriceSlider;