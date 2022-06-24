import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./imageSlider.css";
// Components
import SidebarMain from "../common/SidebarMain";
import ImageSliderWindow from "./ImageSliderWindow";

const ImageSliderMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <ImageSliderWindow />
      </div>
    </div>
  );
};

export default ImageSliderMain;
