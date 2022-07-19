import styled from "styled-components";

export const Toolbar = styled.header`
  height: 72px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 90;
  background-color: #fff;

  padding-left: 64px;
  padding-right: 64px;

  nav {
    margin-left: auto;
    @media (max-width: 768px) {
      display: none;
    }
    @media (width: 768px) {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 64px;
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: row-reverse;
  }

  @media only screen and (width: 768px) {
    height: 64px;
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: row-reverse;
  }
`;

export const Btns = styled.div`
  display: flex;
  align-items: center;

  a{
    text-decoration: none;
    button{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 24px;
      border: 2px solid #666B7B;
      border-radius: 8px;
      text-transform: uppercase;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 120%;
      background: #FA5F01;
      text-align: center;
      letter-spacing: 0.005em;

      color: #fff;
      margin-left: 16px;

      @media (max-width: 768px) {
        display: none;
      }
      @media (width: 768px) {
        display: none;
      }
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

  @media (max-width: 768px) {
    display: none;
  }

  @media (width: 768px) {
    display: none;
  }
`;

export const LogoBox = styled.div`
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: auto;
  }
  @media (width: 768px) {
    margin-right: auto;
  }
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }

  @media (width: 768px) {
    display: none;
  }
`;

export const UserPerfil = styled.div`
  display: flex;
  align-items: center;
  color: #f5f5f5;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  svg {
    margin-left: 5px;
  }
`;

export const PerfilData = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  top: 50px;
  position: absolute;
  z-index: 2;
  background: #ffffff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 10px;
  transition: transform 0.3s ease-out;
  transform: ${(props) =>
    props.perfilToggled ? "translateX(0%)" : "translateX(240%)"};

  li {
    cursor: pointer;
    transition: all 0.3s ease-out;

    a {
      text-decoration: none;
      color: inherit;
    }

    svg {
      margin-right: 5px;
    }

    &:hover {
      color: #3ba6ff;
    }
  }

  li + li {
    margin-top: 10px;
  }
`;
