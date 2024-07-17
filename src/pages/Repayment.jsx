import React from 'react'
import header from '../assets/images/header/header02.png'
import farming from '../assets/images/loandetailImg/framing.jpg'
import avatar01 from '../assets/images/avatar/avatar01.png'
import { Link } from 'react-router-dom'


function Repayment() {
  return (
    <div className='bg-texture bg-gray-100' id="top">
      <div className="relative flex flex-col items-center">
        <img className='object-cover object-center w-full h-[20rem]' src={header} alt="header" />
        <p className="header-text absolute top-[5rem]  text-black text-center text-[4rem] font-[700]">REPAYMENT</p>
      </div>
      <div className='flex flex-row justify-center gap-[2rem] py-[7.5rem]'>
        <div className='  flex flex-col gap-[1rem] '>
          <div className='conatainer-top-left bg-white w-[30rem] h-[38rem] rounded-[20px] relative flex flex-col items-center p-[2rem]'>
            <div className='rounded-[50%] border-[5px] border-white absolute top-[-5rem] shadow-xl'>
              <img className='rounded-[50%] bg-white w-[10rem]' src={avatar01} alt="avatar" />
            </div>

            <p className='text-GreenLogin text-[2rem] self-start mt-[5rem]'>Paying back</p>
            <p className='text-GreenLogin text-[2rem] self-start '>0%<span className='text-[.8rem] text-gray-500'> progress</span></p>
            <p className='text-gray-500 self-end mt-[.25rem] text-[.8rem]'>THB 10,000 to go</p>

            <div className='scorebar  w-full rounded-[15px] relative'>
              <div className='bg-gray-300  w-full h-[1rem] rounded-[15px] absolute'></div>
              <div className='bg-GreenLogin w-2 h-[1rem] rounded-[15px_0_0_15px] absolute'></div>
            </div>

            <p className='text-gray-500 mt-[2rem] text-[1rem] self-start'>Total loan : THB 10,000</p>
            <p className='text-gray-500 mt-[.5rem] text-[1rem] self-start'>Powered by 10 leaders</p>

            <p className='text-black text-[2rem] font-bold self-start mt-[2rem]'>ANDY DYAN</p>
            <div className='flex flex-row gap-[1rem] self-start mt-[1rem]'>
              <span className='text-[1rem] text-white bg-black px-[1rem] rounded-[20px] self-start'>Agriculture</span>
              <span className='text-[1rem] bg-gray-200 px-[1rem] rounded-[20px] self-start'>Bangkok</span>
            </div>
            <p className='text-gray-500 text-[1.25rem] self-start mt-[2rem]'>Buy seeds and fertilizers</p>
            <button className='text-black bg-white border-[2px]  border-black w-full p-[.8rem] rounded-[20px] mt-[2rem] hover:opacity-50'>Find a new loan</button>


          </div>
          <div className='conatainer-bottom-left bg-white w-[30rem] h-[18rem] rounded-[20px] p-[1rem]'>
            <p className='text-GreenLogin text-[1.5rem] text-center pb-[2rem] '>Loan details</p>
            <div className='flex flex-row justify-between text-gray-600 '>
              <p>Loan length</p>
              <p>2 months</p>
            </div>
            <div className='flex flex-row justify-between text-gray-600 pt-[1rem]'>
              <p>Repayment schedule</p>
              <p>Irregularly</p>
            </div>
            <div className='flex flex-row justify-between text-gray-600 pt-[1rem]'>
              <p>Start date</p>
              <p>July 01, 2024</p>
            </div>
            <div className='flex flex-row justify-between text-gray-600 pt-[1rem]'>
              <p>End date</p>
              <p>July 31, 2024</p>
            </div>
            <div className='flex flex-row justify-between text-gray-600 pt-[1rem]'>
              <p>Fuading model</p>
              <p>Flexible</p>
            </div>
          </div>
        </div>
        <div className='  flex flex-col gap-[2rem]'>
          <div className='conatainer-top-right  '>
            <img className="object-cover object-center w-[32.5rem] rounded-[20px]" src={farming} alt="framing" />
          </div>
          <div className='conatainer-bottom-right bg-white p-[1rem] pt-[2rem] w-[32.5rem] h-[30rem] rounded-[20px]' >
            <p className='indent-[2rem]'><span className='text-GreenFooter'>
              Starting a small agricultural business to uplift the lives of our local community.</span> Our farm aims to provide fresh, organic produce to nearby markets, creating a sustainable food source and boosting local economy. With your help, we can buy high-quality seeds and fertilizers that will significantly increase our crop yield. This will not only improve our livelihood but also support the education of our children and the health of our families. Our commitment to sustainable farming practices ensures that we preserve the environment for future generations. By supporting our loan, you're investing in a community's growth, health, and future. We believe in hard work, dedication, and the power of community support to overcome challenges and create a better tomorrow. Your contribution will make a tangible difference, allowing us to improve our farming techniques, increase productivity, and achieve greater financial stability. Thank you for believing in our vision and helping us achieve our dreams.
            </p>
          </div>
          <div className='flex flex-row justify-end gap-[2rem]'>

            <Link to="/#top">
              <button className="text-white bg-GreenButton border-[2px]  border-GreenButton   py-[.8rem] px-[2rem] rounded-[20px]  hover:opacity-50">BACK</button>
            </Link>
          </div>
        </div>


      </div>
      <div className='bg-GreenFooter h-[10rem] flex flex-col justify-center items-center'>
        <p className='text-[2rem] text-white'>EVERYTHING IS POSSIBLE</p>
      </div>
    </div>
  )
}

export default Repayment