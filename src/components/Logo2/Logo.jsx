import React from "react";

import burgerLogo from "../../assets/images/logo.png";
import { Logo } from "./styles";

const logo = () => (
  <Logo>
    <img src={burgerLogo} alt="Holder+ Logo" />
  </Logo>
);

export default logo;
