import React,{useState} from "react";
import supportHeader from "../assets/images/header/header05.png";
import FooterHome from "../components/FooterHome";

function SupportPage() {
  const [value, setValue] = useState(25);

  const incrementValue = (e) => {
    e.preventDefault(e)
    setValue(prevValue => prevValue + 25);
  };
  const decrementValue = (e) => {
    e.preventDefault()
    if (value > 0) {
    setValue(prevValue => prevValue - 25)};
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }
 
  return (
    <div>
      <div className="relative flex flex-col justify-center items-center">
        <img
          className="bg-gray-200 object-cover object-top "
          src={supportHeader}
          alt="support"
        />
        <h1 className="header-text absolute  text-black text-center text-[4rem] font-[700]">
          สนับสนุนเรา
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center m-[4rem] ">
        <form className=" w-[30rem] flex flex-col gap-[2rem] " onSubmit={handleSubmit}>
          <p className="text-[1.5rem] indent-10">
            เราต้องการความช่วยเหลือจากคุณในการขยายการเข้าถึงทางการเงิน
            บริจาควันวันนี้
            บริจาคของคุณช่วยเราในการครอบคลุมค่าใช้จ่ายในการขยายการเข้าถึงสินเชื่อที่สามารถเปลี่ยนแปลงชีวิตได้และเชื่อถึงมากขึ้นให้สามารถเข้าถึงได้มากขึ้นทั่วโลก
          </p>
          <div className="flex flex-row items-center p-[1rem] bg-gray-100 rounded-[20px] ">
          <button onClick={decrementValue} className="text-[2rem] text-GreenButton  ">-</button>
        <p className="flex-grow  text-center    font-[400] text-[1.25rem]">{value} THB</p>
          <button onClick={incrementValue} className="text-[2rem] text-GreenButton ">+</button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-GreenFooter text-white py-2 px-4 rounded-md hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 "
            >
              Donate
            </button>
          </div>
        </form>
      </div>
      <FooterHome />
    </div>
  );
}

export default SupportPage;
