import React from "react"
import "./Beer.scss"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Beer = props => {
  const { ABV, IBU, OG, description, id, name, photo, style } = props
  return (
    <div className="beer-item">
      <div className="card">
        <div className="card-image">
          <img
            className="img-responsive"
            src={photo.fixed}
            alt="macOS Sierra"
            width="100%"
          />
        </div>
        <div className="card-header">
          <div className="beer-item__header">
            <div className="card-title h5 beer-item__header-title">
              <Link to={`/${id}`}> {name}</Link>
            </div>
          </div>

          <div className="card-subtitle">
            IBU:<span className="text-primary beer-item__attribute">{IBU}</span>
            OG: <span className="text-primary beer-item__attribute">{OG}</span>
            ABV:
            <span className="text-primary beer-item__attribute">
              {ABV.toFixed(1)}°
            </span>
          </div>
        </div>
        <div className="card-body">
          <div className="beer-item__style">{`Стиль: ${style}`} </div>
          <div className="beer-item__description">{description}</div>
        </div>
      </div>
    </div>
  )
}

Beer.propTypes = {
  style: PropTypes.string,
  ABV: PropTypes.number,
  IBU: PropTypes.number,
  OG: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.object,
}

export default Beer
