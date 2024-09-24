import React from "react";
import "./image-side-bar.css"
const ImageSideBar = ({ images }) => {
  return (
    <div className="d-flex flex-column justify-content-between px-2 gap-2 "style={{height:"100%"}}>
      {/* İlk resim en üstte */}
      
      <img src={images[0].src} className="rounded-4 position-relative object-fit-cover img-1" style={{height:"100%"}}/>

      {/* Ortadaki resim flex-grow ile boşluğu doldurur */}
      <img src={images[1].src} className="rounded-4 position-relative object-fit-cover img-2"style={{height:"100%"}} />

      {/* Son resim en altta */}
      <img src={images[2].src} className="rounded-4 position-relative  object-fit-cover img-3" style={{height:"100%"}}/>
    </div>
  );
};

export default ImageSideBar;