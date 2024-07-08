import React from "react";
import CartList from "../components/CartList";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CloudFog } from "lucide-react";
import axios from "axios";

function CartPage() {
  const [loan, setLoan] = useState([]);
  // console.log(loan)

  useEffect(()=> {
    const run = async () => {
      try{ 
        const rs = await axios.get("http://localhost:8585/loan")
        setLoan(rs.data)
        }catch(err){
          console.log(err)
        }
    }
    run()
  },[])

  const handleDelete = (index) => {
    const newLoan = loan.filter((_, i) => i !== index);
    setLoan(newLoan);
  };

  const handleAmountChange =async (title, newAmount) => {
    setLoan((prevLoan) =>
      prevLoan.map((item) =>
        item.title === title ? { ...item, amount: newAmount } : item
      )
    );
  };

  const chackloan = loan.length === 0 ? 
  <p>No orders</p> 
  :
  loan.map((item, index) => (
    <CartList
      key={index}
      index={index}
      title={item.title}
      amount={item.amount}
      setAmount={(newAmount) => handleAmountChange(item.title, newAmount)}
      handleDelete={handleDelete}
    />
  ))


  const totalAmount = loan.reduce((sum, item) => sum + item.amount, 0);
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
              <Link to={`/orderconfirm?loan=${encodeURIComponent(JSON.stringify(loan))}`}>
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
