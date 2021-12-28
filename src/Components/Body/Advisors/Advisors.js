import React, { useState } from "react";
import LiquidFillGauge from "react-liquid-gauge";
import logo from "../../../assets/images-main/lemon-logo.svg";
import networkLogo from "../../../assets/images-main/lemon-network.png";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import glass from "../../../assets/images-main/glass.png";
import "./Advisors.css";
const Advisors = () => {
  const [value, setValue] = useState("90");

  const circleWidth = window.innerWidth > 1000 ? 300 : 300;
  const startColor = "#9bff00"; // cornflowerblue
  const endColor = "#9bff00";
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(value / 100);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  return (
    <div className="container">
      <div className="section-head section-head-s4 wide-auto-sm text-center">
        <br />
        <br />
        <h2
          className="title title-s2 title-s2-alt animated"
          data-animate="fadeInUp"
          data-delay=".1"
        >
          LMN <span className="font-weight-normal">Advisors</span>
        </h2>
      </div>

      <div className="circle-container d-flex align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center  justify-content-between">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ marginTop: "30px", marginBottom: "60px" }}
          >
            <div className="d-flex   flex-column align-items-center">
              <div className="d-flex align-items-center">
                <span className="logo-water-advisor">?</span>
                <img src={glass} className="glass-advisor" alt="" />
                <LiquidFillGauge
                  width={circleWidth}
                  height={circleWidth}
                  waveFrequency={2}
                  waveAmplitude={4}
                  className="gauge-advisor"
                  value={value}
                  textSize={0}
                  gradient
                  riseAnimation
                  gradientStops={gradientStops}
                  waveAnimation
                  circleStyle={{
                    fill: "#ffff",
                  }}
                  waveStyle={{
                    fill: "#e2ff56",
                  }}
                />
              </div>
              <br />
              <br />
              <span className="gauge-text">Revealed Soon</span>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center  justify-content-between">
          <div
            className="d-flex flex-wrap justify-content-between align-items-center"
            style={{ marginTop: "5px", marginBottom: "60px", width: "100%" }}
          >
            <div className="d-flex  flex-column align-items-center ">
              <div className="d-flex align-items-center">
                <span className="logo-water-advisor">?</span>

                <img src={glass} className="glass-advisor" alt="" />
                <LiquidFillGauge
                  width={circleWidth}
                  height={circleWidth}
                  waveFrequency={2}
                  waveAmplitude={4}
                  className="gauge-advisor"
                  value={value}
                  textSize={0}
                  gradient
                  riseAnimation
                  gradientStops={gradientStops}
                  waveAnimation
                  circleStyle={{
                    fill: "#ffff",
                  }}
                  waveStyle={{
                    fill: "#e2ff56",
                  }}
                />
              </div>
              <br />
              <br />
              <span className="gauge-text">Revealed Soon</span>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center  justify-content-between">
          <div
            className="d-flex flex-wrap justify-content-between align-items-center"
            style={{ marginTop: "5px", marginBottom: "60px", width: "100%" }}
          >
            <div className="d-flex flex-column align-items-center  ">
              <div className="d-flex align-items-center">
                <span className="logo-water-advisor">?</span>

                <img src={glass} className="glass-advisor" alt="" />
                <LiquidFillGauge
                  width={circleWidth}
                  height={circleWidth}
                  waveFrequency={2}
                  waveAmplitude={4}
                  className="gauge-advisor"
                  value={value}
                  textSize={0}
                  gradient
                  riseAnimation
                  gradientStops={gradientStops}
                  waveAnimation
                  circleStyle={{
                    fill: "#ffff",
                  }}
                  waveStyle={{
                    fill: "#e2ff56",
                  }}
                />
              </div>
              <br />
              <br />
              <span className="gauge-text">Revealed Soon</span>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
