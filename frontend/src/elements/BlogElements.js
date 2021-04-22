import styled from "styled-components"

//Wrapper elements for the blog articles
export const BlogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-gap: 20px;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 50px;
`

//Card element for the blogs
export const BlogCard = styled.article`
  -webkit-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 30px -4px rgba(0, 0, 0, 0.75);
  padding: 15px;
  transition: all 0.3s linear;
  border-radius: 0.25rem;
  background-color: #fff;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  box-sizing: border-box;

  /* :hover {
    transform: scale(1.02);
  } */
`

export const BlogContent = styled.div``

//Wrapper for the category element
export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

//Category element
export const Category = styled.p`
  text-transform: uppercase;
  background-color: #6272a4;
  padding: 0.4rem;
  margin: 1rem 0.3rem;
  border-radius: 0.25rem;
  color: #fff;
`

//Element for the individual blog article
export const BlogArticle = styled.article`
  h1,
  h2 {
    text-align: center;
  }
  h1 {
    font-size: 2.5rem;
  }
  p {
    line-height: 2rem;
  }

  ul {
    margin-top: 2rem;
    display: inline-block;
  }
  ul li {
    background: #eaeaea;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    text-transform: uppercase;
  }

  pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
  }

  blockquote {
    background-color: #8be9fd;
    border-radius: 0.25rem;
    padding: 1rem;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`
