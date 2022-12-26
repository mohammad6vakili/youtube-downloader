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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryVideos, setSelectedCategoryVideos] = useState([]);
  const [selectedSubCategoryVideos, setSelectedSubCategoryVideos] = useState(
    {}
  );
  const [mainSliderData, setMainSliderData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesVideo, setCategoriesVideo] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    10: [],
    11: [],
    13: [],
    15: [],
    16: [],
  });
  // carousels controllers
  const [swiperInstance, setSwiperInstance] = useState();
  const [carouselInstance, setCarouselInstance] = useState();
  const [ready, setReady] = useState(false);
  const [carouselController, setCarouselController] = useState({
    hideNext: false,
    hidePrev: true,
  });
  const [swiperController, setSwiperController] = useState({
    hideNext: false,
    hidePrev: true,
  });

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://rasmlink.ir/api-v1/video_categories",
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      setCategories(response.data);
    } catch ({ err, response }) {
      console.log(err, response);
    }
  };

  const getCategoriesVideo = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://rasmlink.ir/api-v1/youtube_videos?video_categories_ids=${id}&offset=1&limit=15`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      setLoading(false);
      categoriesVideo[id] = response.data;
      setTimeout(() => {
        setReady(true);
      }, 1000);
    } catch ({ err, response }) {
      setLoading(false);
    }
  };

  const getCategoryVideo = async (id, isSub) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://rasmlink.ir/api-v1/youtube_videos?video_categories_ids=${id}&offset=1&limit=15&is_special=false`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      setLoading(false);
      if (!isSub) {
        setSelectedCategoryVideos(response.data);
      } else {
        selectedSubCategoryVideos[id] = response.data;
      }
    } catch ({ err, response }) {
      setLoading(false);
    }
  };

  const getMainSliderData = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://rasmlink.ir/api-v1/youtube_videos?video_categories_ids=${id}&offset=1&limit=15&is_special=true`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      setLoading(false);
      setMainSliderData(response.data);
    } catch ({ err, response }) {
      setLoading(false);
    }
  };

  const showItems = () => {
    if (selectedCategory) {
      let newAllVideos = [];
      mainSliderData.slice(0, 15).map((it) => {
        newAllVideos.push(it);
      });
      let array = [];
      for (var i = 0; i < newAllVideos.length; i += 5) {
        array.push(newAllVideos.slice(i, i + 5));
      }
      return array.map((item, index) => (
        <SwiperSlide className="multi-carousel" key={index}>
          <CardMultipleVideo data={item} />
        </SwiperSlide>
      ));
    } else {
      let newAllVideos = [];
      AllVideo.slice(0, 15).map((it) => {
        newAllVideos.push(it);
      });
      let array = [];
      for (var i = 0; i < newAllVideos.length; i += 5) {
        array.push(newAllVideos.slice(i, i + 5));
      }
      return array.map((item, index) => (
        <SwiperSlide className="multi-carousel" key={index}>
          <CardMultipleVideo data={item} />
        </SwiperSlide>
      ));
    }
  };

  useEffect(() => {
    getCategories();
    AllCategory.map((cat) => {
      getCategoriesVideo(cat.id);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      categories.map((ca) => {
        if (selectedCategory.id === ca?.main_category_info?.id) {
          console.log(ca);
          getCategoryVideo(ca.id, true);
        }
      });
    }
  }, [selectedCategory]);

  return (
    <div className="w-full">
      <div>
        {/* All Videos */}
        <section className="w-full relative px-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            className="mySwiper relative"
            onReachEnd={() =>
              setCarouselController({
                ...carouselController,
                hideNext: true,
                hidePrev: false,
              })
            }
            onReachBeginning={() => {
              setCarouselController({
                ...carouselController,
                hidePrev: true,
                hideNext: false,
              });
            }}
            onSwiper={(swiper) => setCarouselInstance(swiper)}
          >
            {showItems()}
            {/* next btn */}
            {!carouselController?.hideNext && AllVideo?.length > 5 && (
              <button
                onClick={() => {
                  carouselInstance.slideNext();
                  setCarouselController({
                    ...carouselController,
                    hidePrev: false,
                  });
                }}
                className="flex items-center justify-center bg-white dark:bg-gray-700 mv-carousel-dir-btn"
                type="button"
                style={{
                  borderRadius: "50%",
                  position: "absolute",
                  right: "10px",
                  top: "45%",
                  zIndex: 99999999999,
                }}
              >
                <AiOutlineRight
                  className="dark:color-white"
                  fontSize={26}
                  fontWeight={900}
                />
              </button>
            )}
            {/* prev btn */}
            {!carouselController?.hidePrev && AllVideo?.length > 5 && (
              <button
                onClick={() => carouselInstance.slidePrev()}
                className="flex items-center justify-center bg-white dark:bg-gray-700 mv-carousel-dir-btn"
                type="button"
                style={{
                  borderRadius: "50%",
                  position: "absolute",
                  left: "10px",
                  top: "45%",
                  zIndex: 99999999999,
                }}
              >
                <AiOutlineLeft
                  className="dark:color-white"
                  fontSize={26}
                  fontWeight={900}
                />
              </button>
            )}
          </Swiper>
        </section>

        {/* Subscripition */}
        <section className="w-full relative mt-10" style={{ padding: "0 8px" }}>
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
                    getCategoryVideo(res.id);
                    getMainSliderData(res.id);
                    setSwiperController({
                      hideNext: false,
                      hidePrev: true,
                    });
                    Object.keys(selectedSubCategoryVideos).forEach((key) => {
                      delete selectedSubCategoryVideos[key];
                    });
                  }}
                  data={res}
                  selectedCategory={selectedCategory?.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Categories special videos */}
        {selectedCategory && (
          <section
            style={{ padding: "0 8px" }}
            className="mt-10 w-full flex flex-col"
          >
            {/* title */}
            {!loading && selectedCategoryVideos?.length > 0 && (
              <span
                className="mb-5 text-2xl cursor-pointer"
                style={{ lineHeight: "26px", fontWeight: 700 }}
              >
                {selectedCategory?.category_title}
              </span>
            )}
            {/* swiper */}
            <div className="w-full">
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                lazy
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
        )}

        {/* Sub Category Videos */}
        {selectedCategory &&
          Object.keys(selectedSubCategoryVideos).length > 0 &&
          Object.keys(selectedSubCategoryVideos).map((caVi, index) => {
            if (selectedSubCategoryVideos[caVi]?.length > 0) {
              return (
                <section
                  style={{ padding: "0 8px", marginTop: "75px" }}
                  className="w-full flex flex-col"
                >
                  {/* title */}
                  <span
                    className="mb-5 text-2xl cursor-pointer"
                    style={{ lineHeight: "26px", fontWeight: 700 }}
                  >
                    {categories.map((cc) => {
                      if (cc.id.toString() === caVi.toString()) {
                        return cc.category_title;
                      }
                    })}
                  </span>
                  {/* swiper */}
                  <div className="w-full">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={20}
                      lazy
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
                      {selectedSubCategoryVideos[caVi]?.map((res, index) => (
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
                      {/* next btn */}
                      {!swiperController?.hideNext &&
                        selectedSubCategoryVideos?.length > 5 && (
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
              );
            }
          })}

        {/* All Category Videos */}
        {!selectedCategory &&
          ready &&
          Object.keys(categoriesVideo).map((caVi, index) => {
            if (categoriesVideo[caVi].length > 0) {
              return (
                <section
                  style={{ padding: "0 8px", marginTop: "75px" }}
                  className="w-full flex flex-col"
                >
                  {/* title */}
                  {AllCategory.map((cc) => {
                    if (cc.id.toString() === caVi.toString()) {
                      return (
                        <span
                          onClick={() => console.log(categoriesVideo[caVi])}
                          className="mb-5 text-2xl cursor-pointer"
                          style={{ lineHeight: "26px", fontWeight: 700 }}
                        >
                          {cc.category_title}
                        </span>
                      );
                    }
                  })}
                  {/* swiper */}
                  <div className="w-full">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={20}
                      lazy
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
                      {categoriesVideo[caVi]?.map((res, index) => (
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
                      {/* next btn */}
                      {!swiperController?.hideNext &&
                        categoriesVideo?.length > 5 && (
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
              );
            }
          })}
      </div>
    </div>
  );
}
