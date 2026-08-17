import { Heart, ShoppingCart } from "lucide-react";

const AddToCart = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Add to Cart */}
      <button className="flex h-14 line-through flex-1 items-center justify-center gap-3 rounded-xl bg-[#22963F] px-8 text-[15px] font-medium text-white transition duration-200 hover:bg-[#1C8237] cursor-pointer">
        <ShoppingCart size={20} />
        <span>Add to Cart</span>
      </button>

      {/* Wishlist */}
      <button className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#E6EBF1] bg-[#45C9B2] text-white transition duration-200 hover:border-[#22963F] hover:text-[#22963F] cursor-pointer">
        <Heart size={22} />
      </button>
    </div>
  );
};

export default AddToCart;