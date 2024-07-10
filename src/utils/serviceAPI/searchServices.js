import axios from "axios";
import { create } from "zustand";

const SearchData = (set, get) => ({
  searchInfo: [],
  fillterProvince: [],
  inputCheck : false,
  loanData:[],
  fetchSearchData: async () => {
    try {
      const getSearch = await axios.get("http://localhost:8888/search");
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
  }
});

const useSearchData = create(SearchData);
export { useSearchData };
