import React from 'react'
import ImageFooter from '../assets/images/illustration/illustration02-footer.svg'

function FooterHome() {
  return (
    <div className='h-[15rem] bg-GreenFooter flex flex-col justify-center items-center gap-[1rem]'>
        <img className='w-[6rem]' src={ImageFooter} alt="image-footer" />
        <p className='text-white text-[1.5rem]'>เริ่มแบ่งปันได้แล้ววันนี้</p>
        <button className='bg-white text-[.6rem] px-[1rem] py-[.5rem] rounded-[10px]'>เลือกคนที่จะแบ่งปันรอยยิ้ม</button>
    </div>
  )
}

export default FooterHome