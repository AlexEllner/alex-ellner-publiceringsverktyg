import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "HEM",
    url: "/",
  },
  {
    id: 2,
    text: "CV",
    url:
      "https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Falexpgilbert.com%2Fwp-content%2Fuploads%2F2019%2F10%2FAlex-Gilbert-Resume.png&sp=1630375464T188a62c2ea2f94a7a1a62e7edb5d6824490702e69296122b078ee0a6f8c6b5dc",
  },
  {
    id: 3,
    text: "PROJEKT",
    url: "/projects/",
  },
  {
    id: 4,
    text: "BLOGGAR",
    url: "/blog/",
  },
  {
    id: 5,
    text: "KONTAKT",
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
