import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;

  h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 1rem;
    color: #000000;

    @media only screen and (max-width: 768px) {
      text-align: center;
    }

    @media only screen and (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    .post{
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 16.28rem;
  background-color: rgb(247, 244, 244);
  box-shadow: rgb(0 0 0 / 30%) 0px 2px 3px 0px;
  border-radius: 25px;

  @media only screen and (max-width: 1024px) {
    width: 14.28rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }
`;

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    display: contents;
    min-height: 100px;
    margin-bottom: 20px;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 150px;
  img{
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 50%;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
    }
  }
`;

export const BodyContent = styled.div`
  height: 100%;
  display: flex;
  padding: 0 12px;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 70%;
    min-height: 100px;
    justify-content: space-between;
  }
`;

export const Title = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #2B363B;
  padding-top: 12px;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #666B7B;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const DataView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;

  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin: 0;
    color: #000000;

    @media only screen and (max-width: 480px) {
      position: relative;
      top: -30px;
    }

    @media only screen and (max-width: 375px) {
      position: relative;
      top: -35px;
    }
  }

  a{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;

    color: #000000;
  }
`;
