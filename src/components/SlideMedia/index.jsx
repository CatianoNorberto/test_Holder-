import React, { useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom"
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import istoe from "../../assets/images/istoe.svg";
import globo from "../../assets/images/Globo.svg";
import Valor from "../../assets/images/valor.png";
import G1 from "../../assets/images/G1.png";
import Forbes from "../../assets/images/forbes.jpg";
import Cnn from "../../assets/images/cnn.png";
import exame from "../../assets/images/exame.svg";
import aupanews from "../../assets/images/aupanews.svg";
import VectorRight from "../../assets/images/vectorRight.svg"
import VectorBack from "../../assets/images/vectorBack.svg"

import { PartnersContainer} from "./styles"

export default function SlidePartners() {

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
    <PartnersContainer>
      <h2>Na mídia</h2>
      <div className="carousel-container">
        <div className="swiper-button" ref={prevRef}>
          <img src={VectorBack} alt=""/>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
          className="external-buttons"
          spaceBetween={50}
          slidesPerView={4}
          breakpoints= {{
            300: {
              slidesPerView: 2,
              spaceBetween: 30,
              pagination: true
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 40,
              pagination: true
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
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
          <SwiperSlide>
            <NavLink
              to={{
                pathname:
                  "https://istoe.com.br/projetos-sociais-incentivam-negocios-de-impacto-no-brasil/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={istoe} alt="Isto é" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={{
                pathname:
                  "https://www.aupa.com.br/firgun-emprestimo-coletivo/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={aupanews} alt="Aupa news" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={{
                pathname:
                  "https://exame.abril.com.br/seu-dinheiro/sites-oferecem-emprestimos-sem-juros-para-empreendedores-de-baixa-renda/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={exame} alt="Exame" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={{
                pathname:
                  "https://g1.globo.com/economia/pme/pequenas-empresas-grandes-negocios/noticia/2018/11/18/fintechs-buscam-conquistar-mercado-com-produtos-mais-atrativos-ao-consumidor.ghtml",
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="globo"
            >
              <img src={globo} alt="Globo" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={{
                pathname:
                  "https://www.cnnbrasil.com.br/business/mpes-reclamam-de-falta-de-acesso-a-credito-mas-entraves-podem-estar-na-gestao/",
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="globo"
            >
              <img src={Cnn} alt="CNN" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={{
                pathname:
                  "https://forbes.com.br/forbes-collab/2021/04/haroldo-rodrigues-investimento-esg-em-rede-a-mola-propulsora-de-um-grande-pacto-nacional-por-um-territorio-digno/",
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="globo"
            >
              <img src={Forbes} alt="FORBES" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={{
                pathname:
                  "https://g1.globo.com/economia/pme/pequenas-empresas-grandes-negocios/noticia/2020/06/28/fintechs-sao-alternativas-para-pequenos-empresarios-conseguirem-emprestimos.ghtml",
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="globo"
            >
              <img src={G1} alt="G1" />
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink
              to={{
                pathname:
                  "https://valorinveste.globo.com/objetivo/hora-de-investir/noticia/2020/02/18/topa-arriscar-mais-conheca-alternativas-de-investimento-nao-convencionais.ghtml",
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="globo"
            >
              <img src={Valor} alt="VALOR" />
            </NavLink>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button" ref={nextRef}>
          <img src={VectorRight} alt=""/>
        </div>
      </div>
    </PartnersContainer>
  )
}
