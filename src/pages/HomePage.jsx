import React, { useState } from "react";
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

const items = [
  {
    id: "family",
    title: "MAKING FAMILY",
    subtitle:
      "คนที่กำลังสร้างครอบครัวมักจะเจริญทางส่วนตัวและรู้สึกมีความสำเร็จในชีวิตมากขึ้น เนื่องจากมีความรับผิดชอบที่ต้องดูแลกันและให้ความรักกันอย่างไม่มีเงื่อนไข นอกจากนี้ยังเป็นโอกาสที่จะเรียนรู้และเติบโตด้วยกันในทุกเรื่อง การสร้างครอบครัวยังเป็นหนทางสำคัญที่จะสร้างความสัมพันธ์และความผูกพันที่แข็งแรงซึ่งสามารถเป็นกำลังใจในชีวิตของแต่ละคนได้ในทุกสถานการณ์",
    icon: familyIcon,
    iconWidth: "w-[8rem]",
  },
  {
    id: "working",
    title: "WORKING",
    subtitle:
      "ความทุ่มเทในงาน และความก้าวหน้าที่เขาได้ทำไปในสายอาชีพของเขาได้ บุคคลแบบนี้มักมีความจุของความรู้และทักษะที่ต้องการสำหรับงานที่เขาทำ นอกจากนี้ยังมีความตั้งใจที่จะพัฒนาตัวเองให้ดียิ่งขึ้นอีกด้วย",
    icon: peopleIcon,
    iconWidth: "w-[12rem]",
  },
  {
    id: "growing",
    title: "GROWING UP",
    subtitle:
      "กระบวนการเรียนรู้และการเจริญเติบโตทั้งทางทักษะและการเชื่อมโยงทางสังคม นักศึกษามักมีโอกาสที่จะพบเจอความท้าทายในการเรียนการสอนและการเผชิญหน้ากับชีวิตจริง การเป็นนักศึกษายังเป็นช่วงเวลาที่สำคัญในการสร้างเป้าหมายและฝันให้เป็นจริง เขียนถึงความมุ่งมั่นในการเรียนรู้ การจัดการเวลา และการพัฒนาทักษะที่จะเป็นประโยชน์ในอนาคต",
    icon: growIcon,
    iconWidth: "w-[9rem]",
  },
];

function HomePage() {
  const [showDetail, setShowDetail] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleShow = (value) => {
    if (showDetail === value) {
      setShowDetail("");
    } else {
      setShowDetail(value);
    }
  };

  return (
    <>
      <div className="head-content relative flex flex-col items-center">
        <img
          className="object-cover object-center  w-full h-[30rem] relative "
          src={homeHeaderImg}
          alt="header-image"
        />
        <h1 className="header-text absolute top-[10rem]  text-black text-center text-[4rem] font-[700]">
          สนับสนุนทุกโอกาส
          <br />
          ให้กลายเป็นจริง
        </h1>
      </div>
      <div className="middle-content flex flex-col items-center p-[2rem]">
        <h2 className="text-[1.5rem] ">ความมุ่งมั่นของเราส่งผลต่อ</h2>
        <h2 className="text-[2rem] font-[500] md:text-center">
          ปรับปรุงคุณภาพชีวิตของพวกเขาให้ดียิ่งขึ้น
        </h2>
      </div>
      <div className="bottom-content flex flex-col justify-center items-center md:flex-row md:items-start">
        <div className="flex flex-row justify-center px-[4rem] py-[1rem] relative gap-[4rem] md:flex-col md:items-center md:gap-[1rem] ">
          <motion.div
            className={`flex flex-col justify-end items-center w-[15rem] px-[1.5rem] border-[3px] border-GreenFooter rounded-[50px] cursor-pointer relative
          hover:bg-GreenFooter text-GreenLogin hover:text-white md:h-[8rem] ${
            showDetail === 1 && "bg-GreenFooter text-white"
          } `}
            onClick={() => handleShow(1)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <img className="w-[8.5rem]" src={cyptoImg} alt="cryto" />
            <p className="absolute bottom-[4rem] left-[1rem] text-[2rem] font-[600]">
              แบ่งปัน
            </p>
          </motion.div>
          <motion.div
            className={`flex flex-col justify-end items-center w-[15rem] px-[1.5rem] border-[3px] border-GreenFooter rounded-[50px] cursor-pointer relative hover:bg-GreenFooter text-GreenLogin hover:text-white md:h-[8rem] ${
              showDetail === 2 && "bg-GreenFooter text-white"
            }`}
            onClick={() => handleShow(2)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <img className="w-[8rem]" src={bitcoinImg} alt="bitcoin" />
            <p className=" absolute bottom-[4rem] left-[1rem] text-[2rem]  font-[600]">
              โอกาส
            </p>
          </motion.div>
          <motion.div
            className={` flex flex-col justify-center items-center w-[15rem] px-[1.5rem] border-[3px] border-GreenFooter rounded-[50px] cursor-pointer relative hover:bg-GreenFooter text-GreenLogin hover:text-white md:h-[8rem] ${
              showDetail === 3 && "bg-GreenFooter text-white"
            } `}
            onClick={() => handleShow(3)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <img className="w-[10rem]" src={romanticImg} alt="romantic" />
            <p className="absolute bottom-[4rem] left-[1rem] text-[2rem] font-[600]">
              สำเร็จ
            </p>
          </motion.div>
        </div>
        <div className="max-w-[60rem] px-[4rem] py-[2rem] indent-[3rem] md:hidden">
          {showDetail === 1 && (
            <p>
              การแบ่งปันเป็นแนวคิดที่มีความสำคัญอย่างยิ่งในสังคม
              มันเป็นการกระจายทรัพยากร ความรู้ และโอกาสให้กับผู้อื่น
              ซึ่งสร้างความสัมพันธ์ที่ดียิ่งขึ้นในชุมชน
              การแบ่งปันช่วยส่งเสริมความร่วมมือ ความเข้าใจ
              และการสนับสนุนกันและกัน โดยเฉพาะในยุคดิจิทัล
              การแบ่งปันสามารถทำได้ง่ายและกว้างขวางขึ้นผ่านแพลตฟอร์มออนไลน์ต่างๆ
              เช่น การแบ่งปันความรู้ในบล็อก การแชร์ข้อมูลผ่านโซเชียลมีเดีย
              และการให้ความช่วยเหลือในกลุ่มชุมชนออนไลน์
              การแบ่งปันนี้ไม่เพียงแค่สร้างความสุขและความพึงพอใจให้กับผู้ให้และผู้รับเท่านั้น
              แต่ยังเสริมสร้างความเข้มแข็งให้กับสังคมโดยรวมอีกด้วย
            </p>
          )}
          {showDetail === 2 && (
            <p>
              โอกาสเป็นปัจจัยสำคัญที่สามารถเปลี่ยนแปลงชีวิตของคนเราได้อย่างมีนัยสำคัญ
              มันเป็นช่วงเวลาที่เหมาะสมที่สามารถนำไปสู่ความก้าวหน้าและความสำเร็จ
              โอกาสสามารถมาในหลายรูปแบบ เช่น โอกาสทางการศึกษา โอกาสทางอาชีพ
              หรือแม้แต่โอกาสในการสร้างความสัมพันธ์ที่ดี
              การเตรียมตัวและการมีทัศนคติที่พร้อมจะรับมือกับโอกาสเมื่อมันมาถึงเป็นสิ่งสำคัญ
              เพราะโอกาสบางครั้งมาในเวลาที่เราไม่คาดคิด
              การเปิดใจรับฟังและเรียนรู้จากประสบการณ์ใหม่ ๆ
              ก็เป็นการเพิ่มโอกาสให้กับตัวเอง นอกจากนี้
              การสร้างโอกาสให้ผู้อื่นก็เป็นสิ่งที่มีค่าและสร้างความเข้มแข็งให้กับชุมชน
              การทำงานร่วมกันและการสนับสนุนซึ่งกันและกันสามารถสร้างสรรค์โอกาสที่มีคุณค่าและเป็นประโยชน์ให้กับทุกคนในสังคม
            </p>
          )}
          {showDetail === 3 && (
            <p>
              ความสำเร็จเป็นสิ่งที่ทุกคนปรารถนาและมีความหมายที่แตกต่างกันไปในแต่ละบุคคล
              มันอาจหมายถึงการบรรลุเป้าหมายในอาชีพ การสร้างครอบครัวที่มีความสุข
              หรือการมีชีวิตที่มีความหมายและมีคุณค่า
              การบรรลุความสำเร็จต้องการความมุ่งมั่น ความอดทน และความพยายาม
              การตั้งเป้าหมายที่ชัดเจนและการวางแผนที่ดีเป็นขั้นตอนสำคัญในการเดินทางสู่ความสำเร็จ
              นอกจากนี้
              การเรียนรู้จากความล้มเหลวและการปรับปรุงตนเองอย่างต่อเนื่องยังเป็นปัจจัยที่ช่วยเสริมสร้างโอกาสในการประสบความสำเร็จ
              การมีแรงจูงใจและการสนับสนุนจากคนรอบข้างก็มีบทบาทสำคัญในการเดินทางนี้
              สุดท้ายแล้ว
              ความสำเร็จไม่ใช่เพียงแค่การบรรลุเป้าหมายแต่ยังเป็นการเติบโตและการพัฒนาตนเองในทุกๆ
              ด้านของชีวิต
            </p>
          )}
        </div>

        <div className="relative flex flex-row justify-center px-[4rem] py-[1rem] gap-[4rem] md:flex-col md:items-center md:gap-[1rem]">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              className="w-[15rem] cursor-pointer"
              onClick={() => setSelectedId(item.id)}
            >
              <div className="h-[8rem] flex justify-center items-end bg-gray-100 rounded-[50px_50px_0_0]">
                <img
                  className={`${item.iconWidth}`}
                  src={item.icon}
                  alt={item.id}
                />
              </div>
              <div className="border-[1px] bg-white border-gray-100 p-[1rem] h-[10rem] rounded-[0_0_50px_50px] text-[.5rem]">
                <motion.h3 className="text-[1.25rem]">{item.title}</motion.h3>
                <motion.p>{item.subtitle}</motion.p>
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                style={{ zIndex: 40 }} // Ensures overlay is above other content
              >
                <motion.div
                  layoutId={selectedId}
                  className="relative w-[30rem] h-[30rem] bg-white rounded-[50px] "
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                  style={{ zIndex: 50 }} // Ensures modal is above overlay
                >
                  {items
                    .filter((item) => item.id === selectedId)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col items-center justify-start h-full"
                      >
                        <div className="h-[15rem] w-full flex justify-center items-end bg-gray-100 rounded-[50px_50px_0_0]">
                          <img
                            className={`w-[14rem]`}
                            src={item.icon}
                            alt={item.id}
                          />
                        </div>
                        <div className=" bg-white border-gray-100 p-[1rem] h-[10rem]  text-[.5rem]">
                          <motion.h3 className="text-[1.25rem]">
                            {item.title}
                          </motion.h3>
                          <motion.p className="text-[1rem]">{item.subtitle}</motion.p>
                        </div>
                      </div>
                    ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <ChatBot />
      <FooterHome />
    </>
  );
}

export default HomePage;
