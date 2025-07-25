import React from 'react'
import Logo1 from '../assets/Logo4.svg'
import Logo2 from '../assets/Logo5.svg'
import Logo3 from '../assets/Logo6.svg'
import Logo4 from '../assets/Logo7.svg'
import Logo5 from '../assets/Logo8.svg'
import Logo6 from '../assets/Logo9.svg'

const Client = () => {
    const logos = [Logo1,Logo2,Logo3,Logo4,Logo5,Logo6];
    const logo = logos.map((item)=> <img className='mx-10 my-8 sm:mx-16 sm:my-10 h-12' src={item} alt="logo" />)
  return (
    <div className='flex flex-col items-center py-10'>
        <h1 className="text-5xl font-semibold text-dgrey">Our Clients</h1>
        <p className="text-sm font-normal text-dgrey text-center px-4">We have been working with some fortune 500+ companies.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            {logo}
        </div>
    </div>
  )
}

export default Client