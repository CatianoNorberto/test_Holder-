import React from "react";

import NavigationItems from "../NavItems/NavigationItems";

import { SideDrawer } from "./styles";

const SideDrawerContainer = (props) => {

  return (
    <>
      <SideDrawer open={props.open} closed={props.closed}>

        <nav>
          <NavigationItems />
        </nav>

      </SideDrawer>
    </>
  );
};

export default SideDrawerContainer;
