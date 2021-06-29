import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReadingsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Readings" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>React Js </h2>
        
        <a href="https://reactjs.org/tutorial/tutorial.html" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Gatsby </h2>
        
        <a href="https://www.gatsbyjs.com/blog/" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>CodeIgniter Application Development  </h2>
        
        <a href="" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Data Structure</h2>
        
        <a href="" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
    </Layout>
  )
}

export default ReadingsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`