import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardListVideo({ data, key, inStyle }) {
  return (
    <Link href={data?.video_id ? "/video/" + data?.video_id : "#"} key={key}>
      <div
        style={inStyle}
        className="flex transition duration-150 cursor-pointer  hover:bg-white dark:hover:bg-stone-900 py-1 justify-start items-start space-y-2"
      >
        <div className="w-full h-full flex">
          <div className="relative w-[120px]  bg-stone-200 rounded-lg dark:bg-stone-700">
            {/* <!-- Image Video --> */}
            <Image
              src={data?.playlist_metadata.snippet.thumbnails.medium.url}
              width={data?.playlist_metadata.snippet.thumbnails.default.width}
              height={"80px"}
              className="object-cover w-[120px] rounded-lg"
              alt="image profile"
            />
          </div>

          <div className="flex text-xs mx-2 dark:text-stone-100 text-gray-900 flex-col justify-around">
            <p className="-mt-2">{data?.playlist_title.substring(0, 30)}...</p>
            <p className="capitalize text-[10px] text-gray-600 dark:text-stone-300">
              {data?.playlist_metadata.snippet.channelTitle}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
