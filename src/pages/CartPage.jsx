import React from "react";
import CartList from "../components/CartList";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../utils/serviceAPI/backendService-zustend";
import axios from "axios";

function CartPage() {
  const lend = useUser((stete) => stete.lendUser);
  const loader = useUser((stete) => stete.loader);

  const fectLendById = useUser((stete) => stete.fectLendById);
  const handleAmountChange = useUser((stete) => stete.handleAmountChange);
  const handleDelete = useUser((stete) => stete.handleDelete);

  // console.log(loader)

  useEffect(() => {
    fectLendById();
  }, [loader]);

  const chackloan =
    lend.length === 0 ? (
      <p>No orders</p>
    ) : (
      lend.map((item, index) => (
        <CartList
          key={index}
          id={item.id}
          title={item?.loan?.purpose}
          story={item?.loan?.story}
          amount={item?.amount}
          setAmount={(newAmount) =>
            handleAmountChange(item.id, newAmount, loader)
          }
          handleDelete={(id) => handleDelete(id, loader)}
        />
      ))
    );

  const totalAmount = lend.reduce((sum, item) => sum + item.amount, 0);
  return (
    <>
    <h1 className="text-center pt-[2rem] text-[2.5rem] font-[500]">Your Basket</h1>
    
    <div className="flex justify-center p-10">
      <div className="flex gap-2 items-center flex-col w-[70%] border-t-[1px]  pt-[1rem]">
        {chackloan}
        <div className="flex flex-col  justify-between border-t-[1px]  mt-20 w-full py-[2rem]">
        <p className="text-end py-[1rem]">Total THB {totalAmount} </p>
          <div className="flex flex-row justify-between  gap-4 border-t-[1px] pt-[1rem]">
          <Link to="/select">
            <button className="btn btn-accent bg-GreenButton text-white rounded-[20px] border-none hover:bg-GreenButton hover:opacity-50 px-[2rem]">
              Back to lending
            </button>
          </Link>
            <div className="flex gap-4">
              <button className="btn btn-outline rounded-[20px] px-[2rem]">
                Payment register
              </button>
              <Link
                to={`/orderconfirm?lend=${encodeURIComponent(
                  JSON.stringify(lend)
                )}`}
              >
                <button className="btn btn-accent bg-GreenButton text-white rounded-[20px] border-none hover:bg-GreenButton hover:opacity-50 px-[2rem]">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CartPage;
