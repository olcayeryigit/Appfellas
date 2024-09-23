import React from "react";


const ImageSideBar = ({ images }) => {
  return (
    <div className="d-flex flex-column justify-content-between px-2">
      {images.map((item, index) => (
        <img key={index} src={item.src}  className="rounded-4 mx-1 my-2 w-100"/>
      ))}
    </div>
  );
};

export default ImageSideBar;
