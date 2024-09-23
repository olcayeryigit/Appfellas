import React from "react";


const ImageSideBar = ({ images }) => {
  return (
    <div className="d-flex flex-column justify-content-center  gap-3">
      {images.map((item, index) => (
        <img key={index} src={item.src} width="20px"  className="rounded-4"/>
      ))}
    </div>
  );
};

export default ImageSideBar;
