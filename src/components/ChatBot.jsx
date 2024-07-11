import React, { useState, useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import chatIcon from "../assets/images/icon/chat-icon.png";
import MsgSendBox from "./message/MsgSendBox";
import MsgTurn from "./message/MsgTurn";
import { socket } from "../utils/socket";
import AuthContext from "../contexts/AuthContext";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [socketId, setSocketId] = useState("");
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [room, setRoom] = useState("");
  const [allMsg, setAllMsg] = useState([]);
  const [activeRooms, setActiveRooms] = useState([]);
  const { user } = useContext(AuthContext);
  const getUser = localStorage.getItem("token");

  useEffect(() => {
    function onConnect() {
      console.log("Connected", socket.id);
      setSocketId(socket.id);
      setIsConnected(true);
    }

    function onGetMessage(roomMsg) {
      console.log("getMessage", roomMsg);
      setAllMsg(roomMsg);
    }

    function onActiveRooms(rooms) {
      setActiveRooms(rooms);
    }

    socket.on("connect", onConnect);
    socket.on("getMessage", onGetMessage);
    socket.on("activeRooms", onActiveRooms);

    return () => {
      socket.off("connect", onConnect);
      socket.off("getMessage", onGetMessage);
      socket.off("activeRooms", onActiveRooms);
    };
  }, []);

  useEffect(() => {
    if (user) {
      setUsername(user.username); // Set username automatically if user exists
      if (user.username === "admin") {
        setIsAdmin(true);
        socket.connect();
      } else {
        const room = `${user.username}-admin`;
        setRoom(room);
        socket.connect().emit("enter", { username: user.username, room });
      }
    }
  }, [user]);
  const hdlEnter = () => {
    if (username.trim()) {
      if (username === "admin") {
        setIsAdmin(true);
        socket.connect();
      } else {
        const room = `${username}-admin`;
        setRoom(room);
        socket.connect().emit("enter", { username, room });
      }
    } else {
      alert("Incomplete input");
    }
  };

  const hdlLeave = () => {
    socket.disconnect();
    setAllMsg([]);
    setIsConnected(false);
    setSocketId("");
    setRoom("");
  };

  const handleCLick = () => {
    setIsOpen(!isOpen);
  };

  const joinRoom = (room) => {
    setRoom(room);
    socket.emit("enter", { username: "admin", room });
  };

  useEffect(() => {
    if (ref.current && allMsg.length > 0) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }}, [allMsg.length]);

  return (
    <div>
      {/* <div className="absolute top-0 grid grid-cols-2 bg-black">
        <div className="text-sm text-purple-500 text-right">
          Socket Id: {socketId}
        </div>
      </div>
      <div className="absolute top-20 grid grid-cols-4 gap-2">
        <input
          type="text"
          className="input input-primary col-span-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isConnected}
        />
        <button className="btn" onClick={hdlEnter} disabled={isConnected}>
          Enter
        </button>
        <button className="btn" onClick={hdlLeave}>
          Leave
        </button>
      </div> */}
      {isAdmin && (
        <div className="absolute top-40 grid grid-cols-1 gap-2">
          <h2 className="text-white">Active Rooms</h2>
          <ul className="list-disc list-inside text-white">
            {activeRooms.map((room, index) => (
              <li key={index} onClick={() => joinRoom(room)} className="cursor-pointer hover:underline">
                {room}
              </li>
            ))}
          </ul>
        </div>
      )}
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
        transition={{ duration: 0.5 }}
      >
        <div className="chat-header bg-GreenButton brightness-105 text-center p-[.5rem] rounded-[10px_10px_0_0] relative">
          <p className="font-[600] text-white tracking-wider">O2O ASSISTANT</p>
          <p
            className="font-[300] absolute right-[1rem] top-[.4rem] text-[1rem] text-white cursor-pointer hover:text-black"
            onClick={handleCLick}
          >
            x
          </p>
        </div>
        {!getUser ?  <>
        <div className="chat-body h-[20rem] bg-white border-[1px] border-gray-200 overflow-auto flex flex-col">
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
      </div>
      <div className="chat-input ">
        <form className="bg-white p-[.5rem] rounded-[0_0_10px_10px] flex gap-[.5rem] ">
          <input
            className="bg-white outline-none px-[1rem] "
            type="text"
            placeholder="โปรดลงทะเบียนก่อนใช้งาน"
            disabled
          />
          <button
            type="submit"
            className="chat-submit bg-GreenButton px-[.75rem] py-[.25rem] rounded-[10px] text-white hover:opacity-50 "
            disabled
          >
            ถาม
          </button>
        </form>
      </div>
      </>
      :
      <>
        <div className="chat-body bg-white border-[1px] border-gray-200 relative overflow-y-auto h-[20rem]">
          <ul className="space-y-2">
            {allMsg.map((el, index) => (
              <MsgTurn key={index} msg={el.msg} chatuser={el.username} isMe={el.username === username} />
            ))}
            <li ref={ref}></li>
          </ul>
        </div>
        <MsgSendBox room={room} username={username} />
        </>
      }
      </motion.div>

    </div>
  );
}

export default ChatBot;
