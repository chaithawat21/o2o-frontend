import React from "react";
import CartList from "../components/CartList";
import { useState } from "react";

function CartPage() {

  const [loan, setLoan] = useState([
    { title: "Fram", amount: 0 },
    { title: "bagery", amount: 0 }
  ]);

  const handleAmountChange = (title, newAmount) => {
    setLoan((prevLoan) =>
      prevLoan.map((item) =>
        item.title === title ? { ...item, amount: newAmount } : item
      )
    );
  };
  // console.log(loan)

  const totalAmount = loan.reduce((sum, item) => sum + item.amount, 0);
  return (
    <div className="flex justify-center p-10">
      <div className="flex items-center flex-col w-[70%]">
        {loan.map((item, index) => (
          <CartList
            key={index}
            title={item.title}
            amount={item.amount}
            setAmount={(newAmount) => handleAmountChange(item.title, newAmount)}
          />
        ))}
        <div className="flex items-center justify-between border mt-20 w-full p-5">
          <button className="btn btn-accent">Back to lending</button>
          <div className="flex flex-col items-end gap-4">
            Total THB {totalAmount}
            <div className="flex gap-4">
              <button className="btn btn-outline">Payment register</button>
              <button className="btn btn-accent">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
