import React from 'react'
import profileHeader from "../assets/images/header/header02.png";
import { Link } from 'react-router-dom'

function BorrowRegisterForm() {
  return (
    <div className='bg-texture bg-gray-100 '>
    <div className="relative flex flex-col items-center w-full mb-[5rem]">
    <img
      className="object-cover object-center  w-full h-[20rem] relative "
      src={profileHeader}
      alt="header-image"
    />
    </div>
    <h2 className="text-2xl font-bold mb-4 text-center text-GreenFooter">
            REGISTER FOR LOAN
          </h2>
          <div className='flex flex-row justify-center mb-[1rem] '>
     <div className="border-[2px] border-GreenFooter rounded-[20px] w-[25rem]  p-[2rem] bg-white  ">
          <h2 className="text-2xl font-bold mb-4 text-center text-GreenFooter">
            Your Loan Information
          </h2>
          <form className="flex flex-col gap-[1rem] ">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                How much would you like to borrow?
              </label>
              <input
                type="text"
                id="amount"
                name="amount"

                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="amount"
              >
                What is your purpose?
              </label>
              <input
                type="text"
                id="amount"
                name="amount"

                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="story"
              >
                Tell your story
              </label>
              <textarea
                id="message"
                name="story"
                rows="4"


                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="document"
              >
                Add a cover photo
              </label>
              <input
                type="file"
                id="document"
                name="document"

                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>

          </form>
        </div>
    </div>
    <div className='flex flex-row justify-center mb-[4rem] '>
     <div className="border-[2px] border-GreenFooter rounded-[20px] w-[25rem]  p-[2rem] bg-white  ">
          <h2 className="text-2xl font-bold mb-4 text-center text-GreenFooter">
            Your Business Information
          </h2>
          <form className="flex flex-col gap-[1rem] ">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name of business
              </label>
              <input
                type="text"
                id="name"
                name="name"

                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="role"
              >
                What kind of your business?
              </label>
              <input
                type="text"
                id="role"
                name="role"

                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Business address
              </label>
              <textarea
                id="message"
                name="address"
                rows="4"


                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="document"
              >
                Business document
              </label>
              <input
                type="file"
                id="document"
                name="document"

                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>
            <div>
            <Link to="/borrowDetail">
              <button
                type="submit"
                className="w-full bg-GreenFooter text-white py-2 px-4 rounded-md hover:opacity-50 focus:outline-none focus:ring-green-200 focus:ring-2 focus:ring-offset-2 "
              >
                Submit
              </button>
              </Link>

            </div>
          </form>
        </div>
    </div>
    <div className='bg-GreenFooter h-[10rem] flex flex-col justify-center items-center'>
                <p className='text-[2rem] text-white'>EVERYTHING IS POSSIBLE</p>
            </div>
    </div>
  )
}

export default BorrowRegisterForm