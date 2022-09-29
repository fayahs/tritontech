import React from "react";
import img2 from "../../images/3dobj2.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { Typography, Button } from "@material-ui/core";
import { loadFull } from "tsparticles";

import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

function Banner({ loading }) {
  return (
    <div className="banner">
      <div className="banner-img-container">
        <img src={img2} className="banner-img" />
      </div>
      <div className="banner-body">
        {/* <Typography
          component={"h5"}
          variant="h5"
          style={{
            textAlign: "center",
            marginBottom: "16px",
            color: "#007FFF",
            
          }}
        > */}
        <h2 className="banner-title">
          Drawing Your Dreams Your Digital Forms!
        </h2>
        {/* </Typography> */}

        <p className="banner-content">
          Visualizing your dreams in the form of digitalization is an
          interesting and meaningful thing. Dream scenes are more fantasy than
          real scenes, conversion of this dream into real is a challenging part.
          Triton Tech Labs takes up those challenges, by converting the dream
          scenes into smaller scene and recreate by applying process to make it
          happen into real world scenes. Architecting your dreams and making
          them happen in digitalized usage form is the success part of our team.
        </p>

        <div className="banner-footer">
          <Button
            style={{
              color: "white",
              background: "#007FFF",
            }}
            variant="link"
            href="#Contact"
          >
            Bussines Enquires <HiOutlineArrowNarrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
