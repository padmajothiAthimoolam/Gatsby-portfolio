import React from "react"
import Layout from "./Layout"
import { graphql } from "gatsby"
import Title from "./Title"
import Image from "gatsby-image"
import SEO from "./SEO"
const About = ({
  data: {
    abouts: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]

  return (
    <Layout>
      <SEO title="About Me" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p className="">{info}</p>
            <div className="about-stack ">
              {stack.map(item => {
                return (
                  <span className="stack-icon " key={item.id}>
                    {item.title}
                  </span>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    abouts: allStrapiAbouts {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
