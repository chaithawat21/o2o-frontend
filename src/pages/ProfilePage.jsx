import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import profileHeader from "../assets/images/header/header02.png"
import avatarTest from "../assets/images/icon/user-icon.svg"

function ProfilePage() {
  const [formData, setFormData] = useState([]);

  const [isEditing, setIsEditing] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8888/auth/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const userData = response.data?.user[0];
      setFormData({
        firstname: userData.firstname || "",
        lastname: userData.lastname || "",
        email: userData.email || "",
        phone_number: userData.phone_number || "",
        date_birth: userData.date_birth
          ? userData.date_birth.split("T")[0]
          : "",
        address: userData.address || "",
      });
    } catch (error) {
      console.log("Failed to load profile");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const token = await axios.post(
        "http://localhost:8888/auth/updateMe",
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(token);
      localStorage.setItem("token", token.data);
      alert("Profile updated successfully!");
      setIsEditing(false);
      fetchData();
    } catch (error) {
      alert("Failed to update profile. Please try again.");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex gap-8 flex-col justify-center items-center pb-52">
       <div className="relative flex flex-col items-center w-full mb-[5rem]">
        <img
          className="object-cover object-center  w-full h-[20rem] relative "
          src={profileHeader}
          alt="header-image"
        />
        <img className="absolute bg-white w-[10rem] h-[10rem] top-[15rem] rounded-[50%] border-[3px] border-white shadow-2xl" src={avatarTest} alt="avatar" />
      </div>
     
      <div className="border-[2px] border-gray-300 rounded-[20px] w-[500px] p-[2rem]">
        <h2 className="text-xl mb-4 text-center pb-5">
          Your Personal Information
        </h2>
        <form className="flex flex-col gap-[2rem]" onSubmit={handleSave}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Firstname
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm ${
                !isEditing ? "bg-gray-200" : "bg-white"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Lastname
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm ${
                !isEditing ? "bg-gray-200" : "bg-white"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Phone
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm ${
                !isEditing ? "bg-gray-200" : "bg-white"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Birth Date
            </label>
            <input
              type="date"
              name="date_birth"
              value={formData.date_birth}
              onChange={handleChange}
              disabled
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm ${
                !isEditing ? "bg-gray-200" : "bg-white"
              }`}
            />
          </div>
          {isEditing && (
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-GreenFooter text-white rounded-md hover:bg-green-700 focus:outline-none"
            >
              Save
            </button>
          )}
          {!isEditing && (
            <button
              type="button"
              onClick={handleEdit}
              className="mt-4 px-4 py-2 bg-GreenFooter text-white rounded-[15px] hover:bg-green-700 focus:outline-none"
            >
              Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
