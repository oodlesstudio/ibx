import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/ImageSlider/imageSlider.css";
// Components
import Header from "../components/common/Header";
import ImageSliderMain from "../components/ImageSlider/ImageSliderMain";
import Footer from "../components/common/Footer";

const ImageSlider = () => {
  return (
    <div>
      <Header />
      <ImageSliderMain />
      <Footer />
    </div>
  );
};

export default ImageSlider;
