import React from "react";
import "./OurTeam.css";
//images
import teamMember1 from "../../../assets/images-main/team/eceo.jpg";
import teamMember2 from "../../../assets/images-main/team/rcto.jpg";
import teamMember3 from "../../../assets/images-main/team/cmo.jpg";
import teamMember6 from "../../../assets/images-main/team/rrss.jpg";
import teamMember4 from "../../../assets/images-main/team/camara.jpg";
import teamMember5 from "../../../assets/images-main/team/youtuber.jpg";

const OurTeam = () => {
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
          LMN <span className="font-weight-normal">Leaders</span>
        </h2>
      </div>
      <div className="nk-block nk-block-team-list">
        <div className="row justify-content-center ">
          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".2"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">Eneko Nicolás</h5>
                <span className="team-position team-position-s3">
                  <b> CEO</b> <br />
                  LMN Founder
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/eneko-nicolas-1b39711b6"
                      target="_blank"
                    >
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/enekonicolas" target="_blank">
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
                    src={teamMember1}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>10+ years in Business</li>
                  <li>Vast exprerience in B2C & B2B related projects</li>
                  <li>Blockchain Investor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-mb-10 col-sm-8 col-md-6 col-xl-4 ">
            <div
              className="team team-s6 animated"
              data-animate="fadeInUp"
              data-delay=".3"
            >
              <div className="team-left">
                <h5 className="team-name title title-sm">
                  Roger <br />
                  Villalba
                </h5>
                <span className="team-position team-position-s3">
                  <b>CTO</b> <br />
                  LMN Dev Lead
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a
                      href="https://es.linkedin.com/in/roger-villalba-fuentes-2a58b7142"
                      target="_blank"
                    >
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/LMNDevs" target="_blank">
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
                    src={teamMember2}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>7+ years in DevOps</li>
                  <li>Cross Platform, Dapps, APIs & Fullstack Developer</li>
                  <li>Blockchain Developer</li>
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
                <h5 className="team-name title title-sm">
                  Rosa <br />
                  Ayari
                </h5>
                <span className="team-position team-position-s3">
                  <b>CMO</b> <br />
                  Marketing Expert
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rosaayari/"
                      target="_blank"
                    >
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/rosaayari" target="_blank">
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
                    src={teamMember3}
                    alt="team"
                  />
                </div>
                <ul className="list list-sm list-dot">
                  <li>10+ years in Digital Marketing</li>
                  <li>Computer Engineer</li>
                  <li>Master in Ux & Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default OurTeam;
