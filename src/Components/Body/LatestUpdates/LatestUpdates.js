import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LemonPopUp from "../../../assets/images-main/lemon-popup.png";
import links from "../../../meta/links";
const LatestUpdates = () => {
  const [email, setEmail] = useState("");
  const [rawEmail, setRawEmail] = useState("");
  const [emailSaved, setEmailSaved] = useState(false);
  const notify = (param) => {
    if (param == true) {
      toast.success(" You subscribed succesfully!", {
        icon: <img src={LemonPopUp} alt="" />,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Something was wrong 😢", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    setEmail(rawEmail);
    try {
      const response = await fetch(
        "https://us-central1-lemon-network.cloudfunctions.net/add2Newsletter?email=" +
          rawEmail
      );
      setRawEmail("");
      setEmail("");
      setEmailSaved(true);
      notify(true);
      setEmailSaved(false);
    } catch (e) {
      console.log(e);
      notify(true);
      setEmailSaved(false);
    }
  };

  return (
    <div className="container">
      <ToastContainer style={{ marginTop: "3%", zIndex: "20000" }} limit={1} />
      <div className="nk-block">
        <div className="row justify-content-center text-center">
          <div className="col-sm-9 col-lg-6">
            <div className="section-head section-head-xs wide-auto-sm">
              <h5
                className="title title-sm animated"
                data-animate="fadeInUp"
                data-delay=".1"
              >
                Don’t miss out, Be the first to know
              </h5>
              <p className=" animated" data-animate="fadeInUp" data-delay=".2">
                Get notified about the details of the LMN ICO, as well as other
                important development updates.
              </p>
            </div>
            <form
              action="form/subscribe.php"
              className="nk-form-submit"
              method="post"
            >
              <div
                className="field-inline field-inline-round field-inline-s2-sm bg-light-alt animated"
                data-animate="fadeInUp"
                data-delay=".3"
              >
                <div className="field-wrap">
                  <input
                    onChange={(e) => setRawEmail(e.target.value)}
                    className="input-solid input-solid-md required email"
                    type="text"
                    name="contact-email"
                    placeholder="Enter your email"
                  />
                  <input
                    type="text"
                    className="d-none"
                    name="form-anti-honeypot"
                    value=""
                  />
                </div>
                <div className="submit-wrap">
                  <button
                    className="btn btn-md btn-round btn-green h-100"
                    onClick={handleClick}
                  >
                    Let me Know
                  </button>
                </div>
              </div>
              <div className="form-results"></div>
            </form>
            <div
              className="pdt-r animated"
              data-animate="fadeInUp"
              data-delay=".4"
            >
              <div>
                <p
                  className=" animated"
                  data-animate="fadeInUp"
                  data-delay=".2"
                >
                  <font size="3">
                    <input className="mx-2" type="checkbox" />I accept the{" "}
                    <a href={links.links.terms_conditions_link} target="_blank">
                      Terms & Conditions
                    </a>{" "}
                    &{" "}
                    <a href={links.links.privacy_policy_link} target="_blank">
                      Privacy Policy
                    </a>
                  </font>
                </p>
                <br />
              </div>
              <div>
                <a href="https://t.me/lemon_network" target="_blank">
                  <em className="link-icon fa fa-paper-plane"></em>
                  <span>
                    Join us on Telegram <b>ES</b>
                  </span>
                </a>
              </div>
              <br></br>
              <div>
                <a href="https://t.me/lemonnetworken" target="_blank">
                  <em className="link-icon fa fa-paper-plane"></em>
                  <span>
                    Join us on Telegram <b>EN</b>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
