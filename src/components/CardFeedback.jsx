import React from "react";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";
import { colors } from "../helper/index";
import Fade from "react-reveal/Fade";
import StarRate from "../assets/imgs/StarRate.png";
import useMediaQuery from "../hooks/useMediaQuery";

const CardFeedback = ({ title, subTitle, text, image }) => {
    const { width } = useWindowDimensions();
    const isMobileQuery = useMediaQuery("(max-width: 1080px)");
    return (
      <Fade bottom>
        <div
          style={{
            display: "flex",
            minWidth: 270,
            maxWidth: 400,
            width: width * 0.8,
            backgroundColor: colors.background.primary,
            borderRadius: 12,
            flexDirection: "column",
            margin: 10,
            minHeight: 450,
          }}
        >
          <img
            src={image}
            alt="FeedbackCard"
            style={{
              objectFit: "contain",
              width: "100%",
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
            }}
          />
          <div
            style={{
              minHeight: 300,
            }}
          >
            <div
              style={{
                width: "55%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              {[...Array(5)].map((_, i) => {
                return (
                  <img
                    src={StarRate}
                    style={{
                      width: 25,
                      height: 25,
                      // backgroundColor: colors.primary.lightness,
                      borderRadius: 10,
                      marginLeft: 20,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  />
                );
              })}
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "start",
                marginLeft: 20,
                color: colors.text.blue,
                fontSize: isMobileQuery ? 20 : 26,
                fontWeight: "bold",
                letterSpacing: 1.2,
                lineHeight: isMobile ? "27px" : "33px",
              }}
            >
              {title}
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "start",
                marginLeft: 20,
                color: colors.text.grey,
                fontSize: isMobile ? 18 : 22,
                fontWeight: 500,
                lineHeight: isMobile ? "21px" : "25px",
              }}
            >
              {subTitle}
            </div>
            <div
              style={{
                width: "90%",
                textAlign: "start",
                paddingLeft: 20,
                paddingTop: 5,
                color: colors.text.lightGrey,
                fontSize: isMobile ? 14 : 17,
                fontWeight: 400,
                letterSpacing: 0.5,
                lineHeight: isMobile ? "19px" : "22px",
                padding: 10,
              }}
            >
              {text}
            </div>
          </div>
        </div>
      </Fade>
    );
  };

  export default CardFeedback;