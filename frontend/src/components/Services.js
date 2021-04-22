import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { PostWrapper, Card } from "../elements/ServiceElements"
import Section from "./Section"

//Component for all services
const Services = () => {
  return (
    <Section color="#fff">
      <Title title="Tjänster" />
      <PostWrapper>
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <Card key={id}>
              {icon}
              <h4>{title}</h4>
              <p>{text}</p>
            </Card>
          )
        })}
      </PostWrapper>
    </Section>
  )
}

export default Services
