import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CartOrderConfirm from "../components/CartOrderConfirm";
import axios from "axios";

export default function OrderConfirmed() {
  const [message, setMessage] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lend = JSON.parse(queryParams.get("lend"));
  // console.log(lend);

  const chacklend =
    lend.length === 0 ? (
      <p>No orders</p>
    ) : (
      lend.map((item, index) => (
        <CartOrderConfirm
          key={index}
          title={item?.loan?.categorie}
          story={item?.loan?.story}
          amount={item?.amount}
        />
      ))
    );

  const totalAmount = lend.reduce((sum, item) => sum + item.amount, 0);

  const checkout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8888/create-checkout-session",{
          totalAmount
        }
      );
      window.location.href = response.data.url; // Redirect to Stripe Checkout page
      console.log(response)
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
    <ProductDisplay checkout={checkout} chacklend={chacklend} totalAmount={totalAmount} />
  );
}

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

const ProductDisplay = ({ checkout,chacklend,totalAmount }) => (
  <section>
    <div className="flex justify-center p-10">
      <div className="flex gap-2 items-center flex-col w-[70%]">
        {chacklend}
        <hr className="w-[800px] min-w-[400px]" />
        <div className="flex justify-end w-[800px] min-w-[400px] p-2 border-b">
          Total THB {totalAmount}
        </div>
        <div className="flex items-center justify-between border-b mt-20 w-full p-5">
          <Link to="/cart">
            <button className="btn btn-outline">Back to Basket</button>
          </Link>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4">
              <form onSubmit={checkout}>
                <button className="btn btn-accent" type="submit">
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
