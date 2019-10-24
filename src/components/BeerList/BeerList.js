import React from "react"
import Beer from "../Beer"
import "./BeerList.scss"
import PropTypes from "prop-types"
import BeerListFilter from "../BeerListFilter"
const R = require("ramda")

const groupByStyle = R.groupBy(beer => beer.style)
const findMax = (arr, field) => {
  return arr.reduce(
    (prev, curr) => (prev[field] > curr[field] ? prev : curr),
    Number.MIN_SAFE_INTEGER
  )
}

const findMin = (arr, field) => {
  return arr.reduce(
    (prev, curr) => (prev[field] < curr[field] ? prev : curr),
    Number.MAX_SAFE_INTEGER
  )
}

class BeerList extends React.Component {
  constructor(props) {
    super(props)
    const { beers } = this.props
    const ibuFilter = {
      min: findMin(beers, "IBU").IBU,
      max: findMax(beers, "IBU").IBU,
    }
    const abvFilter = {
      min: findMin(beers, "ABV").ABV,
      max: findMax(beers, "ABV").ABV,
    }

    this.state = { styleFilter: "", ibuFilter, abvFilter }
  }

  handleFilterByStyle = style => {
    this.setState({ styleFilter: style })
  }

  handleChangeIbuFilter = values => {
    this.setState({ ibuFilter: { min: values[0], max: values[1] } })
  }

  handleChangeAbvFilter = values => {
    this.setState({ abvFilter: { min: values[0], max: values[1] } })
  }

  render() {
    const { beers } = this.props
    const { styleFilter, ibuFilter, abvFilter } = this.state
    const groupedByStyle = groupByStyle(beers)

    //Фильтрация по стилю
    const filtredByStyle = styleFilter ? groupedByStyle[styleFilter] : beers

    //Крайние значения фильтров по горечи или алкогольности
    const ibuFilterEdges = {
      min: findMin(filtredByStyle, "IBU").IBU,
      max: findMax(filtredByStyle, "IBU").IBU,
    }
    const abvFilterEdges = {
      min: findMin(filtredByStyle, "ABV").ABV,
      max: findMax(filtredByStyle, "ABV").ABV,
    }

    //Фильтрация по горечи
    const ibuFiltred = filtredByStyle.filter(
      beer => beer.IBU >= ibuFilter.min && beer.IBU <= ibuFilter.max
    )

    //Фильтрация по алкоголю
    const beersToShow = ibuFiltred.filter(
      beer => beer.ABV >= abvFilter.min && beer.ABV <= abvFilter.max
    )

    const styles = Object.keys(groupedByStyle)
    return (
      <div className="p-2">
        <div className="beer-list">
          <div className="container">
            <div className="columns">
              <div className="column col-3 col-md-6 col-sm-12">
                <BeerListFilter
                  styles={styles}
                  handleFilterByStyle={this.handleFilterByStyle}
                  ibuFilterEdges={ibuFilterEdges}
                  abvFilterEdges={abvFilterEdges}
                  ibuFilter={ibuFilter}
                  abvFilter={abvFilter}
                  handleChangeIbuFilter={this.handleChangeIbuFilter}
                  handleChangeAbvFilter={this.handleChangeAbvFilter}
                />
              </div>
              {beersToShow.length > 0 ? (
                beersToShow.map((beer, index) => (
                  <div
                    key={`${index}-beer`}
                    className="column col-3 col-md-6 col-sm-12 beer-list__item"
                  >
                    <Beer {...beer} />
                  </div>
                ))
              ) : (
                <div className="column col-9 col-md-6 col-sm-12 beer-list__item">
                  <div class="empty">
                    <div class="empty-icon">
                      <i class="icon icon-people"></i>
                    </div>
                    <p class="empty-title h5">
                      Простите, но пива на ваш вкус мы не варим
                    </p>
                    <p class="empty-subtitle">
                      Но Вы можете связаться с нами и, может, мы сделаем его
                      специально для Вас
                    </p>
                  </div>
                </div>
              )}
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
