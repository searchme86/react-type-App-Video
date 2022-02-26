import React from 'react';
import '../Assets/Styles/Img.css';
import ImageBox from '../Components/ImgUploadFunc/ImageBox';

function ImgSlider() {
  return (
    <div className="container">
      <div className="initial-box">
        <div className="text-center">
          이미지가 없습니다
          <br />
          이미지를 추가해주세요
        </div>
        <div className="plus-box">+</div>
      </div>
      <div className="image-holder">
        <ImageBox
          src="https://media.vlpt.us/images/cjy0029/post/a67c40fa-bfb2-4aea-b9ba-440a3994518c/reactquery.png"
          alt="ss"
        />
        <ImageBox
          src="https://media.vlpt.us/images/cjy0029/post/a67c40fa-bfb2-4aea-b9ba-440a3994518c/reactquery.png"
          alt="ss"
        />
        <ImageBox
          src="https://media.vlpt.us/images/cjy0029/post/a67c40fa-bfb2-4aea-b9ba-440a3994518c/reactquery.png"
          alt="ss"
        />
        <ImageBox
          src="https://media.vlpt.us/images/cjy0029/post/a67c40fa-bfb2-4aea-b9ba-440a3994518c/reactquery.png"
          alt="ss"
        />
        <ImageBox
          src="https://media.vlpt.us/images/cjy0029/post/a67c40fa-bfb2-4aea-b9ba-440a3994518c/reactquery.png"
          alt="ss"
        />
      </div>
    </div>
  );
}

export default ImgSlider;