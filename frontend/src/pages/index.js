import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Intro from "../components/Intro"
import SEO from "../components/SEO"

//The index page with all the relevant components
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <SEO title="Home" description="this is our homepage" />
      <Intro />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Aktuella projekt" showLink />
      <Blogs blogs={blogs} title="Senaste artiklar" showLink />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
export const query = graphql`
  {
    allStrapiProjects(filter: { feature: { eq: true } }) {
      nodes {
        id
        description
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }

    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        description
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
