export default function MsgTurn(props) {
  const { msg, chatuser, isMe } = props;
  return (
    <li className={`flex bg-white mt-[.5rem] ${isMe ? 'justify-end ' : 'justify-start'}`}>
      <div className={`relative max-w-[15rem] px-[.5rem] mx-[.5rem] py-[.5rem] ${isMe ? 'bg-gray-100 text-GreenFooter' : 'text-GreenFooter bg-green-100 text-black'} rounded-[10px] shadow`}>
        <span className="block">{msg}</span>
      </div>
    </li>
  );
}
