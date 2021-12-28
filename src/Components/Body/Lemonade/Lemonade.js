import React from "react";

//images
import ss1 from "../../../assets/images-main/lemonade/lemonade-ss1.png";
import ss2 from "../../../assets/images-main/lemonade/lemonade-ss2.png";
import ss3 from "../../../assets/images-main/lemonade/lemonade-ss3.png";
import ss4 from "../../../assets/images-main/LMN.png";

const Lemonade = () => {
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
            LEMON<font color="green">ADE</font>
          </h2>
        </div>
        <div className="nk-block">
          <div className="row justify-content-center">
            <div style={{ maxWidth: "900px" }}>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
                data-interval="4444"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="rounded d-block w-100"
                      src={ss3}
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="rounded d-block w-100"
                      src={ss1}
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="rounded d-block w-100"
                      src={ss2}
                      alt="Third slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="rounded d-block w-50"
                      src={ss4}
                      alt="Third slide"
                      style={{ margin: "auto" }}
                    />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
            </div>
            <div style={{ maxWidth: "900px" }}>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
                data-interval="6666"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="feature-text-2">
                      <h5 className="title title-sm">
                        Lemonade <i>DeFi</i>
                      </h5>
                      <p>
                        A Decentralized Platform for users to easily exchange
                        crypto in a fast & secure manner. All transactions
                        handled in Lemonade benefit LMN holders.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="feature-text-2">
                      <h5 className="title title-sm">
                        Lemonade <i>Stake</i>
                      </h5>
                      <p>
                        Lemon Network has create different Financial Smart
                        Contracts that rewards users for supporting and
                        promoting the use of Lemonade Platform.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="feature-text-2">
                      <h5 className="title title-sm">
                        Lemonade <i>Farm</i>
                      </h5>
                      <p>
                        We want you to earn, in Lemonade DeFi you can support
                        pair by providing liquidity and earn from all trades.
                        Stake your LLP (Lemon Liquidity Points) and earn even
                        more rewards.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="feature-text-2">
                      <h5 className="title title-sm">
                        LEMON <i>Protocol</i>
                      </h5>
                      <p>
                        LMN is our main ERC-20, this is why our users can stake
                        them in order to proof the consistency of the whole
                        Lemon Network Ecosystem. Participate in the LMN protocol
                        and Earn more LMN.
                      </p>
                    </div>
                  </div>
                </div>
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

export default Lemonade;
