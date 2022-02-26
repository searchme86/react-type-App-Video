import React, { useRef, useState } from 'react';
import '../Assets/Styles/Img.css';
import ImageBox from '../Components/ImgUploadFunc/ImageBox';

function ImgSlider() {
  const InputRef = useRef<HTMLInputElement>(null);
  const [imgList, setImgList] = useState<string[]>([]);

  const clickBtn = () => {
    InputRef.current?.click();
  };
  const checkItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.[0]) {
      const file = event.currentTarget.files?.[0];
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (event) => {
        setImgList((prev) => [...prev, event.target?.result as string]);
      };
    }
  };

  console.log('img-list', imgList);

  return (
    <div className="container">
      <div className={'gallary-box' + (imgList.length > 0 && ' row')}>
        {imgList.length === 0 && (
          <div className="text-center">
            이미지가 없습니다
            <br />
            이미지를 추가해주세요
          </div>
        )}
        <div className="plus-box" onClick={clickBtn}>
          +
        </div>
      </div>
      <input type="file" ref={InputRef} onChange={checkItem} />
      {imgList.map((el, idx) => (
        <ImageBox key={idx} src={el} alt={'good'} />
      ))}
    </div>
  );
}

export default ImgSlider;
