import React, { useState, useEffect, useRef} from "react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Rating } from '@mui/material';

import testmonyOneImg from "../../assets/images/maria_mini.png";
import testmonyTwoImg from "../../assets/images/priscila_mini.png";
import testmonyThreeImg from "../../assets/images/adriana_mini.png";
import testmonyFourImg from "../../assets/images/michelle_mini.png";
import VectorRight from "../../assets/images/vectorRight.svg"
import VectorBack from "../../assets/images/vectorBack.svg"

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Content, Container, Title, Perfil} from "./styles"

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Slider() {
  
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  const data = [
    { id: 1,
      name: "Adriana Barros",
      job: "Abarros Editora",
      testimonial: "Graças ao empréstimo consegui me dedicar integralmente ao meu negócio, que se tornou minha principal fonte de renda. Oinvestimento veio junto com uma capacitação e contribuiu muito para o desenvolvimento da editora.",
      image: testmonyThreeImg
    },
    { id: 2,
      name: "Michelle Fernandes",
      job: "Boutique de Krioula",
      testimonial: "O crédito veio no momento certo para eu seguir minha jornada empreendedora! Consegui quitar algumas dívidas e negociar com fornecedores. Agradeço por pensarem nos empreendedores da periferia",
      image: testmonyFourImg
    },
    { id: 3,
      name: "Priscila Novaes",
      job: "Kitanda das Minas",
      testimonial: "A Firgun foi a única forma de crédito que encontrei até hoje. O processo foi simples e descomplicado. O recurso servirá para eu melhorar o estoque e colocar em prática uma estratégia de vendas delivery na comunidade",
      image: testmonyTwoImg
    },
    { id: 4,
      name: "Maria Pimentel",
      job: "Aba Pai Confecções",
      testimonial: "Graças ao empréstimo consegui investir em infraestrutura e aumentar a produção, que já era um sonho antigo. Estou me sentindo muito realizada, obrigada Firgun pela força!.",
      image: testmonyOneImg
    },
    { id: 5,
      name: "Maria Pimentel",
      job: "Aba Pai Confecções",
      testimonial: "Graças ao empréstimo consegui investir em infraestrutura e aumentar a produção, que já era um sonho antigo. Estou me sentindo muito realizada, obrigada Firgun pela força!.",
      image: testmonyOneImg
    },
  ]

  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <Container>
      <Title>Avaliações</Title>
      <div className="carousel-container">
        <div className="swiper-button" ref={prevRef}>
          <img src={VectorBack} alt=""/>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
          className="external-buttons"
          spaceBetween={20}
          slidesPerView={4}
          breakpoints= {{
            300: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current
          }}
          pagination={{ clickable: true }}
          updateOnWindowResize
          observer
          observeParents
          initialSlide={0}
          onSwiper={setSwiper}
        >
          {data.map(item =>(
            <SwiperSlide className="card" key={item.id}>
              <Content>
                <div>
                  <Box
                    sx={{
                      width: 200,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "yellow !important",
                        },
                        "& .MuiRating-iconHover": {
                          color: "yellow !important",
                        }
                      }}
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                  </Box>
                </div>
                <div>
                  <h2>{item.testimonial}</h2>
                </div>
                <Perfil>
                  <img src={(`${item.image}`)} alt="Adriana"/>
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.job}</span>
                  </div>
                </Perfil>
              </Content>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button" ref={nextRef}>
          <img src={VectorRight} alt=""/>
        </div>
      </div>
      <div className="btn">
        <button>Cadastra-se Grátis</button>
      </div>
    </Container>
  );
}
