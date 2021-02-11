// // import React from "react"
// // import Layout from "../components/Layout"
// // import "../css/blackwhite.css"

// // const Home = () => {
// //   return (
// //     <section className="home">
// //       <div className="max-width">
// //         <div clasName="home-content">
// //           <div className="text-1">Hello,My Name is</div>
// //           <div className="text-2">Padmajothi</div>
// //           <div className="text-2">
// //             And I'm a<span>Fullstak web developer</span>{" "}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Home

// import React from "react"
// import Layout from "../components/Layout"
// import { graphql } from "gatsby"
// import Title from "../components/Title"
// import Image from "gatsby-image"
// import SEO from "../components/SEO"
// const Home = ({
//   data: {
//     abouts: { nodes },
//   },
// }) => {
//   const { info, stack, title, image } = nodes[0]

//   return (
//     <Layout>
//       <SEO title="About Me" description="about webdev" />
//       <section className="about-page">
//         <div className="about-center">
//           <Image fluid={image.childImageSharp.fluid} className="about-img" />
//           <article className="about-text">
//             <Title title={title} className="title" />
//             <p>{info}</p>
//             <div className="about-stack">
//               {stack.map(item => {
//                 return <span key={item.id}>{item.title}</span>
//               })}
//             </div>
//           </article>
//         </div>
//       </section>
//     </Layout>
//   )
// }

// export const query = graphql`
//   {
//     abouts: allStrapiAbouts {
//       nodes {
//         stack {
//           id
//           title
//         }
//         title
//         info
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default Home
