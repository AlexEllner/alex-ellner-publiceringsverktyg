import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import {
  BlogCard,
  BlogContent,
  CategoryWrapper,
  Category,
} from "../elements/BlogElements"

//Component for every separate blog-article

const Blog = ({ id, title, image, date, category, slug, description }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id} style={{ color: "black" }}>
      <BlogCard>
        <Image fluid={image.childImageSharp.fluid} />
        <BlogContent>
          <h4>{title}</h4>
          <p>{description}</p>
          <CategoryWrapper>
            <Category>{category}</Category>
            <p>{date}</p>
          </CategoryWrapper>
        </BlogContent>
      </BlogCard>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
