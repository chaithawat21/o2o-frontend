import React from 'react'
import logoIcon from '../assets/images/logo/logo-coin.png'
import xIcon from '../assets/images/icon/twitterx.png'
import facebookIcon from '../assets/images/icon/facebook.png'
import instagamIcon from '../assets/images/icon/instagram.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='flex flex-row justify-between items-center p-[1rem] bg-gray-100'>
      <div className='flex flex-col gap-[1rem]'>
      <img className='w-[2rem] h-[2rem]' src={logoIcon} alt="logo" />
      <nav className="flex flex-row gap-[1rem] items-center text-[.8rem] text-GreenFooter">
        <Link to="">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/select">Select</Link>
        <Link to="/about">About</Link>
      </nav>
      </div>
        <div className='flex flex-col items-end gap-[1rem]'>
        <div className='flex flex-row gap-[1rem]'>
          <img  className='w-[2.5rem] h-[2.5rem] cursor-pointer' src={facebookIcon} alt="facebook" />
          <img className='w-[2.5rem] h-[2.5rem] cursor-pointer' src={instagamIcon} alt="instagram" />
          <img className='w-[2.5rem] h-[2.5rem] cursor-pointer' src={xIcon} alt="x" />
        </div>
        <p className=' text-[.8rem] text-end '>© 2024 O2O project. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer