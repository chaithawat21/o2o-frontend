import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const navigate = useNavigate();

  const notifyErr = (message) => {
    toast.error(message, {
      position: "bottom-right",
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
      position: "bottom-right",
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
    confirmPassword: "",
  });

  const [firstnameError, setFirstnameError] = useState("")
  const [lastnameError, setLastnameError] = useState("")
  const [emailError , setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const validateFirstname = (firstname) => {
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstname)) {
      setFirstnameError("Firstname must contain only English letters.")
      return false;
    }
    setFirstnameError("");
    return true;
  };

  const validateLastname = (lastname) => {
    const nameRegex = /^[A-Za-z]+$/
    if (!nameRegex.test(lastname)) {
      setLastnameError("Lastname must contain only English letters.")
      return false
    }
    setLastnameError("")
    return true
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters and include uppercase letter and number.")
      return false
    }
    setPasswordError("")
    return true
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.")
      return false
    }
    setConfirmPasswordError("")
    return true
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isFirstnameValid = validateFirstname(input.firstname)
    const isLastnameValid = validateLastname(input.lastname)
    const isPasswordValid = validatePassword(input.password)
    const isConfirmPasswordValid = validateConfirmPassword(input.password, input.confirmPassword)

    if (!isFirstnameValid || !isLastnameValid || !isPasswordValid || !isConfirmPasswordValid) {
      return
    }
    try {
      const response = await axios.post("http://localhost:8888/auth/register", {
        firstname: input.firstname,
        lastname: input.lastname,
        email: input.email,
        password: input.password,
      })
      if (response.status === 201) {
        notify("Registered successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      if (err.response.status === 409) {
        setEmailError("Email already in use. Please use a different email.")
      } else {
        notifyErr("Registration failed. Please try again.")
      }
    }
  }

  return (
    <div className="flex flex-row h-[45rem] items-start gap-2.5 bg-collection-1-background-login relative">
      <div className="bg-GreenLogin h-[45rem] w-full p-[1rem]">
        <p className="text-white text-[1.5rem] mt-[150px] pl-10">Create a new account</p>
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
              placeholder="Firstname"
              value={input.firstname}
              onChange={handleChange}
              required
            />
            {firstnameError && <p className="text-red-500 text-sm mt-1">{firstnameError}</p>}
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100"
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={input.lastname}
              onChange={handleChange}
              required
            />
            {lastnameError && <p className="text-red-500 text-sm mt-1">{lastnameError}</p>}
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100"
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              value={input.email}
              onChange={handleChange}
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100"
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              required
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <div className="flex flex-col">
            <label>Confirm Password</label>
            <input
              className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100"
              type="password"
              name="confirmPassword"
              placeholder="Confirmpassword"
              value={input.confirmPassword}
              onChange={handleChange}
              required
            />
            {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
          </div>
          <button
            className="px-[3rem] py-[.5rem] self-start bg-GreenButton rounded-[15px] hover:opacity-50 text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer style={{marginBottom: "150px"}}/>
    </div>
  );
}

export default RegisterForm;
