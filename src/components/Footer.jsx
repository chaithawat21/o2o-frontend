import React from "react";
import logoIcon from "../assets/images/logo/logo-coin.png";
import xIcon from "../assets/images/icon/twitterx.png";
import facebookIcon from "../assets/images/icon/facebook.png";
import instagamIcon from "../assets/images/icon/instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // <footer className='flex flex-row justify-between items-center p-[1rem] bg-gray-100'>
    //   <div className='flex flex-col gap-[1rem]'>
    //   {/* <img className='w-[2rem] h-[2rem]' src={logoIcon} alt="logo" /> */}
    //   <nav className="flex flex-row gap-[1rem] items-center text-[.8rem] text-GreenFooter">
    //     <Link to="">Home</Link>
    //     <Link to="/Register">Register</Link>
    //     <Link to="/profile">Profile</Link>
    //     <Link to="/select">Select</Link>
    //     <Link to="/about">About</Link>
    //   </nav>
    //   </div>
    //     {/* <div className='flex flex-col items-end gap-[1rem]'>
    //     <div className='flex flex-row gap-[1rem]'>
    //       <img  className='icon w-[2.5rem] h-[2.5rem] cursor-pointer' src={facebookIcon} alt="facebook" />
    //       <img className='icon w-[2.5rem] h-[2.5rem] cursor-pointer' src={instagamIcon} alt="instagram" />
    //       <img className='icon w-[2.5rem] h-[2.5rem] cursor-pointer' src={xIcon} alt="x" />
    //     </div>
    //     <p className=' text-[.8rem] text-end '>© 2024 O2O project. All rights reserved.</p>
    //     </div> */}
    // </footer>
    <div className="w-[1920px] h-[301px] px-[360px] pt-14 pb-6 bg-neutral-100 flex-col justify-start items-center inline-flex">
      <div className="w-[1200px] h-[221px] px-16 flex-col justify-start items-start flex">
        <div className="self-stretch h-[156px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch h-[354.50px] justify-center items-start gap-7 inline-flex">
            <div className="w-[280px] h-[156px] flex-col justify-start items-start gap-8 inline-flex">
              <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-neutral-800 text-sm font-normal  uppercase leading-[21px]">
                    Lend
                  </div>
                </div>
                <div className="self-stretch h-[25.50px] flex-col justify-start items-start flex">
                  <div className="self-stretch h-[25.50px] pt-[3px] pb-[1.50px] flex-col justify-start items-start flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="text-teal-700 text-sm font-light  leading-[21px]">
                        Apply now
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[25.50px] flex-col justify-start items-start flex">
                  <div className="self-stretch h-[25.50px] pt-[3px] pb-[1.50px] flex-col justify-start items-start flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="text-teal-700 text-sm font-light  leading-[21px]">
                        Lend now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[239px] h-[156px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[46.50px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-neutral-800 text-sm font-normal  uppercase leading-[21px]">
                    Borrow
                  </div>
                </div>
                <div className="self-stretch h-[25.50px] pt-[3px] pb-[1.50px] flex-col justify-start items-start flex">
                  <div className="justify-start items-start inline-flex">
                    <div className="text-teal-700 text-sm font-light  leading-[21px]">
                      Apply now
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[102px]" />
            </div>
            <div className="w-[247px] h-[164px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[21px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-neutral-800 text-sm font-normal  uppercase leading-[21px]">
                    About
                  </div>
                </div>
                <div className="self-stretch h-[51px] flex-col justify-start items-start flex">
                  <div className="self-stretch h-[25.50px] pt-[3px] pb-[1.50px] flex-col justify-start items-start flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="text-teal-700 text-sm font-light  leading-[21px]">
                        FAQs
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[25.50px] pt-[3px] pb-[1.50px] flex-col justify-start items-start flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="text-teal-700 text-sm font-light  leading-[21px]">
                        Contact us
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1072px] h-[85px] pt-2 flex-col justify-start items-start flex">
          <div className="self-stretch text-center text-neutral-400 text-sm font-light  leading-[21px]">
            Lending through O2O involves risk of principal loss. O2O does not
            guarantee repayment or offer a financial return on your loan.
            <br />© 2024 O2O. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
