import React from "react"
import PropTypes from "prop-types"
import "./BeerListFilter.scss"
import Slidebar from "../Slidebar/Slidebar"

const BeerListFilter = props => {
  const {
    styles,
    handleFilterByStyle,
    ibuFilterEdges,
    abvFilterEdges,
    ibuFilter,
    abvFilter,
    handleChangeIbuFilter,
    handleChangeAbvFilter,
  } = props
  const handleStyleChange = e => {
    handleFilterByStyle(e.target.value)
  }
  return (
    <div className="beer-list-filter">
      <h5>Фильтр и сортировка</h5>
      <div className="beer-list-filter__controls">
        <div className="form-group">
          <div className="col-3 col-sm-12">
            <label className="form-label" htmlFor="beer-list-filter__style">
              Стиль:
            </label>
          </div>
          <div className="col-9 col-sm-12" id="beer-list-filter__style">
            <select className="form-select" onChange={handleStyleChange}>
              <option value="">Любой</option>
              {styles.map((style, index) => (
                <option value={style} key={`style-selector-${index}`}>
                  {style}
                </option>
              ))}
            </select>
          </div>
        </div>

        {ibuFilterEdges.min !== ibuFilterEdges.max && (
          <div className="form-group">
            <label
              className="form-label"
              htmlFor="beer-list-filter__style"
              id="beer-list-filter__IBU"
            >
              Горечь:
            </label>

            <div className="columns">
              <Slidebar
                min={ibuFilterEdges.min}
                max={ibuFilterEdges.max}
                values={[ibuFilter.min, ibuFilter.max]}
                onChange={handleChangeIbuFilter}
              ></Slidebar>
            </div>
          </div>
        )}

        {abvFilterEdges.max !== abvFilterEdges.min && (
          <div className="form-group">
            <label
              className="form-label"
              htmlFor="beer-list-filter__style"
              id="beer-list-filter__IBU"
            >
              Алкоголь:
            </label>

            <div className="columns">
              <Slidebar
                min={abvFilterEdges.min}
                max={abvFilterEdges.max}
                values={[abvFilter.min, abvFilter.max]}
                onChange={handleChangeAbvFilter}
              ></Slidebar>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

BeerListFilter.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.string),
  handleFilterByStyle: PropTypes.func,
}

export default BeerListFilter
