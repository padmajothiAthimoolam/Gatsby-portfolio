import React from "react"
import Layout from "../components/Layout"

import SEO from "../components/SEO"
import Skills from "../components/Skills"

const skills = () => {
  return (
    <Layout>
      <SEO title="Skills" />
      <main className="skills-page">
        <div className="">
          <Skills />
        </div>
      </main>
    </Layout>
  )
}

export default skills
