import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import basketIcon from "../assets/images/icon/basket.svg";
import logoIcon from "../assets/images/logo/logo-coin.png";
import userIcon from "../assets/images/icon/user-icon.svg";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useProfile } from "../utils/serviceAPI/profileService";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-green-500 transition ease transform duration-300`;
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const { fetchData, clearImageUrl, imageUrl } = useProfile();

  const getUser = localStorage.getItem("token");
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    if (user && user.length > 0) {
      const currentUser = user[0];
      if (currentUser.username === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [user]);

  useEffect(() => {
    if (getUser) {
      fetchData(); // Fetch data if user is logged in
    } else {
      clearImageUrl(); // Clear imageUrl if no user is logged in
    }
  }, [getUser, fetchData, clearImageUrl]);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header flex flex-row justify-between items-center px-[4rem] py-[0rem] border-b-[1px] bg-white ">
      <img className="w-[2rem]" src={logoIcon} alt="logo" />
      <nav>
        <ul className="flex flex-row items-center gap-[2rem]  md:hidden">
          <Link to="" onClick={handleMenuItemClick}>
            <li
              className={`py-[1.5rem]  hover:text-GreenLogin   ${
                isActive("/") ? "text-GreenLogin   " : ""
              }`}
            >
              Home
            </li>
          </Link>

          {!getUser && (
            <Link to="/Register" onClick={handleMenuItemClick}>
              <li
                className={`py-[1.5rem] hover:text-GreenLogin   ${
                  isActive("/Register") ? "text-GreenLogin " : ""
                }`}
              >
                Register
              </li>
            </Link>
          )}

          {getUser &&
            (!isAdmin ? (
              <Link to="/profile" onClick={handleMenuItemClick}>
                <li
                  className={`py-[1.5rem] hover:text-GreenLogin   ${
                    isActive("/profile") ? "text-GreenLogin " : ""
                  }`}
                >
                  Profile
                </li>
              </Link>
            ) : (
              <Link to="/admin" onClick={handleMenuItemClick}>
                <li
                  className={`py-[1.5rem] hover:text-GreenLogin  ${
                    isActive("/admin") ? "text-GreenLogin" : ""
                  }`}
                >
                  Administration
                </li>
              </Link>
            ))}
          <Link to="/borrowDetail" onClick={handleMenuItemClick}>
            <li
              className={`py-[1.5rem]  hover:text-GreenLogin   ${
                isActive("/borrowDetail") ? "text-GreenLogin " : ""
              }`}
            >
              Borrow
            </li>
          </Link>

          <Link to="/select" onClick={handleMenuItemClick}>
            <li
              className={`py-[1.5rem]  hover:GreenLogin  ${
                isActive("/select") ? "text-GreenLogin" : ""
              }`}
            >
              Lend
            </li>
          </Link>
          <Link to="/about" onClick={handleMenuItemClick}>
            <li
              className={`py-[1.5rem]  hover:text-GreenLogin  ${
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
          <img className="icon w-[1.5rem]" src={basketIcon} alt="basket" />
        </Link>

        {getUser ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="relative right-0 mt-2 w-10 h-10 bg-white border border-gray-200 rounded-full mx-[1rem] my-[.3rem] shadow-lg flex justify-center items-center">
              <img
                src={imageUrl || userIcon}
                alt="Profile"
                className="border-[2px] border-white w-full h-full rounded-full object-cover"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  handleLogout();
                  navigate("/");
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to="/login">
            <button className="border-[2px] border-GreenButton text-GreenLogin px-[1rem] py-[.5rem] rounded-[20px] hover:opacity-50">
              LOG IN
            </button>
          </Link>
        )}

        <Link to="/support">
          <AnimatedGradientText>
            <button
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40]  bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent px-[1rem] py-[.4rem] text-[1rem]`
              )}
            >
              SUPPORT
            </button>
          </AnimatedGradientText>
          {/* <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-2000 hover:dark:text-neutral-400">
          <span>SUPPORT</span>
        </AnimatedShinyText> */}
        </Link>
        <div className="relative">
          <button
            className="hidden flex-col h-12 w-12 rounded justify-center items-center group md:flex"
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
            className={`absolute z-50 right-[-4rem] w-[15rem] backdrop-blur-[50px] mt-[0rem] transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul
              className={`flex-col items-start gap-[2rem] ${
                isOpen ? "md:flex" : "hidden"
              } pt-[1.5rem] pl-[4rem] h-screen text-[1.5rem]`}
            >
              <Link to="" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-GreenLogin ${
                    isActive("/") ? "text-green-500" : ""
                  }`}
                >
                  Home
                </li>
              </Link>
              {!getUser && (
                <Link to="/Register" onClick={handleMenuItemClick}>
                  <li
                    className={`hover:text-GreenLogin ${
                      isActive("/Register") ? "text-GreenLogin" : ""
                    }`}
                  >
                    Register
                  </li>
                </Link>
              )}

              {getUser &&
                (!isAdmin ? (
                  <Link to="/profile" onClick={handleMenuItemClick}>
                    <li
                      className={`hover:text-GreenLogin ${
                        isActive("/profile") ? "text-GreenLogin" : ""
                      }`}
                    >
                      Profile
                    </li>
                  </Link>
                ) : (
                  <Link to="/admin" onClick={handleMenuItemClick}>
                    <li
                      className={`hover:text-GreenLogin ${
                        isActive("/admin") ? "text-GreenLogin" : ""
                      }`}
                    >
                      Administration
                    </li>
                  </Link>
                ))}
              <Link to="/borrowDetail" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-GreenLogin ${
                    isActive("/Register") ? "text-GreenLogin" : ""
                  }`}
                >
                  Borrow
                </li>
              </Link>
              <Link to="/select" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-GreenLogin ${
                    isActive("/select") ? "text-green-500" : ""
                  }`}
                >
                  Lend
                </li>
              </Link>
              <Link to="/about" onClick={handleMenuItemClick}>
                <li
                  className={`hover:text-GreenLogin ${
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
