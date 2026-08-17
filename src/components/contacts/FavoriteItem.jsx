const FavoriteItem = ({ favorite }) => {
  return (
    <div className="flex items-center gap-3 rounded-lg p-2 transition hover:bg-[#F8F9FB] cursor-pointer">
      {/* Avatar */}
      <img
        src={favorite.avatar}
        alt={favorite.name}
        className="h-12 w-12 rounded-full object-cover"
      />

      {/* Details */}
      <div className="flex-1">
        <h4 className="text-[14px] font-medium text-[#3F4149]">
          {favorite.name}
        </h4>

        <p className="mt-0.5 text-[12px] text-[#8E95A5]">
          {favorite.role}
        </p>
      </div>
    </div>
  );
};

export default FavoriteItem;