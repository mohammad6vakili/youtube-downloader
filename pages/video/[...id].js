import Main from '@/components/layouts/Main';
import CardListVideo from '@/components/cards/CardListVideo';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import "plyr-react/plyr.css";
import Hls from "hls.js";
import Plyr from "plyr-react";
import CardListRelativeVideo from '@/components/cards/CardListRelativeVideo';
export default function SingleVideo({ video, getPlaylist, getRelated }) {
  const router = useRouter();
  const { id } = router.query;
  // console.log("video.video_url::", video.video_id)
  const player = useRef();
  useEffect(() => {
    console.log(video.hls_url)
    const loadVideo = async () => {
      if (video.hls_url !== "") {
        const video0 = document.getElementById("plyr");
        var hls = new Hls();
        hls.loadSource(video.hls_url);
        hls.attachMedia(video0);
        player.current.plyr.media = video0;
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          player.current.plyr.play();
        });
      }
    };
    loadVideo();
    // console.log(getPlaylist)
  });
  return (
    <div className='relative'>
      <Head>
        <title>video {video.video_title}  - Youtube</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/youtube-svgrepo-com.svg" />
      </Head>

      <Main hiddenSidebar={true}>

        <div className='flex w-full lg:flex-row flex-col-reverse items-cenetr relative'>
          {/* Watch Video selected */}
          <div className='w-full lg:w-[75%] lg:p-2 h-full relative'>
            <div className="relative w-full ">
              <div className="w-full relative h-full">
                {video?.hls_url !== "" ? (
                  <Plyr
                    id="plyr"
                    options={{ volume: 1, autoplay: true }}
                    source={{}}
                    ref={player}
                  />
                ) : (
                  <iframe className='w-full' height="500" src={video.video_url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                )}
              </div>

            </div>
            {/* Details Video Description */}
            <div className="w-full mt-6" dir='ltr'>
              <div className="flex md:flex-row flex-col justify-between md:space-y-1 space-y-3 border-b border-gray-300 dark:border-slate-600 pb-2">
                <div className="flex flex-col pb-2 jsutify-between">
                  <div className="flex flex-col w-full">
                    <h3 className="md:text-md text-sm text-gray-900 dark:text-slate-200">
                      {video.video_metadata.items[0].snippet.localized.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex flex-row justify-between items-center">
                  <Link href={`/profile/${video.video_channel_id}`}>
                    <div className="flex justify- items-center">
                      <div className="">
                        <Image width={'48'} height={'48'}
                          src={video.video_metadata.items[0].snippet.thumbnails.medium.url} alt="picture user" className="shadow-md object-cover rounded-full w-full h-full" />
                      </div>
                      <div className="flex mx-3 flex-col justify-center items-start mb-1">
                        <p className="text-gray-800 dark:text-slate-200 capitalize md:text-md text-sm mb-1">{video.video_metadata.items[0].snippet.channelTitle}</p>
                        {/* <p className="text-gray-800 dark:text-slate-200 capitalize md:text-sm text-xs">281k follow</p> */}
                      </div>
                    </div>
                  </Link>
                  <div className="relative mb-1">
                    <Link href={`https://www.youtube.com/watch?v=${id[0]}`}>
                      <a target={'_blank'} className="capitalize bg-red-600 flex justify-around items-center text-white lg:text-sm text-xs lg:px-6 px-3 lg:py-2 py-3">
                        <span>on youtube</span>
                        <svg className="lg:w-6 lg:h-6 w-4 h-4 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="m-3 mt-6 w-full">
                  <p className="flex w-4/6 leading-8 h-full relative text-gray-800 dark:text-slate-200  font-base md:text-md text-sm">
                    {video.video_metadata.items[0].snippet.localized.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* List Video */}
          <div className='w-full lg:w-[30%] h-full relative lg:p-2'>
            <div className='w-full text-xs bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600'>
              <div className='w-full border-b border-gray-300 dark:border-slate-600 p-4'>
                <div className='flex items-center text-gray-600 dark:text-slate-100'>
                  <p className='font-medium text-sm mx-2'>{getPlaylist[0].playlist_metadata.snippet.channelTitle}</p>
                </div>
                <div className='mt-2 w-full flex justify-end items-center text-gray-600'>
                  {/* <p className='text-gray-700 text-xs mx-4 dark:text-slate-100'>samansayyar 1/8</p> */}
                </div>
                <div className='mt-4 w-full hidden justify-between items-center text-gray-600 dark:text-slate-100'>
                  <div>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                  </div>
                  <div className='flex items-center space-x-2'>
                    {/* <div> */}
                    <svg className="w-5 h-5 mx-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    {/* </div> */}
                    {/* <div> */}
                    <svg className="w-5 h-5 mx-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className='max-h-96 space-y-1 scrollbar-hide pb-4 px-1 pt-2 overflow-y-auto w-full flex flex-col'>
                <div className='rtl:block ltr:hidden'></div>
                {getPlaylist.map((res, index) => (
                  <CardListVideo data={res} key={index} />
                ))}
              </div>
            </div>
            <div className='mt-2'>
              {getRelated.map((res, index) => (
                <CardListRelativeVideo data={res} key={index} />
              ))}
            </div>
          </div>


        </div>
      </Main>
    </div>
  )
}
export async function getServerSideProps({ params }) {
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  const { id } = params;
  const result = await fetch(`https://rasmlink.ir/api-v1/youtube_videos?video_id=${id[0]}`, {
    headers: {
      "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
    }
  });
  const video = await result.json();
  console.log('video[0]?.video_playlist_id',video[0]?.video_playlist_id)
  const resultgetPlaylist = await fetch(`https://rasmlink.ir/api-v1/youtube_playlists?playlist_id=${video[0]?.video_playlist_id}`, {
    headers: {
      "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
    }
  });
  const getPlaylist = await resultgetPlaylist.json();

  const resultgetRelated = await fetch(`https://rasmlink.ir/api-v1/youtube_videos?video_categories_ids=${video[0]?.video_categories_ids}&is_active=true&is_verfied=true&offset=1&limit=15`, {
    headers: {
      "Authorization": "010486ba-0e8a-4382-a47f-d888baac5b5c"
    }
  });
  const getRelated = await resultgetRelated.json();
  shuffle(getRelated);

  if (!video && !getPlaylist) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      video: video[0],
      getPlaylist,
      getRelated,
    },
  }
}
