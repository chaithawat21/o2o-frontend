import { SelectValue } from "@radix-ui/react-select";
import axios from "axios";
import { create } from "zustand";

const SearchData = (set, get) => ({
  loading : false,
  searchInfo: [],
  fillterProvinceValue: [],
  inputCheck : false,
  loanData:[],
  LoanDataById:[],
  loanFillter:[],
  regionData : [],
  provinceData : [],
  categorieData :[],

  fetchSearchData: async () => {
    try {
      set(state => ({...state, loading:true}))
      const getSearch = await axios.get("http://localhost:8888/search/type");
      set((state) => ({ ...state, searchInfo: getSearch.data }));
    } catch (err) {
      console.log(err.message);
    }finally {
			set(state => ({...state , loading: false}))		
		}
  },


  FillterProvince: (value,province) => {
    const rs = province.filter(
      (province) => province.region_id === value
    );
    set((state) => ({ ...state, fillterProvinceValue: rs }));
  },


  checkValue : (value) => {
    value && set((state)=> ({...state,inputCheck :true }))
    !value && set((state)=> ({...state,inputCheck :false }))
  },

  fetchLoanData: async () => {
    try{
      set(state => ({...state, loading:true}))
      const getLoanData = await axios.get("http://localhost:8888/loan/getloan")
      set((state) => ({ ...state, loanData: getLoanData.data }));
    } catch (err) {
      console.log(err.message);
    }finally {
			set(state => ({...state , loading: false}))		
		}
  },

  fetchLoanDataById : async (id) =>{
    try{
      set(state => ({...state, loading:true}))
      const getLoanData = await axios.get("http://localhost:8888/loan/getLoanById/id")
      set((state) => ({ ...state, LoanDataById: getLoanData.data }));
    } catch (err) {
      console.log(err.message);
    }finally {
			set(state => ({...state , loading: false}))		
		}
  },


  SelectByFillter: async(data,selectType) =>{
    
    if(selectType === 'region'){
      try{
      console.log("data",data);
      set((state) => ({...state, regionData: data }))
      const getByRegion = await axios.get(`http://localhost:8888/search/region/${data}`)
      console.log(getByRegion.data);
      set((state) => ({ ...state, loanData: getByRegion.data }));
    }catch(err){
      console.log(err.message);
    }
    }
   

    if(selectType === 'province'){
    try{
      console.log('test2');
      console.log("province :",data);
      set((state) => ({...state, provinceData: data }))
      const getByProvince = await axios.get(`http://localhost:8888/search/province/${data}`)
      set((state) => ({ ...state, loanData: getByProvince.data }));
      console.log(getByProvince.data);
    }catch(err){
      console.log(err.message);
    }
    }

     if(selectType === 'categorie'){
      try{
        console.log("categorie",data);
        set((state) => ({...state, categorieData : data }))
        const getCategorie = await axios.get(`http://localhost:8888/search/categorie/${data}`)
        set((state) => ({ ...state, loanData: getCategorie.data }));
        console.log(getCategorie.data);
      }catch(err){
        console.log(err.message);
      }
     }
    }
  }
);

const useSearchData = create(SearchData);
export { useSearchData };
