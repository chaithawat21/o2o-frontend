import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import imageSuccess from "../assets/images/illustration/illustration01-register.png"

const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default function UserActivation() {


  const location = useLocation();
  useEffect(() => {
    const run = async () => {
      try {
        const urlParams = new URLSearchParams(location.search);
        const hashValue = urlParams.get("hash");
        await axios.put(`${backendUrl}/auth/activation`,{hashValue:hashValue,verified:true})
      } catch (err) {
        console.log(err);
      }
    };
    run();
  }, []);
  return (
    <div className="flex flex-col gap-7 justify-center items-center h-screen relative ">
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        className=" w-[12.5rem] drop-shadow-lg absolute z-10 top-[2.5rem] "
      >
        <g id="SVGRepo_bgCarrier" strokeWidth=""></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#38f0b9"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
          ></path>
        </g>
      </svg>
      
      <h1 className="text-[1.5rem] absolute z-10 top-[15rem] text-center">Your register have been <br/>successfuly activated!</h1>
      <img className="absolute bottom-0 z-0 object-contain object-bottom w-[50rem]" src={imageSuccess} alt="imageSuccess" />
    </div>
  );
}
