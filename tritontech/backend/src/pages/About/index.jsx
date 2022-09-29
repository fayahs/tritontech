import React from "react";
import AboutImg from "../../images/img-about-01.png";
import "./Style.css";
import { Typography } from "@material-ui/core";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BiBasketball } from "react-icons/bi";
import { ImArrowRight2 } from "react-icons/im";
import { FaDigitalOcean } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import Bubble from "../../components/Bubble";
import Reason from "./Reason";

const reasons = [
  {
    bgColor: "rgb(5, 92, 157)",
    text: "Technology",
    img: <BiBasketball size={28} color="#ffffff" />,
  },
  {
    bgColor: "rgb(89, 152, 26)",
    text: "Digitalization",
    img: <FaDigitalOcean size={28} color="#ffffff" />,
  },
  {
    bgColor: "rgb(255, 184, 0)",
    text: "Friendly Work Culture",
    img: <MdHealthAndSafety size={28} color="#ffffff" />,
  },
];

function About() {
  return (
    <div className="about">
      <div className="about-img-container">
        <img src={AboutImg} alt="" className="about-img" />
      </div>
      <div className="about-body">
        <div
          className="About-content-hr-attributes-imgs"
          style={{ background: "#ffffff" }}
        >
          <h2 className="about-title">Who We Are?</h2>
        </div>

        <p className="about-content">
          Triton Tech Labs, a digital technology expert, enables the
          transformation of your business into a digital product and cloud
          solution. We use right-fit technology to streamline the existing
          business platform to a modern business platform to suit the dynamic
          market and automate everyday activities by providing customized
          digital solutions.
        </p>

        <div className="About-header3">
          <div
            className="About-header3-contents"
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "15px",
            }}
          >
            <h2 className="about-title">Reason</h2>
            &nbsp; &nbsp;
            <p className="about-content">
              why We might be the right fit for you
            </p>
          </div>

          {/* <div
            className="About-icon"
            style={{
              width: "30%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              fontSize: "25px",
              color: "grey",
            }}
          >
            <BsArrowDownCircleFill style={{ marginLeft: "10px" }} />
          </div> */}
        </div>
        <Reason reasons={reasons} />
      </div>
    </div>
  );
}

export default About;
