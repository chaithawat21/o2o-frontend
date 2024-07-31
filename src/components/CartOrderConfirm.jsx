import { motion } from 'framer-motion'
import React from 'react'
const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default function CartOrderConfirm({title,amount,story,borrower,img}) {

  return (
    <motion.div 
    initial={{marginTop: 10 ,opacity:0}}
    animate={{marginTop: 0 , opacity:1}}
    transition={{ type: "spring", stiffness: 60, damping: 10, duration:0.5, delay: 0.2}}
    className="flex w-[800px] min-w-[400px]  p-1">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={img ? `${backendUrl}${img}` : `${Avata[`avatar${borrower}`]}`} />
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
