import React, { useState, useEffect } from "react";
import HeaderModal from "./HeaderModal/HeaderModal";

import Web3 from "web3";
import ICO from "../../../abis/ICO.json";

// import LogoMark from "../../../assets/images-main/lemon-logo.png";
import LogoMark from "../../../assets/images-main/LMN.png";
import EWT from "../../../assets/images-main/EWT.png";

import { Document, Page } from "react-pdf";

const HeaderBanner = ({ quantity, setQuantity }) => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let epocs = 1636930800;
    let date = new Date(epocs * 1000);

    let difference = date - new Date();

    // if(difference >=0)
    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showModal, setShowModal] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [lmn_selled, setLmn_selled] = useState(0);
  const [percentageSold, setPercentageSold] = useState(0);

  // const getBlockData = async () => {
  //   console.log("IAM GETTING SHOOT -->");
  //   window.ethereum.on("accountsChanged", function (accounts) {
  //     window.location.reload();
  //   });
  //   if (typeof window.ethereum !== "undefined") {
  //     const web3 = new Web3(window.ethereum);
  //     try {
  //       window.ethereum.enable().then(async function () {
  //         // User has allowed account access to DApp...
  //         const netId = await web3.eth.net.getId();

  //         const ICO_Contract = new web3.eth.Contract(
  //           ICO.abi,
  //           ICO.networks[netId].address
  //         );

  //         let tokenSold = await ICO_Contract.methods.tokensSold().call();
  //         setLmn_selled(web3.utils.fromWei(tokenSold));
  //         setPercentageSold((web3.utils.fromWei(tokenSold) / 7500000) * 100);
  //         // this.setState({
  //         //   account: accounts[0],
  //         //   balance: web3.utils.fromWei(balance),

  //         //   //* Progra Globals
  //         //   web3: web3,
  //         //   // netId: netId,
  //         // });
  //       });
  //     } catch (e) {
  //       // User has denied account access to DApp...
  //     }

  //     //load contracts
  //   } else {
  //     window.alert("Please install MetaMask");
  //   }
  // };
  // // const [blockchain, setBlockchain] = useState(getBlockData());

  // const doStuff = async () => {
  //   window.ethereum.on("accountsChanged", function (accounts) {
  //     window.location.reload();
  //   });
  //   if (typeof window.ethereum !== "undefined") {
  //     const web3 = new Web3(window.ethereum);
  //     try {
  //       const netId = await web3.eth.net.getId();

  //       const ICO_Contract = new web3.eth.Contract(
  //         ICO.abi,
  //         ICO.networks[netId].address
  //       );

  //       let tokenSold = await ICO_Contract.methods.tokensSold().call();
  //       return web3.utils
  //         .fromWei(tokenSold)
  //         .toString()
  //         .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //     } catch (e) {
  //       console.log(e.toString());
  //     }
  //   }
  // };

  // useEffect(async () => {
  //   await getBlockData();
  //   // await doStuff();
  // }, []);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     setLmn_selled(await doStuff());
  //   }, 1000);
  // });

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="nk-banner">
      <div className="banner banner-single">
        <div className="banner-rounded-bg bg-theme-alt"></div>
        <div className="banner-wrap">
          <div className="container container-z">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 col-xl-10 text-center">
                <div className="banner-caption wide-auto-xl pdb-l pdt-r tc-light d-flex align-items-center justify-content-center flex-column">
                  <div className="cpn-head">
                    <h1
                      className="title title-md animated font-weight-bold"
                      data-animate="fadeInUp"
                      data-delay="1.25"
                    >
                      Lemon Network
                      <br />
                      <span className="title-thin">
                        redesign the concept of Social Networks
                        <br />
                        your content has value for us
                      </span>
                    </h1>
                  </div>
                  <div className="cpn-text cpn-text-s1 cpn-text-center">
                    <p
                      className="lead animated white-p"
                      data-animate="fadeInUp"
                      data-delay="1.35"
                    >
                      Your content is{" "}
                      <span className="font-weight-bold">Art</span>, don’t let
                      others take advantatge
                    </p>
                  </div>
                  <div
                    className="d-flex mt-5 w-50"
                    style={{
                      justifyContent: "space-evenly",
                    }}
                  >
                    <p
                      className="lead ml-4 text-bold animated white-p font-weight-bold"
                      data-animate="fadeInUp"
                      data-delay="1.35"
                    >
                      UPLOAD
                    </p>
                    <p
                      className="lead ml-4 text-bold animated white-p font-weight-bold"
                      data-animate="fadeInUp"
                      data-delay="1.35"
                    >
                      SHARE
                    </p>
                    <p
                      className="lead ml-4 text-bold animated white-p font-weight-bold"
                      data-animate="fadeInUp"
                      data-delay="1.35"
                    >
                      EARN
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-10">
                <div className="tc-light text-center pdb-r">
                  <span
                    className="badge badge-sm badge-warning px-4 animated header-banner-span-round-one"
                    data-animate="fadeInUp"
                    data-delay="1.45"
                  >
                    PRE ICO
                  </span>
                  <h4
                    className="title title-md pdt-m animated"
                    data-animate="fadeInUp"
                    data-delay="1.55"
                  >
                    <span className="title-semibold">LEMON</span> is here
                  </h4>
                </div>
                <div
                  className="token-status bg-white token-status-s6 shadow-dark round mb-5 animated"
                  data-animate="fadeInUp"
                  data-delay="1.65"
                >
                  <h6 className="title title-xs-alt fw-4 tc-default">
                    <span className="title-semibold">LMN ICO </span>starts in:
                  </h6>
                  <div
                    className="countdown-s3 countdown-s5 countdown-large countdown-thin countdown"
                    data-date="2021/08/10"
                  >
                    <div>
                      <span>
                        {timeLeft.days < 10
                          ? "0" + timeLeft.days
                          : timeLeft.days}
                      </span>
                      Days
                    </div>
                    :
                    <div>
                      <span>
                        {timeLeft.hours < 10
                          ? "0" + timeLeft.hours
                          : timeLeft.hours}
                      </span>
                      Hours
                    </div>
                    :
                    <div>
                      <span>
                        {timeLeft.minutes < 10
                          ? "0" + timeLeft.minutes
                          : timeLeft.minutes}
                      </span>
                      Minutes
                    </div>
                    :
                    <div>
                      <span>
                        {timeLeft.seconds < 10
                          ? "0" + timeLeft.seconds
                          : timeLeft.seconds}
                      </span>
                      Seconds
                    </div>
                  </div>
                  <div className="progress-wrap progress-wrap-point">
                    <ul className="list-inline fz-8 w-100 justify-content-between pb-2 pt-4 tc-alternet">
                      <li>
                        0{" "}
                        <img src={LogoMark} alt="" style={{ height: "25px" }} />
                      </li>
                      <li></li>
                      <li>
                        7,500,000{" "}
                        <img src={LogoMark} alt="" style={{ height: "25px" }} />
                      </li>
                    </ul>
                    <div className="progress-bar progress-bar-s2 bg-light-alt progress-bar-md bar-round">
                      <div
                        className="progress-percent progress-percent-s2 bg-theme-accent"
                        //! PERCENTATGE_LMN_SALE
                        data-percent={
                          percentageSold == 0
                            ? percentageSold
                            : percentageSold < 2
                            ? "2"
                            : percentageSold < 10
                            ? "10"
                            : percentageSold
                        }
                        //! PERCENTATGE_LMN_SALE
                        style={{ width: `100%` }}
                      >
                        {percentageSold < 5 ? (
                          <font color="black">{lmn_selled}</font>
                        ) : (
                          <font color="white">{lmn_selled}</font>
                        )}
                      </div>
                      <div
                        className="progress-point tc-alternet"
                        data-point="26.7"
                      >
                        <font color="grey" size="1">
                          {" "}
                          Phase 1
                        </font>
                      </div>
                      <div
                        className="progress-point tc-alternet"
                        data-point="60"
                      >
                        <font color="grey" size="1">
                          {" "}
                          Phase 2
                        </font>
                      </div>
                      <div
                        className="progress-point tc-alternet"
                        data-point="100"
                      >
                        <font color="grey" size="1">
                          {" "}
                          Phase 3
                        </font>
                      </div>
                    </div>
                  </div>
                  <ul className="cpn-links flex-wrap flex-sm-nowrap cpn-links-s1 pt-0 pb-3 pb-sm-0">
                    {/* <li className="order-sm-0">
                      <a
                        href="https://www.youtube.com/watch?v=SSo_EIwHSd4"
                        className="link link-xs link-light video-popup"
                      >
                        <em className="link-icon fas fa-play"></em>
                        <span
                          style={{ whiteSpace: "break-spaces", width: "7vw" }}
                        >
                          Learn more about LEMON
                        </span>
                      </a>
                    </li> */}
                    {/* <li className="order-sm-0 order-last w-100">
                      <a
                        href="#"
                        className="btn btn-round btn-primary btn-lg gradient-banner-btn"
                        onClick={() => {
                          setShowModal(true);
                          setSuccessShow(false);
                          setSuccess(false);
                        }}
                      >
                        Buy LMN
                      </a>
                    </li> */}
                    {/* <HeaderModal
                      success={success}
                      setSuccess={setSuccess}
                      successShow={successShow}
                      setSuccessShow={setSuccessShow}
                      show={showModal}
                      setShow={setShowModal}
                      quantity={quantity}
                      setQuantity={setQuantity}
                    /> */}

                    <li className="order-sm-0">
                      <a
                        href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        className="link link-xs link-light"
                        target="_blank"
                        download
                      >
                        <em className="link-icon fas fa-file"></em>
                        <span
                          style={{ whiteSpace: "break-spaces", width: "7vw" }}
                        >
                          Lemon WhitePaper
                        </span>
                      </a>
                    </li>
                  </ul>
                  {/* <ul className="icon-list fz-7 pt-3 tc-alternet">
                    <li>
                      WE ACCEPT <b>EWT</b>
                    </li>
                    <li>
                      <img
                        className="fas fa-pound-sign"
                        src={EWT}
                        style={{ height: "15px" }}
                      ></img>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nk-ovm ovm-top ovm-h-80 bg-theme-alt d-lg-none"></div>
    </div>
  );
};

export default HeaderBanner;
