import React, { useEffect, useState } from "react";
import { Modal, Button, Col, Form, Row } from "react-bootstrap";
import EWT from "../../../../assets/images-main/EWT.png";
import LogoMark from "../../../../assets/images-main/LMN.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LemonPopUp from "../../../../assets/images-main/lemon-popup.png";

import Web3 from "web3";
import LMNPurchase from "../../../../abis/LMNPurchase.json";

const {
  setIntervalAsync,
  clearIntervalAsync,
} = require("set-interval-async/fixed");

const LemonadeFinanceModalBuy = ({
  show,
  setShow,

  successShow,
  setSuccessShow,
  success,
  setSuccess,
}) => {
  const [inputChange, setInputChange] = useState(0);
  const [lmnBalanceBuy, setLmnBalanceBuy] = useState(0);

  const [exchangeRate, setExchangeRate] = useState(0);
  const [buying, setBuying] = useState(false);

  const notifyModal = () =>
    toast.success(" You bought succesfully!", {
      icon: <img src={LemonPopUp} alt="" />,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotifyModal = () =>
    toast.error(" Not able to Purchase", {
      icon: <img src={LemonPopUp} alt="" />,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const tokenABI = [
    {
      name: "Transfer",
      inputs: [
        { type: "address", name: "_from", indexed: true },
        { type: "address", name: "_to", indexed: true },
        { type: "uint256", name: "_value", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "Approval",
      inputs: [
        { type: "address", name: "_owner", indexed: true },
        { type: "address", name: "_spender", indexed: true },
        { type: "uint256", name: "_value", indexed: false },
      ],
      anonymous: false,
      type: "event",
    },
    {
      name: "__init__",
      outputs: [],
      inputs: [
        { type: "bytes32", name: "_name" },
        { type: "bytes32", name: "_symbol" },
        { type: "uint256", name: "_decimals" },
        { type: "uint256", name: "_supply" },
      ],
      constant: false,
      payable: false,
      type: "constructor",
    },
    {
      name: "deposit",
      outputs: [],
      inputs: [],
      constant: false,
      payable: true,
      type: "function",
      gas: 74279,
    },
    {
      name: "withdraw",
      outputs: [{ type: "bool", name: "out" }],
      inputs: [{ type: "uint256", name: "_value" }],
      constant: false,
      payable: false,
      type: "function",
      gas: 108706,
    },
    {
      name: "totalSupply",
      outputs: [{ type: "uint256", name: "out" }],
      inputs: [],
      constant: true,
      payable: false,
      type: "function",
      gas: 543,
    },
    {
      name: "balanceOf",
      outputs: [{ type: "uint256", name: "out" }],
      inputs: [{ type: "address", name: "_owner" }],
      constant: true,
      payable: false,
      type: "function",
      gas: 745,
    },
    {
      name: "transfer",
      outputs: [{ type: "bool", name: "out" }],
      inputs: [
        { type: "address", name: "_to" },
        { type: "uint256", name: "_value" },
      ],
      constant: false,
      payable: false,
      type: "function",
      gas: 74698,
    },
    {
      name: "transferFrom",
      outputs: [{ type: "bool", name: "out" }],
      inputs: [
        { type: "address", name: "_from" },
        { type: "address", name: "_to" },
        { type: "uint256", name: "_value" },
      ],
      constant: false,
      payable: false,
      type: "function",
      gas: 110600,
    },
    {
      name: "approve",
      outputs: [{ type: "bool", name: "out" }],
      inputs: [
        { type: "address", name: "_spender" },
        { type: "uint256", name: "_value" },
      ],
      constant: false,
      payable: false,
      type: "function",
      gas: 37888,
    },
    {
      name: "allowance",
      outputs: [{ type: "uint256", name: "out" }],
      inputs: [
        { type: "address", name: "_owner" },
        { type: "address", name: "_spender" },
      ],
      constant: true,
      payable: false,
      type: "function",
      gas: 1025,
    },
    {
      name: "name",
      outputs: [{ type: "bytes32", name: "out" }],
      inputs: [],
      constant: true,
      payable: false,
      type: "function",
      gas: 723,
    },
    {
      name: "symbol",
      outputs: [{ type: "bytes32", name: "out" }],
      inputs: [],
      constant: true,
      payable: false,
      type: "function",
      gas: 753,
    },
    {
      name: "decimals",
      outputs: [{ type: "uint256", name: "out" }],
      inputs: [],
      constant: true,
      payable: false,
      type: "function",
      gas: 783,
    },
  ];
  const options = [{ value: "ewt", label: "EWT" }];

  const handleSaveError = () => {
    setShow(true);
    setSuccess(false);
    setSuccessShow(true);
  };

  // Price of one Lemonoid Euru
  let price = 0.25;

  const handleClose = () => {
    setShow(false);
  };
  const handleChange = (e) => {
    setInputChange(e.target.value);
  };
  const handleSave = () => {
    setShow(false);
    setSuccess(true);
    setSuccessShow(true);
  };

  if (success == true) {
    errorNotifyModal();
  }

  const doStuff = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      // User has allowed account access to DApp...
      const netId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();

      const LmnPurchase = new web3.eth.Contract(
        LMNPurchase.abi,
        LMNPurchase.networks[netId].address
      );

      const tokenAddress = await LmnPurchase.methods
        .token()
        .call({ from: accounts[0] });

      const token = new web3.eth.Contract(tokenABI, tokenAddress);

      let rate = await LmnPurchase.methods.rate().call({ from: accounts[0] });
      console.log(rate);
      setExchangeRate(rate);
      let balance = await token.methods
        .balanceOf(LMNPurchase.networks[netId].address)
        .call({ from: accounts[0] });

      balance = web3.utils.fromWei(balance);
      balance = parseFloat(balance)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setLmnBalanceBuy(balance);
    } catch (e) {
      console.log(e);
      return "Nan";
    }
  };

  const buy = async () => {
    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.reload();
    });
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(async function () {
          // User has allowed account access to DApp...

          setBuying(true);
          const netId = await web3.eth.net.getId();
          const accounts = await web3.eth.getAccounts();

          const buyContract = new web3.eth.Contract(
            LMNPurchase.abi,
            LMNPurchase.networks[netId].address
          );

          try {
            const resp = await buyContract.methods.purchase().send({
              from: accounts[0],
              value: web3.utils.toWei(inputChange),
            });
            notifyModal();
            setBuying(false);
          } catch (error) {
            errorNotifyModal();
            console.log(error);
            setBuying(false);
          }
        });
      } catch (e) {
        console.log("OMG ...");
      }

      //load contracts
    } else {
      window.alert("Please install MetaMask");
    }
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
            Buy <b>LEMON</b>
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
                      min="0"
                      value={inputChange}
                      step="any"
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
                    Estim <b>EWT</b>:
                  </span>
                  <span>
                    <font size="+1">
                      {(inputChange * exchangeRate).toFixed(3)}{" "}
                    </font>

                    <img style={{ width: "20px" }} src={LogoMark} alt="" />
                  </span>
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
                      <b> {(1 / exchangeRate).toFixed(4)} </b>
                    </font>
                    <b>
                      <img style={{ width: "12px" }} src={EWT} alt="" />
                      /
                      <img style={{ width: "15px" }} src={LogoMark} alt="" />
                    </b>
                  </span>
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
                    Avail. <b>LMN</b>:
                  </span>
                  <span>
                    <font size="+1">
                      <b> {lmnBalanceBuy} </b>{" "}
                    </font>
                    <b>
                      <img style={{ width: "20px" }} src={LogoMark} alt="" />
                    </b>
                  </span>
                </div>

                {successShow && (
                  <>
                    {success ? (
                      <div
                        className="col-7 text-secondary small fs-6 pb-3 text-nowrap text-bold text-success"
                        style={{ letterSpacing: "0px", marginLeft: "38%" }}
                      >
                        Success
                      </div>
                    ) : (
                      <div
                        className="col-7 text-secondary small fs-6 pb-3 text-nowrap text-bold text-danger"
                        style={{ letterSpacing: "0px", marginLeft: "38%" }}
                      >
                        Fail
                      </div>
                    )}
                  </>
                )}
                <br />
                {buying ? (
                  <span className="d-flex justify-content-center">
                    <Button
                      variant=""
                      style={{
                        background: "rgb(128 128 128)",
                        boxShadow: "none",
                        border: "none",
                      }}
                      className="btn px-4 py-2 rounded-pill text-black fw-bold fs-1"
                      type="submit"
                      //! BUY TOKENS
                    >
                      <span className="title-thin">Buy. </span>
                      <span> LMN </span>
                    </Button>
                  </span>
                ) : (
                  <span className="d-flex justify-content-center">
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
                      <span className="title-thin">Buy. </span>
                      <span> LMN </span>
                    </Button>
                  </span>
                )}
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

export default LemonadeFinanceModalBuy;
