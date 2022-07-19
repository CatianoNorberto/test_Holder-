import styled from "styled-components";

export const SideDrawer = styled.div`
  position: fixed;
  width: 290px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #f5f5f5;
  padding: 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  transform: ${(props) =>
    props.open ? "translateX(0)" : props.closed ? "translateX(-100%)" : ""};

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  margin-bottom: 5px;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 10px;
`;

export const UserPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999;
  height: 15%;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    margin-right: 10px;
  }
`;

export const PerfilData = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  top: 65px;

  position: absolute;
  z-index: 300;

  background: #ffffff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 10px;
  transition: transform 0.3s ease-out;

  transform: ${(props) =>
    props.perfilToggled ? "translateX(0%)" : "translateX(-110%)"};

  li {
    a {
      text-decoration: none;
      color: inherit;
    }

    svg {
      margin-right: 5px;
    }
  }

  li:first-child{
    margin-bottom: 10px;
  }
  li:nth-child(2){
    margin-bottom: 10px;
  }

  @media (min-width: 769px) {
    li {
      margin-bottom: 20px;
    }
  }
`;

export const Login = styled.div`
  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 24px;
    border: none;
    background: #1890FF;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    width: 100px;
    transition: all 0.3s ease-out;

    /* &:hover {
      background: #ccc;
      color: #3ba6ff;
    } */
  }
`;
