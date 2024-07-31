import {create} from 'zustand';
import { useEffect } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const profileUser = ((set) => ({
  imageUrl: '',
  setImageUrl: (imageUrl) => set({ imageUrl }),
  fetchData: async () => {
    try {
      
      const response = await axios.get(`${backendUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const userData = response.data?.user[0];
      if (userData && userData.ImgUrl) {
        set({ imageUrl: `${backendUrl}${userData.ImgUrl}` });
      } else {
        set({ imageUrl: '' }); // Clear imageUrl if no image found
      }
    } catch (error) {
      console.error("Failed to load profile. Please try again.");
    }
  },
  clearImageUrl: () => set({ imageUrl: '' }), // Helper function to clear imageUrl
}));

const useProfile = create(profileUser)


export { useProfile }