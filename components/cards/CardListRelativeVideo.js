import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardListRelativeVideo({ data, key }) {

  return (
    <Link href={'/video/' + data?.video_id} key={key}>
      <div className="flex transition duration-150 cursor-pointer  hover:bg-white dark:hover:bg-slate-900 py-1 justify-start items-start space-y-2">
        <div className='w-full h-full flex justify-start'>
          <div className="relative w-[45%] bg-slate-200 rounded-lg dark:bg-slate-700 h-[80px]">
            {/* <!-- Image Video --> */}
            <a href="#">
              <Image src={data?.video_metadata?.items[0].snippet.thumbnails.medium.url} 
              layout={'fill'}
                className="object-cover w-full rounded-lg h-full" alt="image profile" />
            </a>

          </div>

          <div className='w-[55%] flex text-xs mx-2 dark:text-slate-100 text-gray-900 flex-col justify-around'>
            <p className='-mt-2'>{data?.video_title.substring(0,30)}...</p>
            <p className='capitalize text-[10px] text-gray-600 dark:text-slate-300'>{data?.video_metadata?.items[0].snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
