import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profileHeader from "../assets/images/header/header02.png";
import avatarTest from "../assets/images/icon/user-icon.svg";
import ShinyButton from "@/components/magicui/shiny-button";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
function ProfilePage() {

  const [file, setFile] = useState(null); // State to hold the selected file
  const [imageUrl, setImageUrl] = useState(avatarTest); // Initial profile image URL
  const fileInputRef = useRef(null);


  const notify = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const notifyErr = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone_number: "",
    date_birth: "",
    address: "",
    // ImgUrl: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [usernameError, setUsernameError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendUrl}auth/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const userData = response.data?.user[0];
      setFormData({
        firstname: userData.firstname || "",
        lastname: userData.lastname || "",
        username: userData.username || "",
        email: userData.email || "",
        phone_number: userData.phone_number || "",
        date_birth: userData.date_birth
          ? userData.date_birth.split("T")[0]
          : "",
        address: userData.address || "",
        // ImgUrl: userData.ImgUrl || "",
      });
      if (userData.ImgUrl) {
        setImageUrl(`${backendUrl}${userData.ImgUrl} `); // Set full URL to image
      }
      // setImageUrl(userData.ImgUrl || avatarTest);
    } catch (error) {
      notifyErr("Failed to load profile. Please try again.");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendUrl}/auth/updateMe`,
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      notify("Profile updated successfully!");
      setIsEditing(false);
      fetchData();
    } catch (error) {
      notifyErr("Failed to update profile. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result); // Display preview of selected image if needed
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Function to trigger file input click
  const handleClickFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  // Function to handle file upload
  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      console.log('File to be uploaded:', file); // Log the file information
      console.log('FormData:', formData); 

      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value.name}`); // To check the content inside FormData
      }

      try {
        const response = await axios.put(
          `${backendUrl}/user/updateProfile`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
  
        if (response.data && response.data.result && response.data.result.ImgUrl) {
          setImageUrl(`${backendUrl}${response.data.result.ImgUrl}`); // Set full URL to image
        }
        notify("File uploaded successfully!");
      } catch (error) {
        console.error('Error uploading file:', error);
        notifyErr("Failed to upload file. Please try again.");
      }
    } else {
      notifyErr("No file selected.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-texture bg-gray-100">
    <div className=" flex gap-8 flex-col justify-center items-center pb-52">
      <div className="relative flex flex-col items-center w-full mb-[5rem]">
        <img
          className="object-cover object-center  w-full h-[20rem] relative "
          src={profileHeader}
          alt="header-image"
        />
        <div className="absolute bg-white w-[10rem] h-[10rem] top-[15rem] rounded-[50%] border-[5px] border-white shadow-2xl">
  <input
    type="file"
    accept="image/*"
    onChange={handleFileChange}
    className="hidden"
    ref={fileInputRef} // Assign ref to file input
  />
  <img
    src={imageUrl}
    alt="avatar"
    className="w-full h-full object-cover text-center  rounded-[50%] hover:opacity-25 cursor-pointer"
    onClick={handleClickFileInput}
  />
</div>

      <button className="relative top-[6rem] text-GreenButton" onClick={handleUpload}>Upload File</button>
        
      </div>

      <div className="border-[2px] bg-white border-GreenFooter rounded-[20px] w-[500px] p-[2rem]">
        <h2 className="text-xl mb-4 text-center pb-5 text-GreenButton">
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
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              disabled
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
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
      <Link to="/borrowRegister">
      <ShinyButton text="APPLY FOR LOAN" />
      </Link>
      
      
      
            
    </div>
    <div className='bg-GreenFooter h-[10rem] flex flex-col justify-center items-center'>
    <p className='text-[2rem] text-white'>EVERYTHING IS POSSIBLE</p>
</div>
<ToastContainer style={{marginTop: "50px"}}/>
</div>
  );
}

export default ProfilePage;
