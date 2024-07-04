import React from 'react'
import homeHeaderImg from '../assets/images/header/header01.png'
import FooterHome from '../components/FooterHome'

function HomePage() {
  return (
    <>
    <div className='relative flex flex-col items-center'>
      <img className='object-cover object-center  w-full h-[30rem] relative ' src={homeHeaderImg} alt="header-image" />
      <h1 className='absolute top-[10rem]  text-black text-center text-[4rem] font-[700]'>สนับสนุนทุกโอกาศ<br />ให้กลายเป็นจริง</h1>
    </div>
    <div className='flex flex-col items-center p-[2rem]'>
      <h2 className='text-[1.5rem] '>ความมุ่งมั่นของเราส่งผลต่อ</h2>
      <h2 className='text-[2rem] font-[500]'>ปรับปรุงคุณภาพชีวิตของพวกเขาให้ดียิ่งขึ้น</h2>
    </div>
    <FooterHome />
    </>
  )
}

export default HomePage