import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import CardSubscrib from '@/components/cards/CardSubscrib';
import "swiper/css";
import "swiper/css/pagination";
import CardExplore from "../cards/CardExplore";
import CardVideo from "../cards/CardVideo";
import CardSubscrib from "@/components/cards/CardSubscrib";
import CardSpecialVideo from "../cards/CardSpecialVideo";
import CardSpecialVideoSkeleton from "../cards/CardSpecialVideoSkeleton";
import { GetVideo } from "pages/api/getvideo";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";
import CardMultipleVideo from "../cards/CardMultipleVideo";

export default function Header({ AllVideo, AllCategory, AllChannel }) {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(AllCategory[0]);
  const [selectedCategoryVideos, setSelectedCategoryVideos] = useState([]);
  // carousels controllers
  const [swiperInstance, setSwiperInstance] = useState();
  const [carouselInstance, setCarouselInstance] = useState();
  const [carouselController, setCarouselController] = useState({
    hideNext: false,
    hidePrev: true,
  });
  const [swiperController, setSwiperController] = useState({
    hideNext: false,
    hidePrev: true,
  });

  const getCategoryVideos = async (id) => {
    try {
      console.log("miooo");
      setLoading(true);
      const response = await axios.get(
        `https://rasmlink.ir/api-v1/youtube_videos?video_categories_ids=${id}&is_special=true`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      setLoading(false);
      setSelectedCategoryVideos(response.data);
    } catch ({ err, response }) {
      setLoading(false);
    }
  };

  const showItems = () => {
    let array = [];
    for (var i = 0; i < AllVideo.length; i += 5) {
      array.push(AllVideo.slice(i, i + 5));
    }
    console.log(array);
    return array.map((item, index) => (
      <SwiperSlide
        style={{
          width: "100%",
          height: "400px",
          minWidth: "100%",
        }}
        key={index}
      >
        <CardMultipleVideo data={item} />
      </SwiperSlide>
    ));
  };

  useEffect(() => {
    getCategoryVideos(AllCategory[0].id);
  }, []);

  return (
    <div className="w-full">
      {/* Subscripition */}
      <section className="w-full relative" style={{ padding: "0 8px" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={13}
          className="mySwiper"
          breakpoints={{
            300: {
              width: 300,
              slidesPerView: 1,
            },
            568: {
              width: 568,
              slidesPerView: 2,
            },
            970: {
              width: 970,
              slidesPerView: 3,
            },
          }}
        >
          {AllChannel?.map((item, key) => (
            <SwiperSlide key={item.id}>
              <CardSubscrib item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div>
        {/* All Videos */}
        <section className="mt-10 w-full relative px-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            className="mySwiper relative"
          >
            {showItems()}
          </Swiper>
          {/* <div className="grid place-content-center place-items-center grid-cols-12 gap-y-4 w-full mt-6"> */}
          {/* {AllVideo.map((data, index) => (
            <CardVideo data={data} key={index} />
          ))} */}
          {/* </div> */}
        </section>

        {/* Categories */}
        <section
          className="w-full relative mt-10"
          style={{ direction: "ltr", padding: "0 8px" }}
        >
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              300: {
                width: 300,
                slidesPerView: 3,
              },
              568: {
                width: 568,
                slidesPerView: 5,
              },
              970: {
                width: 970,
                slidesPerView: 6,
              },
            }}
          >
            {AllCategory.map((res, index) => (
              <SwiperSlide key={index}>
                <CardExplore
                  onClick={() => {
                    setSelectedCategory(res);
                    getCategoryVideos(res.id);
                    setSwiperController({
                      hideNext: false,
                      hidePrev: true,
                    });
                  }}
                  data={res}
                  selectedCategory={selectedCategory.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Categories special videos */}
        <section
          style={{ padding: "0 8px" }}
          className="mt-10 w-full flex flex-col"
        >
          {/* title */}
          {!loading && selectedCategoryVideos?.length > 0 && (
            <Link
              href={`category/${selectedCategory?.id}/${selectedCategory?.category_title}`}
            >
              <span
                className="mb-5 text-2xl cursor-pointer"
                style={{ lineHeight: "26px", fontWeight: 700 }}
              >
                {selectedCategory?.category_title}
              </span>
            </Link>
          )}
          {/* swiper */}
          <div className="w-full">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              onReachEnd={() =>
                setSwiperController({
                  ...swiperController,
                  hideNext: true,
                  hidePrev: false,
                })
              }
              onReachBeginning={() => {
                setSwiperController({
                  ...swiperController,
                  hidePrev: true,
                  hideNext: false,
                });
              }}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              className="mySwiper relative"
              navigation
              breakpoints={{
                300: {
                  width: 300,
                  slidesPerView: 2,
                },
                568: {
                  width: 568,
                  slidesPerView: 3,
                },
                970: {
                  width: "970",
                  slidesPerView: 4,
                },
              }}
            >
              {loading
                ? Array.from(Array(7).keys()).map((item, index) => (
                    <SwiperSlide
                      style={{
                        width: "310px",
                        height: "320px",
                        minWidth: "310px",
                      }}
                      key={index}
                    >
                      <CardSpecialVideoSkeleton />
                    </SwiperSlide>
                  ))
                : selectedCategoryVideos?.map((res, index) => (
                    <SwiperSlide
                      style={{
                        width: "310px",
                        height: "320px",
                        minWidth: "310px",
                      }}
                      key={index}
                    >
                      <CardSpecialVideo data={res} />
                    </SwiperSlide>
                  ))}
              {/* {!loading && selectedCategoryVideos?.length === 0 && (
                <div className="text-xl flex justify-start mt-5">
                  No video found!
                </div>
              )} */}
              {/* next btn */}
              {!swiperController?.hideNext &&
                selectedCategoryVideos?.length > 5 && (
                  <button
                    onClick={() => {
                      swiperInstance.slideNext();
                      setSwiperController({
                        ...swiperController,
                        hidePrev: false,
                      });
                    }}
                    type="button"
                    style={{
                      position: "absolute",
                      right: "0",
                      top: "45%",
                      zIndex: 99999999999,
                    }}
                  >
                    <AiOutlineRight
                      fontSize={34}
                      fontWeight={900}
                      color="white"
                    />
                  </button>
                )}
              {/* prev btn */}
              {!swiperController?.hidePrev &&
                selectedCategoryVideos?.length > 5 && (
                  <button
                    onClick={() => swiperInstance.slidePrev()}
                    type="button"
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "45%",
                      zIndex: 99999999999,
                    }}
                  >
                    <AiOutlineLeft
                      fontSize={34}
                      fontWeight={900}
                      color="white"
                    />
                  </button>
                )}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
}
