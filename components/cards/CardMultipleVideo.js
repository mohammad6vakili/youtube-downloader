import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayBtnFill } from "react-icons/bs";

export default function CardMultipleVideo({ data }) {
  return (
    <div
      onClick={() => console.log(data)}
      className="mv-multiple-carousel-container"
    >
      {/* ----------------------- section right ---------------------- */}
      <div className="mv-section-right">
        <Image
          src={
            data[0]?.video_metadata?.items[0]?.snippet?.thumbnails?.maxres?.url
          }
          width={"100%"}
          height={"100%"}
          className="object-cover"
        />
        <Link href={"/video/" + data[0]?.video_id}>
          <div>
            <div className="mv-hover-title">{data[0]?.video_title}</div>
            <div
              className="mv-hover-title"
              style={{ opacity: ".7", fontSize: 18 }}
            >
              {data[0]?.video_metadata?.items[0]?.snippet?.channelTitle}
            </div>
            <BsFillPlayBtnFill fontSize={60} className="mt-10" color="white" />
          </div>
        </Link>
      </div>
      {/* ----------------------- section left ---------------------- */}
      <div className="mv-section-left">
        {/* first item */}
        {data[1] && (
          <div>
            <Image
              src={
                data[1]?.video_metadata?.items[0]?.snippet?.thumbnails?.maxres
                  ?.url
              }
              width={"100%"}
              height={"100%"}
            />
            <Link href={"/video/" + data[1]?.video_id}>
              <div>
                <div
                  className="mv-hover-title"
                  style={{ fontSize: "16px", marginBottom: 5 }}
                >
                  {data[1]?.video_title}
                </div>
                <div
                  className="mv-hover-title"
                  style={{ opacity: ".7", fontSize: 14 }}
                >
                  {data[1]?.video_metadata?.items[0]?.snippet?.channelTitle}
                </div>
                <BsFillPlayBtnFill fontSize={46} color="white" />
              </div>
            </Link>
          </div>
        )}
        {/* second item */}
        {data[2] && (
          <div>
            <Image
              src={
                data[2]?.video_metadata?.items[0]?.snippet?.thumbnails?.maxres
                  ?.url
              }
              width={"100%"}
              height={"100%"}
            />
            <Link href={"/video/" + data[2]?.video_id}>
              <div>
                <div
                  className="mv-hover-title"
                  style={{ fontSize: "16px", marginBottom: 5 }}
                >
                  {data[2]?.video_title}
                </div>
                <div
                  className="mv-hover-title"
                  style={{ opacity: ".7", fontSize: 14 }}
                >
                  {data[2]?.video_metadata?.items[0]?.snippet?.channelTitle}
                </div>
                <BsFillPlayBtnFill fontSize={46} color="white" />
              </div>
            </Link>
          </div>
        )}
        {/* third item */}
        {data[3] && (
          <div>
            <Image
              src={
                data[3]?.video_metadata?.items[0]?.snippet?.thumbnails?.maxres
                  ?.url
              }
              width={"100%"}
              height={"100%"}
            />
            <Link href={"/video/" + data[3]?.video_id}>
              <div>
                <div
                  className="mv-hover-title"
                  style={{ fontSize: "16px", marginBottom: 5 }}
                >
                  {data[3]?.video_title}
                </div>
                <div
                  className="mv-hover-title"
                  style={{ opacity: ".7", fontSize: 14 }}
                >
                  {data[3]?.video_metadata?.items[0]?.snippet?.channelTitle}
                </div>
                <BsFillPlayBtnFill fontSize={46} color="white" />
              </div>
            </Link>
          </div>
        )}
        {/* fourth item */}
        {data[4] && (
          <div>
            <Image
              src={
                data[4]?.video_metadata?.items[0]?.snippet?.thumbnails?.maxres
                  ?.url
              }
              width={"100%"}
              height={"100%"}
            />
            <Link href={"/video/" + data[4]?.video_id}>
              <div>
                <div
                  className="mv-hover-title"
                  style={{ fontSize: "16px", marginBottom: 5 }}
                >
                  {data[4]?.video_title}
                </div>
                <div
                  className="mv-hover-title"
                  style={{ opacity: ".7", fontSize: 14 }}
                >
                  {data[4]?.video_metadata?.items[0]?.snippet?.channelTitle}
                </div>
                <BsFillPlayBtnFill fontSize={46} color="white" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
