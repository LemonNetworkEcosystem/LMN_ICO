import React, { useEffect, useState } from "react";
import { Modal, Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
// import lemonLogo from "../../../../assets/images-main/lemon-logo.png";
import lemonLogo from "../../../../assets/images-main/LMN.png";
// import lemonLogo from "../../../../assets/images-main/lmn.png";
import EWT from "../../../../assets/images-main/EWT.png";
import { ToastContainer, toast } from "react-toastify";
import LemonPopUp from "../../../../assets/images-main/lemon-popup.png";

import Web3 from "web3";
import ICO from "../../../../abis/ICO.json";

const {
  setIntervalAsync,
  clearIntervalAsync,
} = require("set-interval-async/fixed");

const HeaderModal = ({
  show,
  setShow,
  quantity,
  setQuantity,
  successShow,
  setSuccessShow,
  success,
  setSuccess,
}) => {
  const [inputChange, setInputChange] = useState(0);
  const [price, setPrice] = useState(0);
  const [buyButton, setBuyButton] = useState(true);
  const notifyModal = () =>
    toast.success(" You bought succesfully!", {
      icon: <img src={lemonLogo} alt="" />,
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const error_notifyModal = (e) => {
    let errorMsg = "";

    let dateStart = new Date(1636930800 * 1000); //new Date(1636930800 * 1000); ✅ // new Date(epocsStart * 1000);

    let dateEndPH1 = new Date(1637276399 * 1000); //new Date(1637276399 * 1000); ✅
    let dateEndID1 = new Date(1637449200 * 1000); //new Date(1637449200 * 1000); ✅

    let dateEndPH2 = new Date(1637794799 * 1000); //new Date(1637794799 * 1000); ✅
    let dateEndID2 = new Date(1637967600 * 1000); //new Date(1637967600 * 1000); ✅

    let dateEndPH3 = new Date(1638658799 * 1000); //new Date(1638658799 * 1000); ✅
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
      //  console.log("Considering DIFF From Phase ---> PreIco");
      errorMsg = "Wait until ICO Starts";
    } else if (differenceStart < 0 && differencePhase1 > 0) {
      //! PHASE 1
      //  console.log("Considering DIFF From Phase ---> PHASE 1");
      errorMsg = "Network Congested, Try Again";
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 > 0
    ) {
      //! PHASE 1--2
      //  console.log("Considering DIFF From Phase ---> IDLE 1");
      errorMsg = "ICO is on IDLE Phase";
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 > 0
    ) {
      //! PHASE 2
      //  console.log("Considering DIFF From Phase ---> PHASE 2");
      errorMsg = "Network Congested, Try Again";
    } else if (
      differenceStart < 0 &&
      differencePhase1 < 0 &&
      differencePhaseID1 < 0 &&
      differencePhase2 < 0 &&
      differencePhaseID2 > 0
    ) {
      //! PHASE 2--3
      //  console.log("Considering DIFF From Phase ---> IDLE 2");
      errorMsg = "ICO is on IDLE Phase";
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
      errorMsg = "Network Congested, Try Again";
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
      errorMsg = "ICO is Finished";
    }
    // if(difference >=0)

    toast.error(errorMsg, {
      icon: <img src={lemonLogo} alt="" />,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const options = [{ value: "ewt", label: "EWT" }];

  // const startTime = new Date(1635631199 * 1000); // 1636930800
  // const phaseOneEnd = new Date(1637276399 * 1000);
  // const phaseTwoEnd = new Date(*1000);
  // const phaseThreeEnd = new Date(*1000);

  const getBlockData = async () => {
    // console.log("IAM GETTING SHOOT -->");
    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.reload();
    });
    if (typeof window.ethereum !== "undefined") {
      // console.log(" GETTING BY ");
      const web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(async function () {
          // User has allowed account access to DApp...
          const netId = await web3.eth.net.getId();

          const ICO_Contract = new web3.eth.Contract(
            ICO.abi,
            ICO.networks[netId].address
          );

          let rate = await ICO_Contract.methods.getCurrentRate().call();
          // console.log(rate);
          // console.log(rate);
          // console.log(rate);
          // console.log(`This is ICO rate: ${rate} LMN (per 1 EWT)`);
          // console.log(`This is LMN : ${1 / rate} EWT/LMN`);
          setPrice((1 / rate).toFixed(8));

          // this.setState({
          //   account: accounts[0],
          //   balance: web3.utils.fromWei(balance),

          //   //* Progra Globals
          //   web3: web3,
          //   // netId: netId,
          // });
        });
      } catch (e) {
        // User has denied account access to DApp...
      }

      //load contracts
    } else {
      window.alert("Please install MetaMask");
    }
  };

  const doStuff = async () => {
    //! ERRROR
    // window.ethereum.on("accountsChanged", function (accounts) {
    //   window.location.reload();
    // });
    // if (typeof window.ethereum !== "undefined") {
    try {
      const web3 = new Web3(window.ethereum);
      // User has allowed account access to DApp...
      const netId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();

      const ICO_Contract = new web3.eth.Contract(
        ICO.abi,
        ICO.networks[netId].address
      );
      let rate = await ICO_Contract.methods
        .getCurrentRate()
        .call({ from: accounts[0] });
      // console.log(rate);
      // console.log(rate);
      // console.log("Passing by Modal");
      // console.log(rate, isNaN(rate));
      // console.log(typeof parseInt(rate));
      // let start = await ICO_Contract.methods.startTime().call();
      // let now = Date.now();
      // let dif = startTime - now;
      // if (dif > 0) {
      //   rate = 40;
      // }
      // let remain = start - now;
      // console.log(`This is ICO rate: ${rate} LMN (per 1 EWT)`);
      // console.log(`This is LMN : ${1 / rate} EWT/LMN`);
      if (isNaN(parseInt(rate)) != true) {
        setPrice((1 / rate).toFixed(8));
        return parseInt(rate);
      } else {
        return "RESP is NaN in MODAL";
      }
    } catch (e) {
      console.log(e);
      return "Nan";
    }

    // }
  };

  if (quantity < 0) {
    setQuantity(0);
  }

  if (quantity === 0) {
    setSuccess(false);
  }

  const buyError = () => {
    setQuantity(quantity);
  };

  // Price of one Lemonoid Euru

  setQuantity(inputChange);

  const handleClose = async () => {
    setShow(false);
    setQuantity(0);
  };
  const handleChange = (e) => {
    setInputChange(e.target.value);
  };
  const buy = async () => {
    // setShow(true);
    quantity = parseFloat(quantity).toFixed(18);
    setQuantity(quantity);
    // console.log(quantity);
    // console.log(quantity);
    // console.log(quantity);
    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.reload();
    });
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      const gasPrice = new web3.utils.toBN("99999");
      const gas = new web3.utils.BN("8000000");

      setBuyButton(false);
      try {
        // User has allowed account access to DApp...
        window.ethereum.enable().then(async function () {
          const netId = await web3.eth.net.getId();
          const accounts = await web3.eth.getAccounts();

          const ico = new web3.eth.Contract(
            ICO.abi,
            ICO.networks[netId].address
          );
          // console.log(accounts[0]);

          try {
            await ico.methods.buyTokens(accounts[0]).send({
              from: accounts[0],
              value: web3.utils.toWei(quantity),
              gas: gas,
              gasPrice: gasPrice,
            });
            //
            notifyModal();
            setBuyButton(true);
          } catch (e) {
            setBuyButton(true);
            error_notifyModal(e);
            console.log(e);
          }
        });
      } catch (e) {
        setBuyButton(true);
        error_notifyModal(e);
        console.log(e);
      }
      //! Resultat de la compra
    }
    // setSuccess(true);
    // setSuccessShow(true);
    //* El que pasa post Compra
    setQuantity(0);
  };

  useEffect(() => {
    const timer = setIntervalAsync(async () => {
      const resp = await doStuff();
      if (isNaN(resp)) {
        delete timer.interval;
        await clearIntervalAsync(timer);
        console.log("stopped!");
      }
    }, 6000);
    return async () => await clearIntervalAsync(timer);
  }, []);

  // let timer = setIntervalAsync(async () => {
  //   await doStuff().then(async (resp) => {
  //     console.log(resp);
  //     if (isNaN(resp)) {
  //       (async () => {
  //         delete timer.interval;
  //         await clearIntervalAsync(timer);
  //         console.log("Stopped!");
  //       })();
  //     }
  //   });
  // }, 65000);

  useEffect(async () => {
    await getBlockData();
  }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Header>
          <Modal.Title style={{ color: "white" }}>
            RESERVE{" "}
            <b>
              {" "}
              <img style={{ width: "55px" }} src={lemonLogo} alt="" />
            </b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body as="div">
          <Row
            className="d-flex justify-content-center align-items-center row w-100 mx-1 mr-5 my-3"
            style={{ fontSize: "15px" }}
          >
            <Col
              xs={10}
              md={6}
              lg={5}
              xl={10}
              className="pb-4 pt-1 px-md-4 bg-white"
            >
              <ToastContainer limit={1} />
              <Form
                className="text-start text-uppercase d-flex flex-column align-items-center justify-content-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    className="small text-secondary m-0"
                    style={{ letterSpacing: "1px" }}
                  >
                    Amount of
                    <font color="purple">
                      <b> EWT </b>
                    </font>
                    to exchange
                  </Form.Label>
                  <br />
                  <br />
                  <div className="form-input d-flex align-items-center">
                    <Form.Control
                      className=" border-0 fw-bolder rounded-pill"
                      size="lg"
                      type="number"
                      step="any"
                      min="0"
                      value={inputChange}
                      style={{
                        background: "#dee2e6",
                        height: "60px",
                        boxShadow: "none",
                        width: "220px",
                      }}
                      onChange={handleChange}
                    />
                    <span
                      style={{
                        position: "absolute",
                        justifySelf: "flex-end",
                        marginLeft: "160px",
                      }}
                    >
                      <img src={EWT} style={{ width: "25px" }} />
                    </span>
                  </div>
                  {/* <br /> */}
                  {/* <Form.Label
                    className="small text-secondary m-0"
                    style={{ letterSpacing: "1px" }}
                  >
                    Select a payement Method
                  </Form.Label>
                  <Select options={options} /> */}
                </Form.Group>
                <div
                  className="text-secondary small fs-6 pb-3 text-nowrap text-bold mt-5"
                  style={{
                    letterSpacing: "0px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "220px",
                  }}
                >
                  <span>
                    Estim <b>LMN</b>:
                  </span>
                  {quantity == 0 ? (
                    <span>
                      <font size="+1">0.0 </font>

                      <img style={{ width: "20px" }} src={lemonLogo} alt="" />
                    </span>
                  ) : (
                    <span>
                      <font size="+1">
                        {(quantity / price) % 2 == 0
                          ? (quantity / price).toFixed(2)
                          : (quantity / price).toFixed(5)}{" "}
                      </font>

                      <img style={{ width: "20px" }} src={lemonLogo} alt="" />
                    </span>
                  )}
                </div>
                <div
                  className=" text-secondary small fs-6 pb-3 text-nowrap text-bold"
                  style={{
                    letterSpacing: "0px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "220px",
                  }}
                >
                  <span>
                    <b>LMN</b> Price:
                  </span>
                  <span>
                    <font size="+1">
                      <b> {price} </b>
                    </font>
                    <b>
                      <img style={{ width: "12px" }} src={EWT} alt="" />
                      /
                      <img style={{ width: "15px" }} src={lemonLogo} alt="" />
                    </b>
                  </span>
                </div>

                <br />
                <span className="d-flex justify-content-center">
                  {buyButton ? (
                    <Button
                      variant=""
                      style={{
                        background: "rgb(108 202 28)",
                        boxShadow: "none",
                        border: "none",
                      }}
                      className="btn px-4 py-2 rounded-pill text-black fw-bold fs-1"
                      type="submit"
                      //! BUY TOKENS
                      onClick={buy}
                    >
                      <span className="title-thin">Reserve. </span>
                      <span> LMN </span>
                    </Button>
                  ) : (
                    <Button
                      variant=""
                      style={{
                        background: "rgb(108 202 28)",
                        boxShadow: "none",
                        border: "none",
                      }}
                      className="btn px-4 py-2 rounded-pill text-black fw-bold fs-1"
                      type="submit"
                      //! BUY TOKENS
                    >
                      <span className="title-thin">Pending.</span>
                      <span>Tx</span>
                    </Button>
                  )}
                </span>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="rounded-pill"
            onClick={handleClose}
          >
            Wait
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HeaderModal;
