import React from "react";
import Image from "next/image";
import { BsFillPlayBtnFill } from "react-icons/bs";
import Link from "next/link";

const CardSpecialVideo = ({ data }) => {
  return (
    <Link href={"/video/" + data?.video_id}>
      <div
        style={{
          width: "310px",
          minHeight: "300px",
          minWidth: "310px",
          padding: "0 20px 0 0 ",
        }}
        className="capitalize text-md transition duration-150 cursor-pointer flex justify-start items-start flex-col relative"
      >
        <div>
          <Image
            src={data?.video_metadata?.items[0]?.snippet?.thumbnails?.high?.url}
            className="object-cover"
            alt="image profile"
            width="400px"
            height={"300px"}
          />
        </div>
        <div className="category-special-videos">
          <div>
            <BsFillPlayBtnFill color="white" fontSize={70} />
          </div>
        </div>
        <span
          style={{ wordWrap: "break-word", textAlign: "left" }}
          className="mt-3 text-lg"
        >
          {data?.video_title?.length > 25
            ? data?.video_title?.substring(0, 25) + " ..."
            : data?.video_title}
        </span>
        <span className="mt-3 text-md opacity-70">
          {data?.video_metadata?.items[0]?.snippet?.channelTitle}
        </span>
      </div>
    </Link>
  );
};
export default CardSpecialVideo;
