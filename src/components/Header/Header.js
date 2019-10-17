import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./Header.scss"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar header">
    <section className="navbar-section">
      <a href="..." className="navbar-brand mr-2">
        Пример приложения на Gatsby + strapi.js
      </a>
      <a href="..." className="btn btn-link">
        GitHub
      </a>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
