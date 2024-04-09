import React from "react";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";
import { colors, DATA } from "../helper/index";
import useMediaQuery from "../hooks/useMediaQuery";
import {
  Link,
} from "react-router-dom";
//B2B
import B2B from "../assets/imgs/B2B.png";
const CompanyView = () => {
    const { width } = useWindowDimensions();
    const isMobileQuery = useMediaQuery("(max-width: 1080px)");
    return (
      <div
        id="companyView"
        style={{
          display: "flex",
          maxWidth: width,
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          marginBottom: 100,
          marginTop: 50,
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              textAlign: "start",
              color: colors.secundary.light,
              fontSize: isMobile ? 10 : 18,
              fontWeight: 600,
              letterSpacing: 1.5,
              lineHeight: isMobile ? "19px" : "21px",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            {DATA.companyData.subTitle}
          </div>
          <div
            style={{
              width: "80%",
              textAlign: "start",
              color: colors.text.blue,
              fontSize: isMobile ? 38 : 40,
              fontWeight: "bold",
              letterSpacing: 0.012,
              lineHeight: isMobile ? "45px" : "54px",
              marginBottom: 20,
            }}
          >
            {DATA.companyData.title}
          </div>
          <div
            style={{
              width: "80%",
              color: colors.text.grey,
              fontSize: 14,
              fontWeight: 400,
              textAlign: "start",
              letterSpacing: 0.2,
              lineHeight: "26px",
            }}
          >
            {DATA.companyData.text}
          </div>
          <div
            style={{
              width: "80%",
              textAlign: "start",
              marginTop: 20,
            }}
          >
          <Link to="/form" style={{ textDecoration: "none" }}>
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                borderRadius: 12,
                maxWidth: 150,
                height: 43,
                background:
                  "linear-gradient(rgba(135, 135, 202, 1), rgba(186, 102, 178, 1))",
              }}
            >
                <div
                  style={{
                    width: "100%",
                    color: colors.background.primary,
                    fontSize: 18,
                    fontWeight: 500,
                    textAlign: "center",
                    lineHeight: "23px",
                  }}
                >
                  {DATA.companyData.buttonText}
                </div>
            </div>
              </Link>
          </div>
        </div>
        {isMobileQuery ? null : (
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 600,
            }}
          >
            <img
              src={B2B}
              // width: "100%",
              //     display:'block',
              //     right: 0,
              //     top:0,
              //     height: FV_HEIGHT-200,
              //     minWidth: 800,
              style={{
                width: "100%",
                display: "block",
                backgroundColor: colors.background.primary,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            ></img>
          </div>
        )}
      </div>
    );
  };

export default CompanyView;