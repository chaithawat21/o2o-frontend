import React, { useState, useEffect } from "react";
import homeHeaderImg from "../assets/images/header/header01.png";
import FooterHome from "../components/FooterHome";
import cyptoImg from "../assets/images/illustration/illustration06-crypto.svg";
import bitcoinImg from "../assets/images/illustration/illustration08-bitcoin.svg";
import romanticImg from "../assets/images/illustration/illustration07-romantic.svg";
import familyIcon from "../assets/images/illustration/illustration05-family.svg";
import peopleIcon from "../assets/images/illustration/illustration03-people.svg";
import growIcon from "../assets/images/illustration/illustration04-growing.svg";
import ChatBot from "../components/ChatBot";
import { motion, AnimatePresence } from "framer-motion";
import WordPullUp from "@/components/magicui/word-pull-up";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import a01 from "../assets/images/avatar/a01.png"
import a02 from "../assets/images/avatar/a02.png"
import a03 from "../assets/images/avatar/a03.png"
import a04 from "../assets/images/avatar/a04.png"
import a05 from "../assets/images/avatar/a05.png"
import a06 from "../assets/images/avatar/a06.png"
import a07 from "../assets/images/avatar/a07.png"
import a08 from "../assets/images/avatar/a08.png"
import a09 from "../assets/images/avatar/a09.png"
import a10 from "../assets/images/avatar/a10.png"
import a11 from "../assets/images/avatar/a11.png"
import a12 from "../assets/images/avatar/a12.png"
import a13 from "../assets/images/avatar/a13.png"


const reviews = [
  {
    name: "Andy",
    address: "Bangkok",
    body: "Starting a small agricultural business",
    img: a01,
  },
  {
    name: "Bob",
    address: "Chiang Mai",
    body: "Expanding a small art studio to host more students",
    img: a02,
  },
  {
    name: "Charlie",
    address: "Phuket",
    body: "Need art supplies to improve my art services",
    img: a03,
  },
  {
    name: "David",
    address: "Pattaya",
    body: "Starting a small farming business",
    img: a04,
  },
  {
    name: "Emma",
    address: "Hua Hin",
    body: "Opening a new retail branch to serve more customers",
    img: a05,
  },
  {
    name: "Frank",
    address: "Rayong",
    body: "Renovating my shop for better customer experience",
    img: a06,
  },
  {
    name: "Jame",
    address: "Sisaket",
    body: "Launching a marketing campaign to boost sales",
    img: a07,
  },
  {
    name: "Peter",
    address: "Nakhon Pathom",
    body: "Starting a small livestock farm",
    img: a08,
  },
  {
    name: "Tom",
    address: "Nonthaburi",
    body: "Hiring employees to expand my business",
    img: a09,
  },
  {
    name: "Meng",
    address: "Phichit",
    body: "Upgrading technology to improve efficiency",
    img: a10,
  },
  {
    name: "Pond",
    address: "Saraburi",
    body: "Developing a website to reach more customers",
    img: a11,
  },
  {
    name: "Wit",
    address: "Uthai Thani",
    body: "Purchasing materials for my handmade crafts business",
    img: a12,
  },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, address, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white ">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40 bg-gray-200 px-[.5rem] rounded-[10px]">{address}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function HomePage() {

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);





  return (
    <>
      <div className="bg-texture">
        <div className="head-content relative flex flex-col items-center">
          <img
            className="object-cover object-center  w-full h-[30rem] relative "
            src={homeHeaderImg}
            alt="header-image"
          />
          <WordPullUp className="header-text absolute top-[10rem] max-w-[60rem] leading-none md:top-[7.5rem] text-black text-center text-[3.5rem] font-[700]"
            words="SUPPORT  EVERY  OPPORTUNITY  TO  BECOME  TRUE"
          />

        </div>
        
        <div className="relative flex h-[20rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s] blur-[1px] opacity-80">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] blur-[1px] opacity-80">
        {secondRow.map((review, index) => (
          <ReviewCard key={index + firstRow.length} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      <h2 className="text-[2rem] absolute top-[8rem]">Our determination affects everything</h2>
          <h2 className="text-[2.5rem] font-[500] absolute top-[10rem]">
            Enhance their quality of life
          </h2>
    </div>
        {/* <div className="middle-content flex flex-col justify-center items-center p-[2rem] h-[20rem]">
          <h2 className="text-[2rem] ">Our determination affects everything.</h2>
          <h2 className="text-[2.5rem] font-[500] md:text-center">
            Enhance their quality of life.
          </h2>
        </div> */}
        <div className="bottom-content flex flex-col justify-center items-center  ">
          <div className="flex flex-col justify-start  items-center w-full px-[4rem] py-[1rem] relative gap-[4rem] md:flex-col md:items-center md:gap-[1rem] ">
            <div className="flex flex-row gap-[2rem]  items-center md:flex-col " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div
                className={`flex flex-col justify-end items-center w-[25rem] h-[12.5rem] px-[1.5rem] border-[3px] border-GreenFooter rounded-[50px] cursor-pointer relative
          bg-GreenFooter text-white md:h-[15rem]   `}
              >
                <img className="w-[20rem]" src={cyptoImg} alt="cryto" />
                <p className="absolute bottom-[6rem] left-[1rem] text-[2rem] font-[600]">
                  SHARE
                </p>
              </div>
              <p className="indent-10 max-w-[30rem] "><span className="text-GreenFooter">Sharing is a crucial concept in society,</span> as it distributes resources, knowledge, and opportunities to others. This fosters stronger relationships within the community and promotes cooperation, understanding, and mutual support, especially in the digital age.</p>
            </div>
            <div className="flex flex-row-reverse gap-[2rem]  items-center md:flex-col" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div
                className={`flex flex-col justify-end items-center  w-[25rem] h-[12.5rem] px-[1.5rem] border-[3px] border-GreenFooter rounded-[50px] cursor-pointer relative bg-GreenFooter text-white md:h-[15rem] `} >
                <img className="w-[17.5rem]" src={bitcoinImg} alt="bitcoin" />
                <p className=" absolute bottom-[6rem] left-[1rem] text-[2rem]  font-[600]">
                  CHANCE
                </p>
              </div>
              <p className="indent-10 max-w-[30rem]"><span className="text-GreenFooter">Opportunity is a crucial factor that can significantly change our lives.</span> It is a suitable time that can lead to progress and success. Opportunities can come in various forms, such as educational opportunities, career opportunities, or even opportunities to build good relationships.</p>
            </div>
            <div className="flex flex-row gap-[2rem]  items-center md:flex-col" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div
                className={` flex flex-col justify-end items-center w-[25rem] h-[12.5rem]  border-[3px] border-GreenFooter rounded-[50px] cursor-pointer relative bg-GreenFooter text-white md:h-[15rem] `}

              >
                <img className="w-[15rem]" src={romanticImg} alt="romantic" />
                <p className="absolute bottom-[6rem] left-[1rem] text-[2rem] font-[600]">
                  SUCCEED
                </p>
              </div>
              <p className="indent-10 max-w-[30rem]">
                <span className="text-GreenFooter">People who are building a family often thrive personally and feel more successful in life because of the responsibility of caring for each other and giving unconditional love.</span>  Moreover, it is an opportunity to learn and grow together in all aspects.</p>
            </div>
          </div>

          <div className="relative flex flex-row justify-center px-[4rem]  py-[1rem] gap-[4rem] m-[3rem] md:flex-col md:items-center  md:gap-[3rem]" >
            <div
              className="relative w-[25rem] h-[35rem] bg-white rounded-[50px] border-[1px] "
              data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
            >
              <div className="flex flex-col items-center justify-start h-full" >
                <div className="h-[15rem] w-full flex justify-center items-end bg-gray-100 rounded-[50px_50px_0_0]">
                  <img
                    className={`w-[14rem]`}
                    src={familyIcon}
                    alt="family"
                  />
                </div>
                <div className=" bg-white border-gray-100 p-[1rem] h-[10rem]  text-[.5rem]">
                  <h3 className="text-[1.25rem] text-GreenFooter">
                    MAKING FAMILY
                  </h3>
                  <p className="text-[1rem]">People who are building a family often thrive personally and feel more successful in life because of the responsibility of caring for each other and giving unconditional love. Moreover, it is an opportunity to learn and grow together in all aspects. Building a family is also a crucial way to create strong relationships and bonds that can be a source of encouragement in everyone's life, in any situation.</p>
                </div>
              </div>
            </div>
            <div
              className="relative w-[25rem] h-[35rem] bg-white rounded-[50px] border-[1px] "
              data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
            >
              <div className="flex flex-col items-center justify-start h-full" >
                <div className="h-[15rem] w-full flex justify-center items-end bg-gray-100 rounded-[50px_50px_0_0]">
                  <img
                    className={`w-[14rem]`}
                    src={peopleIcon}
                    alt="people"
                  />
                </div>
                <div className=" bg-white border-gray-100 p-[1rem] h-[10rem]  text-[.5rem]">
                  <h3 className="text-[1.25rem] text-GreenFooter">
                  WORKING
                  </h3>
                  <p className="text-[1rem]">Individuals who dedicate themselves to their work and make progress in their careers often possess a wealth of knowledge and skills required for their job. Additionally, they have the determination to further develop themselves.</p>
                </div>
              </div>
            </div>
            <div
              className="relative w-[25rem] h-[35rem] bg-white rounded-[50px] border-[1px] "
              data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
            >
              <div className="flex flex-col items-center justify-start h-full" >
                <div className="h-[15rem] w-full flex justify-center items-end bg-gray-100 rounded-[50px_50px_0_0]">
                  <img
                    className={`w-[14rem]`}
                    src={growIcon}
                    alt="grow"
                  />
                </div>
                <div className=" bg-white border-gray-100 p-[1rem] h-[10rem]  text-[.5rem]">
                  <h3 className="text-[1.25rem] text-GreenFooter">
                  GROWING UP
                  </h3>
                  <p className="text-[1rem]">The learning process and personal growth in both skills and social connections present students with challenges in academics and real-life situations. Being a student is also a crucial time for setting goals and turning dreams into reality. It involves dedication to learning, time management, and skill development that will be beneficial in the future.</p>
                </div>
              </div>
            </div>


          </div>
        </div>
        <ChatBot />
      </div>
      <FooterHome />
    </>
  );
}

export default HomePage;
