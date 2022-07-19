import React, { useState } from "react";

import { Content } from "./styles";
import Toolbar from "../../Navigation2/Toolbar/Toolbar";
import SideDrawer from "../../Navigation2/SideDrawer/SideDrawer";

function Layout({ children }) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <Content>{children}</Content>
    </>
  );
}

export default Layout;
