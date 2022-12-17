import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

export default function CardSubscrib({ item, key }) {
    return (
        <div className='w-full'>
            <Link  href={`/profile/${item.channel_id}`}>
                <div className='flex w-full dark:bg-slate-700 bg-white/80 h-20 rounded-lg cursor-pointer px-4 py-2'>
                    <div className='flex justify-center h-full items-center'>
                        <Image alt="image placeholder" src={item?.channel_metadata.items[0].snippet.thumbnails.default.url} width={'60'} height={'60'} className='w-full h-full object-cover rounded-full' />
                    </div>
                    <div className="flex flex-col w-full mx-4 justify-center">
                        <p className='lg:text-sm text-sm font-light w-full'>{item?.channel_title}</p>
                        <p className='lg:text-xs text-[11px] font-normal text-gray-500 dark:text-gray-400'>
                            {item?.channel_metadata.items[0].statistics.subscriberCount + '  '}
                            Subscribers</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
