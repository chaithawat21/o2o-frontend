import { SelectValue } from "@radix-ui/react-select";
import axios from "axios";
import { create } from "zustand";

const SearchData = (set, get) => ({
  searchInfo: [],
  fillterProvince: [],
  inputCheck : false,
  loanData:[],
  regionData : [],
  provinceData : [],
  categorieData :[],
  fetchSearchData: async () => {
    try {
      const getSearch = await axios.get("http://localhost:8888/search/type");
      set((state) => ({ ...state, searchInfo: getSearch.data }));
    } catch (err) {
      console.log(err.message);
    }
  },
  hdlChange: (value,province) => {
    const fillterProvince = province.filter(
      (province) => province.region_id === value
    );
    set((state) => ({ ...state, fillterProvince: fillterProvince }));
  },
  checkValue : (value) => {
    value && set((state)=> ({...state,inputCheck :true }))
    !value && set((state)=> ({...state,inputCheck :false }))
  },
  fetchLoanData: async () => {
    try{
      const getLoanData = await axios.get("http://localhost:8888/loan/getloan")
      set((state) => ({ ...state, loanData: getLoanData.data }));
    }catch(err){
      console.log(err.message);
    }
  },
  selectValue: async(province,selectType) =>{
    if(selectType === 'regions'){set((state) => ({...state, regionData: province }))}
   
    const body = { province };
    if(selectType === 'province'){
    try{
      console.log(body);
      set((state) => ({...state, provinceData: province }))
      const getByProvince = await axios.get(`http://localhost:8888/search/${province}`)
      set((state) => ({ ...state, loanData: getByProvince.data }));
      console.log(getByProvince.data);
    }catch(err){
      console.log(err.message);
    }
    }
   // if(selectType === 'categories'){set((state) => ({...state, categorieData: province }))}
  }
});

const useSearchData = create(SearchData);
export { useSearchData };
