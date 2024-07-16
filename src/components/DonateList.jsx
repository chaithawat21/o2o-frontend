import React from "react";
import { motion } from "framer-motion";

export default function DonateList({amount}) {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 3,
      delay: 1.5,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    className="flex justify-between gap-5 mt-16 w-[800px] min-w-[400px] ">
        <div className="w-[130px]">
          <img src="src/public/leaf_heart.565342d.svg.svg" />
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
    </motion.div>
  );
}
