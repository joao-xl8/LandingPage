import React, { useEffect, useState, useMemo } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { isMobile } from "react-device-detect";
import { SmoothScrollTo, colors, NAVBAR_HEIGHT,  } from "../helper/index";

//PINGUIM
import XL8 from "../assets/imgs/XL8.png";
const Navbar = () => {
    const isMobileQuery = useMediaQuery("(max-width: 1080px)");
    const navigate = useNavigate();
    const { width } = useWindowDimensions();
  
    const [drawerOpen, setDrawerOpen] = React.useState(false);
  
    const isRootPath = useMemo(() => {
      return window.location.pathname === "/" ? true : false;
    }, [window.location.pathname]);
  
    const [currentRoute, setCurrentRoute] = useState("#firstView");
  
    useEffect(() => {
      if (isRootPath) SmoothScrollTo(currentRoute);
    }, [isRootPath, currentRoute]);
  
    const navigateTo = (div) => {
      if (isRootPath) {
        setCurrentRoute(div);
        SmoothScrollTo(div);
      } else {
        navigate("/");
        setCurrentRoute(div);
        SmoothScrollTo(div);
      }
    };
  
    const toggleDrawer = (open) => (event) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setDrawerOpen(open);
    };
  
    const list = () => (
      <Box
        sx={{ width: 230 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {[
            "O XL8",
            "Depoimentos",
            "Na mídia",
            "Contato",
            "Deseja ser nosso parceiro?",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={(e) => {
                  e.preventDefault();
                  console.log(text);
                  if (!isRootPath) navigate("/");
  
                  if (text === "Deseja ser nosso parceiro?") navigate("/form");
                  if (text === "O XL8") navigateTo("#aboutView");
                  if (text === "Depoimentos") navigateTo("#testmonialView");
                  if (text === "Na mídia") navigateTo("#mediaView");
                  if (text === "Contato") navigateTo("#contactView");
                }}
              >
                <ListItemText
                  primary={text}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color:
                      index == 4 ? colors.secundary.dark : colors.text.lightGrey,
                    fontSize: 18,
                    fontWeight: index == 4 ? "bold" : 500,
                    textAlign: "flex-start",
                    letterSpacing: 0.15,
                    lineHeight: "21px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["BAIXAR APP"].map((text, _) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  if (!isRootPath) navigate("/");
                  navigateTo("#bannerView");
                }}
              >
                <ListItemText
                  primary={text}
                  style={{
                    cursor: "pointer",
                    width: 122,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    backgroundColor: colors.secundary.dark,
                    borderRadius: 4,
                    color: colors.text.white,
                    fontWeight: 700,
                    background:
                      "linear-gradient(rgba(135, 135, 202, 1), rgba(186, 102, 178, 1))",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    if (isMobileQuery)
      return (
        <div
          style={{
            backgroundColor: "#FBFBFB",
            height: 40,
            top: 0,
            maxHeight: 40,
            zIndex: 10,
            // overflow: "hidden",
            position: "sticky",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            boxShadow: "2px 12px 12px 1px rgba(0, 0, 0, 0.1)",
            WebkitBoxShadow: "2px 12px 12px 1px rgba(0, 0, 0, 0.1)",
            MozBoxShadow: "2px 12px 12px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            onClick={(e) => {
              e.preventDefault();
              if (!isRootPath) navigate("/");
              navigateTo("#firstView");
            }}
            src={XL8}
            style={{
              cursor: "pointer",
              height: 30,
              marginLeft: 10,
            }}
          />
  
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button title="<" onClick={toggleDrawer(true)}>
                >
              </Button>
              <SwipeableDrawer
                anchor={isMobile ? "top" : "right"}
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      );
  
    return (
      <div
        id="navbar"
        style={{
          width: width,
          backgroundColor: "#FBFBFB",
          height: NAVBAR_HEIGHT,
          top: 0,
          maxHeight: NAVBAR_HEIGHT,
          overflow: "hidden",
          zIndex: 10,
          position: "fixed",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          boxShadow: "2px 12px 12px 1px rgba(0, 0, 0, 0.1)",
          WebkitBoxShadow: "2px 12px 12px 1px rgba(0, 0, 0, 0.1)",
          MozBoxShadow: "2px 12px 12px 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            flex: 1,
            height: NAVBAR_HEIGHT,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <a
            onClick={(e) => {
              navigateTo("#firstView");
            }}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              backgroundColor: colors.background.primary,
              width: 150,
              height: 30,
              marginLeft: 30,
            }}
          >
            <img
              src={XL8}
              style={{
                width: 150,
              }}
            />
          </a>
        </div>
        <div
          style={{
            flex: width > 1800 ? 1 : width > 1300 ? 2 : 3,
            height: NAVBAR_HEIGHT,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <a
            onClick={(e) => {
              navigateTo("#aboutView");
            }}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: colors.text.lightGrey,
              fontSize: 18,
              fontWeight: 500,
              textAlign: "flex-start",
              letterSpacing: 0.15,
              lineHeight: "21px",
            }}
          >
            O XL8
          </a>
          <a
            onClick={(e) => {
              navigateTo("#testmonialView");
            }}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: colors.text.lightGrey,
              fontSize: 18,
              fontWeight: 500,
              textAlign: "flex-start",
              letterSpacing: 0.15,
              lineHeight: "21px",
            }}
          >
            Depoimentos
          </a>
          <a
            onClick={(e) => {
              navigateTo("#mediaView");
            }}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: colors.text.lightGrey,
              fontSize: 18,
              fontWeight: 500,
              textAlign: "flex-start",
              letterSpacing: 0.15,
              lineHeight: "21px",
            }}
          >
            Na mídia
          </a>
          <a
            onClick={(e) => {
              navigateTo("#contactView");
            }}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: colors.text.lightGrey,
              fontSize: 18,
              fontWeight: 500,
              textAlign: "flex-start",
              letterSpacing: 0.15,
              lineHeight: "21px",
            }}
          >
            Contato
          </a>
          <Link
            to="/form"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: colors.secundary.dark,
              fontSize: 18,
              fontWeight: 700,
              textAlign: "flex-start",
              letterSpacing: 0.15,
              lineHeight: "21px",
            }}
          >
            Deseja ser nosso parceiro?
          </Link>
          <div
            style={{
              cursor: "pointer",
              width: 122,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              backgroundColor: colors.secundary.dark,
              borderRadius: 4,
              color: colors.text.white,
              fontWeight: 700,
              background:
                "linear-gradient(rgba(135, 135, 202, 1), rgba(186, 102, 178, 1))",
            }}
            onClick={() => {
              navigateTo("#bannerView");
            }}
          >
            BAIXAR APP
          </div>
        </div>
      </div>
    );
  };

  export default Navbar;
