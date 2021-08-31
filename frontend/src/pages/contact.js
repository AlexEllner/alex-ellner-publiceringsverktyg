import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import Section from "../components/Section"
import { FormWrapper, InputWrapper } from "../elements/ContactElements"

//Contact page which shows the form
const contact = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <FormWrapper>
            <h3>Kontakta mig</h3>
            <form action="https://formspree.io/f/xjvpgnyo" method="POST">
              <InputWrapper>
                <input type="text" name="name" placeholder="name"></input>
                <input type="email" name="email" placeholder="email"></input>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="message"
                ></textarea>
              </InputWrapper>
              <button type="submit">Skicka</button>
            </form>
          </FormWrapper>
        </Container>
      </Section>
    </Layout>
  )
}

export default contact
