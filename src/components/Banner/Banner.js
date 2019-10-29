import React from "react"
import "./Banner.scss"
import { Link } from "gatsby"

const Banner = () => (
  <div className="hero hero-lg bg-secondary">
    <div className="hero-body">
      <h1>
        <Link to="/">Крафтовая пивоварня «Gatsby» </Link>
      </h1>

      <p>Тюменская пивоварня, специализирующаяся на крафтовом пиве</p>
    </div>
  </div>
)

export default Banner
