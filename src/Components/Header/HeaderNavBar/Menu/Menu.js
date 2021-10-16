import React, { useState, useEffect } from "react";

import Web3 from "web3";

import ICO from "../../../../abis/ICO.json";
//images
import enLang from "../../../../assets/images-main/flag-en.jpg";
import frLang from "../../../../assets/images-main/flag-fr.jpg";
import chLang from "../../../../assets/images-main/flag-ch.jpg";
import brLang from "../../../../assets/images-main/flag-br.jpg";
import EWT from "../../../../assets/images-main/EWT.png";
import lmn_logo from "../../../../assets/images-main/LMN.png";
// import lmn_logo from "../../../../assets/images-main/lmn.png";

const Menu = ({ isOpen, setIsOpen, quantity, setQuantity }) => {
  const [Navclass, setNavclass] = useState("");
  const [LMN_Amount, setLMNAmount] = useState("");
  const [connect, setConnected] = useState(false);

  // const getBlockData = async () => {
  //   window.ethereum.on("accountsChanged", function (accounts) {
  //     window.location.reload();
  //   });
  //   if (typeof window.ethereum !== "undefined") {
  //     const web3 = new Web3(window.ethereum);
  //     try {
  //       window.ethereum.enable().then(async function () {
  //         // User has allowed account access to DApp...
  //         const netId = await web3.eth.net.getId();

  //         console.log("ACCESS GRANTED");
  //         setConnected(true);
  //         const ICO_Contract = new web3.eth.Contract(
  //           ICO.abi,
  //           ICO.networks[netId].address
  //         );

  //         const accounts = await web3.eth.getAccounts();
  //         console.log(accounts);
  //         //load balance

  //         const balance = await ICO_Contract.methods.getTokenCount().call();

  //         console.log(balance);

  //         setLMNAmount(
  //           web3.utils
  //             .fromWei(balance)
  //             .toString()
  //             .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  //         );
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
  //   }

  //   //load contracts
  // };

  const addEWC = () => {
    const params = [
      {
        chainId: "0xf6",
        chainName: "EWC",
        nativeCurrency: {
          name: "Energy Web Token",
          symbol: "EWT",
          decimals: 18,
        },
        rpcUrls: ["https://rpc.energyweb.org/"],
        blockExplorerUrls: ["https://explorer.energyweb.org/"],
      },
    ];
    try {
      window.ethereum
        .request({ method: "wallet_addEthereumChain", params })
        .then(() => console.log("Success"));
    } catch (e) {
      console.log("Error", e.message);
    }
  };

  const addLMN = async () => {
    const tokenAddress = "0xdBB49BE8562ca6E23B41B3BC7f76b00748EED557";
    const tokenSymbol = "LMN";
    const tokenDecimals = 18;
    const tokenImage =
      "https://firebasestorage.googleapis.com/v0/b/lemon-network.appspot.com/o/ICO%2FLMN.png?alt=media&token=8ba6cbfe-63ae-4ede-be18-fa7750068e4c";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });
      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const doStuff = async () => {
  //   window.ethereum.on("accountsChanged", function (accounts) {
  //     window.location.reload();
  //   });
  //   if (typeof window.ethereum !== "undefined") {
  //     const web3 = new Web3(window.ethereum);
  //     try {
  //       const netId = await web3.eth.net.getId();

  //       console.log("ACCESS GRANTED");

  //       const ICO_Contract = new web3.eth.Contract(
  //         ICO.abi,
  //         ICO.networks[netId].address
  //       );

  //       const accounts = await web3.eth.getAccounts();
  //       console.log(accounts);
  //       //load balance
  //       const balance = await ICO_Contract.methods.getTokenCount().call();

  //       console.log(balance);

  //       return web3.utils
  //         .fromWei(balance)
  //         .toString()
  //         .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //     } catch (e) {
  //       console.log(e.toString());
  //     }
  //   }
  // };

  // useEffect(async () => {
  //   await getBlockData();
  // }, []);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     setLMNAmount(await doStuff());
  //   }, 10);
  // });

  useEffect(() => {
    if (isOpen) {
      setNavclass("header-navbar header-navbar-s3 menu-shown");
    } else {
      setNavclass("header-navbar header-navbar-s3");
    }
  }, [isOpen]);

  return (
    <div className={Navclass}>
      <nav className="header-menu justify-content-between" id="example-menu-04">
        <ul
          className="menu menu-s2 animated"
          data-animate="fadeInDown"
          data-delay=".75"
        >
          <a className="menu-item nav-link li" href="#about">
            <li className="menu-link"> About</li>
          </a>
          <a className="menu-item nav-link li" href="#why">
            <li className="menu-link">Why &amp; How ?</li>
          </a>
          <a className="menu-item nav-link li" href="#team">
            <li className="menu-link">Team </li>
          </a>
          <a className="menu-item nav-link li" href="#token">
            <li className="menu-link">Tokens</li>
          </a>

          <a className="menu-item nav-link li" href="#roadmap">
            <li className="menu-link">Roadmap</li>
          </a>

          <li className="menu-item has-sub">
            <a className="menu-item nav-link li menu-toggle" href="#">
              More
            </a>
            <ul className="menu-sub menu-drop">
              <li className="menu-item">
                <a className="menu-item nav-link li" href="#faqs">
                  Faqs
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul
          className="menu-btns align-items-center animated"
          data-animate="fadeInDown"
          data-delay=".85"
        >
          <li>
            <a
              // href="#"
              onClick={() => {
                addEWC();
              }}
              className="btn btn-rg btn-round"
              style={{ border: "1px solid #0ab30a" }}
            >
              {connect ? (
                <span>
                  <font color="green" size="1">
                    Connect
                  </font>
                </span>
              ) : (
                <span>
                  <font color="green">Connect</font>
                </span>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="btn btn-rg btn-round"
              style={{ border: "1px solid #0ab30a" }}
            >
              <span onClick={() => addLMN()}>
                <font color="green">
                  {LMN_Amount} <img src={lmn_logo} style={{ width: "20px" }} />
                </font>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="header-navbar-overlay"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default Menu;
