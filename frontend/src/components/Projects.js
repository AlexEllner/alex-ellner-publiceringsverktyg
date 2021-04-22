import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import Section from "./Section"
import Container from "./Container"
import { ProjectsWrapper } from "../elements/ProjectElements"
import Button from "./Button"

//Component for all projects
const Projects = ({ projects, title, showLink }) => {
  return (
    <Section>
      <Title title={title} />
      <Container>
        <ProjectsWrapper>
          {projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project} />
          })}
        </ProjectsWrapper>
        {showLink ? <Button href="/projects">Alla projekt</Button> : ""}
      </Container>
    </Section>
  )
}

export default Projects
