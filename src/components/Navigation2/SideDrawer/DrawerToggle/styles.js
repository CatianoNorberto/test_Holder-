import styled from "styled-components";

export const DrawerToggle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  box-sizing: border-box;
  cursor: pointer;

  div {
    width: 90%;
    height: 3px;
    background: #000000;
    border: 2px solid #000000;
  }

  @media (min-width: 769px) {
    display: none;
  }
  /* @media (width: 1024px) {
    display: none;
  } */
`;
