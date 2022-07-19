import React, { useState, useEffect, useRef} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Box, Rating } from '@mui/material';

import { infos } from "./infos";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import VectorRight from "../../assets/images/vectorRight.svg"
import VectorBack from "../../assets/images/vectorBack.svg"

import {
  Text,
  Text2,
  Title,
  Header,
  Contents,
  DataView,
  Container,
  BodyContent,
} from "./styles"

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${[value]}`;
}

export default function NewPostCard() {

  const [value, setValue] = useState();
  const [hover, setHover] = useState(-1);

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
      <h2>Todos os produtos</h2>
      <div className="carousel-container">
        <div className="swiper-button" ref={prevRef}>
          <img src={VectorBack} alt=""/>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
          className="external-buttons"
          spaceBetween={20}
          slidesPerView={3}
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
              slidesPerView: 3,
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
            {infos.map(item=>(
              <SwiperSlide key={item.id} className="card">
                <Contents>
                  <Header>
                    <img src={item.image} alt=""/>
                  </Header>
                  <BodyContent>
                    <div>
                      <Title>{item.name}</Title>
                      <Text>{item.testimonial}</Text>
                    </div>
                    <DataView>
                      <div className='price'>
                        <Text2>R${item.price}</Text2>
                      </div>
                      <div>
                        <div className='desconto'>
                          <p>25 % Desconto</p>
                        </div>
                        <div className='line'></div>
                        <Box
                          sx={{
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
                            <Box sx={{ ml: 2 }}>{[hover !== -1 ? hover : value]}</Box>
                          )}
                        </Box>
                      </div>
                    </DataView>
                    <div className='btn'>
                      <button>Add no carro</button>
                    </div>
                  </BodyContent>
                </Contents>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button" ref={nextRef}>
          <img src={VectorRight} alt=""/>
        </div>
      </div>
    </Container>
  )
}

