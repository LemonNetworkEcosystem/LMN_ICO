import React from "react";

//images
import logoDark from "../../../../assets/images-main/logo-negre.png";
import logoLight from "../../../../assets/images-main/logo-blanc.png";

const Logo = () => {
  return (
    <div
      className="header-logo logo animated"
      data-animate="fadeInDown"
      data-delay=".65"
    >
      <a href="./" className="logo-link">
        <img className="logo-dark" src={logoDark} alt="logo" />
        <img className="logo-light" src={logoLight} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
