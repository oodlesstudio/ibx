import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components

import ImageSlider from "../pages/ImageSlider";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageSlider />} />
        <Route path="/master/image-slider" element={<ImageSlider />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
