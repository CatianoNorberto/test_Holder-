import React from "react";
import { DrawerToggle } from "./styles";

const drawerToggle = (props) => (
  <DrawerToggle onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </DrawerToggle>
);

export default drawerToggle;
