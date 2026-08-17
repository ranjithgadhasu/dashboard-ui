const ThumbnailList = ({ images, selectedImage, onSelect }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(image)}
          className={`flex h-[88px] w-[88px] bg-[#f0f0f0] items-center justify-center overflow-hidden rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
            selectedImage === image
              ? "border-none"
              : "border-[#E8EDF3] hover:border-[#C7D2E0]"
          }`}
        >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="h-[72px] w-[72px] object-contain"
          />
        </button>
      ))}
    </div>
  );
};

export default ThumbnailList;