import Main from "@/components/layouts/Main";
import Head from "next/head";
import { useRouter } from "next/router";
// import Banner from '@/public/images/Sprinkle.svg';
import CardListVideo from "@/components/cards/CardListVideo";
import Avatar from "@/public/images/samansayyar.jpeg";
import Image from "next/image";
import CardVideo from "@/components/cards/CardVideo";
import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "@/components/Banner";
import Link from "next/link";
const Tabs = [
  { title: "Videos", id: 0 },
  { title: "Recommended", id: 1 },
  { title: "Playlist", id: 2 },
];

export default function Username({ data, RecomendedVideos }) {
  const route = useRouter();
  const { username } = route.query;
  const [selectedTab, setSelectedTab] = useState(0);
  const [playList, setPlayList] = useState([]);
  const [videos, setVideos] = useState([]);
  const [recomendedVideos, setRecomendedVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginate, setPaginate] = useState(20);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [paginateLoading, setPaginateLoading] = useState(false);

  const getChannelPlaylist = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://rasmlink.ir/api-v1/youtube_playlists?channel_id=${data?.channel_id}`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      setPlayList(response.data);
      setLoading(false);
    } catch ({ err, response }) {
      console.log(err, response);
      setLoading(false);
    }
  };

  const getChannelVideos = async (page) => {
    try {
      if (paginate === 20) {
        setLoading(true);
      } else {
        setPaginateLoading(true);
      }
      const response = await axios.get(
        `https://rasmlink.ir/api-v1/youtube_videos?video_channel_id=${data?.channel_id}&offset=1&limit=${paginate}&is_special=false`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      setVideos(response.data);
      setLoading(false);
      setPaginateLoading(false);
      setPaginate(paginate + 20);
      if (response.data.length === 0) {
        setCanLoadMore(false);
      }
    } catch ({ err, response }) {
      console.log(err, response);
      setLoading(false);
      setPaginateLoading(false);
    }
  };

  const getRecomendedVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://rasmlink.ir/api-v1/youtube_videos?video_channel_id=${data?.channel_id}&offset=1&limit=20&is_special=true`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      setRecomendedVideos(response.data);
      setLoading(false);
    } catch ({ err, response }) {
      console.log(err, response);
      setLoading(false);
    }
  };

  useEffect(() => {
    getChannelVideos();
  }, []);

  useEffect(() => {
    setPaginate(20);
    switch (selectedTab) {
      case 0:
        getChannelVideos();
        break;
      case 1:
        getRecomendedVideos();
        break;
      case 2:
        getChannelPlaylist();
        break;
      default:
        break;
    }
  }, [selectedTab]);

  return (
    <div className="relative">
      <Head>
        <title>Profile {data?.channel_title} - Youtube</title>
      </Head>
      <Main withoutPadding={true}>
        <Banner />
        <div
          dir="ltr"
          className="bg-white/80 dark:bg-stone-900 lg:h-36 h-40 flex flex-col lg:pl-20 pt-4 pb-0"
        >
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  alt="image placeholder"
                  height={"74"}
                  width={"74"}
                  src={
                    data?.channel_metadata.items[0].snippet.thumbnails.high.url
                  }
                  className={"w-full h-full rounded-full object-cover"}
                />
              </div>

              <div className="flex justify-center flex-col mx-5">
                <p className="text-xl text-gray-800 font-medium dark:text-gray-100 capitalize">
                  {data?.channel_title}
                </p>
                <p className="text-gray-500 dark:text-stone-300 text-[12px] mt-0.5">
                  {data?.channel_metadata.items[0].statistics.subscriberCount +
                    "  "}
                  مشترک
                </p>
              </div>
            </div>
            <div className="lg:pr-10">
              {/* Button On youtube */}
              <div className="relative">
                <Link href={`https://www.youtube.com/channel/${username[0]}`}>
                  <a
                    target={"_blank"}
                    className="capitalize rounded-md bg-red-600 flex justify-around items-center text-white lg:text-sm text-xs lg:px-6 px-3 lg:py-2 py-3"
                  >
                    <span>on youtube</span>
                    <svg
                      className="lg:w-6 lg:h-6 w-4 h-4 mx-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Tab */}
          <div className="mx-1 h-full flex items-end space-x-8">
            {Tabs.map((tab, index) => (
              <p
                onClick={() => setSelectedTab(tab.id)}
                key={index}
                className={`uppercase cursor-pointer dark:text-stone-400 text-gray-600  pb-3 text-sm ${
                  tab.id === selectedTab && "border-b-[2px]"
                } w-20 flex font-medium justify-center items-center dark:border-gray-300 border-gray-600`}
              >
                {tab.title}
              </p>
            ))}
          </div>
        </div>
        {/* Videos */}
        {selectedTab === 0 && (
          <div
            dir="ltr"
            className="mt-6 pl-10 pr-10 w-full pb-10 text-gray-600 dark:text-stone-300"
          >
            {/* Videos */}
            {!loading && videos?.length > 0 && (
              <div className="w-full relative">
                <div className="grid grid-cols-12 gap-2 gap-y-4 w-full mt-6">
                  {videos?.map((res, index) => (
                    <CardVideo data={res} key={index} />
                  ))}
                </div>
              </div>
            )}
            {!loading && videos?.length === 0 && (
              <div className="p-10 w-full flex justify-between items-center text-gray-۷00 text-xl">
                ویدیویی اپلود نکرده است
              </div>
            )}
            {!loading && !paginateLoading && canLoadMore && (
              <div
                onClick={getChannelVideos}
                className="flex justify-center mt-10 cursor-pointer"
              >
                Load more
              </div>
            )}
            {paginateLoading && (
              <div className="flex justify-center mt-10 cursor-pointer">
                Loading . . .
              </div>
            )}
          </div>
        )}

        {/* Recomended */}
        {selectedTab === 1 && (
          <div
            dir="ltr"
            className="mt-6 pl-10 pr-10 w-full pb-10 text-gray-600 dark:text-stone-300"
          >
            {/* Videos */}
            {!loading && recomendedVideos?.length > 0 && (
              <div className="w-full relative">
                <div className="grid grid-cols-12 gap-2 gap-y-4 w-full mt-6">
                  {recomendedVideos?.map((res, index) => (
                    <CardVideo data={res} key={index} />
                  ))}
                </div>
              </div>
            )}
            {!loading &&
              recomendedVideos?.length === 0 &&
              videos?.length > 0 && (
                <div className="w-full relative">
                  <div className="grid grid-cols-12 gap-2 gap-y-4 w-full mt-6">
                    {videos?.map((res, index) => (
                      <CardVideo data={res} key={index} />
                    ))}
                  </div>
                </div>
              )}
            {!loading &&
              recomendedVideos?.length === 0 &&
              videos?.length === 0 && (
                <div className="p-10 w-full flex justify-between items-center text-gray-۷00 text-xl">
                  ویدیویی اپلود نکرده است
                </div>
              )}
          </div>
        )}

        {/* Playlist */}
        {selectedTab === 2 && (
          <div
            dir="ltr"
            className="mt-6 pl-10 pr-10 w-full pb-10 text-gray-600 dark:text-stone-300"
          >
            {/* Videos */}
            {!loading && playList?.length > 0 && (
              <div className="w-full relative">
                <div className="w-full mt-6 flex flex-wrap">
                  {playList?.map((res, index) => (
                    <CardListVideo
                      inStyle={{
                        minWidth: "300px",
                        marginRight: "15px",
                        maxWidth: "300px",
                      }}
                      data={res}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            )}
            {!loading && playList.length === 0 && (
              <div className="p-10 w-full flex justify-between items-center text-gray-۷00 text-xl">
                پلی لیستی موجود نیست
              </div>
            )}
          </div>
        )}
      </Main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { username } = params;
  // Get All Profile Data
  const resProfile = await fetch(
    `https://rasmlink.ir/api-v1/youtube_channels?channel_id=${username[0]}`,
    {
      headers: {
        Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
      },
    }
  );
  const AllProfile = await resProfile.json();

  // Get All Profile Data
  const ResVideoProfile = await fetch(
    `https://rasmlink.ir/api-v1/youtube_videos?video_channel_id=${username[0]}&is_special=true&is_verfied=true&offset=1&limit=20`,
    {
      headers: {
        Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
      },
    }
  );
  const RecomendedVideos = await ResVideoProfile.json();

  if (!RecomendedVideos && !AllProfile) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: AllProfile[0],
      RecomendedVideos,
    },
  };
}
