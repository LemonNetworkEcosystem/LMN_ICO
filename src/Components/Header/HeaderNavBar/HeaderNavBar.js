import React, { useState } from "react";

//Components
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MenuToggle from "./MenuToggle/MenuToggle";

const HeaderNavBar = ({ quantity, setQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-container container">
      <div className="header-wrap">
        <Logo />
        <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu
          quantity={quantity}
          setQuantity={setQuantity}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default HeaderNavBar;
