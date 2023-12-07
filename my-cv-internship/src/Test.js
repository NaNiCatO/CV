import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      try {
        axios.get('http://localhost:5000/images', { crossdomain: true })
        .then((response) => {
            setImages(response.data.images);
        })
        
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);



  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.imageUrl} alt={image.caption} />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
