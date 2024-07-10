import React from "react";
import { useSearchData } from "../utils/serviceAPI/searchServices";

function CatagoryBar() {
  const searchInfo = useSearchData((state) => state.searchInfo);

  return (
    <div className="flex justify-center gap-7 my-4">
      {searchInfo.categories.map((items) => (
        <>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-slate-300"></div>
            <div className="text-xl cursor-pointer">{items.categorie_name}</div>
          </div>
        </>
      ))}
    </div>
  );
}

export default CatagoryBar;
