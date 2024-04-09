import React from "react";
import { colors } from "../helper/index";
import Fade from "react-reveal/Fade";
const EcoCard = ({ image, text }) => {
    return (
      <Fade bottom>
        <div
          style={{
            minWidth: 210,
            width: "15%",
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div>
            <img
              src={image}
              alt="EcoCard"
              style={{ height: 80, alignItems: "center" }}
            />
          </div>
          <div
            style={{
              color: colors.text.grey,
              fontSize: 14,
              fontWeight: 400,
              textAlign: "center",
              letterSpacing: 0.5,
              lineHeight: "26px",
              marginTop: 10,
              height: 50,
            }}
          >
            {text}
          </div>
        </div>
      </Fade>
    );
  };
  export default EcoCard;