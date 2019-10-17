import React from "react"
import "./Beer.scss"

const Beer = props => (
  <div className="beer-item">
    <div className="card">
      <div className="card-image">
        <img
          className="img-responsive"
          src="https://picturepan2.github.io/spectre/img/macos-sierra-2.jpg"
          alt="macOS Sierra"
        />
      </div>
      <div className="card-header">
        <button className="btn btn-primary float-right">
          <i className="icon icon-plus"></i>
        </button>
        <div className="card-title h5">Атомная прачечная</div>
        <div className="card-subtitle">
          IBU: <span className="text-gray beer-item__attribute">20</span>
          OG: <span className="text-gray beer-item__attribute">16.5</span>
          ABV: <span className="text-gray beer-item__attribute">7.2</span>
        </div>
      </div>
      <div className="card-body">
        An immersive, three-day experience focused on exploring the next
        generation of technology, mobile and beyond.
      </div>
    </div>
  </div>
)

export default Beer
