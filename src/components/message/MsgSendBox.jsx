/* eslint-disable react/prop-types */
import { useState } from "react";
import { socket } from "../../utils/socket";

export default function MsgSendBox(props) {
  const {room, username} = props
  const [input, setInput] = useState("");

  const hdlSubmit = (e) => {
    e.preventDefault();
    if(!input.trim())
      return setInput("")
    socket.emit("sendMessage", {username ,msg: input, room });
    setInput("");
  };
  return (
    <div className="chat-input ">
          <form className="bg-gray-50 p-[.5rem]  rounded-[0_0_10px_10px] flex gap-[.5rem] "
          onSubmit={hdlSubmit}>
            <input
              className="bg-gray-50 outline-none px-[1rem] flex-grow "
              type="text"
              placeholder="พิมพ์คำถามที่นี้..."
              name="message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="chat-submit bg-GreenButton px-[.75rem] py-[.25rem] rounded-[10px] text-white hover:opacity-50 "
            >
              ถาม
            </button>
          </form>
        </div>
  );
}
