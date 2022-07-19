import React from "react";
import { NavLink } from "react-router-dom";

import NavigationItem from "./NavItem/NavigationItem";
import { NavigationItems, BlogLink } from "./styles";

const navigationItems = () => (
  <NavigationItems>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/about">Sobre</NavigationItem>
    <BlogLink>
      <NavLink
        to={{
          pathname: String("https://blog.Holder+.com.br/"),
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </NavLink>
    </BlogLink>
    <NavigationItem link="/contact">Contato</NavigationItem>
  </NavigationItems>
);

export default navigationItems;
