import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main>
        <div>
          <h1>Not found...</h1>
          <Link to="/">Back home</Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
