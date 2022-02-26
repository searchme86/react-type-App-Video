import React from 'react';
import '../../Assets/Styles/Img.css';

function ImageBox(props: { src: string; alt: string }) {
  return (
    <div className="image-box">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default ImageBox;
