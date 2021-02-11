import React from "react"
import Image from "gatsby-image"

import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
//import Resume from "../components/Resume"
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <h1>i'm Padmajothi</h1>
          <h4>Full stack Web developer with React</h4>

          {/* <Resume /> */}

          <SocialLinks />
        </article>
        <Image fluid={fluid} className="hero-img hero-center" />
      </div>
    </header>
  )
}

export default Hero
