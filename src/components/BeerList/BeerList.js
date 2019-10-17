import { graphql } from "gatsby"
import React from "react"
import Beer from "../Beer"
import "./BeerList.scss"

class BeerList extends React.Component {
  // componentDidMount(){}
  render() {
    console.log(this.props, this.props.data)
    const beers = []
    for (let i = 0; i < 13; i++) {
      beers.push(<Beer></Beer>)
    }
    return (
      <div className="beer-list">
        <div className="container">
          <div className="columns">
            {beers.map((beer, index) => (
              <div
                key={`${index}-beer`}
                className="column col-3 col-md-6 col-sm-12 beer-list__item"
              >
                {beer}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default BeerList
