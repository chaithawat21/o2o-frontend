import axios from "axios";
import { create } from "zustand";

const dataUser = (set, get) => ({
    loading: false,
    loader: false,
    user: [],
    lendUser: [],

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
            set(stete => ({ ...stete, loading: true }))
            const rs = await axios.get("http://localhost:8888/lend", {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            set(state => ({ ...state, lendUser: rs.data }))
            set(stete => ({ ...stete, loading: true }))
        } catch (err) {
            console.log(err)
        }
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

    handleDelete: async (id,loader) => {
        // console.log(id,loader)
        const rs = await axios.delete(`http://localhost:8888/lend/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log(rs)
        set(stete => ({ ...stete, loader: !loader }))
    }
})

const useUser = create(dataUser)
export { useUser }