import React from "react";
import { colors, DATA } from "../helper/index";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";
import useMediaQuery from "../hooks/useMediaQuery";
import BearCarousel, { BearSlideItem } from "bear-react-carousel";
import "bear-react-carousel/dist/index.css";

const bearSlideItemData = DATA.midiaData.cards.map((row) => {
    return {
      key: row.id,
      children: (
        <BearSlideItem
          style={
            {
              // objectFit: "contain",
            }
          }
          imageUrl={row.image}
          imageSize={"100%"}
        />
      ),
    };
  });
  
  const MediaView = () => {
    const { width } = useWindowDimensions();
    const isMobileQuerySmall = useMediaQuery("(max-width: 600px)");
    const isMobileQuery = useMediaQuery("(max-width: 1080px)");
    const isMobileQueryWide = useMediaQuery("(min-width: 2300px)");
    return (
      <div
        id="mediaView"
        style={{
          maxWidth: width,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
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
          {DATA.midiaData.subTitle}
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: colors.text.blue,
            fontSize: isMobileQuery ? 30 : 38,
            fontWeight: "bold",
            letterSpacing: 0.012,
            marginBottom: 30,
            lineHeight: isMobileQuery ? "45px" : "54px",
          }}
        >
          {DATA.midiaData.title}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 100,
          }}
        >
          <BearCarousel
            slidesPerView={
              isMobileQuery
                ? isMobileQuerySmall
                  ? 2
                  : 4
                : isMobileQueryWide
                ? 10
                : 6
            }
            isEnableLoop
            isEnableNavButton
            isEnablePagination
            isEnableAutoPlay
            data={bearSlideItemData}
            staticHeight="300px"
            style={{
              width: "90%",
              objectFit: "contain",
              backgroundColor: colors.background.primary,
            }}
          />
        </div>
      </div>
    );
  };

  export default MediaView;