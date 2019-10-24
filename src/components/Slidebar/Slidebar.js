import * as React from "react"
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider"
import { Handle, Track, Tick } from "./components" // example render components
import "./Slidebar.scss"

const sliderStyle = {
  margin: "5%",
  position: "relative",
  width: "90%",
}

const railStyle = {
  position: "absolute",
  width: "100%",
  height: 6,
  borderRadius: 7,
  cursor: "pointer",
  backgroundColor: "rgb(155,155,155)",
}

const Slidebar = props => {
  const { max, min, values, onChange } = props
  const domain = [min, max]
  return (
    <div style={{ width: "100%", marginBottom: "24px" }}>
      <Slider
        mode={1}
        step={1}
        domain={domain}
        rootStyle={sliderStyle}
        onChange={onChange}
        values={values}
      >
        <Rail>
          {({ getRailProps }) => <div style={railStyle} {...getRailProps()} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={10}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  )
}

export default Slidebar
