import { Avatar, Card, Tag } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import LocationIcon from '../assets/images/svgs/LocationIcon.jsx';

export default function MessageCard(props) {

    const { title, image_url, location, status, id } = { ...props }


    const getFirstLetters = (text) => {
        if (!text) return '';
        return text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('');
    };

    return (
        <Link to={`/chats/${id}`} className="">
            <div
                className="w-full py-2 "
            >
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        {image_url ? <image href={image_url} className='w-[10px] h-[10px] rounded-full ' /> : <Avatar style={{ backgroundColor: '#fcff00', verticalAlign: 'middle' }} size="large" gap={2}>
                            {getFirstLetters(title)}
                        </Avatar>}

                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                            <p className="text-gray-600 flex gap-1 items-center"><span><LocationIcon fill={'#0877ff'} /></span>{location}</p>
                        </div>
                    </div>
                    {status == 'viewed' && (<span className="block bg-[#0877ff] w-[10px] h-[10px] rounded-full">
                    </span>)}
                </div>

            </div>
        </Link>
    )
}
