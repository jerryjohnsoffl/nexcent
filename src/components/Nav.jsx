import React from 'react'
import Close from "../assets/Close.svg"

const Nav = () => {
  return (
    <div>
      <div className="hidden md:flex">
        <nav className="flex space-x-5">
          <a href="" className="no-underline">Home</a>
          <a href="" className="no-underline">Features</a>
          <a href="" className="no-underline">Community</a>
          <a href="" className="no-underline">Blog</a>
          <a href="" className="no-underline">Pricing</a>
        </nav>
      </div>
        <div className="container md:hidden"><img src={Close} alt="" /></div>
    </div>
  )
}

export default Nav