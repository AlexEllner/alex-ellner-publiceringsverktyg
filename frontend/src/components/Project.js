import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import {
  ProjectCard,
  StackWrapper,
  StackItem,
  ProjectInfo,
} from "../elements/ProjectElements"

//Component for each individual project
const Project = ({ description, title, stack, image, index }) => {
  return (
    <ProjectCard>
      <Image fluid={image.childImageSharp.fluid} />
      <ProjectInfo>
        <span>{index + 1}.</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </ProjectInfo>
      <StackWrapper>
        {stack.map(item => {
          return <StackItem key={item.id}>{item.title}</StackItem>
        })}
      </StackWrapper>
    </ProjectCard>
  )
}

Project.propTypes = {}

export default Project
