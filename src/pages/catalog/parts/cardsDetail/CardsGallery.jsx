import ImageGallery from 'react-image-gallery';

import { useState, useEffect } from 'react';

const CardsGallery = ({ getImages, typeOut }) => {

  const [images, setImages] = useState([]);
  useEffect(() => {
    const tempImages = [];

    if (typeOut === 'wordpress') {
      getImages?.map((item) => {
        tempImages.push({ original: item.full_image_url, thumbnail: item.thumbnail_image_url })
      });
    } else {
      getImages?.map((item) => {
        tempImages.push({ original: item.name, thumbnail: item.name })
      });
    }



    setImages(tempImages);
  }, [])

  return (
    <div>
      {images.length > 0 ? (
        <>
          <div className="cards-slider-desktop">
            <ImageGallery
              items={images}
              thumbnailPosition="right"
            />
          </div>
          <div className="cards-slider-mobile">
            <ImageGallery
              items={images}
              thumbnailPosition="bottom"
            />
          </div>
        </>
      ) : 'empty'}
    </div>
  )
}

export default CardsGallery;
