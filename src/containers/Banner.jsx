import React from "react";
import { colors, DATA } from "../helper/index";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";
import useMediaQuery from "../hooks/useMediaQuery";
//Lojas
import AppleBranco from "../assets/imgs/Lojas/AppleBranco.png";
import GoogleBranco from "../assets/imgs/Lojas/GoogleBranco.png";
//BANNER
import Banner from "../assets/imgs/People.png";

const BannerView = () => {
    const { width } = useWindowDimensions();
    const isMobileQuery = useMediaQuery("(max-width: 1080px)");
    return (
      <div
        id="bannerView"
        style={{
          padding: isMobile ? 10 : 50,
          paddingBottom: isMobileQuery ? 50 : 0,
          maxWidth: width,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          background:
            "linear-gradient(rgba(135, 135, 202, 0.8), rgba(186, 102, 178, 0.8))",
          justifyContent: "center",
        }}
      >
        {isMobileQuery ? null : (
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <img
              src={Banner}
              style={{
                height: 600,
              }}
            ></img>
          </div>
        )}
        <div
          style={{
            width: isMobileQuery ? "100%" : "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: isMobileQuery ? "100%" : "80%",
              textAlign: "start",
              color: colors.text.blue,
              fontSize: isMobile ? 38 : 43,
              fontWeight: "bold",
              letterSpacing: 0.012,
              lineHeight: isMobile ? "45px" : "54px",
              marginBottom: 20,
            }}
          >
            {DATA.bannerData.title}
          </div>
          <div
            style={{
              width: isMobileQuery ? "100%" : "80%",
              color: colors.text.white,
              fontSize: 18,
              fontWeight: 400,
              textAlign: "start",
              letterSpacing: 0.5,
              lineHeight: "26px",
              marginBottom: 20,
            }}
          >
            {DATA.bannerData.text}
          </div>
          <div
            style={{
              width: isMobileQuery ? "100%" : "80%",
              textAlign: "start",
              color: colors.text.white,
              fontSize: 28,
              fontWeight: 400,
              textAlign: "start",
              letterSpacing: 1.2,
              lineHeight: "38px",
            }}
          >
            {DATA.bannerData.subTitle}
          </div>
          <div
            style={{
              width: isMobileQuery ? "100%" : "80%",
              display: "flex",
              flexDirection:isMobileQuery? 'column':  "row",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img
              onClick={(e) => {
                e.preventDefault();
                window.location.assign('https://play.google.com/store/apps/details?id=br.tur.pinguim')
              }}
              src={GoogleBranco}
              style={{
                cursor: "pointer",
                height: 43,
                padding: 10,
              }}
            />
            <img
             onClick={(e) => {
              e.preventDefault();
              window.location.assign('https://apps.apple.com/br/app/pinguim-tudo-para-sua-viagem/id1437647772')
            }}
              src={AppleBranco}
              style={{
                cursor: "pointer",
                height: 46,
                padding: 10,
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  export default BannerView;