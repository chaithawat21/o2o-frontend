import React from "react";
import { motion,useSpring } from "framer-motion";

export default function CartList({
  id,
  title,
  amount,
  story,
  setAmount,
  handleDelete,
}) {
  const hdlChange = (e) => {
    const newAmount = parseInt(e.target.value, 10);
    setAmount(newAmount);
  };

  const images = [
    "src/public/lend/img5.svg",
    "src/public/lend/img6.svg",
    "src/public/lend/img7.svg",
    "src/public/lend/img8.svg",
    "src/public/lend/img9.svg",
    'src/public/lend/img10.svg'
  ];

  function getRandom(Array) {
    const randomIndex = Math.floor(Math.random() * Array.length);
    return Array[randomIndex];
  }

  const randomImage = getRandom(images);
  // console.log(randomImage);
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 4,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 9,
        stiffness: 100,
        restDelta: 0.001
      }
    }}
     className="flex gap-1 w-[800px] min-w-[400px] border-b rounded-xl shadow-sm p-5">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={randomImage} />
        </div>
      </div>
      <div className=" w-[100%] max-h-[100px] overflow-hidden p-2">
        <h1>{title}</h1>
        <p className=" text-gray-400 font-mono">{story}</p>
      </div>
      <div className=" flex gap-3 items-center w-[200px] h-[100px] ">
        <select
          value={amount ? amount : 0}
          name="amount"
          onChange={hdlChange}
          className=" border rounded-sm p-1 max-w-xs text-xs"
        >
          {amount ? (
            <option disabled value={amount}>
              THB {amount}
            </option>
          ) : (
            <option value={0}>THB 0</option>
          )}
          <option value={50}>THB 50</option>
          <option value={100}>THB 100</option>
          <option value={150}>THB 150</option>
          <option value={200}>THB 200</option>
          <option value={250}>THB 250</option>
          <option value={300}>THB 300</option>
          <option value={500}>THB 500</option>
          <option value={1000}>THB 1000</option>

        </select>
        <a href="#" onClick={() => handleDelete(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
