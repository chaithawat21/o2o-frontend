import React from "react";
import { useSearchData } from "../utils/serviceAPI/searchServices";
import * as Img from "../assets/images/categories/images";

function CatagoryBar() {
  const searchInfo = useSearchData((state) => state.searchInfo);
  const selectByFillter = useSearchData((state) => state.SelectByFillter);
  // const categories = useSearchData((state) => state.categorieData);


  if (!searchInfo || !searchInfo.categories) {
    return <div>Loading...</div>;
  }

  const formatImg = (name) => {
    const formattedName = name.includes("_") ? name : name.replace(/ /g, "_");
    return Img[formattedName] || ""; 
  };

  return (
    <div className="flex justify-center gap-[3rem] my-4">
      {searchInfo.categories.map((items) => (
        <div key={items.id} className="flex flex-col items-center">
          <div className="w-[4rem] h-[4rem] bg-green-700 flex justify-center items-center rounded-full mb-2">
            <img
              src={formatImg(items.categorie_name)}
              alt=""
              className="w-9 h-9"
            />
          </div>
          <div className="text-[14px] cursor-pointer" onClick={()=>selectByFillter(`${items.id}`,"categorie")}>{items.categorie_name}</div>
        </div>
      ))}
    </div>
  );
}

export default CatagoryBar;
