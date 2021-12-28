import React from "react";

//Components
import AboutUs from "./AboutUs/AboutUs";
import Faqs from "./Faqs/Faqs";
import HowItWorks from "./HowItWorks/HowItWorks";
import LatestUpdates from "./LatestUpdates/LatestUpdates";
import MediaAboutUs from "./MediaAboutUs/MediaAboutUs";
import OurPartners from "./OurPartners/OurPartners";
import ExternalPartners from "./ExternalPartners/ExternalPartners";
import ListedOn from "./ListedOn/ListedOn";
import BuiltOn from "./BuiltOn/BuiltOn";
import OurTeam from "./OurTeam/OurTeam-2";
import OurTeamCollaborators from "./OurTeamCollaborators/OurTeamCollaborators";
import Advisors from "./Advisors/Advisors";
import Investors from "./Investors/Investors";
import Video from "./BackgroundVideo/Video";
import RoadMap from "./RoadMap/RoadMap";
import LemonadeFinance from "./LemonadeFinance/LemonadeFinance";
import Token from "./Token/Token";
import WalletFeature from "./WalletFeature/WalletFeature";
import Lemonade from "./Lemonade/Lemonade";
import WhyUs from "./WhyUs/WhyUs";

const Body = () => {
  return (
    <main className="nk-pages">
      <section>
        <OurPartners />
      </section>
      <br />
      <br />
      <section>
        <ListedOn />
        <br />
        <br />
      </section>
      <section>
        <ExternalPartners />
        <br />
        <br />
      </section>

      <section>
        <BuiltOn />
      </section>

      <section>
        <Video />
      </section>
      <section className="section bg-white pb-0 pt-5 mt-5" id="roadmap">
        <RoadMap />
      </section>
      <section className="section bg-white pb-0 pt-5 mt-5" id="roadmap">
        <LemonadeFinance />
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
        <Lemonade />
      </section>
      <section className="section bg-green ov-h pb-0 tc-light">
        <WalletFeature />
      </section>
      <section id="team" style={{ backgroundColor: "#f3f3f3" }}>
        <OurTeam />
      </section>
      <section id="team" style={{ backgroundColor: "#f3f3f3" }}>
        <OurTeamCollaborators />
      </section>
      <section id="team" style={{ backgroundColor: "#f3f3f3" }}>
        <Advisors />
      </section>
      <section id="team" style={{ backgroundColor: "#f3f3f3" }}>
        <Investors />
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
