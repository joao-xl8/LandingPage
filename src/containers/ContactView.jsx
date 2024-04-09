import React, { useState, useRef } from "react";
import { colors, DATA } from "../helper/index";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";
import useMediaQuery from "../hooks/useMediaQuery";
import emailjs from "@emailjs/browser";
import { Formik } from "formik";

const ContactView = () => {
    const form = useRef();
    const { width } = useWindowDimensions();
    const isMobileQuery = useMediaQuery("(max-width: 1080px)");
  
    const [emailDelivered, setEmailDelivered] = useState(false);
    const [isSendEmail, setIsSendEmail] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const sendEmail = () => {
      setIsSendEmail(true);
      setEmailDelivered(false);
      setEmailError(false);
      try {
        emailjs
          .sendForm(
            "service_t1dr6ta",
            "template_c90umsl",
            form.current,
            "nWJSF36AbkUbhb1PK"
          )
          .then(
            (result) => {
              setEmailDelivered(true);
              console.log("SUCCESS", result.text);
            },
            (error) => {
              setEmailError(true);
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
        id="contactView"
        style={{
          padding: 50,
          paddingBottom: 10,
          paddingTop: 10,
          maxWidth: width,
          display: "flex",
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
          {DATA.contactData.subTitle}
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
          }}
        >
          {DATA.contactData.title}
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: colors.text.lightGrey,
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: 0.5,
            lineHeight: "26px",
            marginTop: 10,
            marginBottom: 50,
          }}
        >
          {DATA.contactData.text}
        </div>
        <Formik
          initialValues={{
            email: "",
            name: "",
            title: "",
            message: "",
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
            if (!values.title) {
              errors.title = "Obrigatório";
            }
            if (!values.message) {
              errors.message = "Obrigatório";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              sendEmail(values);
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
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "90%",
                // backgroundColor:'red',
              }}
              onSubmit={handleSubmit}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobileQuery ? "column" : "row",
                  width: "100%",
                  justifyContent: "center",
                  flexWrap: "wrap",
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
                    Email{" "}
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
                    {errors.email && touched.email && errors.email}
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
                  Assunto{" "}
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
                  placeholder="Insira o assunto"
                  style={{
                    width: "100%",
                    height: 40,
                    paddingTop: 5,
                    paddingLeft: 15,
                    borderRadius: 5,
                    border: "none",
                    backgroundColor: colors.background.primary,
                  }}
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
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
                  {errors.title && touched.title && errors.title}
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
                  Mensagem{" "}
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
                <textarea
                  maxLength={1000}
                  autoCapitalize="sentences"
                  placeholder="Texto"
                  style={{
                    placeholder: {
                      color: colors.text.white,
                    },
                    paddingTop: 5,
                    paddingLeft: 15,
                    width: "100%",
                    height: 150,
                    borderRadius: 5,
                    border: "none",
                    backgroundColor: colors.background.primary,
                  }}
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
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
                  {errors.message && touched.message && errors.message}
                </div>
              </div>
  
              <button
                style={{
                  width: 250,
                  height: 50,
                  borderRadius: 5,
                  border: "none",
                  margin: isMobileQuery ? 0 : 50,
                  marginTop: isMobileQuery? 10: 0,
                  background:
                    "linear-gradient(rgba(135, 135, 202, 1), rgba(186, 102, 178, 1))",
                  color: colors.text.white,
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: 0.005,
                  lineHeight: "22px",
                  opacity:
                    isSubmitting ||
                    errors.email ||
                    errors.name ||
                    errors.title ||
                    errors.message ||
                    isSendEmail
                      ? 0.5
                      : 1,
                }}
                type="submit"
                disabled={
                  isSubmitting ||
                  errors.email ||
                  errors.name ||
                  errors.title ||
                  errors.message ||
                  isSendEmail
                }
              >
                {isSendEmail ? "ENVIANDO" : "ENVIAR MENSAGEM"}
              </button>
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
    );
  };

  export default ContactView