import React,{useState} from 'react'
import ChatBot from '../components/ChatBot'
import UserList from '../components/UserList'
import InboxList from '../components/InboxList'

function AdminPage() {
  const [isShow, setIsShow] = useState('CHAT');
  return (
    <>
    <div className='h-screen flex flex-row '>
    <div className='w-[20rem] bg-gray-800 pt-[4.5rem] pl-[5rem]'>
    <ul className='text-white flex flex-col  gap-[2rem] cursor-pointer'>
    <li onClick={() => setIsShow('INBOX')}>INBOX</li>
          <li onClick={() => setIsShow('CHAT')}>CHAT</li>
          <li onClick={() => setIsShow('USER')}>USER</li>
    </ul>
    </div>
    {isShow === 'INBOX' && <InboxList />}
        {isShow === 'CHAT' && <ChatBot />}
        {isShow === 'USER' && <UserList />}
    </div>
    </>
    
    
  )
}

export default AdminPage