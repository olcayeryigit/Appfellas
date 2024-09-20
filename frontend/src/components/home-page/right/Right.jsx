import React from "react";


const Right = ({ images }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-4">
      {images.map((item, index) => (
        <img key={index} src={item.src} width={230} className="rounded-4"/>
      ))}
    </div>
  );
};

export default Right;
