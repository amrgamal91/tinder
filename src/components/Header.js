import React from "react";
import Logo from "./Logo";

const Header = () => (
  <header>
    <div className="fl">
      <button type="button">
        <img src="/images/app/user.png" alt="User Settings"></img>
      </button>
    </div>

    <div>
      <Logo />
    </div>

    <div className="fl">
      <button type="button">
        <img src="/images/app/messages.png" alt="View Messages"></img>
      </button>
    </div>
  </header>
);

export default Header;
