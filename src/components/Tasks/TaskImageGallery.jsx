const TaskImageGallery = ({
  image,
  images = [],
}) => {
  // No images
  if (!image && images.length === 0) return null;

  // Single Image
  if (image) {
    return (
      <div className="mt-4 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt="Task"
          className="h-[180px] w-full rounded-2xl object-cover transition duration-300 hover:scale-105"
        />
      </div>
    );
  }

  // Multiple Images
  return (
    <div className="mt-4 grid grid-cols-3 gap-2">
      {images.map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl"
        >
          <img
            src={img}
            alt={`Task ${index + 1}`}
            className="h-24 w-full rounded-xl object-cover transition duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default TaskImageGallery;