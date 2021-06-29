import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Twitter from "../../content/other_logos/twitter.png"
import Github from "../../content/other_logos/github.png"
import Linkedin from "../../content/other_logos/linkedin.png"
import Email from "../../content/other_logos/email.png"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <p>I am Nikhil Sharma, a full stack developer by passion and profession. I like to design and build websites which touches masses.</p>
        <p>In personal time I like to build small useful apps/tools. </p>
        <p>In past, I have completed training with {" "}<a href="http://www.nxtlifetechnologies.com/" className="no-underline"> NextLife Technologies</a> and i worked at {" "} 
          <a href="http://pim.school/" className="no-underline">Pim Softech Pvt Ltd.</a></p>
          <div className="about-connect"> 
           <a href="mailto:ns1043937@gmail.com" className="img-link">
             <img src={Email} className="about-img" alt=""></img>
          </a> 

           <a href="https://github.com/nikhil141" className="img-link">
             <img src={Github} className="about-img" alt=""></img>
          </a> 

           <a href="https://www.linkedin.com/in/nikhil-sharma-0b1a52171/" className="img-link">
             <img src={Linkedin} className="about-img" alt=""></img>
          </a>  
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
 `