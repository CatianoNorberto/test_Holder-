import React from "react";
import { Link } from "react-router-dom";

import { Toolbar, LogoBox, Btns } from "./styles";

import Logo from "../../Logo2/Logo";
import NavigationItems from "../NavItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const ToolbarContainer = (props) => {
  // const history = useHistory();

  // function handleGoToHomePage() {
  //   history.push("/");
  // }

  return (
    <Toolbar>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <LogoBox>
        <Logo />
      </LogoBox>
      <nav>
        <NavigationItems />
      </nav>
      <Btns>
        <Link to="/">
          <button>Assine Agora</button>
        </Link>
      </Btns>
    </Toolbar>
  );
};

export default ToolbarContainer;
