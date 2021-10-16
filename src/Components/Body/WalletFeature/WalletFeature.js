import React from "react";

//images
import MobileScreen from "../../../assets/images-main/app-screens/lemonnetApp.png";

const WalletFeature = () => {
  return (
    <>
      <div className="background-shade">
        <div className="container">
          <div className="background-shade-left"></div>
          <div className="background-shade-right"></div>
        </div>
      </div>
      <div className="container" style={{ maxWidth: "90%" }}>
        <div className="section-head section-head-s4 wide-auto-sm text-center">
          <h2
            className="title title-s2 title-s2-alt animated"
            data-animate="fadeInUp"
            data-delay=".1"
          >
            LEMON<font color="green">NET</font>
          </h2>
        </div>
        <div className="nk-block">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9 pt-lg-5 mt-xl-4">
              <div className="gutter-vr-30px">
                <div
                  className="feature feature-inline feature-md-reverse animated"
                  data-animate="fadeInUp"
                  data-delay=".2"
                >
                  <div className="feature-icon feature-icon-s7 feature-icon-2">
                    <em className="icon icon-2 ti ti-wallet"></em>
                  </div>
                  <div className="feature-text-2">
                    <h5 className="title title-sm">
                      Your value is stored and secured in a LMN Wallet
                    </h5>
                    <p>
                      This way you have full control and custody over your
                      ERC-20 Tokens and also of your NFTs. With Lemon Protocol
                      you get the control of the ecosystem.
                    </p>
                  </div>
                </div>
                <div
                  className="feature feature-inline feature-md-reverse animated"
                  data-animate="fadeInUp"
                  data-delay=".3"
                >
                  <div className="feature-icon feature-icon-s7 feature-icon-2">
                    <em className="icon icon-2 ti ti-gift"></em>
                  </div>
                  <div className="feature-text-2">
                    <h5 className="title title-sm">
                      Participate & Earn Rewards
                    </h5>
                    <p>
                      By being an active member of our ecosystem you will earn
                      rewards in form of likes, privilages and other feautures
                      you will find out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9 pt-lg-5 mt-xl-4 order-lg-last">
              <div className="gutter-vr-30px">
                <div
                  className="feature feature-inline animated"
                  data-animate="fadeInUp"
                  data-delay=".4"
                >
                  <div className="feature-icon feature-icon-s7 feature-icon-2">
                    <em className="icon icon-2 ti ti-world"></em>
                  </div>
                  <div className="feature-text-2">
                    <h5 className="title title-sm">Share your opinion</h5>
                    <p>
                      You will decide which NFTs deserve more recognition than
                      the others among all the content! Our community has the
                      power to convert their opinion in to real value.
                    </p>
                  </div>
                </div>
                <div
                  className="feature feature-inline animated"
                  data-animate="fadeInUp"
                  data-delay=".5"
                >
                  <div className="feature-icon feature-icon-s7 feature-icon-2">
                    <em className="icon icon-2 ti ti-id-badge"></em>
                  </div>
                  <div className="feature-text-2">
                    <h5 className="title title-sm">Authenticate & run</h5>
                    <p>
                      By the user-based system you will have full control over
                      your assets, you are the real owner of your content.
                      Download, register & start earning from your content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-9 mt-4 mt-xl-0 order-2 align-self-center">
              <div
                className="nk-block-image text-center px-xl-4 px-lg-0 px-5 animated"
                data-animate="fadeInUp"
                data-delay=".6"
              >
                <img src={MobileScreen} alt="" />
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletFeature;
