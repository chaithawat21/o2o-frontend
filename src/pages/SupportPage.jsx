import React, { useState } from "react";
import supportHeader from "../assets/images/header/header05.png";
import FooterHome from "../components/FooterHome";

function SupportPage() {
  const [value, setValue] = useState(25);

  const incrementValue = (e) => {
    e.preventDefault(e);
    setValue((prevValue) => prevValue + 25);
  };
  const decrementValue = (e) => {
    e.preventDefault();
    if (value > 25) {
      setValue((prevValue) => prevValue - 25);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center">
        <img
          className="bg-gray-200 object-cover object-top "
          src={supportHeader}
          alt="support"
        />
        <h1 className="header-text absolute  text-black text-center text-[4rem] font-[700]">
          SUPPORT US
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center m-[4rem] ">
        <form
          className=" w-[50rem] flex flex-col gap-[2rem] "
          onSubmit={handleSubmit}
        >
          <p className="text-[1.5rem] ">
            We need your help to expand financial access.
            <br />
            <br />
            Your donation helps us cover the costs of expanding access to
            life-changing credit, enabling us to reach more people in need
            around the world. By supporting our efforts, you are empowering
            individuals and communities with the financial tools they need to
            thrive and achieve their dreams. Every contribution, no matter the
            size, makes a significant impact.
            <br />
            <br />
            Join us in making a difference and creating a brighter future for
            all.
          </p>
          <div className="flex flex-row items-center p-[1rem] bg-gray-100 rounded-[20px] ">
            <button
              onClick={decrementValue}
              className="text-[2rem] text-GreenButton pl-[2rem]  "
            >
              -
            </button>
            <p className="flex-grow  text-center    font-[400] text-[1.25rem]">
              {value} THB
            </p>
            <button
              onClick={incrementValue}
              className="text-[2rem] text-GreenButton pr-[2rem] "
            >
              +
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full text-[2rem] bg-GreenFooter text-white py-2 px-4 rounded-md hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 "
            >
              Donate
            </button>
          </div>
        </form>
      </div>
      <FooterHome />
    </div>
  );
}

export default SupportPage;
