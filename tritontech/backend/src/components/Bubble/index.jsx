import React from "react";

function Bubble({ children, bgColor = "black" }) {
  return (
    <div
      style={{
        background: bgColor,
        height: "42px",
        width: "51px",
        borderRadius: "55% 45% 70% 30%/65% 44% 56% 35%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          "0 12px 28px 0 rgb(0 0 0 / 20%), 0 2px 4px 0 rgb(0 0 0 / 10%), inset 0 0 0 1px hsl(0deg 0% 100% / 5%);",
      }}
    >
      {children}
    </div>
  );
}

export default Bubble;
