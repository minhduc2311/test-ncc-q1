import React, { useState } from 'react'

import "./Sidebar.css"

function Sidebar() {
const [active, setActive] = useState(false);

const activeStyle = () => {
  setActive(!active)
  console.log(active)
}

  return (
    <div className='sidebar'>
        <a href='/' className="item" onClick={activeStyle}>Home</a>
        <a href='/' className="item">Services</a>
        <a href='/' className="item">News</a>
        <a href='/' className="item">Blog</a>
        <a href='/' className="item">Contact</a>
    </div>
  )
}

export default Sidebar