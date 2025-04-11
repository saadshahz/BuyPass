import React from 'react'
import MessageCard from './MessageCard'

export default function ChatsListing() {
    return (
        <section className='p-4 h-[100vh]  ' >
            <div className='text-[20px] text-center font-bold h-[10vh]' >LOGO</div>
            <div className='h-[90vh] ' >
                <MessageCard title={"hellow world"} location="karachi" status={'viewed'} id={2} image_url={''} />
            </div>
        </section>
    )
}
