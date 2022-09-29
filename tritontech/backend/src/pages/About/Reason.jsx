import React from "react";
import Bubble from "../../components/Bubble";
import { ImArrowRight2 } from "react-icons/im";

function Reason({ reasons }) {
  return (
    <div className="about-reason-container">
      {reasons.map((reason) => (
        <div className="about-reason">
          <div style={{ width: "40%" }} className="about-reasnt-item">
            <Bubble bgColor={reason.bgColor}>{reason.img}</Bubble>
          </div>

          <div style={{ width: "20%" }} className="about-reasnt-item ">
            <ImArrowRight2 />
          </div>
          <div style={{ width: "40%" }} className="about-reasnt-item">
            {reason.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reason;
