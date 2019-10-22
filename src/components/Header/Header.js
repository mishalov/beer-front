import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./Header.scss"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar header">
    <section className="navbar-section">
      <Link to="/" className="navbar-brand mr-2">
        Пример приложения на Gatsby + strapi.js
      </Link>
      <a
        href="https://github.com/mishalov/beer-front"
        className="btn btn-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub (front-end)
      </a>
      <a
        href="https://github.com/mishalov/beer-back"
        className="btn btn-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub (back-end)
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
