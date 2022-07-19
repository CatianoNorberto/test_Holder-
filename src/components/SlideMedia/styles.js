import styled from "styled-components";

export const PartnersContainer = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .carousel-container {
    width: 100%;
    display: flex;
    margin: 0px -24px;
    padding: 0px 22px;
    align-items: center;
    justify-content: center;
  }

  .swiper-button {
    margin: 8px;
    cursor: pointer;
    color: #9C9FB0;

    >img{
      width: 100%;
      height: 100%;
    }

    &:hover {
      color: #9C9FB0;
    }

    @media only screen and (max-width: 480px) {
      display: none;
    }
  }

  .swiper-slide{
    width: 100%;
    margin: 50px 0;
    background: transparent;

    a {
    text-decoration: none;

    img{
      width: 100%;
      height: 106px;
    }
  }

  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    color: #000000;

    @media only screen and (max-width: 480px) {
      font-size: 20px
    }
  }
`;
