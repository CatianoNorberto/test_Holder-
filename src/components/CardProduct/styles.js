import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 1rem;
    color: #fff;
    text-align: center;

    @media only screen and (max-width: 768px) {
      text-align: center;
    }

    @media only screen and (max-width: 480px) {
      font-size: 24px;
    }
  }

  .carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
}

.swiper-button {
  margin: 8px;
  cursor: pointer;
  color: #9C9FB0;

  img{
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: #9C9FB0;
  }
}

.card{
  position: relative;
  margin: 50px 0;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);


  @media only screen and (max-width: 480px){
    width: 15rem;
  }
}

.swiper-slide {
  font-size: 18px;
  background: #fff;
  width: 300px;
  height: 400px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #BCBECB;
  opacity: 1;
}

/* target all bullets */
.swiper-pagination-bullet {
  background-color: #fff;
  opacity: 1;
}

`;


export const Contents = styled.div`
  width: 100%;
  height: 100%;
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
  padding: 12px;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 70%;
    min-height: 100px;
    justify-content: space-between;
  }

  .btn{
    display: flex;
    padding-top: 20px;
    justify-content: center;

    button{
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
    }
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

export const Text2 = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 24px;

  color: #666B7B;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
export const DataView = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;

  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
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

  .line{
    width: 120px;
    height: 2px;
    background: #000000;
    margin: 5px 0;
  }
`;
