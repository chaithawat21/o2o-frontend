import React from "react";
import CartList from "../components/CartList";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../utils/serviceAPI/backendService-zustend";
import axios from "axios";

function CartPage() {
  const user = useUser((stete) => stete.user)
  const lend = useUser((stete) => stete.lendUser)

  const fectUser = useUser((stete) => stete.fectDataUser)
  const fectLendById = useUser((stete) => stete.fectLendById)
  
  // console.log(lend)
  useEffect(()=> {
    fectUser()
    fectLendById()
  },[lend])

  const handleDelete = (id) => {
    console.log(id)

  };

  const handleAmountChange =async (id, newAmount) => {
    const body = {id,newAmount}
    const rs = await axios.put("http://localhost:8888/lend",body,{
      headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiQW5keSIsImlhdCI6MTcyMDUxMTY0MSwiZXhwIjoxNzIzMTAzNjQxfQ.hJOvNZLYc_t9tL_xcKNw4MHhJ0dhwCMakDZmm_UeXQY" }
    })
    console.log(rs.data)
  };

  const chackloan = lend.length === 0 ? 
  <p>No orders</p> 
  :
  lend.map((item, index) => (
    <CartList
      key={index}
      id={item.id}
      title={item?.loan?.categorie}
      story={item?.loan?.story}
      amount={item?.amount}
      setAmount={(newAmount) => handleAmountChange(item.id, newAmount)}
      handleDelete={handleDelete}
    />
  ))


  const totalAmount = lend.reduce((sum, item) => sum + item.amount, 0);
  return (
    <div className="flex justify-center p-10">
      <div className="flex gap-2 items-center flex-col w-[70%]">
       {chackloan}
        <div className="flex items-center justify-between border-b mt-20 w-full p-5">
          <Link to="/select">
          <button className="btn btn-accent">Back to lending</button>
          </Link>
          <div className="flex flex-col items-end gap-4">
            Total THB {totalAmount}
            <div className="flex gap-4">
              <button className="btn btn-outline">Payment register</button>
              <Link to={`/orderconfirm?lend=${encodeURIComponent(JSON.stringify(lend))}`}>
                <button className="btn btn-accent">Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
