import React from "react";

import img1 from "../../../assets/images-main/whyUs/img1.png";
import img2 from "../../../assets/images-main/whyUs/img2.png";
import img3 from "../../../assets/images-main/whyUs/img3.png";
import img4 from "../../../assets/images-main/whyUs/img4.png";

const WhyUs = () => {
  return (
    <div className="container">
      <div className="section-head section-head-s4 wide-auto-sm text-center">
        <h2
          className="title title-s2 title-s2-alt animated font-weight-bold"
          data-animate="fadeInUp"
          data-delay=".1"
        >
          <span className="font-weight-normal">Why Choose </span>LEMON
        </h2>
      </div>
      <div className="nk-block nk-block-features-s3">
        <div
          className="boxed boxed-lg bg-white shadow-alt animated"
          data-animate="fadeIn"
          data-delay=".2"
        >
          <div className="row gutter-vr-40px justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div
                className="feature feature-s3 feature-center animated"
                data-animate="fadeInUp"
                data-delay=".3"
              >
                <div className="feature-icon feature-icon-lg">
                  <img
                    className="icon icon-xl ikon ikon-cloud"
                    src={img1}
                  ></img>
                </div>
                <div className="feature-text">
                  <h5 className="title title-sm title-dark font-weight-bold">
                    Secured User Data
                  </h5>

                  <p>
                    Privacy and Security really concern our developers, in Lemon
                    Network we will not use or sell our user's data. We don’t
                    want to look like most social network platforms. Your data
                    is only yours.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div
                className="feature feature-s3 feature-center animated"
                data-animate="fadeInUp"
                data-delay=".4"
              >
                <div className="feature-icon feature-icon-lg">
                  <img
                    className="icon icon-xl ikon ikon-safety"
                    src={img2}
                  ></img>
                </div>
                <div className="feature-text">
                  <h5 className="title title-sm title-dark font-weight-bold">
                    Smart Contracts
                  </h5>
                  <p>
                    When you publish your content you can choose which type of
                    smart contract you want. Giving flexibility to users to
                    define their picture rights and how do they want to be
                    rewarded for that Art they are uploading to the blockchain.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div
                className="feature feature-s3 feature-center animated"
                data-animate="fadeInUp"
                data-delay=".5"
              >
                <div className="feature-icon feature-icon-lg">
                  <img className="icon icon-xl ikon ikon-cash" src={img3}></img>
                </div>
                <div className="feature-text">
                  <h5 className="title title-sm title-dark font-weight-bold">
                    Users Value Focus
                  </h5>
                  <p>
                    Lemonnet is built for the users, so they can easly upload,
                    sign and earn from their content. Don’t publish your content
                    for free and let business take profit from it. It is time to
                    get control back.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div
                className="feature feature-s3 feature-center animated"
                data-animate="fadeInUp"
                data-delay=".6"
              >
                <div className="feature-icon feature-icon-lg">
                  <img
                    className="icon icon-xl ikon ikon-globe"
                    src={img4}
                  ></img>
                </div>
                <div className="feature-text">
                  <h5 className="title title-sm title-dark font-weight-bold">
                    LEMON Protocol
                  </h5>
                  <p>
                    Get rewarded for your posts based on your followers opinion.
                    Our protocol is fair and rewards the content creators for
                    their pictures. It will allow you to set up auctions and
                    give you full royalty benifits from any of your art
                    transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
