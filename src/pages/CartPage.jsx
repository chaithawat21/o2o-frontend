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

  // console.log(lend)

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
          title={item?.loan?.categories?.categorie_name}
          story={item?.loan?.story}
          amount={item?.amount}
          setAmount={(newAmount) =>
            handleAmountChange(item.id, newAmount, loader)
          }
          handleDelete={(id) => handleDelete(id,loader)}
        />
      ))
    );

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
              <Link
                to={`/orderconfirm?lend=${encodeURIComponent(
                  JSON.stringify(lend)
                )}`}
              >
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
