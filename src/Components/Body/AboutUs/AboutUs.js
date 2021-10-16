import React from "react";
import "./AboutUs.css";
//images
import aboutUsImg from "../../../assets/images-main/lavender/gfx-x-light.png";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="nk-block nk-block-text-wrap">
        <div className="row align-items-center gutter-vr-30px">
          <div className="col-lg-5 order-last">
            <div className="nk-block-img-s1 mb-5 mb-lg-0 ">
              <img
                className="img-animation-rotate"
                src={aboutUsImg}
                alt="app"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="nk-block-text nk-block-shape-s1 bg-theme-alt animated"
              data-animate="fadeIn"
              data-delay=".1"
            >
              <h6 className="animated" data-animate="fadeInUp" data-delay=".2">
                ABOUT{" "}
                <strong className="font-weight-bold">LEMONET Network</strong>
              </h6>
              <h3
                className="title animated"
                data-animate="fadeInUp"
                data-delay=".3"
              >
                <span className="title-thin">Hold </span>LEMON{" "}
                <span className="title-thin">& make</span> LEMONADE
                <span className="title-thin">
                  {" "}
                  by supporting Lemon Protocol
                </span>
              </h3>
              <h6
                className="animated font-weight-bold"
                data-animate="fadeInUp"
                data-delay=".2"
              >
                Upload pictures, Share them and start Earn.
              </h6>
              <p className="animated" data-animate="fadeInUp" data-delay=".4">
                Lemon Network is based on Blockchain Tech & Distributed Cloud
                Computing, its protocol allows users to create NFT (ERC-721) of
                every picture they publish to Lemonnet.We want to bring users
                access to create ART from their pictures and let people value
                and cuantify that value. Rewarding content publishers with
                tokens. As simple as it sounds give your friends, family and the
                world your opinion and earn money from it.
              </p>
              <h6
                className="animated font-weight-bold"
                data-animate="fadeInUp"
                data-delay=".2"
              >
                Sounds cool! But where is the value?
              </h6>
              <p className="animated" data-animate="fadeInUp" data-delay=".5">
                When a user likes a picture the like will automatically be
                converted to an ERC-20, which can be used in the Lemon Network
                Ecosystem or be traded outside. To ensure that this interactions
                are done fairly, every user is given a limited amount of likes
                that will be recharged after certain time period. This
                limitation will define how users spend their likes.{" "}
                <strong>Don't panic!</strong> This does not mean that it is an
                inflationary ecosystem LMN has a total supply of 7.5 M. So you
                will not be buying likes in this ICO, you are buying the most
                valued token of the whole ecosystem.
              </p>
              <h6
                className="animated font-weight-bold"
                data-animate="fadeInUp"
                data-delay=".2"
              >
                Then... What is LMN for?
              </h6>
              <p className="animated" data-animate="fadeInUp" data-delay=".6">
                {" "}
                With Lemon you will be able to upload your content and sign your
                NFTs (your content) with the most profitable Smart Contracts.
                Which means: all your likes are converted to an ERC-20, you earn
                royalties from them, etc.
              </p>
              <div
                className="nk-block-note animated"
                data-animate="fadeInUp"
                data-delay=".7"
              >
                <em className="icon ti ti-rocket"></em>
                <p>
                  Lemon Network is constantly looking for new partnerships. The
                  Lemon Network Ecosystem while count with multiple DeFi
                  projects supporters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
