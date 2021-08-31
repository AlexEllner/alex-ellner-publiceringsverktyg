import React from "react"
import { FaJs } from "react-icons/fa"
import { DiVisualstudio } from "react-icons/di"
import { RiCodeSSlashLine } from "react-icons/ri"

export default [
  {
    id: 1,
    icon: (
      <RiCodeSSlashLine
        style={{ fontSize: "2rem", color: "yellow", backgroundColor: "black" }}
      />
    ),
    title: "Webbutveckling",
    text: `Jag designar hemsidor och applikationer.`,
  },
  {
    id: 2,
    icon: <DiVisualstudio style={{ fontSize: "2rem", color: "purple" }} />,
    title: "Backend",
    text: `Jag bygger backend-applikationer i .NET och Strapi.`,
  },
  {
    id: 3,
    icon: <FaJs style={{ fontSize: "2rem", color: "#41B883" }} />,
    title: "Frontend",
    text: `Jag bygger frontend-applikationer i Vue och Gatsby.`,
  },
]
