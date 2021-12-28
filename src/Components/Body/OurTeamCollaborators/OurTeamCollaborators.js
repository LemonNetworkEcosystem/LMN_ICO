import React from "react";
import "./OurTeamCollaborators.css";
//images
import teamMember1 from "../../../assets/images-main/team/eceo.jpg";
import teamMember2 from "../../../assets/images-main/team/rcto.jpg";
import teamMember3 from "../../../assets/images-main/team/cmo.jpg";

import teamMember6 from "../../../assets/images-main/team/_rrss.png";
import teamMember4 from "../../../assets/images-main/team/_camara.png";
import teamMember5 from "../../../assets/images-main/team/_youtuber.png";
import teamMember7 from "../../../assets/images-main/team/_writer.png";
import teamMember8 from "../../../assets/images-main/team/_rrpp.png";
import teamMember9 from "../../../assets/images-main/team/_expansion.png";
import teamMember10 from "../../../assets/images-main/team/_academy.png";
import teamMember11 from "../../../assets/images-main/team/_developer.png";

const OurTeamCollaborators = () => {
  return (
    <div className="container">
      <br />
      <br />
      <div className="section-head section-head-s4 wide-auto-sm text-center">
        <h2
          className="title title-s2 title-s2-alt animated"
          data-animate="fadeInUp"
          data-delay=".1"
        >
          LMN <span className="font-weight-normal">Team</span>
        </h2>
      </div>
      <div className="nk-block nk-block-team-list">
        <div className="row justify-content-center ">
          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".5"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">Enric Bayón</h5>
                <span className="team-position team-position-s3">
                  LMN Spain
                  <br />
                  Delgation
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/enricbay%C3%B3n/"
                      target="_blank"
                    >
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/enricbayon" target="_blank">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-right">
                <div className="team-photo img-anim team-photo-s3">
                  <img
                    style={{
                      borderRadius: "10px",
                      height: "205px",
                      width: "170px",
                    }}
                    src={teamMember8}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>25+ years in Comm. Industry</li>
                  <li>LMN Spainsh RR.PP.</li>
                  <li>LMN Public Delegate</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".5"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">Cristina J. Clos</h5>
                <span className="team-position team-position-s3">
                  LMN
                  <br />
                  Press Manager
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/cristina-juan-clos/"
                      target="_blank"
                    >
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/cristinajuanc" target="_blank">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-right">
                <div className="team-photo img-anim team-photo-s3">
                  <img
                    style={{
                      borderRadius: "10px",
                      height: "205px",
                      width: "170px",
                    }}
                    src={teamMember7}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>7+ years in Corporate's Communication</li>
                  <li>LMN Content Creator</li>
                  <li>Communication Expert</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".5"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">Adrian Rodríguez</h5>
                <span className="team-position team-position-s3">
                  Social Media <br />
                  Manager
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/adrianjtrp/"
                      target="_blank"
                    >
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/adrian_rdrgz" target="_blank">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-right">
                <div className="team-photo img-anim team-photo-s3">
                  <img
                    style={{
                      borderRadius: "10px",
                      height: "205px",
                      width: "170px",
                    }}
                    src={teamMember6}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>5+ years in Community Management</li>
                  <li>LMN Content Creator</li>
                  <li>Telegram Moderator</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".5"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">Juan Berlanga</h5>
                <span className="team-position team-position-s3">
                  Audio Visual <br />
                  Director
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/juan-berlanga-tarazona-74895b46"
                      target="_blank"
                    >
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>

                  {/* <li>
                    <a href="#">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="team-right">
                <div className="team-photo img-anim team-photo-s3">
                  <img
                    style={{
                      borderRadius: "10px",
                      height: "205px",
                      width: "170px",
                    }}
                    src={teamMember4}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>10+ years in audio visual expericences</li>
                  <li>+50 Projects Illustrated</li>
                  <li>Create, Share & Smile</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".5"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">Nuno Vasoncelos</h5>
                <span className="team-position team-position-s3">
                  LMN
                  <br />
                  Expansion
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/enricbay%C3%B3n/"
                      target="_blank"
                    >
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/enricbayon" target="_blank">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-right">
                <div className="team-photo img-anim team-photo-s3">
                  <img
                    style={{
                      borderRadius: "10px",
                      height: "205px",
                      width: "170px",
                    }}
                    src={teamMember9}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>20+ years in Global Relations</li>
                  <li>International Delegate</li>
                  <li>Influencers Manager</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".5"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">Miguel A. Lorenzo</h5>
                <span className="team-position team-position-s3">
                  Youtuber <br />
                  LMN Academy
                </span>
                <ul className="team-social team-social-s2">
                  {/* <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li> */}

                  <li>
                    <a href="https://twitter.com/imTheRealMigu" target="_blank">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-right">
                <div className="team-photo img-anim team-photo-s3">
                  <img
                    style={{
                      borderRadius: "10px",
                      height: "205px",
                      width: "170px",
                    }}
                    src={teamMember5}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>+5 years in Blockchain Universe</li>
                  <li>LMN Content Creator</li>
                  <li>Cryptocurrency Expert</li>
                </ul>
              </div>
            </div>
            <br />
            <br />
          </div>

          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".5"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">Borja Lozano</h5>
                <span className="team-position team-position-s3">
                  Youtuber <br />
                  LMN Academy
                </span>
                <ul className="team-social team-social-s2">
                  {/* <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li> */}

                  <li>
                    <a href="" target="_blank">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-right">
                <div className="team-photo img-anim team-photo-s3">
                  <img
                    style={{
                      borderRadius: "10px",
                      height: "205px",
                      width: "170px",
                    }}
                    src={teamMember10}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>+4 years in Blockchain Universe</li>
                  <li>LMN Content Creator</li>
                  {/* `<li>DeFi Expert</li>` */}
                </ul>
              </div>
            </div>
            <br />
            <br />
          </div>

          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".5"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">Carlos Carusso</h5>
                <span className="team-position team-position-s3">
                  Developer <br />
                </span>
                <ul className="team-social team-social-s2">
                  {/* <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li> */}

                  <li>
                    <a href="" target="_blank">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-right">
                <div className="team-photo img-anim team-photo-s3">
                  <img
                    style={{
                      borderRadius: "10px",
                      height: "205px",
                      width: "170px",
                    }}
                    src={teamMember11}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>+15 years in Enterprise Developing</li>
                  <li>LMN Developer Advisor</li>
                  {/* <li></li> */}
                </ul>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCollaborators;
