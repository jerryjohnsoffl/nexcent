import React from 'react'
import Illustration from "../assets/Illustration.svg"

const Intro = () => {
  return (
    <div className="flex flex-col-reverse items-center bg-silver p-5 md:flex-row md:justify-around h-full">
        <div className="container flex flex-col items-center my-5 p-5 md:w-1/2 md:items-start md:my-28">
            <h1 className='text-6xl my-2 md:text-7xl text-center md:text-left'>Lessons and insights</h1>
            <h1 className='text-6xl text-center my-2 md:text-7xl md:text-left'>from 8 years</h1>
            <p className='my-2 text-center md:text-left text-grey'>Where to grow your business as a photographer: site or social media?</p>
            <button className="rounded-md text-white bg-green px-5 py-3">Register</button>
        </div>
        <img className='mt-5 mb-12' src={Illustration} alt="" />
    </div>
  )
}

export default Intro