import React, { useState } from "react";

function MsgAuto() {
  const [selectedDetails, setSelectedDetails] = useState([]);
  const chatLog =
    "self-start px-[1rem] py-[.5rem] w-[15rem] bg-green-100 m-[.25rem] rounded-[10px]";

  const handleClick = (value) => {
    setSelectedDetails((prevDetails) => [...prevDetails, value]);
  };

  const renderDetail = (value, index) => {
    if (value === 1) {
      return (
        <div key={index} className={chatLog}>
          <p>
            การสมัครสมาชิกเป็นขั้นตอนที่สำคัญในการเข้าร่วมเป็นสมาชิกของO2O
            Project ซึ่งจะช่วยให้คุณสามารถเข้าถึงบริการและข้อมูลพิเศษต่างๆ
            ที่ไม่ได้เปิดเผยต่อสาธารณะทั่วไป
            การสมัครสมาชิกต้องกรอกข้อมูลส่วนตัวของคุณ
          </p>
          <p><strong>ขั้นตอนการสมัครสมาชิก</strong></p>
          <p>1. คลิกที่ปุ่ม <a className="text-GreenFooter hover:font-[700]" href="/register">Register</a> ปุ่มนี้จะนำคุณไปยังหน้าแบบฟอร์มการสมัคร</p>
          <p>2. กรอกข้อมูลส่วนตัวในแบบฟอร์มการสมัครสมาชิก</p>
          <p>3. ตรวจสอบข้อมูลที่กรอกให้แน่ใจว่าถูกต้อง</p>
          <p>4. คลิกที่ปุ่ม "Submit"เพื่อส่งแบบฟอร์มการสมัครสมาชิก</p>
          <p>5. ยืนยันอีเมล คุณอาจได้รับอีเมลยืนยันการสมัครสมาชิกจากระบบ ให้คลิกที่ลิงก์ในอีเมลนั้นเพื่อยืนยันตัวตนของคุณ</p>
          <br />
          <p>หลังจากสมัครสมาชิกเสร็จสิ้น คุณสามารถเข้าสู่ระบบด้วยอีเมลและรหัสผ่านที่ได้ลงทะเบียนไว้ เพื่อเริ่มต้นใช้งานบริการต่างๆ ของเว็บไซต์ได้ทันที</p>
        </div>
      );
    } else if (value === 2) {
      return (
        <div key={index} className={chatLog}>
          <p>รายละเอียดเกี่ยวกับการให้ยืม...</p>
        </div>
      );
    } else if (value === 3) {
      return (
        <div key={index} className={chatLog}>
          <p>รายละเอียดเกี่ยวกับการขอกู้...</p>
        </div>
      );
    } else if (value === 4) {
      return (
        <div key={index} className={chatLog}>
            <p>เราได้ดำเนินการโครงการนี้โดยการระดมทุนจากฝูงชนเพื่อช่วยเหลือและปลดล็อกเงินทุนสำหรับผู้ด้อยโอกาส โดยมุ่งเน้นที่การปรับปรุงคุณภาพและลดต้นทุนของบริการทางการเงิน เพื่อแก้ไขอุปสรรคที่เป็นข้อบกพร่องในการเข้าถึงทางการเงินทั่วโลก ผ่านการพัฒนาแพลตฟอร์ม O2O ที่ช่วยให้นักเรียนสามารถจ่ายค่าเล่าเรียนได้ง่ายขึ้น ผู้หญิงสามารถเริ่มต้นธุรกิจได้ และเกษตรกรสามารถลงทุนในอุปกรณ์ได้ นอกจากนี้ยังช่วยเสริมสร้างความสามารถให้ครอบครัวสามารถจ่ายค่ารักษาพยาบาลที่จำเป็นได้โดยมีความสะดวกสบาย</p>
          <p>คลิกที่ปุ่ม <a className="text-GreenFooter hover:font-[700]" href="/support">Support</a>  เพื่อสนับสนุนโครงการเราได้</p>
        </div>
      );
    } else if (value === 5) {
      return (
        <div key={index} className={chatLog}>
          <p><strong>การจ่ายเงินด้วยบัตรเครดิต.</strong></p>
          <p>1. เลือกสินค้าหรือบริการที่ต้องการซื้อบนเว็บไซต์มีระบบชำระเงินผ่าน Stripe.</p>
          <p>2. กรอกข้อมูลบัตรเครดิต เช่น หมายเลขบัตร, วันหมดอายุ, และรหัส CVV สำหรับการทำธุรกรรม.</p>
          <p>3. Stripe จะทำการตรวจสอบข้อมูลการชำระเงินเพื่อความปลอดภัย รวมถึงการตรวจสอบยอดเงินในบัญชีของลูกค้า.</p>
          <p>4. ยืนยันการชำระเงิน: ลูกค้ายืนยันการชำระเงินโดยกดปุ่ม "ชำระเงิน" หรือ "ยืนยัน" บนหน้าจอ.</p>
          <p>5. Stripe จะทำการอนุมัติการชำระเงินโดยเร็ว และแจ้งผลการทำรายการกลับมายังลูกค้าและผู้ขาย.</p>
          <p><strong>การจ่ายเงินด้วย QR Code.</strong></p>
          <p>1. เลือกสินค้าหรือบริการที่ต้องการซื้อบนเว็บไซต์มีระบบชำระเงินผ่าน Stripe.</p>
          <p>2. กรอกจำนวนเงินที่ต้องการจ่ายหลังจากสแกน QR Code.</p>
          <p>3. วิธีการชำระเงินที่ต้องการใช้ เช่น บัตรเครดิต, บัตรเดบิต, หรือการโอนเงินผ่านบัญชีธนาคาร.</p>
          <p>4. ยืนยันการชำระเงินและรอการยืนยันการทำธุรกรรมจาก Stripe</p>
          <p>5. Stripe จะทำการอนุมัติการชำระเงินและแจ้งผลการทำรายการกลับมายังลูกค้าและผู้ขาย.</p>
          <br />
          <p>การชำระเงินผ่าน Stripe ด้วยการใช้บัตรเครดิตและ QR Code เป็นวิธีการที่มีความสะดวกสบายและปลอดภัยสำหรับการทำธุรกรรมทางการเงินออนไลน์</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="chat-body h-[20rem] bg-white border-[1px] border-gray-200 overflow-auto flex flex-col">
      <div className={chatLog}>
        <a href=""></a>
        <p>คุณสนใจข้อมูลด้านไหน<br/>กดที่ตัวเลือกได้เลย</p>
        <ul className="text-GreenFooter cursor-pointer list-disc pl-[.5rem]">
          <li className="hover:font-[700]" onClick={() => handleClick(1)}>
            การสมัครสมาชิก
          </li>
          <li className="hover:font-[700]" onClick={() => handleClick(2)}>
            ข้อมูลการให้ยืม
          </li>
          <li className="hover:font-[700]" onClick={() => handleClick(3)}>
            ข้อมูลการขอกู้
          </li>
          <li className="hover:font-[700]" onClick={() => handleClick(4)}>
            การสนับสนุนโครงการ
          </li>
          <li className="hover:font-[700]" onClick={() => handleClick(5)}>
            วิธีการจ่ายเงิน
          </li>
        </ul>
      </div>

      {selectedDetails.map((detail, index) => renderDetail(detail, index))}
    </div>
  );
}

export default MsgAuto;
