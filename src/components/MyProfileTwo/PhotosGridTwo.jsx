import { photos } from "./myProfileTwoData";

const PhotosGridTwo = () => {
  return (
    <div className="rounded-[4px] border border-[#e7e7e7] bg-white px-3 py-3">

      <h3 className="text-[7px] font-semibold uppercase text-[#555]">
        Photos
      </h3>


      <div className="mt-3 grid grid-cols-3 gap-[4px]">

        {photos.map((photo) => (

          <img
            key={photo.id}
            src={photo.image}
            alt={photo.title}
            className="aspect-square w-full rounded-[3px] object-cover"
          />

        ))}

      </div>

    </div>
  );
};

export default PhotosGridTwo;