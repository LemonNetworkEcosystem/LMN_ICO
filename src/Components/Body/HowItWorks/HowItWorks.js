import React from "react";

const HowItWorks = () => {
  return (
    <div className="container">
      <div className="section-head section-head-s4 wide-auto-sm text-center">
        <h2
          className="title title-s2 title-s2-alt animated font-weight-bold"
          data-animate="fadeInUp"
          data-delay=".1"
        >
          <span className="font-weight-normal">How </span>LEMON{" "}
          <span className="font-weight-normal">Works</span>
        </h2>
      </div>
      <div className="nk-block nk-block-text-wrap">
        <div className="nk-block-text">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="feature-slider-dots custom-dots-1 animated"
                data-animate="fadeInUp"
                data-delay=".2"
              >
                <button className="feature-slider-dot feature-slider-dot-s1 owl-dots">
                  <em className="ikon ikon-paricle"></em>
                </button>
                <button className="feature-slider-dot feature-slider-dot-s1 owl-dots">
                  <em className="ikon ikon-connect"></em>
                </button>
                <button className="feature-slider-dot feature-slider-dot-s1 owl-dots">
                  <em className="ikon ikon-target"></em>
                </button>
                <button className="feature-slider-dot feature-slider-dot-s1 owl-dots">
                  <em className="ikon ikon-shiled"></em>
                </button>
                <button className="feature-slider-dot feature-slider-dot-s1 owl-dots">
                  <em className="ikon ikon-id-card"></em>
                </button>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-8 text-center text-xl-left animated"
              data-animate="fadeInUp"
              data-delay=".2"
            >
              <div
                className="feature-slider-pane has-carousel"
                data-items="1"
                data-dots="true"
                data-auto="true"
                data-custom-dots="custom-dots-1"
                data-animate-out="fadeOut"
              >
                <div className="ft-slider-pane-item pane-item-1">
                  <br />

                  <h5 className="animate-up delay-5ms">Connecting people</h5>
                  <br />
                  <p className="animate-up delay-6ms">
                    Lemonnet users will have the hability to connect, value and
                    share their content world wide. Creating NFT content without
                    programming skills.{" "}
                  </p>
                  <p className="animate-up delay-7ms">
                    Tech was invented for connecting people and that's what we
                    do in Lemon Network
                  </p>
                  <p className="animate-up delay-7ms">
                    We will establish an incentivizing Protocol. Lemon Protocol
                    aims to give the users the capability to earn economical
                    value from their content. As simple as it sounds.
                  </p>
                </div>

                <div className="ft-slider-pane-item pane-item-2">
                  <br />

                  <h5 className="animate-up delay-5ms">
                    Merge DeFi & Social App.
                  </h5>
                  <br />

                  <p className="animate-up delay-6ms">
                    The DeFi ecosystem is still complicated for most people.
                    With Lemonnet we want to jump over that distance and let all
                    users have access to this new Financial System.
                  </p>
                  <p className="animate-up delay-7ms">
                    With this merge we want to facilitate an easy Cross-Platform
                    App (Android & iOS) where users can easily earn, share and
                    take advatatge from their content.
                  </p>
                </div>
                <div className="ft-slider-pane-item pane-item-3">
                  <br />

                  <h5 className="animate-up delay-5ms">
                    Improving your life is our goal
                  </h5>
                  <br />

                  <p className="animate-up delay-6ms">
                    This makes it much easier for both (You & Lemon Network) to
                    set up a <i>quid pro quo</i> strategy. If you earn, enjoy
                    and use our platform we also earn, so there is no doubt that
                    if our goals are aligned we will build a brighter future.
                  </p>
                  <p className="animate-up delay-7ms">
                    Lemon<font color="green">ade</font> & Lemon
                    <font color="green">net</font> will be the two main pilars
                    of Lemon Network ecosystem that will let you benefit from
                    the new DeFi technology.
                  </p>
                </div>
                <div className="ft-slider-pane-item pane-item-4">
                  <br />

                  <h5 className="animate-up delay-5ms">Protect your data</h5>
                  <br />

                  <p className="animate-up delay-6ms">
                    The current situation of Social Networks needs to be
                    changed. It is widley known that the business model of most
                    Networks is selling users data, in Lemon Network we consider
                    that Blockchain Tech is a game changer in order to avoid
                    this kind of problematics.
                  </p>
                  <p className="animate-up delay-7ms">
                    We will never sell your data or share it with others. We
                    protect you, your data and your content. Of course we
                    guarantee your Lemons.
                  </p>
                </div>
                <div className="ft-slider-pane-item pane-item-5">
                  <br />

                  <h5 className="animate-up delay-5ms">
                    We are enviromentally friendly
                  </h5>
                  <br />

                  <p className="animate-up delay-6ms">
                    The climate change is an important consideration for our
                    team. This is way we have chosen to deploy the project at a
                    chain where all the electricity that's used comes from
                    renewable energy sources.
                  </p>
                  <p className="animate-up delay-7ms">
                    This chain will allow us to develop a whole ecosystem. The
                    Lemonade & Lemonnet Projects will also be supported by EWC.
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

export default HowItWorks;
