import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { IntroContainer } from "../elements/ContainerElements"
import SocialLinks from "../constants/socialLinks"
import Section from "./Section"
import Container from "./Container"
import { LeftColumn, RightColumn } from "../elements/IntroElements"

const query = graphql`
  {
    file(relativePath: { eq: "portrait.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

//Intro component
const Intro = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Section color="#eaeaea">
      <Container>
        <IntroContainer>
          <LeftColumn area="left-column">
            <Image
              style={{
                width: "42%",
                margin: "0 auto",
                borderRadius: "0.25rem",
              }}
              fluid={fluid}
            />
          </LeftColumn>
          <RightColumn area="right-column">
            <h1>Alex Ellner</h1>
            <h4>Systemutveckling.NET på TUC Yrkeshögskola</h4>
            <h4>Systemutvecklare på Siemens Energy</h4>
            <SocialLinks />
          </RightColumn>
        </IntroContainer>
      </Container>
    </Section>
  )
}

export default Intro
