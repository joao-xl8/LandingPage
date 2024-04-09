import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";
import { SmoothScrollTo, colors, DATA } from "../helper/index";
import TypeWriterEffect from "react-typewriter-effect";

//HOME
import HomeBanner from "../assets/imgs/HomeBanner.png";

//STORES
import GoogleCinza from "../assets/imgs/Lojas/GoogleCinza.png";
import AppleCinza from "../assets/imgs/Lojas/AppleCinza.png";

//ASSETS
import ScrollButton from "../assets/imgs/ScrollButton.png";

const FirstView = () => {
    const isMobileQuery = useMediaQuery("(max-width: 1080px)");
    const { width, height } = useWindowDimensions();
    return (
      <div
        id="firstView"
        style={{
          display: !isMobileQuery ? "flex" : null,
          maxWidth: width,
          padding: isMobile ? 10 : 100,
          paddingTop: isMobile ? 10 : 80,
          paddingBottom: isMobile ? 40 : 80,
        }}
      >
        {!isMobileQuery && (
          <img
            onClick={() => {
              SmoothScrollTo("#aboutView");
            }}
            src={ScrollButton}
            style={{
              zIndex: 1,
              cursor: "pointer",
              display: "flex",
              position: "absolute",
              left: width / 2 - 25,
              bottom: height / 20,
              width: 50,
              height: 50,
              borderRadius: 100,
            }}
          />
        )}
  
        <div
          style={{
            width: !isMobileQuery ? "50%" : "100%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            minHeight: isMobile ? 0 : 700,
            paddingTop: isMobile ? 30 : isMobileQuery ? 30 : 10,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              color: colors.text.highlighted,
              fontSize: isMobile ? 14 : 20,
              fontWeight: "bold",
              textAlign: "flex-start",
              letterSpacing: 3,
              lineHeight: isMobile ? "22px" : "26px",
              marginBottom: isMobile ? 0 : 0,
              marginLeft:5,
            }}
          >
            {DATA.firstScreenData.subTitle1}
          </div>
          <TypeWriterEffect
            textStyle={{
              width: "100%",
              color: colors.text.blue,
              fontSize: isMobile ? 20 : 46,
              fontWeight: "bold",
              textAlign: "flex-start",
              letterSpacing: 0.15,
              lineHeight: isMobile ? "20px" : "53px",
              marginBottom: 20,
            }}
            startDelay={200}
            hideCursorAfterText
            cursorColor={colors.text.highlighted}
            text={DATA.firstScreenData.title1}
            typeSpeed={25}
          />
          <div
            style={{
              width: "100%",
              color: colors.text.lightGrey,
              fontSize: isMobile ? 14 : 20,
              fontWeight: 400,
              textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: isMobile ? "15px" : "26px",
              marginBottom: 20,
            }}
          >
            O XL8 te ajuda a encontrar as melhores companhias e ofertas para
            proporcionar{" "}
            <div
              style={{
                display: "inline",
                color: colors.text.grey,
                fontWeight: "bold",
              }}
            >
              experiências inesquecíveis
            </div>{" "}
            e dar vida aos seus sonhos de viagem.
          </div>
          <div
            style={{
              width: "100%",
              marginBottom: 10,
              color: colors.text.highlighted,
              fontSize: isMobile ? 20 : 30,
              fontWeight: "bold",
              textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: isMobile ? "15px" : "26px",
            }}
          >
            {DATA.firstScreenData.title2}
          </div>
          <div
            style={{
              width: "100%",
              color: colors.text.lightGrey,
              fontSize: isMobile ? 14 : 20,
              fontWeight: 400,
              textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: isMobile ? "15px" : "26px",
              marginBottom: 30,
            }}
          >
            {DATA.firstScreenData.subTitle3}
          </div>
          <TypeWriterEffect
            textStyle={{
              color: colors.text.lightGrey,
              fontSize: isMobile ? 25 : 32,
              fontWeight: 500,
              textAlign: "center",
              letterSpacing: 1.2,
              marginBottom: 20,
              lineHeight: isMobile ? "37px" : "53px",
            }}
            startDelay={2400}
            cursorColor={colors.text.lightGrey}
            text={DATA.firstScreenData.title3}
            typeSpeed={25}
          />
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              maxWidth: 420,
            }}
          >
            <div
              style={{
                backgroundColor: colors.background.primary,
                width: 200,
                height: 50,
                cursor: "pointer",
              }}
            >
              <img 
              onClick={(e) => {
                e.preventDefault();
                window.location.assign('https://play.google.com/store/apps/details?id=br.tur.pinguim')
              }}
                src={GoogleCinza}
                style={{
                  height: 50,
                }}
              />
            </div>
            <div
              style={{
                backgroundColor: colors.background.primary,
                width: 200,
                height: 50,
                cursor: "pointer",
                marginTop: isMobile ? 10 : 0,
              }}
            >
              <img
              onClick={(e) => {
                e.preventDefault();
                window.location.assign('https://apps.apple.com/br/app/pinguim-tudo-para-sua-viagem/id1437647772')
              }}
                src={AppleCinza}
                style={{
                  height: 50,
                }}
              />
            </div>
          </div>
        </div>
        {!isMobileQuery && (
          <img
            src={HomeBanner}
            style={{
              position: "absolute",
              right: 0,
              maxWidth: 1000,
              width: "40%",
            }}
          />
        )}
      </div>
    );
  };

export default FirstView;
