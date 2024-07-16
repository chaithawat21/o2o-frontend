import React,{navigate} from "react";
import Searchbar from "../components/Searchbar";
import CardLoanProfile from "../components/CardLoanProfile";
import selectPageImg from "../assets/images/header/header03.png";
import PaginationSelect from "../components/PaginationSelect";
import CatagoryBar from "../components/CatagoryBar";
import { useEffect } from "react";
import { useSearchData } from "../utils/serviceAPI/searchServices";

function SelectPage() {
  const fetchSearchData = useSearchData((state) => state.fetchSearchData);
  const fetchLoanData = useSearchData((state)=> state.fetchLoanData)
  


  useEffect(() => {
    fetchSearchData()
    fetchLoanData()
  }, []);
 
  return (
    <>
      <div className="relative flex flex-col items-center">
        <img
          className="object-cover object-top  w-full h-[30rem] relative "
          src={selectPageImg}
          alt="header-image"
        />
        <h1 className="header-text absolute top-[4rem]  text-black text-center text-[5rem] font-[700] drop-shadow-[0_0px_1px_rgba(255,255,255,1)]">
          เลือกสานฝันให้ทุกคน
        </h1>
      </div>
      <div className="flex flex-col relative ">
        <div>
          <CatagoryBar />
        </div>
        <div className="flex justify-center absolute z-10  w-full top-28">
          <Searchbar />
        </div>
          <CardLoanProfile />
        {/* <div className="p-8"> */}
          {/* <PaginationSelect /> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default SelectPage;
