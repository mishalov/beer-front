import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Banner.scss"

const Banner = props => (
  <div className="hero hero-lg bg-secondary">
    <div className="hero-body">
      <h1>Крафтовая пивоварня «Gatsby»</h1>
      <p>Тюменская пивоварня, специализирующаяся на крафтовом пиве</p>
    </div>
  </div>
)

export default Banner
