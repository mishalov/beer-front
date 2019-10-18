import { graphql } from "gatsby"
import React from "react"
import Beer from "../Beer"
import "./BeerList.scss"
import PropTypes from "prop-types"

class BeerList extends React.Component {
  render() {
    const { beers } = this.props
    return (
      <div class="p-2">
        <div className="beer-list">
          <div className="container">
            <div className="columns">
              {beers.map((beer, index) => (
                <div
                  key={`${index}-beer`}
                  className="column col-3 col-md-6 col-sm-12 beer-list__item"
                >
                  <Beer {...beer} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
}

export default BeerList
