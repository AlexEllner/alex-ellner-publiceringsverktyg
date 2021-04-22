import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Section from "../components/Section"
import Container from "../components/Container"
import { BlogArticle } from "../elements/BlogElements"
import SEO from "../components/SEO"
import Button from "../components/Button"

//The blog template which we create programmatically and which shows the individual blog-post
const ComponentName = ({ data }) => {
  const { content, title, description } = data.blog

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Section>
        <Container>
          <BlogArticle>
            <ReactMarkdown source={content} />
          </BlogArticle>
          <Button href="/blog">Blogg</Button>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default ComponentName
