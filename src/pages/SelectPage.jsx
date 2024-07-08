import React from "react";
import Searchbar from "../components/Searchbar";
import CardLoanProfile from "../components/CardLoanProfile";
import selectPageImg from "../assets/images/header/header03.png";
import PaginationSelect from "../components/PaginationSelect";

function SelectPage() {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <img
          className="object-cover object-center  w-full h-[30rem] relative "
          src={selectPageImg}
          alt="header-image"
        />
        <h1 className="header-text absolute top-[10rem]  text-black text-center text-[5rem] font-[700] drop-shadow-[0_0px_1px_rgba(255,255,255,1)]">
          เลือกสานฝันให้ทุกคน
        </h1>
      </div>
      <div className="flex flex-col relative bg-yellow-50">
        <div className="flex justify-center absolute z-10  w-full">
          <Searchbar/>
        </div>
        <div className="flex flex-wrap gap-4 justify-center py-24">
          <CardLoanProfile />
          <CardLoanProfile />
          <CardLoanProfile />
          <CardLoanProfile />
          <CardLoanProfile />
          <CardLoanProfile />
          <CardLoanProfile />
          <CardLoanProfile />
        </div>
        <div className="p-8">
          <PaginationSelect />
        </div>
      </div>
    </>
  );
}

export default SelectPage;
