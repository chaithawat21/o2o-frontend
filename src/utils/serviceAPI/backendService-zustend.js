import axios from "axios";
import { useEffect } from "react";
import { create } from "zustand";

const dataUser = (set, get) => ({
    loading: false,
    loader: false,
    user: [],
    lendUser: [],
    history: [],
    setLoader: (value) => set({ loader: value }),
    setLoaing: (value) => set({ loading: value }),
    fectDataUser: async () => {
        try {
            const rs = await axios.get("http://localhost:8888/auth/me", {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            set(state => ({ ...state, user: rs.data.user }))
            set(stete => ({ ...stete, loading: true }))
        } catch (err) {
            console.log(err)
        }
    },

    fectLendById: async () => {
        try {
            const rs = await axios.get("http://localhost:8888/lend", {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            // console.log(rs.data)
            set(state => ({ ...state, lendUser: rs.data }))
        } catch (err) {
            console.log(err)
        }
    },
    handleAddLend: async (items) => {
        // console.log(loader)
        // set(stete => ({ ...stete, loader: !loader }))
        const body = { id: items.id };
        await axios.post("http://localhost:8888/lend", body, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })

    },

    handleAmountChange: async (id, newAmount, loader) => {
        const body = { id, newAmount }
        // console.log(body)
        const rs = await axios.put("http://localhost:8888/lend", body, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        // console.log(rs.data)
        set(stete => ({ ...stete, loader: !loader }))
    },

    handleDelete: async (id, loader) => {
        // console.log(id,loader)

        const rs = await axios.delete(`http://localhost:8888/lend/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        // console.log(rs)

        set(stete => ({ ...stete, loader: !loader }))
    },
    checkout: async (success) => {
        const body = { success }
        try {
            const rs = await axios.put("http://localhost:8888/lend/checkout", body, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            //   console.log(rs)
            set(stete => ({ ...stete, history: rs.data }))
        } catch (err) {
            console.log(err.message);
        }
    },
    updateTotalAmount: async (history) => {
        const body = { history }
        // console.log(body)

        try {
            await axios.put("http://localhost:8888/lend/updatetotalamount", body, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
        } catch (err) {
            console.log(err.message);
        }

    }
})

const Donate = (set, get) => ({
    donate: [],
    getDonateById: async () => {
        const rs = await axios.get("http://localhost:8888/donate", {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        // console.log(rs)
        set(stete => ({ ...stete, donate: rs.data }))
    }
})

const useUser = create(dataUser)
const useDonate = create(Donate)

export { useUser, useDonate }