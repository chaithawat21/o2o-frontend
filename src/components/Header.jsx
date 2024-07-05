import React from "react";
import { Link } from "react-router-dom";
import basketIcon from "../assets/images/icon/basket.svg";
import logoIcon from "../assets/images/logo/logo-coin.png";

function Header() {
  return (
    <header className="header flex flex-row justify-between items-center px-[4rem] py-[1rem] border-b-[1px]">
      <img className="w-[2rem]" src={logoIcon} alt="logo" />
      <nav>
        <ul className="flex flex-row gap-[2rem] ">
        <Link to=""><li className="hover:text-GreenLogin">Home</li></Link>
        <Link to="/Register"><li className="hover:text-GreenLogin">Register</li></Link>
        <Link to="/profile"><li className="hover:text-GreenLogin">Profile</li></Link>
        <Link to="/select"><li className="hover:text-GreenLogin">Select</li></Link>
        <Link to="/about"><li className="hover:text-GreenLogin">About</li></Link>
        </ul>
      </nav>
      <div className="flex flex-row gap-[1rem] items-center">
        <Link to="/cart">
          <img className="icon w-[1.5rem] " src={basketIcon} alt="basket" />
        </Link>
        <Link to="/login">
          <button className="border-[2px] border-GreenButton text-GreenLogin px-[1rem] py-[.5rem] rounded-[20px] hover:opacity-50 ">
            LOG IN
          </button>
        </Link>
        <Link to="/support">
          <button className="px-[1rem] py-[.5rem] rounded-[20px] bg-GreenButton text-white hover:opacity-50">
            SUPPORT
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
