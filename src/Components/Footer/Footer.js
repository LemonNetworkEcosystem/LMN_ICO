import React from "react";

//images
import EWTlogo from "../../assets/images-main/EWT-footer.svg";
import logo from "../../assets/images-main/logo-blanc.png";

const Footer = () => {
  return (
    <footer className="nk-footer bg-theme-alt">
      <div className="social-overlap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <ul
                className="social-bar bg-white round shadow-heavy animated"
                data-animate="fadeInUp"
                data-delay=".1"
              >
                <li className="social-bar-title">
                  <span>Follow us</span>
                </li>
                {/* <li>
                  <a href="https://www.facebook.com/xxxx" target="_blank">
                    <em className="icon fab fa-facebook-f"></em>
                  </a>
                </li> */}
                <li>
                  <a href="https://twitter.com/LMN_Network" target="_blank">
                    <em className="icon fab fa-twitter"></em>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCJO29RJIde4IJCd6psbagdw"
                    target="_blank"
                  >
                    <em className="icon fab fa-youtube"></em>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/LemonNetwork" target="_blank">
                    <em className="icon fab fa-github"></em>
                  </a>
                </li>
                <li>
                  <a href="https://explorer.energyweb.org/" target="_blank">
                    <img style={{ width: "21px" }} src={EWTlogo} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@LemonNetwork" target="_blank">
                    <em className="icon fab fa-medium-m"></em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nk-ovm ovm-top ovm-h-50 bg-white"></div>
      </div>
      <div className="section section-m section-footer bg-transparent tc-light">
        <div className="container">
          <div className="nk-block block-footer mgb-m50 mgt-m10">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-10">
                <div
                  className="wgs animated"
                  data-animate="fadeInUp"
                  data-delay=".2"
                >
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-mb-3 col-sm-3 col-6">
                <div className="wgs wgs-menu">
                  <div className="wgs-body">
                    <ul
                      className="wgs-links wgs-links-uline wgs-links-s4 animated"
                      data-animate="fadeInUp"
                      data-delay=".3"
                    >
                      <li>
                        <a href="#">Buy Lemon (LMN)</a>
                      </li>
                      <li>
                        <a href="#roadmap">Roadmap</a>
                      </li>
                      <li>
                        <a href="#why">Lemon Network</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-mb-3 col-sm-3 col-6">
                <div className="wgs wgs-menu">
                  <div className="wgs-body">
                    <ul
                      className="wgs-links wgs-links-uline wgs-links-s4 animated"
                      data-animate="fadeInUp"
                      data-delay=".4"
                    >
                      <li>
                        <a href="#team">Team</a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#faqs">Contact</a>
                      </li>
                      <li>
                        <a href="#faqs">Faqs</a>
                      </li>
                      <li>
                        <a>Join Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-mb-6 col-sm-4">
                <div className="wgs wgs-menu">
                  <div className="wgs-body">
                    <ul
                      className="wgs-address animated"
                      data-animate="fadeInUp"
                      data-delay=".5"
                    >
                      <li>Cervello, Barcelona</li>
                      <li>Spain</li>
                      <li>
                        <a href="#">info@lmn.network</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-white-10 my-0" />
      <div className="section py-5 tc-light">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7">
              <div className="copyright-text copyright-text-s3 op-70">
                <p>
                  <span>Copyright &copy; 2021 Lemon Network, S.L</span>
                </p>
              </div>
            </div>
            <div className="col-md-5 text-md-right">
              <ul className="footer-links">
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/lemon-network.appspot.com/o/ICO%2FLMN%20Whitepaper.pdf?alt=media"
                    className="link link-xs link-DARK"
                    target="_blank"
                    download
                  >
                    LMN WhitePaper
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/lemon-network.appspot.com/o/Legal%2FLMN%20Network%20Terms%20%26%20Co.pdf?alt=media"
                    target="_blank"
                    download
                  >
                    LMN Terms
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/lemon-network.appspot.com/o/Legal%2FLMN%20Network%20Privacy%20Policy.pdf?alt=media"
                    target="_blank"
                    download
                  >
                    LMN Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
