import React from 'react'

const Timestamp = (props) => {
  return (
    <span className="time">{props.time.timestamp}</span>
  )
}

export default Timestamp