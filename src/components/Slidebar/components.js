import * as React from "react"

export const Handle = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) => (
  <div
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    style={{
      left: `${percent}%`,
      position: "absolute",
      marginLeft: "-11px",
      marginTop: "-6px",
      zIndex: 2,
      width: 16,
      height: 16,
      cursor: "pointer",
      borderRadius: "50%",
      boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#34568f",
    }}
    {...getHandleProps(id)}
  />
)

export const Track = ({ source, target, getTrackProps }) => (
  <div
    style={{
      position: "absolute",
      height: 6,
      zIndex: 1,
      backgroundColor: "#7aa0c4",
      borderRadius: 7,
      cursor: "pointer",
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  />
)

export const Tick = ({ tick, count }) => (
  <div>
    <div
      style={{
        position: "absolute",
        marginTop: 6,
        width: 1,
        height: 5,
        backgroundColor: "rgb(200,200,200)",
        left: `${tick.percent}%`,
      }}
    />
    <div
      style={{
        position: "absolute",
        marginTop: 15,
        fontSize: 10,
        textAlign: "center",
        marginLeft: `${-(100 / count) / 2}%`,
        width: `${100 / count}%`,
        left: `${tick.percent}%`,
      }}
    >
      {tick.value}
    </div>
  </div>
)
