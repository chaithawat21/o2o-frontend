import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import CartOrderConfirm from "../components/CartOrderConfirm";
import axios from "axios";
import DonateList from "../components/DonateList";
import { useUser } from "../utils/serviceAPI/backendService-zustend";
import { motion } from "framer-motion";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default function OrderConfirmed() {

  const [message, setMessage] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lend = JSON.parse(queryParams.get("lend"));

  // console.log(lend)
  const chacklend =
    lend.lend.length === 0 ? (
      <p>No orders</p>
    ) : (
      lend.lend.map((item, index) => (
        <CartOrderConfirm
          key={index}
          borrower={item?.loan?.borrower?.id}
          img={item?.loan?.borrower?.ImgUrl}
          title={item?.loan?.purpose}
          story={item?.loan?.story}
          amount={item?.amount}
        />
      ))
    );

  const totalAmount = lend.lend.reduce((sum, item) => sum + item.amount, 0);
  const totalDonateAmount = lend.donate.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const Sum = totalAmount + totalDonateAmount;
  //  console.log(Sum)
  const checkout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendUrl}/create-checkout-session`,
        {
          Sum,
        }
      );
      window.location.href = response.data.url;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay
      checkout={checkout}
      chacklend={chacklend}
      Sum={Sum}
      lend={lend}
    />
  );
}

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

const ProductDisplay = ({ checkout, chacklend, Sum, lend }) => (
  <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={{duration:1}}
  >
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center pt-[2rem] text-[2.5rem] font-[500]">
        Order Confirmed
      </h1>
      <hr className="w-[800px] min-w-[400px] mt-[2rem]" />
    </div>
    <div className="flex justify-center  p-5">
      <div className="flex gap-2 items-center flex-col w-[70%]">
        {chacklend}
        {lend.donate.map((item, index) => (
          <DonateList key={index} amount={item.amount} />
        ))}
        <hr className="w-[800px] min-w-[400px]" />
        <div className="flex justify-end w-[800px] min-w-[400px] p-2 border-b pt-[2rem]">
          Total THB {Sum}
        </div>
        <div className="flex items-center justify-between mt-10 w-full px-10">
          <Link to="/cart">
            <button className="btn btn-outline rounded-[20px] px-[2rem]">
              Back to Basket
            </button>
          </Link>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4">
              <form onSubmit={checkout}>
                <button
                  className="btn btn-accent bg-GreenButton text-white rounded-[20px] border-none hover:bg-GreenButton hover:opacity-50 px-[2rem]"
                  type="submit"
                >
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
