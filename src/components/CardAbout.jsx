import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";
import { colors } from "../helper/index";
import Fade from "react-reveal/Fade";

const CardAbout = ({ title, text, image }) => {
    const isMobileQuery = useMediaQuery("(max-width: 1080px)");
    const { width } = useWindowDimensions();
    const AB_HEIGHT = isMobileQuery ? 1080 : 1080;
    return (
      <Fade bottom>
        <div
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            display: "flex",
            height: AB_HEIGHT * 0.5,
            minWidth: 270,
            maxWidth: 650,
            width: width * 0.25,
            backgroundColor: colors.background.secundary,
            borderWidth: 2,
            borderColor: colors.primary.lightness,
            borderStyle: "solid",
            borderRadius: 12,
            flexDirection: "column",
            margin: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              textAlign: "center",
              color: colors.text.blue,
              fontSize: isMobile ? 20 : 23,
              fontWeight: "bold",
              letterSpacing: 0.05,
              lineHeight: isMobile ? "24px" : "29px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: "80%",
              textAlign: "center",
              color: colors.text.grey,
              fontSize: isMobile ? 16 : 20,
              fontWeight: 400,
              letterSpacing: 0.05,
              lineHeight: isMobile ? "22px" : "26px",
            }}
          >
            {text}
          </div>
          <img
            src={image}
            alt="about"
            style={{
              width: "auto",
              maxWidth: "100%",
              height: "60%",
            }}
          />
        </div>
      </Fade>
    );
  };

  export default CardAbout;