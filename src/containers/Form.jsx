import React, { useState, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import useWindowDimensions from "../hooks/useWindowDimentions";
import TypeWriterEffect from "react-typewriter-effect";
import { isMobile } from "react-device-detect";
import emailjs from "@emailjs/browser";
import { Formik } from "formik";
import B2BFintech from "../assets/imgs/B2BFintech.png";

import { colors, DATA  } from "../helper/index";
const Form = () => {
  const form = useRef();
  const isMobileQuery = useMediaQuery("(max-width: 1080px)");
  const [emailDelivered, setEmailDelivered] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { width } = useWindowDimensions();

  const sendEmail = () => {
    setIsSendEmail(true);
    setEmailDelivered(false);
    setEmailError(false);
    try {
      emailjs
        .sendForm(
          "service_t1dr6ta",
          "template_6p2mmao",
          form.current,
          "nWJSF36AbkUbhb1PK"
        )
        .then(
          (result) => {
            setEmailDelivered(true);
            setIsSendEmail(false);
            console.log("SUCCESS", result.text);
          },
          (error) => {
            setEmailError(true);
            setIsSendEmail(false);
            console.log(error.text);
          }
        );
    } catch (error) {
      setEmailError(true);
      console.log(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: width,
        background:
          "linear-gradient(240.65deg, rgba(135,146,202,0.3) 16.68%, rgba(186,102,178,0.3) 95.63%)",
      }}
    >
      <div
        style={{
          maxWidth: width,  
          width: !isMobileQuery ? "50%" : "100%",
          padding: isMobileQuery ? 5 : 50,
          paddingTop: isMobileQuery ? 5 :100,
          marginTop: 0,
          alignItems: "flex-start" ,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
          <div
            style={{
              color: colors.text.highlighted,
              fontSize: isMobile ? 14 : 20,
              fontWeight: "bold",
              textAlign: "flex-start",
              letterSpacing: 3,
              lineHeight: isMobile ? "22px" : "26px",
              marginBottom: isMobile ? 0 : -5,
            }}
          >
            {DATA.b2b.subTitle}
          </div>
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <TypeWriterEffect
              textStyle={{
                color: colors.text.blue,
                fontSize: isMobile ? 20 : 46,
                fontWeight: "bold",
                textAlign: "flex-start",
                letterSpacing: 0.15,
                lineHeight: isMobile ? "20px" : "53px",
              }}
              startDelay={200}
              hideCursorAfterText
              cursorColor={colors.text.highlighted}
              text={DATA.b2b.title}
              typeSpeed={25}
            />
          </div>
          <div
            style={{
              color: colors.text.lightGrey,
              fontSize: isMobile ? 14 : 20,
              fontWeight: 400,
              textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: isMobile ? "15px" : "26px",
              marginBottom: 20,
            }}
          >
            {DATA.b2b.text}
          </div>
          <div
            style={{
              color: colors.text.lightGrey,
              fontSize: isMobile ? 14 : 20,
              fontWeight: 400,
              textAlign: "flex-start",
              letterSpacing: 0.5,
              lineHeight: isMobile ? "15px" : "26px",
              marginBottom: 30,
            }}
          >
            {DATA.b2b.secondText}
          </div>{" "}
          <div
            style={{
              width: "100%",
              textAlign: "flex-start",
              color: colors.text.blue,
              fontSize: isMobile ? 30 : 46,
              fontWeight: "bold",
              letterSpacing: 0.012,
              lineHeight: isMobile ? "45px" : "54px",
            }}
          >
            {DATA.b2b.formTitle}
          </div>
          <Formik
            initialValues={{
              email: "",
              name: "",
              phone: "",
              company: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Obrigatório";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Endereço de email inválido";
              }
              if (!values.name) {
                errors.name = "Obrigatório";
              } else if (!/^[A-Z0-9.-]/i.test(values.name)) {
                errors.name = "Nome inválido";
              }
              if (!values.phone) {
                errors.phone = "Obrigatório";
              } else if (!/^[0-9.-]/i.test(values.phone)) {
                errors.phone = "Endereço de email inválido";
              }
              if (!values.company) {
                errors.company = "Obrigatório";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                sendEmail(values);
                console.log(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({        
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                ref={form}
                style={{
                  width: "90%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                onSubmit={handleSubmit}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobileQuery ? "column" : "row",
                    width: "100%",
                    justifyContent: "space-between",  
                    maxWidth:850
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: isMobileQuery ? "100%" : "46%",
                      maxWidth: !isMobileQuery ? 400 : 850,
                      paddingRight: isMobileQuery ? 0 : 25,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        color: colors.text.dark,
                        fontSize: 18,
                        fontWeight: 600,
                        letterSpacing: 0.015,
                        lineHeight: "21px",
                        marginLeft: 10,
                        marginBottom: 2,
                        marginTop: 10,
                      }}
                    >
                      Nome
                      <div
                        style={{
                          width: "100%",
                          color: colors.status.negative,
                          fontSize: 18,
                          fontWeight: 600,
                          letterSpacing: 0.015,
                          lineHeight: "21px",
                          marginLeft: 2,
                          marginBottom: 2,
                        }}
                      >
                        *
                      </div>
                    </div>
                    <input
                      placeholder="Insira o seu nome"
                      style={{
                        height: 40,
                        borderRadius: 5,
                        paddingTop: 5,
                        paddingLeft: 15,
                        width: "100%",
                        border: "none",
                        backgroundColor: colors.background.primary,
                      }}
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <div
                      style={{
                        width: "100%",
                        color: colors.status.negative,
                        fontSize: 18,
                        fontWeight: 400,
                        letterSpacing: 0.015,
                        lineHeight: "21px",
                        marginLeft: 10,
                        marginTop: 2,
                        marginBottom: 2,
                      }}
                    >
                      {errors.name && touched.name && errors.name}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: isMobileQuery ? "100%" : "46%",
                      maxWidth: !isMobileQuery ? 400 : 850,
                      paddingLeft: isMobileQuery ? 0 : 25,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        color: colors.text.dark,
                        fontSize: 18,
                        fontWeight: 600,
                        letterSpacing: 0.015,
                        lineHeight: "21px",
                        marginLeft: 10,
                        marginBottom: 2,
                        marginTop: 10,
                      }}
                    >
                      Telefone{" "}
                      <div
                        style={{
                          width: "100%",
                          color: colors.status.negative,
                          fontSize: 18,
                          fontWeight: 600,
                          letterSpacing: 0.015,
                          lineHeight: "21px",
                          marginLeft: 2,
                          marginBottom: 2,
                        }}
                      >
                        *
                      </div>
                    </div>
                    <input
                      placeholder="Insira o seu telefone"
                      style={{
                        width: "100%",
                        height: 40,
                        paddingTop: 5,
                        paddingLeft: 15,
                        borderRadius: 5,
                        border: "none",
                        backgroundColor: colors.background.primary,
                      }}
                      type="phone"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />{" "}
                    <div
                      style={{
                        width: "100%",
                        color: colors.status.negative,
                        fontSize: 18,
                        fontWeight: 400,
                        letterSpacing: 0.015,
                        lineHeight: "21px",
                        marginLeft: 10,
                        marginTop: 2,
                        marginBottom: 2,
                      }}
                    >
                      {errors.phone && touched.phone && errors.phone}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: 850,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      color: colors.text.dark,
                      fontSize: 18,
                      fontWeight: 600,
                      letterSpacing: 0.015,
                      lineHeight: "21px",
                      marginLeft: 10,
                      marginBottom: 2,
                      marginTop: 10,
                    }}
                  >
                    <div style={{ display: "inline" }}>
                      E-mail Coorporativo{" "}
                    </div>
                    <div
                      style={{
                        color: colors.status.negative,
                        fontSize: 18,
                        fontWeight: 600,
                        letterSpacing: 0.015,
                        lineHeight: "21px",
                        marginLeft: 2,
                        marginBottom: 2,
                      }}
                    >
                      *
                    </div>
                  </div>
                  <input
                    placeholder="Insira o seu e-mail"
                    style={{
                      width: "100%",
                      height: 40,
                      paddingTop: 5,
                      paddingLeft: 15,
                      borderRadius: 5,
                      border: "none",
                      backgroundColor: colors.background.primary,
                    }}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <div
                    style={{
                      width: "100%",
                      color: colors.status.negative,
                      fontSize: 18,
                      fontWeight: 400,
                      letterSpacing: 0.015,
                      lineHeight: "21px",
                      marginLeft: 10,
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  >
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: 850,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      color: colors.text.dark,
                      fontSize: 18,
                      fontWeight: 600,
                      letterSpacing: 0.015,
                      lineHeight: "21px",
                      marginLeft: 10,
                      marginBottom: 2,
                      marginTop: 10,
                    }}
                  >
                    <div style={{ display: "inline" }}>Nome da Empresa </div>
                    <div
                      style={{
                        color: colors.status.negative,
                        fontSize: 18,
                        fontWeight: 600,
                        letterSpacing: 0.015,
                        lineHeight: "21px",
                        marginLeft: 2,
                        marginBottom: 2,
                      }}
                    >
                      *
                    </div>
                  </div>
                  <input
                    placeholder="Insira o nome da sua empresa"
                    style={{
                      placeholder: {
                        color: colors.text.white,
                      },
                      paddingTop: 5,
                      paddingLeft: 15,
                      width: "100%",
                      height: 40,
                      borderRadius: 5,
                      border: "none",
                      backgroundColor: colors.background.primary,
                    }}
                    name="company"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company}
                  />
                  <div
                    style={{
                      width: "100%",
                      color: colors.status.negative,
                      fontSize: 18,
                      fontWeight: 400,
                      letterSpacing: 0.015,
                      lineHeight: "21px",
                      marginLeft: 10,
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  >
                    {errors.company && touched.company && errors.company}
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    alignItems: "flex-end",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <button
                    style={{
                      width: 250,
                      height: 50,
                      borderRadius: 5,
                      border: "none",
                      background:
                        "linear-gradient(rgba(135, 135, 202, 1), rgba(186, 102, 178, 1))",
                      color: colors.text.white,
                      marginRight: isMobileQuery ? 0 : -15,
                      marginTop: 20,
                      fontSize: 18,
                      fontWeight: 500,
                      letterSpacing: 0.005,
                      lineHeight: "22px",
                      opacity:
                        isSubmitting ||
                        errors.email ||
                        errors.name ||
                        errors.company ||
                        errors.phone ||
                        isSendEmail
                          ? 0.5
                          : 1,
                    }}
                    type="submit"
                    disabled={
                      isSubmitting ||
                      errors.email ||
                      errors.name ||
                      errors.company ||
                      errors.phone ||
                      isSendEmail
                    }
                  >
                    {isSendEmail ? "ENVIANDO" : "SABER MAIS"}
                  </button>
                </div>

                {emailDelivered && (
                  <div>
                    <p
                      style={{
                        color: colors.status.positive,
                        fontSize: 18,
                        fontWeight: 500,
                        letterSpacing: 0.005,
                        lineHeight: "22px",
                        textAlign: "center",
                      }}
                    >
                      Email enviado com sucesso!
                    </p>
                  </div>
                )}
                {emailError && (
                  <div>
                    <p
                      style={{
                        color: colors.status.negative,
                        fontSize: 18,
                        fontWeight: 500,
                        letterSpacing: 0.005,
                        lineHeight: "22px",
                        textAlign: "center",
                      }}
                    >
                      Erro ao enviar o email!
                    </p>
                  </div>
                )}
              </form>
            )}
          </Formik>
      </div>
      {!isMobileQuery && (
        <img
          src={B2BFintech}
          style={{
            position: "absolute",
            right: 50,
            top: 100,
            // top: isMobileQuery ? 0 : 80,
            width: "40%",
            maxWidth: 800,
            // height: "50%",
          }}
        />
      )}
    </div>
  );
};

export default Form