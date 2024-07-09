import React from 'react'

export default function CartOrderConfirm({title,amount,story}) {
  return (
    <div className="flex w-[800px] min-w-[400px] p-1">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className=" w-[100%] p-2">
        <h1>{title}</h1>
        <p className=" text-gray-400 font-mono">
          {story}
        </p>
      </div>
      <div className=" flex gap-3 justify-end items-center w-[200px] h-[100px] ">
        THB {amount}
      </div>
    </div>
  )
}
