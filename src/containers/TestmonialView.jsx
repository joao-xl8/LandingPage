import React from "react";

import CardFeedback from "../components/CardFeedback";

import { colors, DATA } from "../helper/index";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";

const TestmonialView = () => {
    const { width } = useWindowDimensions();
    return (
      <div
        id="testmonialView"
        style={{
          padding: isMobile ? 0 : 100,
          paddingBottom: 10,
          paddingTop: 10,
          display: "flex",
          maxWidth: width,
          alignItems: "center",
          flexDirection: "column",
          background:
            "linear-gradient(rgba(135, 135, 202, 0.4), rgba(186, 102, 178, 0.4))",
        }}
      >
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: colors.text.lightGrey,
            fontSize: isMobile ? 10 : 18,
            fontWeight: 600,
            letterSpacing: 1.5,
            lineHeight: isMobile ? "19px" : "21px",
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          {DATA.testmonialData.subTitle}
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: colors.text.blue,
            fontSize: isMobile ? 38 : 46,
            fontWeight: "bold",
            letterSpacing: 0.012,
            lineHeight: isMobile ? "45px" : "54px",
            marginBottom: 50,
          }}
        >
          {DATA.testmonialData.title}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {DATA.testmonialData.cards.map((card, index) => {
            return (
              <CardFeedback
                key={index}
                title={card.title}
                text={card.text}
                image={card.image}
                subTitle={card.subTitle}
              />
            );
          })}
        </div>
      </div>
    );
  };

export default TestmonialView;