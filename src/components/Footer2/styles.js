import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: #F05500;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const FooterContent = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 40px;

  @media only screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    margin: auto;
  }

  @media only screen and (max-width: 480px) {
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  /* @media only screen and (width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media only screen and (width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  } */
`;

export const FooterRight = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;
  }

  a {
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.005em;

    color: #CED0DD;
    margin-top: 0.875rem;

    &:hover {
      color: #cccccc;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
    margin: 0;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const FooterBoxs = styled.div`
  justify-content: space-between;
  width: 80%;
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Boxs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FooterBoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;
  }

  a {
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.005em;

    color: #CED0DD;
    margin-top: 0.875rem;

    &:hover {
      color: #cccccc;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: 32px;
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

export const FooterCopyRightContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;

  >a{
    text-decoration: none;
    color: #FFFFFF;

    >h2{
      margin: 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 28px;
      text-transform: uppercase;
    }
  }

  >p{
    margin: 0;
    color: #CED0DD;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    text-align: right;
    letter-spacing: 0.005em;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 30px;

    a{
      margin-bottom: 16px;
    }
  }
`;
