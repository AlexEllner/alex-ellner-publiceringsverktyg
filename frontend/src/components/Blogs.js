import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import Section from "./Section"
import Container from "./Container"
import { BlogsWrapper } from "../elements/BlogElements"
import Button from "./Button"

//Component for all blog-articles

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <Section color="#eaeaea">
      <Title title={title} />
      <Container>
        <BlogsWrapper>
          {blogs.map(blog => {
            return <Blog key={blog.id} {...blog} />
          })}
        </BlogsWrapper>
      </Container>
      {showLink ? <Button href="/blog">Blogg</Button> : ""}
    </Section>
  )
}

export default Blogs
