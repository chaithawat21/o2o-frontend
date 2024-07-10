import React, { useState } from "react";
import { motion } from "framer-motion";
import chatIcon from "../assets/images/icon/chat-icon.png";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCLick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className={`chat-circle fixed bottom-10 right-10 bg-GreenButton w-[4rem] h-[4rem] p-[1rem] rounded-[50%] cursor-pointer hover:bg-green-200 hover:outline-green-200 outline outline-[2px] outline-offset-[.25rem] outline-GreenButton drop-shadow-2xl brightness-110 ${
          isOpen ? "inline-block" : "hidden"
        } `}
        onClick={handleCLick}
      >
        <img src={chatIcon} alt="chat" />
      </div>
      <motion.div
        className={`chat-box fixed bottom-10 right-10 drop-shadow-2xl ${
          isOpen ? "hidden" : "inline-block"
        } `}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 50 : 0 }}
        transition={{ duration: .5 }}
        
      >
        <div className="chat-header bg-GreenButton brightness-105 text-center  p-[.5rem] rounded-[10px_10px_0_0] relative">
          <p className="font-[600] text-white tracking-wider">O2O ASSISTANT</p>
          <p
            className="font-[300] absolute right-[1rem] top-[.4rem] text-[1rem] text-white cursor-pointer hover:text-black"
            onClick={handleCLick}
          >
            x
          </p>
        </div>
        <div className="chat-body h-[20rem] bg-white shadow-inner shadow-gray-400 overflow-auto flex flex-col">
        <div className="chat-logs self-start px-[1rem] pt-[.5rem] w-[12rem] bg-green-100 m-[.5rem] rounded-[10px]">
       <p>คุณสนใจข้อมูลด้านไหน กดที่ตัวเลือกได้เลย</p>
       <ul className="text-GreenFooter  cursor-pointer list-disc pl-[.5rem]">
        <li>การสมัครสมาชิค</li>
        <li>ข้อมูลการให้ยืม</li>
        <li>ข้อมูลการขอกู้</li>
        <li>การสนับสนุนโครงการ</li>
        <li>วิธีการจ่ายเงิน</li>
       </ul>
        </div>
        <div className="chat-logs self-end px-[1rem] pt-[.5rem] text-GreenButton">
        </div>
        </div>
        <div className="chat-input ">
          <form className="bg-white p-[.5rem] rounded-[0_0_10px_10px] flex gap-[.5rem] ">
            <input
              className="bg-white outline-none px-[1rem] "
              type="text"
              placeholder="พิมพ์คำถามที่นี้..."
            />
            <button
              type="submit"
              className="chat-submit bg-GreenButton px-[.75rem] py-[.25rem] rounded-[10px] text-white hover:opacity-50 "
            >
              ถาม
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ChatBot;
