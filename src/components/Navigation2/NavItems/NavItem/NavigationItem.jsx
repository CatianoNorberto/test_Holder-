import React from "react";
import { NavLink } from "react-router-dom";

import { NavigationItem } from "./styles";

const navigationItem = (props) => (
  <NavigationItem>
    <NavLink to={props.link} exact={props.exact} activeClassName="active">
      {props.children}
    </NavLink>
  </NavigationItem>
);

export default navigationItem;
