import React from 'react'

import "./index.scss"

const Loading = ({ color }) => {
  return (
    <div className={color ? `loading loading--${color}` : "loading"}>
      <div className="loading__dot"></div>
      <div className="loading__dot"></div>
      <div className="loading__dot"></div>
    </div>
  )
}

export default Loading
