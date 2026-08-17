import { useState } from "react";
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

import { photos } from "./myProfileData";
import "./PhotosGrid.css";

const PhotosGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePrevious = () => {
    if (!selectedPhoto) return;

    const currentIndex = photos.findIndex(
      (photo) => photo.id === selectedPhoto.id,
    );

    const previousIndex =
      currentIndex === 0 ? photos.length - 1 : currentIndex - 1;

    setSelectedPhoto(photos[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;

    const currentIndex = photos.findIndex(
      (photo) => photo.id === selectedPhoto.id,
    );

    const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;

    setSelectedPhoto(photos[nextIndex]);
  };

  return (
    <>
      <div className="photos-grid-card">
        <div className="photos-grid-header">
          <h2>Photos</h2>
        </div>

        {photos.length > 0 ? (
          <div className="photos-grid">
            {photos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="photo-item"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="photo-image"
                />

                <span className="photo-overlay">
                  <ImageIcon size={18} />
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="photos-empty">
            <div className="photos-empty-icon">
              <ImageIcon size={18} />
            </div>

            <p>No photos yet</p>

            <span>Your uploaded photos will appear here.</span>
          </div>
        )}
      </div>

      {selectedPhoto && (
        <div className="photo-lightbox" onClick={() => setSelectedPhoto(null)}>
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="photo-lightbox-close"
          >
            <X size={18} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handlePrevious();
            }}
            className="photo-lightbox-prev"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="photo-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="photo-lightbox-image"
            />

            <div className="photo-lightbox-info">
              <div>
                <h3>{selectedPhoto.title}</h3>

                <p>
                  Photo{" "}
                  {photos.findIndex((photo) => photo.id === selectedPhoto.id) +
                    1}{" "}
                  of {photos.length}
                </p>
              </div>

              <button type="button" className="photo-lightbox-more">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }}
            className="photo-lightbox-next"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  );
};

export default PhotosGrid;
