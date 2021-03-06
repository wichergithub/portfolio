import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
/* eslint-disable */
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaGithub, FaGlobe } from "react-icons/fa"
import Day from "../components/SingleProject/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
const Template = ({ data }) => {
  const {
    name,
    gitlink,
    images,
    link,
    tech,
    details: { details },
  } = data.proj
  console.log(images)

  const [mainImage, ...projectImages] = images
  console.log(mainImage)

  return (
    <Layout>
      <StyledHero temp="true" img={mainImage.fluid}>
        <Banner title={name}></Banner>
      </StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {projectImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="nice picture of fantastic webapp"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaGlobe className={styles.icon} />{" "}
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </p>
            <p>
              <FaGithub className={styles.icon} />{" "}
              <a href={gitlink} target="_blank" rel="noopener noreferrer">
                {gitlink}
              </a>
            </p>
          </div>
          <h4>Tech: {tech}</h4>
          <h2>Description</h2>
          <p className={styles.desc}>{details}</p>
          <AniLink fade to="/projects" className="btn-primary">
            Back to projects
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    proj: contentfulProject(slug: { eq: $slug }) {
      name
      gitlink
      link
      tech
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      details {
        details
      }
      mainTech
    }
  }
`
export default Template
