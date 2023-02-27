import React from 'react'

const User = (props) => {
  return (
    <div>
        <span className="userData">
        <span className="name"> {props.userData.name} </span>
        <span className="handle"> {props.userData.handle} </span>
        </span>
    </div>
  )
}

export default User