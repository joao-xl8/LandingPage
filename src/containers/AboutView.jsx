import React from "react";

import EcoCard from "../components/EcoCard";
import CardAbout from "../components/CardAbout";

import { colors, DATA } from "../helper/index";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";

const AboutView = () => {
    const { width } = useWindowDimensions();
    return (
      <div
        id="aboutView"
        style={{
          display: "flex",
          maxWidth: width,
          alignItems: "center",
          flexDirection: "column",
          padding: isMobile ? 0 : 100,
          paddingBottom: 10,
        }}
      >
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: colors.secundary.light,
            fontSize: isMobile ? 10 : 18,
            fontWeight: 600,
            letterSpacing: 1.5,
            lineHeight: isMobile ? "19px" : "21px",
            marginBottom: 10,
          }}
        >
          {DATA.aboutData.subTitle}
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
          {DATA.aboutData.title}
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
          {DATA.aboutData.cards.map((card, index) => {
            return (
              <CardAbout
                key={index}
                title={card.title}
                text={card.text}
                image={card.image}
              />
            );
          })}
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
            marginTop: 50,
          }}
        >
          {DATA.aboutData.title2}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 10,
          }}
        >
          {DATA.aboutData.ecoCards.map((brand, index) => {
            return <EcoCard key={index} image={brand.image} text={brand.title} />;
          })}
        </div>
      </div>
    );
  };

  export default AboutView;