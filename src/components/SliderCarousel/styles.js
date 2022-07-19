import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #451182;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

.btn{
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    border: none;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    background: #FA5F01;
    text-align: center;
    letter-spacing: 0.005em;
    color: #fff;
    width: 30%;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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

.image {
  width: 100%;
  height: auto;
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
  background: #FF690B;
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


export const Title = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  padding-top: 64px;
  text-align: center;
  color: #fff;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }

  @media only screen and (max-width: 480px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  padding: 30px;
  flex-direction: column;
  z-index: 100;
  justify-content: space-between;

  h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.005em;

    color: #fff;
  }

  @media only screen and (max-width: 480px){
    padding: 12px;
  }
`;

export const Perfil = styled.div`
  display: flex;
  margin-top: 20px;
  position: relative;
  align-items: center;
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background: #E2E2EA;
    margin-right: 16px;
  }

  h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.005em;
    margin: 0px;
    color: #562293;
  }

  span{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.008em;

    color: #FFD700;
  }
`;
