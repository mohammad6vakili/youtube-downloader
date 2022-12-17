import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function CardVideo({ data, key }) {

  const [channel, setchannel] = useState([]);
  useEffect(() => {
    const getChannel = async () => {
      if (data) {
        let response = await fetch(`https://rasmlink.ir/api-v1/youtube_channels?channel_title=${data?.video_metadata.items[0].snippet.channelTitle}`, {
          headers: {
            "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
          }
        });
        let result = await response.json();
        setchannel(result);
      }
    }

    getChannel();
  }, [setchannel])


  return (
    <Link href={'/video/' + data?.video_id} key={key}>
      <div className="col-span-12 cursor-pointer sm:col-span-6 rounded-lg transition duration-200 pb-2 md:col-span-3  px-2">
        <div className="w-full flex flex-col">
          <div className="relative">
            {/* <!-- Image Video --> */}
            <Link href={'/video/' + data?.video_id} passHref>
              <div className='rounded-lg'>
                {/* this[0].video_metadata.items[0].snippet.thumbnails.maxres.url */}
                <Image  src={data?.video_metadata.items[0].snippet.thumbnails.high.url} className="w-96 rounded-lg dark:rounded-xl object-cover h-48" alt="image profile" width="370px" height={'220px'} />
              </div>
            </Link>

            {/* <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-2 rounded-md py-1">1:15</p> */}
          </div>

          <div className="flex flex-row mt-2 gap-2">
            {/* <!-- Profile Picture --> */}
            <Link href={`/profile/${channel[0]?.channel_id}`} passHref>
              <div className="relative">
                <Image alt="image placeholder" src={channel[0]?.channel_metadata.items[0].snippet.thumbnails.default.url} width={'50'} className="rounded-full max-h-10 w-10 h-10 object-cover max-w-10" height={'50'} />
              </div>
            </Link>

            {/* <!-- Description --> */}
            <div clas="flex flex-col" style={{ direction: 'ltr' }}>
              <Link href={`/profile/${channel[0]?.channel_id}`}>
                <p className="dark:text-slate-100 text-gray-800 text-xs font-">
                  {data?.video_title.length > 50 ? data?.video_title.substring(0, 50) + '...' : data?.video_title}
                </p>
              </Link>
              <Link href={'/profile/' + channel[0]?.channel_id} passHref>
                <a className="dark:text-slate-300 text-gray-500 text-xs mt-2 hover:text-gray-900 capitalize" href="#">
                  {data?.video_metadata.items[0].snippet.channelTitle} </a>
              </Link>
              <div className='flex items-center'>
                {/* <div className="text-gray-500 dark:text-slate-400 text-xs mt-1"> {data?.video_metadata.items[0].snippet.publishedAt}</div>
                <span className='px-1 font-light text-gray-500'>~</span> */}
                {/* <p className="text-gray-500 dark:text-slate-400 text-xs mt-1">views {data?.view_count}</p> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </Link>
  )
}
