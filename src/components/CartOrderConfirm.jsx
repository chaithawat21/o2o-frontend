import { motion } from 'framer-motion'
import React from 'react'

export default function CartOrderConfirm({title,amount,story}) {
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
  return (
    <motion.div 
    initial={{marginTop: 20 ,opacity:0}}
    animate={{marginTop: 0 , opacity:1}}
    transition={{
      duration: 0.5,
      delay:0.5,
    }}
    className="flex w-[800px] min-w-[400px]  p-1">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={randomImage} />
        </div>
      </div>
      <div className=" w-[100%] max-h-[100px] overflow-hidden p-2">
        <h1>{title}</h1>
        <p className="text-gray-400 font-mono">
          {story}
        </p>
      </div>
      <div className=" flex gap-3 justify-end items-center w-[200px] h-[100px] ">
        THB {amount}
      </div>
    </motion.div>
  )
}
