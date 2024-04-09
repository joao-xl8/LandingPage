import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { colors, DATA } from "../helper/index";

import XL8 from "../assets/imgs/XL8.png";

const Footer = () => {
    const isMobileQuery = useMediaQuery('(max-width: 1080px)')
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection:isMobileQuery ? 'column' :  "row",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: 250,
            padding:  20,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            {" "}
            <img
              src={XL8}
              style={{
                width: 250,
              }}
            />
          </div>
  
          <div
            style={{
              width: "100%",
              color: colors.text.lightGrey,
              fontSize: 18,
              fontWeight: 400,
              textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: "22px",
            }}
          >
            PINGUIM AGÊNCIA DE TURISMO LTDA
          </div>
          <div
            style={{
              width: "100%",
              color: colors.text.lightGrey,
              fontSize: 18,
              fontWeight: 400,
              textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: "22px",
            }}
          >
            CNPJ/MF 32.689.996/0001-80,{" "}
          </div>
          <div
            style={{
              width: "100%",
              color: colors.text.lightGrey,
              fontSize: 18,
              fontWeight: 400,
              textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: "22px",
            }}
          >
            {" "}
            Rua Jaguanambi, nº 68,
          </div>
          <div
            style={{
              width: "100%",
              color: colors.text.lightGrey,
              fontSize: 18,
              fontWeight: 400,
              textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: "22px",
            }}
          >
            Cidade Jardim, São Paulo.
          </div>
        </div>
        <div
          style={{
            minWidth: 250,
            flex: 1,
            // backgroundColor: 'red',
            padding:  20,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: colors.text.blue,
              fontSize: 14,
              fontWeight: 400,
              // textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: "22px",
            }}
          >
            © XL8 - Todos os direitos reservados. Site by XL8.
          </div>
        </div>
  
        <div
          style={{
            minWidth: 250,
            padding:  20,
            flex: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                color: colors.text.lightGrey,
                fontSize: 18,
                fontWeight: 400,
                textAlign: "flex-start",
                letterSpacing: 0.5,
                lineHeight: "22px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.text.grey,
                  fontSize: 18,
                  fontWeight: 400,
                  textAlign: "flex-start",
                  letterSpacing: 0.5,
                  lineHeight: "22px",
                }}
              >
                E-mail:{" "}
              </div>{" "}
              pinguim@pinguim.tur.br
            </div>
          </div>
  
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              flexWrap: 'wrap',
              paddingTop: 10,
            }}
          >
            {DATA.footer.contacts.map((item, index) => {
              return (
                <div key={index}>
                  <a
                    href={item.link}
                    style={{ textDecoration: "none", color: "transparent" }}
                  >
                    <img
                      style={{ width: 40, height: 40, marginRight: 10 }}
                      src={item.image}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  export default Footer;
  
