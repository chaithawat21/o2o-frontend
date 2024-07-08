import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const navigate = useNavigate();

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
    });
  };

  const notify = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8888/auth/register", input);
      if (response.status === 201) {
        notify("Registered successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        notifyErr("Email already in use. Please use a different email.");
      } else {
        notifyErr("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-row h-[45rem] items-start gap-2.5 bg-collection-1-background-login relative">
      <div className="bg-GreenLogin h-[45rem] w-full p-[1rem]">
        <p className="text-white text-[1.5rem] mt-[50px] pl-10">Create a new account</p>
      </div>
      <div className="bg-white p-[1rem] w-[70%] h-[45rem] rounded-[0_0_0_75px] absolute z-10 right-0">
        <h1 className="text-GreenLogin font-[700] text-[1.5rem] p-10">O2O</h1>
        <form className="flex flex-col absolute left-[20%] gap-[2rem] w-[50rem]" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>First Name</label>
            <input
              className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100"
              type="text"
              name="firstname"
              value={input.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100"
              type="text"
              name="lastname"
              value={input.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100"
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100"
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="px-[3rem] py-[.5rem] self-start bg-GreenButton rounded-[15px] hover:opacity-50 text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterForm;
