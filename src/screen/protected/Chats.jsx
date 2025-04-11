import React from 'react'
import ChatsListing from '../../components/ChatsListing'
import Header from '../../components/Header'
import ChatDetails from '../../components/ChatDetails'
import { useLocation, useNavigate } from 'react-router-dom';

export default function chats() {

  const location = useLocation();
  const loactionId = location.pathname.split('/').pop();

  return (
    <section className='flex' >
      <div className='w-1/5' >
        <ChatsListing />
      </div>
      <div className='w-4/5' >
        <Header />

        {loactionId ? <ChatDetails /> : <>Chat detail will be over here</>}

      </div>
    </section>
  )
}
