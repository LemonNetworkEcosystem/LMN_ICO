import React from "react";

//images
// import PartnerA from '../../../assets/images-main/partners/a-xs.png'
import PartnerA from "../../../assets/images-main/builtOn/sol.png";
import PartnerB from "../../../assets/images-main/builtOn/metamask.png";
import PartnerE from "../../../assets/images-main/partners/d-xs.png";
import PartnerD from "../../../assets/images-main/builtOn/react.png";
import PartnerC from "../../../assets/images-main/builtOn/openZep.png";

const BuiltOn = () => {
  return (
    <div className="container">
      <div className="nk-block block-partners">
        <div className="section-head section-head-xs">
          <h6
            className="title title-xs text-center animated"
            data-animate="fadeInUp"
            data-delay=".1"
          >
            Built With
          </h6>
        </div>
        <ul className="partner-list flex-lg-nowrap  d-flex align-items-center ">
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".25"
            style={{ marginRight: "0" }}
          >
            <a href="https://metamask.io/" target="_blank">
              <img src={PartnerB} alt="partner" />
            </a>{" "}
          </li>

          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".2"
            style={{ marginRight: "0" }}
          >
            <a
              href="https://solidity-es.readthedocs.io/es/latest/"
              target="_blank"
            >
              <img src={PartnerA} alt="partner" />
            </a>{" "}
          </li>
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".3"
            style={{ marginRight: "0" }}
          >
            <a href="https://openzeppelin.com/" target="_blank">
              <img src={PartnerC} alt="partner" />
            </a>
          </li>
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".4"
            style={{ marginRight: "0" }}
          >
            <a href="https://www.energyweb.org/" target="_blank">
              <img src={PartnerE} alt="partner" />
            </a>{" "}
          </li>
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".35"
            style={{ marginRight: "0" }}
          >
            <a href="https://reactjs.org/" target="_blank">
              <img src={PartnerD} alt="partner" />
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BuiltOn;
