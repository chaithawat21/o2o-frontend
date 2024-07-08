import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import basketIcon from "../assets/images/icon/basket.svg";
import logoIcon from "../assets/images/logo/logo-coin.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-green-500 transition ease transform duration-300`;
  const location = useLocation();

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };
  const isActive = (path) => location.pathname === path;
  return (
    <header className="header flex flex-row justify-between items-center px-[4rem] py-[1rem] border-b-[1px]">
      <img className="w-[2rem]" src={logoIcon} alt="logo" />
      <nav>
        <ul className="flex flex-row gap-[2rem] md:hidden">
        <Link to="" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-GreenLogin ${
                    isActive("/") ? "text-GreenLogin" : ""
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link to="/Register" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-GreenLogin ${
                    isActive("/Register") ? "text-GreenLogin" : ""
                  }`}
                >
                  Register
                </li>
              </Link>
              <Link to="/profile" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-GreenLogin ${
                    isActive("/profile") ? "text-GreenLogin" : ""
                  }`}
                >
                  Profile
                </li>
              </Link>
              <Link to="/select" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-GreenLogin ${
                    isActive("/select") ? "text-GreenLogin" : ""
                  }`}
                >
                  Select
                </li>
              </Link>
              <Link to="/about" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-GreenLogin ${
                    isActive("/about") ? "text-GreenLogin" : ""
                  }`}
                >
                  About
                </li>
              </Link>
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
        <div className="relative">
          <button
            className="hidden flex-col h-12 w-12   rounded justify-center items-center group md:flex"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>

          <nav
            className={`absolute z-50 right-[-4rem] w-[15rem] backdrop-blur-[50px] mt-[1rem] transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul
              className={` flex-col items-start gap-[2rem] ${
                isOpen ? "md:flex" : "hidden"
              } pt-[1.5rem] pl-[4rem] h-screen `}
            >
              <Link to="" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-white ${
                    isActive("/") ? "text-green-500" : ""
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link to="/Register" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-white ${
                    isActive("/Register") ? "text-green-500" : ""
                  }`}
                >
                  Register
                </li>
              </Link>
              <Link to="/profile" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-white ${
                    isActive("/profile") ? "text-green-500" : ""
                  }`}
                >
                  Profile
                </li>
              </Link>
              <Link to="/select" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-white ${
                    isActive("/select") ? "text-green-500" : ""
                  }`}
                >
                  Select
                </li>
              </Link>
              <Link to="/about" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-white ${
                    isActive("/about") ? "text-green-500" : ""
                  }`}
                >
                  About
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
