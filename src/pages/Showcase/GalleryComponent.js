import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const GalleryComponent = ({ images }) => {
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
          backgroundColor: "#00000018",
          borderRadius: 5,
          padding: 20,
        }}
      >
        {images.map((image, i) => (
          <img
            onClick={() => handleClick(i)}
            style={{
              maxWidth: 300,
              maxHeight: 300,
              objectFit: "contain",
              borderRadius: 5,
              cursor: "pointer",
            }}
            key={i}
            src={image}
            alt={"showcase example"}
          />
        ))}
      </div>

      {!!currentImage && (
        <Lightbox
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
          mainSrc={currentImage}
          imageTitle={"Showcase Example " + index}
          mainSrcThumbnail={currentImage}
          nextSrc={nextImage}
          nextSrcThumbnail={nextImage}
          prevSrc={prevImage}
          prevSrcThumbnail={prevImage}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default GalleryComponent;
