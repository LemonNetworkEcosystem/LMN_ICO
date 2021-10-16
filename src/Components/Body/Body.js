import React from "react";

//Components
import AboutUs from "./AboutUs/AboutUs";
import Faqs from "./Faqs/Faqs";
import HowItWorks from "./HowItWorks/HowItWorks";
import LatestUpdates from "./LatestUpdates/LatestUpdates";
import MediaAboutUs from "./MediaAboutUs/MediaAboutUs";
import OurPartners from "./OurPartners/OurPartners";
import OurTeam from "./OurTeam/OurTeam";
import Video from "./BackgroundVideo/Video";
import RoadMap from "./RoadMap/RoadMap";
import Token from "./Token/Token";
import WalletFeature from "./WalletFeature/WalletFeature";
import WhyUs from "./WhyUs/WhyUs";

const Body = () => {
  return (
    <main className="nk-pages">
      <section className="section py-0 ov-h">
        <OurPartners />
      </section>
      {/* <section className="section py-0 ov-h">
        <Video />
      </section> */}
      <section className="section bg-white pb-0 pt-5 mt-5" id="roadmap">
        <RoadMap />
      </section>
      <section class="section tc-light bg-white ov-h pb-0" id="about">
        <AboutUs />
      </section>
      <section className="section bg-transparent" id="why">
        <WhyUs />
      </section>
      <section className="section bg-white ov-h pt-0">
        <HowItWorks />
      </section>
      <section className="section section-tokensale" id="token">
        <Token />
      </section>
      <section className="section bg-green ov-h pb-0 tc-light">
        <WalletFeature />
      </section>
      <section
        className="section"
        id="team"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <OurTeam />
      </section>
      <section className="section pb-0 bg-white" id="faqs">
        <Faqs />
      </section>
      {/* <section className="section bg-white" id="press">
        <MediaAboutUs />
      </section> */}
      <section className="section section-r pt-0 bg-white">
        <LatestUpdates />
      </section>
    </main>
  );
};

export default Body;
