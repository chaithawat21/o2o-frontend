import axios from "axios";
import { create } from "zustand";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const SearchData = (set, get) => ({
  loading: false,
  searchInfo: [],
  fillterProvinceValue: [],
  inputCheck: false,
  loanData: [],
  regionData: [],
  LoanDataById: [],
  amountAllId : [],


  fetchSearchData: async () => {
    try {

      set((state) => ({ ...state, loading: true }));
      const getSearch = await axios.get(`${backendUrl}/search/type`);
      set((state) => ({ ...state, searchInfo: getSearch.data }));
    } catch (err) {
      console.log(err.message);
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },

  FillterProvince: (value, province) => {

    const rs = province.filter((province) => province.region_id === value);
    set((state) => ({ ...state, fillterProvinceValue: rs }));
  },

  checkValue: (value) => {
    value && set((state) => ({ ...state, inputCheck: true }));
    !value && set((state) => ({ ...state, inputCheck: false }));
  },

  fetchLoanData: async () => {
    try {
      set((state) => ({ ...state, loading: true }));

      const getLoanData = await axios.get(`${backendUrl}/loan/getloan`);
      set((state) => ({ ...state, loanData: getLoanData.data }));

      const amountAllId = await axios.get(`${backendUrl}/search/getAmountAllId`);
      set((state)=>({...state, amountAllId: amountAllId.data}))

    } catch (err) {
      console.log(err.message);
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },

  fetchLoanDataById: async (id) => {
    try {
      set((state) => ({ ...state, loading: true }));
 ;
      const getLoanDataById = await axios.get(
        `${backendUrl}/loan/getLoanById/${id}`
      );
      set((state) => ({ ...state, LoanDataById: getLoanDataById.data }));

      const amountAllId = await axios.get(`${backendUrl}/search/getAmountAllId`);
      set((state)=>({...state, amountAllId: amountAllId.data}))


    } catch (err) {
      console.log(err.message);
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },

  SelectByFillter: async (data, selectType) => {
    if (selectType === "region") {
      try {
        set((state) => ({ ...state, regionData: data }));

        const getByRegion = await axios.get(
          `${backendUrl}/search/region/${data}`
        );
        set((state) => ({ ...state, loanData: getByRegion.data }));

        const amountAllId = await axios.get(`${backendUrl}/search/getAmountAllId`);
        set((state)=>({...state, amountAllId: amountAllId.data}))

      } catch (err) {
        console.log(err.message);
      }
    }
    if (selectType === "province") {
      try {

        const getByProvince = await axios.get(
          `${backendUrl}/search/province/${data}`
        );
        set((state) => ({ ...state, loanData: getByProvince.data }));

        const amountAllId = await axios.get(`${backendUrl}/search/getAmountAllId`);
        set((state)=>({...state, amountAllId: amountAllId.data}))
      } catch (err) {
        console.log(err.message);
      }
    }

    if (selectType === "categorie") {
      try {

        const getCategorie = await axios.get(
          `${backendUrl}/search/categorie/${data}`
        );
        set((state) => ({ ...state, loanData: getCategorie.data }));

        const amountAllId = await axios.get(`${backendUrl}/search/getAmountAllId`);
        set((state)=>({...state, amountAllId: amountAllId.data}))
      } catch (err) {
        console.log(err.message);
      }
    }
    if (selectType === "loan") {
      try {
        console.log('test');
        
        const getloan = await axios.get(
          `${backendUrl}/search/loan/${data}`
        );
        set((state) => ({ ...state, loanData: getloan.data }));

        const amountAllId = await axios.get(`${backendUrl}/search/getAmountAllId`);
        set((state)=>({...state, amountAllId: amountAllId.data}))
      } catch (err) {
        console.log(err.message);
      }
    }
  },
});

const useSearchData = create(SearchData);
export { useSearchData };
