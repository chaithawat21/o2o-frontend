import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import CartOrderConfirm from '../components/CartOrderConfirm';
export default function OrderConfirmed() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const loan = JSON.parse(queryParams.get('loan'));
  console.log(loan)

  const chackloan = loan.length === 0 ? 
  <p>No orders</p> 
  :
  loan.map((item, index) => (
    <CartOrderConfirm
      key={index}
      title={item.title}
      amount={item.amount}
    />
  ))

  const totalAmount = loan.reduce((sum, item) => sum + item.amount, 0);
  return (
    <div className="flex justify-center p-10">
      <div className="flex gap-2 items-center flex-col w-[70%]">
       {chackloan}
       <hr className='w-[800px] min-w-[400px]'/>
       <div className='flex justify-end w-[800px] min-w-[400px] p-2 border-b'>Total THB {totalAmount}</div>
        <div className="flex items-center justify-between border-b mt-20 w-full p-5">
          <Link to="/cart">
          <button className="btn btn-outline">Back to Basket</button>
          </Link>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4">
              <Link to="#">
                <button className="btn btn-accent">Confirm</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
