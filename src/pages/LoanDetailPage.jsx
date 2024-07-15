import React from "react";
import imgHeader from "../assets/images/header/header02.png";
import DetailUser from "../components/DetailUser";
import { useLocation } from "react-router-dom";

export default function LoanDetailPage() {
  const location = useLocation()
  const queryParam = new URLSearchParams(location.search)
  const loanItem = JSON.parse(queryParam.get("loan"))
 
  return (
    <>
      <div className="relative flex flex-col items-center">
        <img
          className="object-cover object-center  w-full h-[30rem] relative "
          src={imgHeader}
          alt="header-image"
        />
        <h1 className="header-text absolute top-[10rem]  text-black text-center text-[5rem] font-[700] drop-shadow-[0_0px_1px_rgba(255,255,255,1)]">
          เติบโตในการลงทุน
        </h1>
        <DetailUser loanItem={loanItem}/>
      </div>
    </>
  );
}
