import React from "react";

//images
// import PartnerA from '../../../assets/images-main/partners/a-xs.png'
import PartnerA from "../../../assets/images-main/partners/2c.png";
import PartnerB from "../../../assets/images-main/partners/moai.png";
import PartnerC from "../../../assets/images-main/partners/gbtc_.png";
import PartnerD from "../../../assets/images-main/partners/imotion.png";
import PartnerE from "../../../assets/images-main/partners/scan.png";

const OurPartners = () => {
  return (
    <div className="container">
      <div className="nk-block block-partners">
        <div className="section-head section-head-xs">
          <h6
            className="title title-xs text-center animated"
            data-animate="fadeInUp"
            data-delay=".1"
          >
            Our Partners
          </h6>
        </div>
        <ul className="partner-list flex-lg-nowrap  d-flex align-items-center ">
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".2"
            style={{ marginRight: "0" }}
          >
            <a href="https://doscoronasestudio.com/" target="_blank">
              <img src={PartnerA} alt="partner" />
            </a>
          </li>
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".25"
            style={{ marginRight: "0" }}
          >
            <a href="https://gbtcfinance.com/" target="_blank">
              <img src={PartnerC} alt="partner" />
            </a>
          </li>
          {/* <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".25"
            style={{ marginRight: "0" }}
          >
            <img src={PartnerD} alt="partner" />
          </li> */}
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".35"
            style={{ marginRight: "0" }}
          >
            <a href="https://scandefi.net/" target="_blank">
              <img src={PartnerE} alt="partner" />
            </a>
          </li>
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".3"
            style={{ marginRight: "0" }}
          >
            <a href="https://moai360.com/" target="_blank">
              <img src={PartnerB} alt="partner" />
            </a>
          </li>

          {/* <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".4"
            style={{marginRight:"0"}}

          >
            <img src={PartnerE} alt="partner" />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default OurPartners;
