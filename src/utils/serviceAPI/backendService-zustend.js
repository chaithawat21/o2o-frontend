import axios from "axios";
import { create } from "zustand";

const dataUser = (set, get) => ({
    loading: false,
    user: [],
    lendUser: [],
    fectDataUser: async () => {
        try {
            set(stete => ({ ...stete, loading: true }))
            const rs = await axios.get("http://localhost:8888/auth/me", {
                headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiQW5keSIsImlhdCI6MTcyMDUxMzAyNywiZXhwIjoxNzIzMTA1MDI3fQ.Mkqf6UwMXYanxpkJPOvcMTkhHXQyzuTxSTOVu1TDvc8" }
            })
            set( state => ({...state, user: rs.data.user}))
        } catch (err) {
            console.log(err)
        }
    },
    fectLendById: async () => {
        try {
            set(stete => ({ ...stete, loading: true }))
            const rs = await axios.get("http://localhost:8888/lend", {
                headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiQW5keSIsImlhdCI6MTcyMDUxMzAyNywiZXhwIjoxNzIzMTA1MDI3fQ.Mkqf6UwMXYanxpkJPOvcMTkhHXQyzuTxSTOVu1TDvc8" }
            })
            set( state => ({...state, lendUser: rs.data}))
        } catch (err) {
            console.log(err)
        }
    }
})

const useUser = create(dataUser)
export {useUser}