import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #FF690B;
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BannerContent = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  .bannerimg{
    width: 40%;
  }
  img {
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const Title = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 56px;
    margin-bottom: 12px;
    color: #fff;

    @media only screen and (max-width: 480px) {
      font-size: 28px;
      line-height: normal;
    }
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin: 0;
    color: #000000;

    @media only screen and (max-width: 480px) {
      font-size: 16px;
      line-height: normal;
    }
  }

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    margin-top: 200px;
    text-align: center;
    margin-bottom: 180px;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    margin-top: 80px;
    text-align: center;
    margin-bottom: 10px;
  }
  button {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    background: #562293;
    border-radius: 8px;
    transition: all 0.3s ease-out;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    border: none;
    text-align: center;
    letter-spacing: 0.005em;

    color: #FFFFFF;

    /* &:hover {
      background: none;
      color: #ffde00;
    } */

    @media only screen and (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

export const MediaContainer = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  align-items: center;
  background: #FFFFFF;

  h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    margin-top: 64px;
    color: #000000;

    @media only screen and (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const LatestNewsContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const Newsletter = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;

    color: #4C1889;
    margin-bottom: 28px;
  }

  form {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      width: 40%;
      display: flex;
      flex-direction: column;
      margin-right: 8px;

      input {
        width: 100%;
        padding: 16px 18px;
        background: #FFFFFF;
        border: 1px solid #9C9FB0;
        box-sizing: border-box;
        border-radius: 8px;

        ::placeholder {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 125%;
          letter-spacing: 0.005em;

          color: #666B7B;
        }
      }
    }
    select {
        width: 100%;
        padding: 16px 18px;
        background: #FFFFFF;
        color: #666B7B;
        border: 1px solid #9C9FB0;
        box-sizing: border-box;
        border-radius: 8px;

        ::placeholder {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 125%;
          letter-spacing: 0.005em;

          color: #666B7B;
        }
      }
    }

   a{
     text-decoration: none;
      width: 30%;
      padding: 18px 36px;
      background: #FF690B;
      border: none;
      border-radius: 8px;
      color: #fff;
      margin-top: -8px;
      transition: filter 0.2s;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 120%;

      text-align: center;
      letter-spacing: 0.005em;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    padding: 50px 0px;
    align-items: center;

    form {
      width: 90%;
      display: flex;
      align-items: baseline;
      justify-content: space-between;

      label {
        width: 275px;
        margin-bottom: 20px;
      }

      select {
        width: 275px;
        margin-bottom: 20px;
      }

      button {
        margin: 10px 0;
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    width: 100%;

    h3{
      font-size: 24px;
      text-align: center;
    }

    form {
      width: 90%;
      align-items: center;
      flex-direction: column;

      label {
        width: 100%;
        margin: auto;
        padding-bottom: 20px;
      }

      select {
        width: 100%;
        margin: auto;
        padding-bottom: 20px;
      }

      button {
        margin: 10px 0;
        width: 100%;
      }
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #451182;
`;
