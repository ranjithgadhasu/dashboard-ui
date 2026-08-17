

const TimelinePostMedia = ({ post }) => {
  if (!post?.media) {
    return null;
  }

  const media = post.media;

  if (media.type === "gallery") {
    return (
      <div className="mt-[11px] ml-5 overflow-hidden rounded-[6px]">

        <div className="grid grid-cols-3 gap-[5px]">

          {media.images?.map((image, index) => (
            <div
              key={index}
              className="aspect-square h-[110px] w-[150px] overflow-hidden bg-[#f3f3f3]"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="h-[110px] w-[180px] transition duration-300 hover:scale-[1.03]"
              />
            </div>
          ))}

        </div>

      </div>
    );
  }

  if (media.type === "video") {
    return (
      <div className="mt-[11px] overflow-hidden rounded-[6px]">

        <div className="relative">

          <img
            src={media.image}
            alt={media.alt || "Video"}
            className="block max-h-[280px] w-full object-cover"
          />


          {/* Dark overlay */}

          <div className="absolute inset-0 bg-black/10" />


          {/* Play button */}

          <div className="absolute inset-0 flex items-center justify-center">

   

          </div>


          {/* Video duration */}

          {media.duration && (
            <span
              className="
                absolute
                bottom-[7px]
                right-[7px]
                rounded-[3px]
                bg-black/60
                px-[5px]
                py-[2px]
                text-[6px]
                font-medium
                text-white
              "
            >
              {media.duration}
            </span>
          )}

        </div>

      </div>
    );
  }


  return (
    <div className="mt-[11px] overflow-hidden rounded-[6px]">

      <img
        src={media.image}
        alt={media.alt || "Post image"}
        className="
          block
          max-h-[300px]
          w-full
          object-cover
        "
      />

    </div>
  );
};

export default TimelinePostMedia;