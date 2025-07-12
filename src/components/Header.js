import React from 'react'
import Logo from "../assets/Logo.svg"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className='bg-white h-14 w-full flex items-center justify-between px-4'>
        <img src={Logo} alt="" />
        <Nav />
    </div>
  )
}

export default Header