import React from "react";
import { Link } from "react-router-dom";
import basketIcon from "../assets/images/icon/basket.svg";
import logoIcon from "../assets/images/logo/logo-coin.png";

function Header() {
  return (
    <header className="header flex flex-row justify-between items-center p-[1rem] border-b-[1px]">
      <img className="w-[2rem]" src={logoIcon} alt="logo" />
      <nav className="flex flex-row gap-[2rem]">
        <Link to="">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/select">Select</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="flex flex-row gap-[1rem] items-center">
        <Link to="/cart">
          <img className="w-[1.5rem] " src={basketIcon} alt="basket" />
        </Link>
        <Link to="/login">
          <button className="border-[2px] border-GreenButton text-GreenLogin px-[1rem] py-[.5rem] rounded-[20px] ">
            LOG IN
          </button>
        </Link>
        <Link to="/support">
          <button className="px-[1rem] py-[.5rem] rounded-[20px] bg-GreenButton text-white">
            SUPPORT
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
