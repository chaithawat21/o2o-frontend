import React from 'react'
import { Link } from "react-router-dom";
import ImageFooter from '../assets/images/illustration/illustration02-footer.svg'
import SparklesText from "@/components/magicui/sparkles-text";

function FooterHome() {
  return (
    <div className='h-[18rem] bg-GreenFooter flex flex-col justify-center items-center gap-[1rem]'>
        <img className='w-[6rem]' src={ImageFooter} alt="image-footer" />
        <p className='text-white text-[1.5rem]'>Let's share happiness today.</p>
        <Link to="/select">
        <button className='bg-white text-gray-900  px-[1rem] py-[.5rem] rounded-[10px] hover:text-GreenFooter shadow-[2px_2px_0px_2px_#C8C8C8]'><SparklesText text="Choose a person to support" /></button>
        </Link>
    </div>
  )
}

export default FooterHome