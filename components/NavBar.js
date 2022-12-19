import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ItemMenu from "./ItemMenu";
import Search from "./Search";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);
  const [category, setcategory] = useState([]);
  const [channel, setchannel] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const resCategory = await fetch(
        `https://rasmlink.ir/api-v1/video_categories`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      const allcagegory = await resCategory.json();

      // Get All Channel
      const resChannel = await fetch(
        `https://rasmlink.ir/api-v1/youtube_channels?is_special=true&is_verfied=true`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      const AllChannel = await resChannel.json();
      const spereadChannel = allcagegory.filter((res) => {
        return res.main_category_info == null;
      });

      setcategory(spereadChannel);
      setchannel(AllChannel);
    };
    getCategory();
  }, [setcategory, setchannel]);

  if (!category && !channel) return <div>Loading....</div>;

  return (
    <div
      style={{ direction: "rtl" }}
      className="w-full py-2 shadow  h-[65px] flex justify-between items-center px-5"
    >
      {/* Button Add video */}
      <div className="flex flex-row-reverse items-center space-x-8">
        <div></div>
        <Link href="https://rasmlink.com/studio" target={"_blank"}>
          <a className="capitalize rounded-md bg-red-600 flex justify-around items-center text-white lg:text-sm text-xs lg:px-6 px-4 py-2">
            <span>add video</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </a>
        </Link>
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 cursor-pointer dark:bg-stone-800 bg-gray-200 rounded-full flex justify-center items-center"
        >
          {/* 
            <svg className="w-6 text-yellow-300 h-6 fill-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : ( */}
          <svg
            className="w-6 text-stone-700 dark:text-stone-400 h-6 fill-stone-700 dark:fill-stone-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          {/* )} */}
        </div>
      </div>
      {/* Search Feild */}
      <div className="sm:flex  hidden">
        <Search />
      </div>
      {/* Icon BarMenu - logo  */}
      <div className="flex items-center flex-row-reverse justify-center">
        <div className="lg:block hidden">
          <Link href="/">
            <div className="mx-4 flex h-full items-center cursor-pointer">
              <Image
                alt="image placeholder"
                src={"/youtube-svgrepo-com.svg"}
                width={"35"}
                height={"60px"}
                className="w-full"
              />
              <p className="mx-1 font-bold dark:text-stone-100 text-gray-600">
                Rasmlink
              </p>
            </div>
          </Link>
        </div>
        <button onClick={() => setToggle((toggle) => !toggle)}>
          <svg
            className="w-7 h-7 text-gray-800 dark:text-stone-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {toggle && (
        <div className="fixed z-50 inset-y-0 right-0 h-screen w-full bg-gray-900/50 dark:bg-stone-900/60 backdrop-blur-[2px]">
          <div
            onClick={() => setToggle(false)}
            style={{
              width: "100%",
              height: "100vh",
              position: "absolute",
              zIndex: "-99",
            }}
          ></div>
          <div className="lg:w-1/6 w-[80%] bg-white dark:bg-stone-900 h-full">
            <div className="flex items-center justify-start px-4">
              <button onClick={() => setToggle((toggle) => !toggle)}>
                <svg
                  className="w-7 h-7 text-gray-800 dark:text-stone-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <Link href="/">
                <div className="mx-8 flex h-full items-center cursor-pointer">
                  <Image
                    alt="image placeholder"
                    src={"/youtube-svgrepo-com.svg"}
                    width={"35"}
                    height={"60px"}
                    className="w-full"
                  />
                  <p className="mx-1 font-bold dark:text-stone-100 text-gray-600">
                    Rasmlink
                  </p>
                </div>
              </Link>
            </div>
            <div className="my-2">
              <div className="p-3 flex justify-center flex-col">
                <h1 className="dark:text-stone-200 text-md font-medium mx-1">
                  Categories
                </h1>
              </div>
              <div className="mt-2 px-2">
                {category?.map((res, index) => (
                  <Link
                    key={index}
                    href={`/category/${res?.id}/${res?.category_title}`}
                  >
                    <div
                      key={index}
                      className="flex transition duration-100 dark:hover:bg-stone-600 bg-transparent hover:bg-stone-100 py-0.5 cursor-pointer rounded-lg items-center space-x-4"
                    >
                      <div className="relative rounded-full flex justify-center h-9 w-9 items-center">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-light">
                        {res?.category_title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="my-2 h-[1px] w-[90%] px-2 mx-auto  dark:bg-stone-700 bg-gray-100"></div>
              <div className="p-3 flex justify-center flex-col">
                <h1 className="dark:text-stone-200 text-md font-medium mx-1">
                  Channels
                </h1>
                <div className="mt-2 space-y-3">
                  {channel?.map((item, index) => (
                    <Link key={index} href={`/profile/${item.channel_id}`}>
                      <div
                        key={index}
                        className="flex transition duration-100 dark:hover:bg-stone-600 bg-transparent hover:bg-stone-100 py-0.5 px-1 cursor-pointer rounded-lg items-center space-x-4"
                      >
                        <div className="relative rounded-full flex justify-center h-7 w-7 items-center">
                          <Image
                            alt="image placeholder"
                            src={
                              item?.channel_metadata?.items[0]?.snippet
                                ?.thumbnails.default.url
                            }
                            className="object-cover w-9 h-9 rounded-full"
                            width={"40"}
                            height={"40"}
                          />
                        </div>
                        <div className="text-xs dark:text-stone-200 text-stone-800">
                          {item?.channel_title.substring(0, 20)}...
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
