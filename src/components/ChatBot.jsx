import React, { useState, useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import chatIcon from "../assets/images/icon/chat-icon.png";
import MsgSendBox from "./message/MsgSendBox";
import MsgTurn from "./message/MsgTurn";
import { socket } from "../utils/socket";
import AuthContext from "../contexts/AuthContext";
import MsgAuto from "./message/MsgAuto";

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
      setSocketId(socket.id);
      setIsConnected(true);
    }

    function onGetMessage(roomMsg) {
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
    if (user && user.length > 0) {
      const currentUser = user[0];
      setUsername(currentUser.username); // Set username automatically if user exists
      if (currentUser.username === "admin") {
        setIsAdmin(true);
        socket.connect();
      } else {
        const room = `${currentUser.username}-admin`;
        setRoom(room);
        socket
          .connect()
          .emit("enter", { username: currentUser.username, room });
      }
    }
  }, [user]);

  useEffect(() => {
    if (ref.current && allMsg.length > 0) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [allMsg.length]);

  const hdlEnter = () => {
    setIsOpen(!isOpen);
    if (username.trim()) {
      if (username === "admin") {
        setIsAdmin(true);
        socket.connect();
      } else {
        const room = `${username}-admin`;
        setRoom(room);
        socket.connect().emit("enter", { username, room });
      }
    } 
  };

  const hdlLeave = () => {
    setIsOpen(!isOpen);
    socket.disconnect();
    setAllMsg([]);
    setIsConnected(false);
    setSocketId("");
    setRoom("");
  };

  const joinRoom = (room) => {
    setRoom(room);
    socket.emit("enter", { username: "admin", room });
  };

  return (
    <div>
      {isAdmin ? (
        <div className="flex flex-row items-baseline gap-[3rem] ">
          <div className="flex flex-col gap-2  py-[4rem] h-screen bg-gray-200 ">
          
            <table className="min-w-full divide-y  divide-gray-50  ">
              <thead className="bg-gray-50 ">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={hdlEnter}>
                    Room
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {activeRooms.map((room, index) => (
                  <tr
                    key={index}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => joinRoom(room)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-GreenButton">
                      {room}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className={`chat-box    
       `}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 50 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="chat-header bg-GreenButton brightness-105 text-center p-[.5rem] rounded-[10px_10px_0_0]  relative">
              <p className="font-[600] text-white tracking-wider">
                O2O ASSISTANT
              </p>
              <p
                className="font-[300] absolute right-[1rem] top-[.4rem] text-[1rem] text-white cursor-pointer hover:text-black"
                onClick={hdlLeave}
              >
                x
              </p>
            </div>

            <div className="chat-body bg-white border-[1px]  border-gray-200 relative overflow-y-auto h-[30rem] w-[30rem]">
              <ul className="space-y-2">
                {allMsg.map((el, index) => (
                  <MsgTurn
                    key={index}
                    msg={el.msg}
                    chatuser={el.username}
                    isMe={el.username === username}
                  />
                ))}
                <li ref={ref}></li>
              </ul>
            </div>
            <MsgSendBox room={room} username={username} />
          </div>
        </div>
      ) : (
        <>
          <div
            className={`chat-circle fixed bottom-10 right-10 bg-GreenButton w-[4rem] h-[4rem] p-[1rem] rounded-[50%] cursor-pointer hover:bg-green-200 hover:outline-green-200 outline outline-[2px] outline-offset-[.25rem] outline-GreenButton drop-shadow-2xl brightness-110 ${isOpen ? "inline-block" : "hidden"
              } `}
            onClick={hdlEnter}
          >
            <img src={chatIcon} alt="chat" />
          </div>
          <motion.div
            className={`chat-box fixed bottom-10 right-10 drop-shadow-2xl ${isOpen ? "hidden" : "inline-block"
              } `}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 50 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="chat-header bg-GreenButton brightness-105 text-center p-[.5rem] rounded-[10px_10px_0_0] relative">
              <p className="font-[600] text-white tracking-wider">
                O2O ASSISTANT
              </p>
              <p
                className="font-[300] absolute right-[1rem] top-[.4rem] text-[1rem] text-white cursor-pointer hover:text-black"
                onClick={hdlLeave}
              >
                x
              </p>
            </div>
            {!getUser ? (
              <>
                <MsgAuto />
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
            ) : (
              <>
                <div className="chat-body bg-white border-[1px] border-gray-200 relative overflow-y-auto h-[20rem]">
                  <ul className="space-y-2">
                    {allMsg.map((el, index) => (
                      <MsgTurn
                        key={index}
                        msg={el.msg}
                        chatuser={el.username}
                        isMe={el.username === username}
                      />
                    ))}
                    <li ref={ref}></li>
                  </ul>
                </div>
                <MsgSendBox room={room} username={username} />
              </>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
}

export default ChatBot;
