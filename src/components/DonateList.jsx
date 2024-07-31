import React, { useState } from "react";
import { motion } from "framer-motion";
import helpImg from "../public/leaf_heart.565342d.svg'"

export default function DonateList({id,amount,setAmount,handleDelete}) {
  const [loader, setLoader] = useState(null);
  const part = window.location.pathname
  const changeAmount = (e) => {
    const newAmount = parseInt(e.target.value);
    setAmount(newAmount)
  }
  const hdlDelete = (id) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setTimeout(() => {
        handleDelete(id);
      }, 50);
    }, 300);
  }
  return (
    <motion.div 
    initial={{opacity:0}}
      animate={loader ? "closed" : "open"}
      variants={{
        open: {
          marginTop: 100,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 60,
            damping: 10,
            delay:1
          },
        },
        closed: {opacity:0, transition: { duration: 0.3 } },
      }}
    className="flex justify-between gap-5 w-[800px] min-w-[400px] ">
        <div className="w-[130px]">
          <img src={helpImg} alt="help donate" />
        </div>
      <div className="flex flex-col w-[100%] p-2">
        <h1>Help cover the cost of your loan</h1>
        <p className=" text-gray-400 font-mono">
          100% of your loan supports borrowers — we never take a fee. As a
          nonprofit, we rely on donations to advance our mission of expanding
          financial access
        </p>
      </div>
      <div className=" flex justify-end items-center w-[200px] h-[100px] ">
        <select
          value={amount ? amount : 0}
          onChange={changeAmount}
          name="amount"
          className="  rounded-sm p-1 max-w-xs text-xs"
          readOnly
        >
          {amount ? (
            <option disabled value={amount} >
              THB {amount}
            </option>
          ) : (
            <option value={0}>THB 0</option>
          )}
          <option value={250}>THB 250</option>
          <option value={500}>THB 500</option>
          <option value={1000}>THB 1000</option>
        </select>
      </div>
      {part === "/orderconfirm" ? 
      <></>
      :
      <button 
      onClick={() => hdlDelete(id)}
      className="flex h-10 m-auto items-center px-2">X</button>}
    </motion.div>
  );
}
