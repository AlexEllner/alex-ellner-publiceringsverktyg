import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Hem",
    url: "/",
  },
  {
    id: 2,
    text: "Cv",
    url: "https://alex-ellner.github.io/",
  },
  {
    id: 3,
    text: "Projekt",
    url: "/projects/",
  },
  {
    id: 4,
    text: "Blogg",
    url: "/blog/",
  },
  {
    id: 5,
    text: "Kontakt",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  //if id === 2 i want to return an <a>-tag instead of <Link> since it takes us to another domain.
  return link.id === 2 ? (
    <li key={link.id}>
      <a href={link.url}>{link.text}</a>
    </li>
  ) : (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
