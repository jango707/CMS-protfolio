import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import { Gallery } from "react-grid-gallery";
import "react-image-lightbox/style.css";
import "./Gallery.css";

const GalleryComponent = ({ images: imagesRaw }) => {
  const images = imagesRaw.map((image, i) => {
    return { src: image, title: `Demo Showacse - ${++i}` };
  });

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Gallery
        images={images}
        enableImageSelection={false}
        onClick={handleClick}
        margin={10}
      />

      {!!currentImage && (
        <Lightbox
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
          mainSrc={currentImage.src}
          imageTitle={currentImage.title}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default GalleryComponent;
