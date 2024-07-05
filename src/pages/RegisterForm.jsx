import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const respone = await axios.post(
        "http://localhost:8888/auth/register",
        input
      );
      if (respone.status === 201) {
        alert("register done");
      }
    } catch (err) {
      alert("Please fill all of the blank");
    }
  };

  return (
    <div className="flex flex-row  h-[45rem]  items-start gap-2.5  relabg-collection-1-background-login relative">
      <div className="bg-GreenLogin h-[45rem] w-full p-[1rem]">
          <p className="text-white text-[1.5rem] mt-[50px] pl-10">Create a new acount</p>
        </div>
        <div className="bg-white p-[1rem] w-[70%] h-[45rem] rounded-[0_0_0_75px] absolute z-10 right-0">
        <h1 className="text-GreenLogin font-[700] text-[1.5rem] p-10">O2O</h1>
        <form className=" flex flex-col absolute left-[20%] gap-[2rem] w-[50rem]">
          <div className="flex flex-col">
            <label>First Name</label>
            <input
            className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100"
              type="text"
              name="firstname"
              value={input.firstname}
              onChange={hdlChange}
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
              onChange={hdlChange}
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
              onChange={hdlChange}
              required
            />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
            className="rounded-[5px] px-[1rem] py-[.25rem] bg-gray-100 w-[100%]"
              type="password"
              name="password"
              value={input.password}
              onChange={hdlChange}
              required
            />
          </div>
          <button
          className="px-[3rem] py-[.5rem] self-start bg-GreenButton rounded-[15px] hover:opacity-50 text-white" 
           type="submit" onClick={hdlSubmit}>Submit</button>
        </form>
        </div>
      
    </div>
  );
}

export default RegisterForm;