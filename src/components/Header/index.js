import React from "react"
import logo from "./logo.svg"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  render() {
    const { location } = this.props

    const aboutLinkStyle = {
      paddingBottom: location.pathname === "/" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/" ? `0px 1px 0px 0px black` : `none`,
    }
    const projectLinkStyle = {
      paddingBottom: location.pathname === "/project" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/project" ? `0px 1px 0px 0px black` : `none`,
    }
    const readingsLinkStyle = {
      paddingBottom: location.pathname === "/project" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/readings" ? `0px 1px 0px 0px black` : `none`,
    }
    
    return (
      <div className="header-main">
        <Link className="logo-link" to={`/`}>
          <img src={logo} alt="Website To Track Nikhil's Work" className="logo-img" />
        </Link>

        <div className="header-nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <h1 className="li-h1" style={aboutLinkStyle}>
                <Link className="li-link" to={`/`}>
                  About
                </Link>
              </h1>
            </li>
            
            <li className="nav-li">
              <h1 className="li-h1" style={projectLinkStyle}>
                <Link className="li-link" to={`/project`}>
                  Project
                </Link>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={readingsLinkStyle}>
                <Link className="li-link" to={`/readings`}>
                  Readings
                </Link>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
