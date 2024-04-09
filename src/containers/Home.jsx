import React from "react";
import useWindowDimensions from "../hooks/useWindowDimentions";
import FirstView from "./FirstView";
import AboutView from "./AboutView";
import TestmonialView from "./TestmonialView";
import CompanyView from "./CompanyView";
import MediaView from "./MediaView";
import BannerView from "./Banner";
import ContactView from "./ContactView";


const Home = () => {
    const { width } = useWindowDimensions();
    return (
      <div
        style={{
          width: width,
        }}
      >
        <FirstView />
        <AboutView />
        <TestmonialView />
        <CompanyView />
        <MediaView />
        <BannerView />
        <ContactView />
      </div>
    );
  };

export default Home;