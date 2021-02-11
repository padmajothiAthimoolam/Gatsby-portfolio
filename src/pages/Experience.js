import React from "react"
import Layout from "../components/Layout"

import SEO from "../components/SEO"
import Jobs from "../components/Jobs"

const Experience = () => {
  return (
    <Layout>
      <SEO title="Experience" />

      <main className="experience-page">
        <div className="error-container">
          <Jobs />
        </div>
      </main>
    </Layout>
  )
}

export default Experience
