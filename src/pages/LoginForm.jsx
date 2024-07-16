import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

function LoginForm() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const notifyErr = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      notifyErr("Please fill in all fields");
      return;
    }
    try {
      const body = { email: input.email, password: input.password };
      const response = await axios.post(
        "http://localhost:8888/auth/login",
        body
      );
      if (response.data.msg) {
        return notifyErr(response.data.msg);
      }
      localStorage.setItem("token", response.data);

      const response2 = await axios.get("http://localhost:8888/auth/me", {
        headers: { Authorization: `Bearer ${response.data}` },
      });
      setUser(response2.data.user);
      setFormSubmitted(true);
    } catch (err) {
      if ((err.response.status === 400, 500)) {
        notifyErr("Invalid email or password");
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: "-100vw", transition: { duration: 1 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={formSubmitted ? "exit" : "visible"}
      onAnimationComplete={() => formSubmitted && navigate("/")}
    >
      <div className="flex flex-row h-[45rem] items-start gap-2.5 bg-GreenFooter relative">
        <div className="bg-GreenLogin h-[45rem] w-full p-[1rem]">
          <p className="text-white text-[1.25rem] mt-[10rem] pl-10 opacity-90 md:w-[10rem] md:pl-5">
            Welcome back!
          </p>
          <p className="text-white text-[1.5rem] mt-[25px] pl-10 md:w-[10rem] md:pl-5">
            Login to your account
          </p>
        </div>
        <div className="bg-white p-[1rem] w-[70%] h-[45rem] rounded-[0_0_0_75px] absolute z-10 right-0">
          <h1 className="text-GreenLogin font-[700] text-[1.5rem] p-[1rem] ml-9">
            O2O
          </h1>
          <form
            className="flex flex-col my-[10rem] mt-[3rem] mx-[10rem] gap-[3rem] flex-grow "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100 border"
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100 border"
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="px-[3rem] py-[.5rem] self-start bg-GreenButton rounded-[15px] hover:opacity-50 text-white"
              type="submit"
            >
              Log In
            </button>
          </form>
          <ToastContainer style={{ marginBottom: "175px" }} />
        </div>
      </div>
    </motion.div>
  );
}

export default LoginForm;
