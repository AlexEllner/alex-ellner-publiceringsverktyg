import React from "react"
import { FaCode, FaVuejs, FaJs } from "react-icons/fa"

export default [
  {
    id: 1,
    icon: (
      <FaJs
        style={{ fontSize: "2rem", color: "yellow", backgroundColor: "black" }}
      />
    ),
    title: "Webbutveckling",
    text: `Det är kul att utman sig själv lite hela tiden.`,
  },
  {
    id: 2,
    icon: <FaCode style={{ fontSize: "2rem", color: "purple" }} />,
    title: ".NET",
    text: `Kunskap som kommer väl till pass eftersom .NET är så vida använt.`,
  },
  {
    id: 3,
    icon: <FaVuejs style={{ fontSize: "2rem", color: "#41B883" }} />,
    title: "Frontend",
    text: `Med erfarenhet av Vue.js och Gatsby.js så blir frontend-utvecklingen mer och mer gedigen varje dag.`,
  },
]
