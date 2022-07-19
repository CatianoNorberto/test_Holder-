import React from "react";
import { NavLink } from "react-router-dom";

import { Form, Input, Select } from "@rocketseat/unform";

import Layout2 from "../../components/hoc/Layout2/Layout";
import Footer from "../../components/Footer2";
import SliderCarousel from "../../components/SliderCarousel";
import SlideMedia from "../../components/SlideMedia";
import NewsProduct from "../../components/NewsProduct";

import headerImg from "../../assets/images/banner.svg";
import {
  HomeContainer,
  HomeContent,
  BannerContent,
  Title,
  Newsletter,
  MediaContainer,
  LatestNewsContainer,
} from "./style";

export default function Home() {
  
  return (
    <Layout2>
      <HomeContainer>
        <HomeContent>
          <BannerContent>
            <div className="bannerimg">
              <img src={headerImg} alt="header img" />
            </div>
            <Title>
              <h2>
                Mercado livre da China, vendemos de tudo um pouco. 
              </h2>
              <NavLink to="/investor-signup-b2b">
                <button>
                  Começar
                </button>
              </NavLink>
            </Title>
          </BannerContent>
          <SliderCarousel/>

          <MediaContainer>
            <SlideMedia/>
          </MediaContainer>

          <LatestNewsContainer>
            <NewsProduct/>
          </LatestNewsContainer>

          <Newsletter>
            <h3>Receba as novidades</h3>
            <Form>
              <label htmlFor="email">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Seu e-mail"
                />
              </label>
              <label htmlFor="news">
              <Select
                  name="news"
                  id="news"
                  placeholder="Você é"
                  options={[
                    { id: "Empresa", title: "Empresa" },
                    { id: "Outro", title: "Outro" },
                  ]}
                ></Select>
              </label>
              <NavLink to="/">Inscreva-se</NavLink>
            </Form>
          </Newsletter>
        </HomeContent>
      </HomeContainer>
      <Footer/>
    </Layout2>
  );
}
