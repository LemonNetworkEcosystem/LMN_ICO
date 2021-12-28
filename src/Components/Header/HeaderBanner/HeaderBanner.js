import React, { useState, useEffect } from "react";
import HeaderModal from "./HeaderModal/HeaderModal";

import Web3 from "web3";
import ICO from "../../../abis/ICO.json";

import { ProgressBar, Step } from "react-step-progress-bar";
// import LogoMark from "../../../assets/images-main/lemon-logo.png";
import LogoMark from "../../../assets/images-main/LMN.png";
import EWT from "../../../assets/images-main/EWT.png";

import phase1_b from "../../../assets/images-main/phases/phase1_b.png";
import phase1_n from "../../../assets/images-main/phases/phase1_n.png";

import phase2_b from "../../../assets/images-main/phases/phase2_b.png";
import phase2_n from "../../../assets/images-main/phases/phase2_n.png";

import phase3_b from "../../../assets/images-main/phases/phase3_b.png";
import phase3_n from "../../../assets/images-main/phases/phase3_n.png";

import seed from "../../../assets/images-main/seed.png";
import seed_full from "../../../assets/images-main/seed_full.png";

import lmn_network from "../../../assets/images-main/lemon-popup.png";
import "react-step-progress-bar/styles.css";
import { Document, Page } from "react-pdf";
import { ToastContainer, toast } from "react-toastify";

const {
  setIntervalAsync,
  clearIntervalAsync,
} = require("set-interval-async/fixed");

const { links } = require("../../../meta/links.js");

const HeaderBanner = ({ quantity, setQuantity }) => {
  let dateStart = new Date(1636930800 * 1000); //new Date(1636930800 * 1000); ✅ // new Date(epocsStart * 1000);

  let dateEndPH1 = new Date(1637276399 * 1000); //new Date(1637276399 * 1000); ✅
  let dateEndID1 = new Date(1637449200 * 1000); //new Date(1637449200 * 1000); ✅

  let dateEndPH2 = new Date(1637794799 * 1000); //new Date(1637794799 * 1000); ✅
  let dateEndID2 = new Date(1637967600 * 1000); //new Date(1637967600 * 1000); ✅

  let dateEndPH3 = new Date(1638658799 * 1000); //new Date(1638658799 * 1000); ✅

  const calculateTimeLeft = () => {
    let difference;
    let year = new Date().getFullYear();

    let _now = new Date();

    let differenceStart = dateStart - _now;
    let differencePhase1 = dateEndPH1 - _now;
    let differencePhase2 = dateEndPH2 - _now;
    let differencePhase3 = dateEndPH3 - _now;
    let differencePhaseID1 = dateEndID1 - _now;
    let differencePhaseID2 = dateEndID2 - _now;

    if (differenceStart > 0) {
      difference = differenceStart;
      //  console.log("Considering DIFF From Phase ---> PreIco");
    } else if (differenceStart < 0 && differencePhase1 > 0) {
      //! PHASE 1
      difference = differencePhaseID1;
      //  console.log("Considering DIFF From Phase ---> PHASE 1");
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 > 0
    ) {
      //! PHASE 1--2
      difference = differencePhaseID1;
      //  console.log("Considering DIFF From Phase ---> IDLE 1");
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 > 0
    ) {
      //! PHASE 2
      difference = differencePhase2;
      //  console.log("Considering DIFF From Phase ---> PHASE 2");
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 < 0 &&
      differencePhaseID2 > 0
    ) {
      //! PHASE 2--3
      difference = differencePhaseID2;
      //  console.log("Considering DIFF From Phase ---> IDLE 2");
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 < 0 &&
      differencePhaseID2 < 0 &&
      differencePhase3 > 0
    ) {
      //! PHASE 3
      difference = differencePhase3;
      //  console.log("Considering DIFF From Phase ---> PHASE 3");
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 < 0 &&
      differencePhaseID2 < 0 &&
      differencePhase3 < 0
    ) {
      //! ICO ENDED
      difference = new Date() - new Date();
      //  console.log("Considering DIFF From Phase ---> END ICO ");
    }
    // if(difference >=0)
    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  const calculatePhase = () => {
    let phase = "";
    let year = new Date().getFullYear();

    let _now = new Date();

    let differenceStart = dateStart - _now;
    let differencePhase1 = dateEndPH1 - _now;
    let differencePhase2 = dateEndPH2 - _now;
    let differencePhase3 = dateEndPH3 - _now;
    let differencePhaseID1 = dateEndID1 - _now;
    let differencePhaseID2 = dateEndID2 - _now;

    if (differenceStart > 0) {
      //  console.log("Considering DIFF From Phase ---> PreIco");
      phase = "PRE ICO";
    } else if (differenceStart < 0 && differencePhase1 > 0) {
      //! PHASE 1

      // difference = differencePhaseID1;
      //  console.log("Considering DIFF From Phase ---> PHASE 1");
      phase = "ICO PHASE 1 - SOLD OUT";
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 > 0
    ) {
      //! PHASE 1--2
      //  console.log("Considering DIFF From Phase ---> IDLE 1");
      phase = "ICO PHASE 1 - SOLD OUT";
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 > 0
    ) {
      //! PHASE 2
      //  console.log("Considering DIFF From Phase ---> PHASE 2");
      phase = "ICO PHASE 2";
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 < 0 &&
      differencePhaseID2 > 0
    ) {
      //! PHASE 2--3
      //  console.log("Considering DIFF From Phase ---> IDLE 2");
      phase = "ICO IDLE";
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 < 0 &&
      differencePhaseID2 < 0 &&
      differencePhase3 > 0
    ) {
      //! PHASE 3
      //  console.log("Considering DIFF From Phase ---> PHASE 3");
      phase = "ICO PHASE 3";
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 < 0 &&
      differencePhaseID2 < 0 &&
      differencePhase3 < 0
    ) {
      //! ICO ENDED
      //  console.log("Considering DIFF From Phase ---> END ICO ");
      phase = "ICO ENDED";
    }
    // if(difference >=0)
    return phase;
  };

  const analPhase = () => {
    if (phase === "PRE ICO") {
      return "starts in:";
    } else if (phase === "ICO PHASE 1 - SOLD OUT") {
      return "Phase 1 is SOLD OUT, next phase starts in:";
    } else if (phase === "ICO IDLE") {
      return ", next phase starts in:";
    } else if (phase === "ICO PHASE 2") {
      return "Phase 2, ends in:";
    } else if (phase === "ICO PHASE 3") {
      return "Phase 3, ends in:";
    } else if (phase === "ICO ENDED") {
      return "ended";
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [phase, setPhase] = useState(calculatePhase());
  const [showModal, setShowModal] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [lmn_selled, setLmn_selled] = useState(0);
  const [percentageSold, setPercentageSold] = useState(0);
  const [sentence, setSentence] = useState(analPhase());
  const [stop, setStop] = useState(false);
  const startTime = new Date(1636930800 * 1000); // 1636930800 ICO START TIME

  const notifyModal = () => {
    toast.info("Wait for next phase", {
      icon: <img src={lmn_network} alt="" />,
      position: "bottom-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const getBlockData = async () => {
    console.log("IAM GETTING SHOOT -->");
    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.reload();
    });
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(async function () {
          // User has allowed account access to DApp...
          const netId = await web3.eth.net.getId();
          const accounts = await web3.eth.getAccounts();

          const ICO_Contract = new web3.eth.Contract(
            ICO.abi,
            ICO.networks[netId].address
          );

          // const now = Date.now();
          // console.log(now);
          // console.log(startTime);
          // let resta = startTime - now;
          // if (resta > 0) {
          //   setPhase("PRE ICO");
          //   setSentence(" starts in:");
          // } else {
          //   setPhase("LMN ICO");
          //   setSentence("Phase 1 ends in:");
          // }
          // console.log(resta);
          // console.log(resta);

          let tokenSold = await ICO_Contract.methods.tokensSold().call({
            from: accounts[0],
          });
          setLmn_selled(
            web3.utils
              .fromWei(tokenSold)
              .toString()
              .replace(/\B (?=(\d{3})+(?!\d))/g, ",")
          );
        });
      } catch (e) {
        console.log("OMG ...");
      }

      //load contracts
    } else {
      window.alert("Please install MetaMask");
    }
  };
  // // const [blockchain, setBlockchain] = useState(getBlockData());

  const doStuff = async () => {
    //! ERRROR
    const web3 = new Web3(window.ethereum);
    try {
      const netId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();

      const ICO_Contract = new web3.eth.Contract(
        ICO.abi,
        ICO.networks[netId].address
      );

      let tokenSold = await ICO_Contract.methods
        .tokensSold()
        .call({ from: accounts[0] });
      // setLmn_selled(tokenSold);
      setPercentageSold((web3.utils.fromWei(tokenSold) / 7500000) * 100);
      // console.log(tokenSold, isNaN(tokenSold));
      // console.log(tokenSold);
      // console.log("Pasing through BANNER");

      // console.log(typeof parseInt(tokenSold));

      if (isNaN(parseInt(tokenSold)) != true) {
        setLmn_selled(
          web3.utils
            .fromWei(tokenSold)
            .toString()
            .replace(/\B (?=(\d{3})+(?!\d))/g, ",")
        );
        return parseInt(tokenSold);
      } else {
        return "Not a Number";
      }
    } catch (e) {
      console.log("SHOULD STOP BANNER!");

      console.log(e.toString());
      return "Nan";
    }
  };

  useEffect(() => {
    const time = setIntervalAsync(async () => {
      const resp = await doStuff();
      if (isNaN(resp)) {
        delete time.interval;
        await clearIntervalAsync(time);
        console.log("stopped!");
      }
    }, 6000);
    return async () => await clearIntervalAsync(time);
  }, []);

  useEffect(async () => {
    await getBlockData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  useEffect(() => {
    setTimeout(() => {
      setPhase(calculatePhase());
      setSentence(analPhase());
    }, 1000);
  });

  const withdrawMyLemons = async () => {
    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.reload();
    });

    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      try {
        // User has allowed account access to DApp...
        window.ethereum.enable().then(async function () {
          const netId = await web3.eth.net.getId();
          const accounts = await web3.eth.getAccounts();
          console.log(accounts[0]);
          const ICO_Contract = new web3.eth.Contract(
            ICO.abi,
            ICO.networks[netId].address
          );
          const gasPrice = new web3.utils.BN("6666");
          const gas = new web3.utils.BN("6000000");

          const resp = await ICO_Contract.methods.withdrawTokens().send({
            from: accounts[0],
            gas: gas,
            gasPrice: gasPrice,
          });

          console.log(resp);
        });
      } catch (e) {
        console.log("WITHDRAWAL ERROR ");
        console.log(e.toString());
      }
    }
  };

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
                      <span className="font-weight-bold">Art</span> in our
                      ecosystem
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
                    {phase}
                  </span>

                  {phase === "ICO ENDED" ? (
                    <h4
                      className="title title-md pdt-m animated"
                      data-animate="fadeInUp"
                      data-delay="1.55"
                    >
                      Withdraw your <span className="title-semibold">LMN</span>{" "}
                      here
                    </h4>
                  ) : (
                    <h4
                      className="title title-md pdt-m animated"
                      data-animate="fadeInUp"
                      data-delay="1.55"
                    >
                      Get your <span className="title-semibold">LEMON</span>s
                      here
                    </h4>
                  )}
                </div>
                <div
                  className="token-status bg-white token-status-s6 shadow-dark round mb-5 animated"
                  data-animate="fadeInUp"
                  data-delay="1.65"
                >
                  <h6 className="title title-xs-alt fw-4 tc-default">
                    <span className="title-semibold">LMN ICO </span>
                    {sentence}
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
                        {parseFloat(lmn_selled) === 0
                          ? 0
                          : parseFloat(lmn_selled)
                              .toFixed(2)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        <img src={LogoMark} alt="" style={{ height: "25px" }} />
                      </li>
                      <li></li>
                      <li>
                        7,500,000{" "}
                        <img src={LogoMark} alt="" style={{ height: "25px" }} />
                      </li>
                    </ul>
                    <div style={{ marginBottom: "80px", color: "black" }}>
                      <ProgressBar
                        percent={percentageSold}
                        height={30}
                        unfilledBackground="#dfffcc"
                        filledBackground="linear-gradient(to right, #a9ff76, #24a400)"
                        hasStepZero="false"
                        stepPositions={[23, 41, 83, 97]} //26.6 , 74.4, 97.4
                      >
                        <Step position={0}>
                          {({ accomplished }) => (
                            <img
                              style={{
                                filter: `grayscale(${accomplished ? 80 : 80}%)`,
                              }}
                              src={accomplished ? phase1_b : phase1_n}
                              width="30 px"
                            />
                          )}
                        </Step>
                        <Step position={1}>
                          {({ accomplished }) => (
                            <img
                              style={{
                                filter: `grayscale(${accomplished ? 0 : 60}%)`,
                              }}
                              src={accomplished ? phase2_b : phase2_n}
                              width="30 px"
                            />
                          )}
                        </Step>
                        <Step position={2}>
                          {({ accomplished }) => (
                            <img
                              style={{
                                filter: `grayscale(${accomplished ? 0 : 100}%)`,
                              }}
                              src={phase3_n}
                              width="30px"
                            />
                          )}
                        </Step>
                        <Step position={3}>
                          {({ accomplished }) => (
                            <img
                              src={accomplished ? seed : seed_full}
                              width="20px"
                            />
                          )}
                        </Step>
                      </ProgressBar>
                    </div>
                  </div>
                  <ul className="cpn-links flex-wrap flex-sm-nowrap cpn-links-s1 pt-0 pb-3 pb-sm-0">
                    <li className="order-sm-0">
                      <a
                        href={links.video_academy}
                        className="link link-xs link-light video-popup"
                      >
                        <em className="link-icon fas fa-play"></em>
                        <span
                          style={{ whiteSpace: "break-spaces", width: "7vw" }}
                        >
                          Learn about LEMON
                        </span>
                      </a>
                    </li>
                    <li className="order-sm-0 order-last w-100">
                      {phase === "ICO ENDED" ? (
                        <a
                          className="btn btn-round btn-primary btn-lg gradient-banner-btn"
                          onClick={async () => {
                            await withdrawMyLemons();
                          }}
                        >
                          Withdraw LMN
                        </a>
                      ) : phase === "ICO IDLE" ||
                        phase === "ICO PHASE 1 - SOLD OUT" ? (
                        <a
                          className="btn btn-round btn-primary btn-lg gradient-banner-btn"
                          onClick={() => {
                            notifyModal();
                          }}
                        >
                          Buy LMN
                        </a>
                      ) : (
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
                      )}
                    </li>
                    <HeaderModal
                      success={success}
                      setSuccess={setSuccess}
                      successShow={successShow}
                      setSuccessShow={setSuccessShow}
                      show={showModal}
                      setShow={setShowModal}
                      quantity={quantity}
                      setQuantity={setQuantity}
                    />

                    <li className="order-sm-0">
                      <a
                        href={links.whitepaper}
                        className="link link-xs link-light video-popup"
                      >
                        <em className="link-icon fas fa-file"></em>
                        <span
                          style={{ whiteSpace: "break-spaces", width: "7vw" }}
                        >
                          LEMON Whitepaper
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="icon-list fz-7 pt-3 tc-alternet">
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
                  </ul>
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
