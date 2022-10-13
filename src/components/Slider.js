import React from "react";
import SliderItems from "./SliderItems.js";
import "./styles/Slider.css";
import leftAction from "./img/LeftActionable.png";
import RightAction from "./img/RightActionable.png";

const Slider = () => {
  const btnpressprev = () => {
    const item = document.querySelector(".items-container");
    let width = item.clientWidth;
    item.scrollLeft = item.scrollLeft - width;
  };

  const btnpressnext = () => {
    const item = document.querySelector(".items-container");
    let width = item.clientWidth;
    item.scrollLeft = item.scrollLeft + width;
  };
  return (
    <div className="d-flex align-items-center" style={{ gridGap: "50px" }}>
      <div className="">
        <button className="pre-btn" onClick={btnpressprev}>
          <img src={leftAction} alt="leftAction" width="48px" height="48px" />
        </button>
      </div>
      <div className="items-container">
        <SliderItems />
        <SliderItems />
        <SliderItems />
        <SliderItems />
        <SliderItems />
        <SliderItems />
        <SliderItems />
        <SliderItems />
        <SliderItems />
      </div>
      <div className="">
        <button className="next-btn" onClick={btnpressnext}>
          <img src={RightAction} alt="leftAction" width="48px" height="48px" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
