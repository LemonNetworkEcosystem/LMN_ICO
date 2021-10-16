import React from "react";

//images
import Chart1 from "../../../assets/images-main/lavender/i-light.png";
import Chart2 from "../../../assets/images-main/lavender/j-light.png";
import lemonLogo from "../../../assets/images-main/LMN.png";

import ChartOne from "./Charts/Chart1";
import ChartTwo from "./Charts/Chart2";

const Token = () => {
  return (
    <div className="container">
      <div className="section-head section-head-s4 wide-auto-sm text-center">
        <h2
          className="title title-s2 title-s2-alt animated font-weight-bold"
          data-animate="fadeInUp"
          data-delay=".1"
        >
          LMN <span className="font-weight-normal">Distribution</span>
        </h2>
      </div>
      <div className="nk-block nk-block-token">
        <div className="row justify-content-center gutter-vr-30px">
          <div className="col-mb-6 col-md-5 col-lg-4">
            <div
              className="stage-info animated"
              data-animate="fadeInUp"
              data-delay=".2"
            >
              <h6 className="title title-s6 title-xs-s2">Start</h6>
              <p>
                <i>Nov 15, 2021 (00:00:00 UTC)</i>
              </p>
            </div>
          </div>
          <div className="col-mb-6 col-md-5 col-lg-4">
            <div
              className="stage-info animated"
              data-animate="fadeInUp"
              data-delay=".3"
            >
              <h6 className="title title-s6 title-xs-s2">
                Acceptable currency
              </h6>
              <p>
                <i>EWT</i>
              </p>
            </div>
          </div>
          <div className="col-mb-6 col-md-5 col-lg-4">
            <div
              className="stage-info animated"
              data-animate="fadeInUp"
              data-delay=".4"
            >
              <h6 className="title title-s6 title-xs-s2">
                Tokens exchange rate
              </h6>
              <p>It depends on the phase of the purchase</p>
            </div>
          </div>
          <div className="col-mb-6 col-md-5 col-lg-4">
            <div
              className="stage-info animated"
              data-animate="fadeInUp"
              data-delay=".5"
            >
              <h6 className="title title-s6 title-xs-s2">End</h6>
              <p>
                <i>Dec 4, 2021 (23:59:00 UTC)</i>
              </p>
            </div>
          </div>
          <div className="col-mb-6 col-md-5 col-lg-4">
            <div
              className="stage-info animated"
              data-animate="fadeInUp"
              data-delay=".6"
            >
              <h6 className="title title-s6 title-xs-s2">LEMONS in ICO</h6>
              <p>
                <i>
                  7,500,000 <img src={lemonLogo} style={{ width: "25px" }} />
                </i>
              </p>
            </div>
          </div>
          <div className="col-mb-6 col-md-5 col-lg-4">
            <div
              className="stage-info animated"
              data-animate="fadeInUp"
              data-delay=".7"
            >
              <h6 className="title title-s6 title-xs-s2">
                Minimal transaction amount
              </h6>
              <p>No minimal amount to invest</p>
            </div>
          </div>
        </div>
      </div>
      <div className="nk-block">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-9">
            <div
              className="single-chart animated d-flex flex-column align-items-center"
              data-animate="fadeInUp"
              data-delay=".8"
            >
              <div className="chart">
                {/* <img src={Chart1} alt="chart" /> */}
                <ChartOne />
              </div>
              <p>
                <b>LMN</b> ICO phases allocations
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-9">
            <div
              className="single-chart animated d-flex flex-column align-items-center"
              data-animate="fadeInUp"
              data-delay=".9"
            >
              <div className="chart">
                {/* <img src={Chart2} alt="chart" /> */}
                <ChartTwo />
              </div>
              <p>
                <b>LMN</b> Tokonomics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
