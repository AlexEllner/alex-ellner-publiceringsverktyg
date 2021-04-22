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
    text: `Trivs att jobba med webbutveckling och allt vad det innebär.`,
  },
  {
    id: 2,
    icon: <FaCode style={{ fontSize: "2rem", color: "purple" }} />,
    title: ".NET",
    text: `Kan tänka mig att jobba som backend-utvecklare i .NET.`,
  },
  {
    id: 3,
    icon: <FaVuejs style={{ fontSize: "2rem", color: "#41B883" }} />,
    title: "Frontend",
    text: `Målet är att bli fullstack-utvecklare men påvägen dit jobbar jag gärna som frontend-utvecklare.`,
  },
]
