import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'
import ItemMenu from '../ItemMenu'


export default function Sidebar({ hidden = false }) {
    const [category, setcategory] = useState([])
    const [channel, setchannel] = useState([])
    useEffect(() => {
        const getCategory = async () => {
            const resCategory = await fetch(`https://rasmlink.ir/api-v1/video_categories`, {
                headers: {
                    "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
                }
            });
            const allcagegory = await resCategory.json();


            // Get All Channel
            const resChannel = await fetch(`https://rasmlink.ir/api-v1/youtube_channels?is_special=true&is_verfied=true`, {
                headers: {
                    "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
                }
            });
            const AllChannel = await resChannel.json();
            const spereadChannel = allcagegory.filter(res => {
                return res.main_category_info == null;
            });
            setcategory(spereadChannel);
            setchannel(AllChannel);
        }
        getCategory();
    }, [setcategory, setchannel])

    if (!hidden || channel && category) {
        return (
            <div className='w-[18%] pb-20 dark:bg-slate-900 h-screen overflow-y-scroll scrollbar-hide hidden lg:flex flex-col pr-2'>
                {/* <ItemMenu /> */}
                {/* <div className='p-[0.2px] h-[1px] w-[90%] px-2 mx-auto dark:bg-slate-700 bg-gray-100'></div> */}
                <div className='p-3 flex justify-center flex-col'>
                    <h1 className='dark:text-slate-200 text-md font-medium mx-1'>Categories</h1>
                </div>
                <div className='mt-2 px-2'>
                    {category?.map((res, index) => (
                        <Link key={index} href={`/category/${res?.id}/${res?.category_title.toLowerCase()}`}>
                            <div key={index} className='flex transition duration-100 dark:hover:bg-slate-600 bg-transparent hover:bg-slate-100 py-0.5 cursor-pointer rounded-lg items-center space-x-4'>
                                <div className='relative rounded-full flex justify-center h-9 w-9 items-center'>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div className='text-sm font-light'>{res?.category_title}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='my-2 h-[1px] w-[90%] px-2 mx-auto  dark:bg-slate-700 bg-gray-100'></div>
                <div className='p-3 flex justify-center flex-col'>
                    <h1 className='dark:text-slate-200 text-md font-medium mx-1'>Channels</h1>
                    <div className='mt-2 space-y-3'>
                        {channel?.map((item, index) => (
                            <Link key={index} href={`/profile/${item.channel_id}`}>
                                <div key={index} className='flex transition duration-100 dark:hover:bg-slate-600 bg-transparent hover:bg-slate-100 py-0.5 px-1 cursor-pointer rounded-lg items-center space-x-4'>
                                    <div className='relative rounded-full flex justify-center h-7 w-7 items-center'>
                                        <Image alt="image placeholder" src={item?.channel_metadata.items[0].snippet.thumbnails.default.url} className='object-cover w-9 h-9 rounded-full' width={'40'} height={'40'} />
                                    </div>
                                    <div className='text-xs dark:text-slate-200 text-slate-800'>
                                        {item?.channel_title.substring(0, 20)}...
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        )
    }
}



