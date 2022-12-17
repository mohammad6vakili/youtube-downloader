import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardListVideo({ data, key }) {

  return (
    <Link href="#" key={key}>
      <div className="flex transition duration-150 cursor-pointer  hover:bg-white dark:hover:bg-slate-900 py-1 justify-start items-start space-y-2">
        <div className='w-full h-full flex'>

          <div className="relative w-[120px]  bg-slate-200 rounded-lg dark:bg-slate-700">
            {/* <!-- Image Video --> */}
            <a href="#">
              <Image src={data?.playlist_metadata.snippet.thumbnails.medium.url} width={data?.playlist_metadata.snippet.thumbnails.default.width} height={'80px'}
                className="object-cover w-[120px] rounded-lg" alt="image profile" />
            </a>
          </div>

          <div className='flex text-xs mx-2 dark:text-slate-100 text-gray-900 flex-col justify-around'>
            <p className='-mt-2'>{data?.playlist_title.substring(0,30)}...</p>
            <p className='capitalize text-[10px] text-gray-600 dark:text-slate-300'>{data?.playlist_metadata.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
