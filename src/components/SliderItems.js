import * as React from "react";
import sliderImg from "../components/sliderImg.png";

const ItemSlider = () => {
  return (
    <div style={{ marginRight: "14px", marginLeft: "14px" }}>
      <div>
        <img
          src={sliderImg}
          alt="SliderItems"
          style={{ width: "327px", height: "195px" }}
        />{" "}
      </div>
      <div
        style={{
          marginTop: "12px",
          width: "250px",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "24px",
          fontFamily: "Inter",
          color: "#090A0A",
        }}
      >
        A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
      </div>
      <div
        style={{
          color: "#6C7072",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
        }}
      >
        1h ago · by Troy Corison
      </div>
    </div>
  );
};

export default ItemSlider;
