import React, { } from "react";
import { NavLink } from "react-router-dom";

import {
  Boxs,
  Footer,
  FooterBoxs,
  FooterRight,
  FooterContent,
  FooterBoxContent,
  FooterCopyRightContent,
} from "./styles";

export default function FooterContainer() {
  return (
    <Footer>
      <FooterContent>
        <FooterRight>
          <h3>A Holder+</h3>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="/about">Blog</NavLink>
          <NavLink to="/terms">Política e termos</NavLink>
        </FooterRight>
        <FooterBoxs>
          <Boxs>
            <FooterBoxContent>
              <h3>Mídia</h3>
              <NavLink
                to={{
                  pathname: "https://blog.Holder+.com.br/",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </NavLink>
              <NavLink
                to={{
                  pathname: "https://blog.Holder+.com.br/",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </NavLink>
              <NavLink
                to={{
                  pathname: "https://blog.Holder+.com.br/",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Nosso blog
              </NavLink>
            </FooterBoxContent>
          </Boxs>
          <Boxs>
            <FooterBoxContent>
              <h3>Contato</h3>
              <NavLink to="/contact">contato@Holder+.com.br</NavLink>
              <NavLink
                to="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                (+55) XXXX-XXXXX
              </NavLink>
            </FooterBoxContent>
          </Boxs>
        </FooterBoxs>
      </FooterContent>

      <FooterCopyRightContent>
        <NavLink to="/">
          <h2>Holder+</h2>
        </NavLink>
        <p>
          Todos direitos reservados. 2022
        </p>
      </FooterCopyRightContent>
    </Footer>
  );
}
