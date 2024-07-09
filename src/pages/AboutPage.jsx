import React,{useState} from "react";
import aboutHeader from "../assets/images/header/header04.jpg";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function AboutPage() {
  const notifyError = () => {toast.error('Failed to send email', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    })}
    const notifySuccess = () => {toast.success('Email sent successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })}
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8888/contact', formData);
      console.log(response.data);
      notifySuccess();
    } catch (error) {
      console.error(error);
      notifyError();
    }
    setFormData({name: '',
      email: '',
      message: '',})
  };
  return (
    <>
      <div className="relative flex flex-col items-center">
        <img
          className="object-cover object-top  w-full h-[25rem] relative "
          src={aboutHeader}
          alt="header-image"
        />
        <h1 className="header-text absolute top-[10rem]  text-black text-center text-[4rem] font-[700]">
          เกี่ยวกับเรา
        </h1>
      </div>
      <p className="indent-5 px-[5rem] pt-[2rem]">
        กว่า 1.7
        พันล้านคนทั่วโลกไม่มีบัญชีธนาคารและไม่สามารถเข้าถึงบริการทางการเงินที่จำเป็นได้
        O2O เป็นองค์กรไม่แสวงหาผลกำไรระดับนานาชาติ ก่อตั้งขึ้นในปี 2024
        ที่ประเทศไทย
        โดยมีพันธกิจในการขยายการเข้าถึงทางการเงินเพื่อช่วยให้ชุมชนที่ด้อยโอกาสเจริญเติบโต
      </p>
      <p className="indent-5 px-[5rem] pt-[1rem]">
        เราทำสิ่งนี้โดยการระดมทุนจากฝูงชนเพื่อปล่อยกู้และปลดล็อกเงินทุนสำหรับผู้ด้อยโอกาส
        ปรับปรุงคุณภาพและต้นทุนของบริการทางการเงิน
        และแก้ไขอุปสรรคที่อยู่เบื้องหลังการเข้าถึงทางการเงินทั่วโลก ผ่านงานของ
        O2O นักเรียนสามารถจ่ายค่าเล่าเรียนได้ ผู้หญิงสามารถเริ่มธุรกิจได้
        เกษตรกรสามารถลงทุนในอุปกรณ์ได้
        และครอบครัวสามารถจ่ายค่ารักษาพยาบาลที่จำเป็นได้
      </p>
      <p className="indent-5 px-[5rem] pt-[1rem]">
        โดยการปล่อยกู้เพียง 25 บาท บน O2O
        คุณสามารถเป็นส่วนหนึ่งของการแก้ปัญหาและสร้างความแตกต่างในชีวิตของผู้อื่นได้อย่างแท้จริง
        100% ของทุกบาทที่คุณปล่อยกู้บน O2O จะไปที่การระดมทุนเพื่อการปล่อยกู้
      </p>
      <p className="indent-5 px-[5rem] pt-[1rem]">
        ในประเทศไทย
        มีชุมชนและกลุ่มคนหลายกลุ่มที่ยังไม่สามารถเข้าถึงบริการทางการเงินที่มีคุณภาพได้
        O2O
        ได้ทำงานร่วมกับพันธมิตรในท้องถิ่นเพื่อให้ความช่วยเหลือทางการเงินผ่านการปล่อยกู้ขนาดเล็กแก่ผู้ที่ต้องการ
        ตัวอย่างเช่น
        ผู้ประกอบการในชนบทสามารถใช้เงินกู้เพื่อขยายธุรกิจและสร้างรายได้เสริมให้ครอบครัว
        นักเรียนสามารถใช้เงินกู้เพื่อจ่ายค่าเล่าเรียนและดำเนินการศึกษาต่อไปได้
        นอกจากนี้ยังมีเกษตรกรที่สามารถใช้เงินกู้เพื่อปรับปรุงการเกษตรและเพิ่มผลผลิตได้อีกด้วย
      </p>
      <p className="px-[5rem] pt-[1rem] pb-[2rem]">
        การสนับสนุนจาก O2O
        ทำให้ผู้คนในประเทศไทยมีโอกาสที่จะพัฒนาชีวิตและชุมชนของตนเองอย่างยั่งยืน
      </p>
      <div className="flex flex-col justify-center items-center p-[2rem] ">
        <div className="border-[2px] border-GreenFooter rounded-[20px] w-[25rem] p-[2rem]  ">
          <h2 className="text-2xl font-bold mb-4 text-center text-GreenFooter">
            ติดต่อเรา
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem] ">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
            onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
            onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-GreenFooter focus:border-GreenFooter sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-GreenFooter text-white py-2 px-4 rounded-md hover:opacity-50 focus:outline-none focus:ring-green-200 focus:ring-2 focus:ring-offset-2 "
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
