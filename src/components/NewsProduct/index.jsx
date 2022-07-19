import React from 'react'
import { NavLink } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";
import { infos } from "./infos";

import {
  Card,
  Text,
  Title,
  Header,
  Contents,
  DataView,
  Container,
  CardContent,
  BodyContent,
} from "./styles"

export default function NewPostCard() {
  return (
    <Container>
      <h2>Descubra Novas Histórias</h2>
      <CardContent>
        {infos.map(item=>(
          <Card key={item.id} className={item.cName}>
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
                  <div>
                    <p>{item.data}</p>
                  </div>
                  <div>
                    <NavLink
                      to={{ pathname: item.link }}
                      target="_blank"
                      rel="noopener noreferrer">
                      leia mais
                    <MdKeyboardArrowRight/>
                    </NavLink>
                  </div>
                </DataView>
              </BodyContent>
            </Contents>

          </Card>
        ))}
      </CardContent>
    </Container>
  )
}

