import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className='flex flex-row gap-[2rem]'> 
          <Link to="">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/select">Select</Link>
          <Link to="/cart">Cart</Link>

        </nav>
    </header>
  )
}

export default Header