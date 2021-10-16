import React, { useEffect, useState } from "react";
import { Modal, Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
// import lemonLogo from "../../../../assets/images-main/lemon-logo.png";
import lemonLogo from "../../../../assets/images-main/LMN.png";
// import lemonLogo from "../../../../assets/images-main/lmn.png";
import EWT from "../../../../assets/images-main/EWT.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LemonPopUp from "../../../../assets/images-main/lemon-popup.png";

import Web3 from "web3";
import ICO from "../../../../abis/ICO.json";

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
  const notifyModal = () =>
    toast.success(" You bought succesfully!", {
      icon: <img src={lemonLogo} alt="" />,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const options = [{ value: "ewt", label: "EWT" }];

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

          const ICO_Contract = new web3.eth.Contract(
            ICO.abi,
            ICO.networks[netId].address
          );

          let rate = await ICO_Contract.methods.getCurrentRate().call();
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
    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.reload();
    });
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      try {
        // User has allowed account access to DApp...
        const netId = await web3.eth.net.getId();

        const ICO_Contract = new web3.eth.Contract(
          ICO.abi,
          ICO.networks[netId].address
        );

        let rate = await ICO_Contract.methods.getCurrentRate().call();
        // console.log(`This is ICO rate: ${rate} LMN (per 1 EWT)`);
        // console.log(`This is LMN : ${1 / rate} EWT/LMN`);
        return (1 / rate).toFixed(8);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (quantity < 0) {
    setQuantity(0);
  }

  if (quantity === 0) {
    setSuccess(false);
  }

  const handleSaveError = () => {
    setQuantity(quantity);
  };

  // Price of one Lemonoid Euru

  setQuantity(inputChange);

  const handleClose = () => {
    setShow(false);
    setQuantity(0);
  };
  const handleChange = (e) => {
    setInputChange(e.target.value);
  };
  const handleSave = async () => {
    // setShow(true);
    setQuantity(quantity);
    console.log(quantity);
    console.log(quantity);
    console.log(quantity);
    const web3 = new Web3(window.ethereum);
    try {
      // User has allowed account access to DApp...
      const netId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();
      // const gas = web3.utils.BN("1000000");
      // const gasPrice = web3.utils.BN("2");
      await web3.eth.sendTransaction({
        from: accounts[0],
        to: ICO.networks[netId].address,
        value: web3.utils.toWei(quantity),
        gas: 800000,
      });
      //
      notifyModal();
    } catch (e) {
      console.log(e);
    }
    //! Resultat de la compra

    // setSuccess(true);
    // setSuccessShow(true);
    //* El que pasa post Compra
    setQuantity(0);
  };

  useEffect(async () => {
    await getBlockData();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      setPrice(await doStuff());
    }, 1000);
  });

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
                    onClick={handleSave}
                  >
                    <span className="title-thin">Reserve. </span>
                    <span> LMN </span>
                  </Button>
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
