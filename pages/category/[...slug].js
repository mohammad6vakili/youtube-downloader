import { useEffect, useState } from "react";
import Main from "@/components/layouts/Main";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import CardVideo from "@/components/cards/CardVideo";
import Banner from "@/components/Banner";

export default function Slug({ AllProfile, subcat, GetAllRecommended }) {
  const [tab, setTab] = useState(0);
  const route = useRouter();
  const { slug } = route.query;
  let arr = [];
  subcat.map((res) => {
    return arr.push(res.id);
  });
  // console.log(arr)
  const getVideoCats = arr.map((item, index) => {
    console.log("GetAllRecommended", GetAllRecommended);
    const data = GetAllRecommended.filter((res) => {
      return res?.video_categories_ids == item.toString();
    });
    if (!data) {
      <div className="text-gray-500 text-xl text-center w-full">
        ویدیویی موجود نیست
      </div>;
    }
    return (
      tab === index + 1 && (
        <div
          key={index}
          className="grid w-full grid-cols-12 gap-2 gap-y-4  mt-6"
        >
          {data.length > 0 ? (
            data?.map((res, index) => <CardVideo data={res} key={index} />)
          ) : (
            <p dir="rtl" className="w-96">
              چیزی یافت نشد
            </p>
          )}
        </div>
      )
    );
  });

  return (
    <div>
      <Head>
        <title>دسته بندی های {slug[1]} - Rasmlink</title>
      </Head>
      <Main withoutPadding={true}>
        <Banner />
        <div
          dir="ltr"
          className={`bg-white/80 w-full lg:h-40 h-48 dark:bg-slate-900 flex flex-col lg:px-10  pt-4 pb-0`}
        >
          <div className="flex items-center h-full w-full">
            <div className="relative rounded-full bg-red-100 p-1 flex justify-center h-20 w-20 items-center">
              <Image
                alt="image placeholder"
                src={"/youtube-svgrepo-com.svg"}
                width={"50px"}
                height={"50px"}
                className="w-full"
              />
            </div>

            <div className="flex justify-center flex-col mx-5">
              <p className="text-xl text-gray-800 font-medium dark:text-gray-100 capitalize">
                {slug[1]}
              </p>
              {/* <p className='text-gray-500 dark:text-slate-300 text-[12px] mt-0.5'>36.2M subscribers</p> */}
            </div>
          </div>
          {/* Tab */}
          {/* {subcat && ( */}
          <div className="mx-1 h-full flex items-end space-x-8">
            <button
              onClick={() => setTab(0)}
              className={`uppercase text-gray-600 pb-2 text-xs  flex justify-center items-center ${
                tab === 0 && "border-b-[1px]"
              } border-gray-600 transition duration-300 dark:border-slate-300 cursor-pointer dark:text-slate-300 dark:hover:text-slate-100 text-slate-900`}
            >
              Recommended
            </button>
            {subcat?.map((res, index) => (
              <button
                key={res?.id}
                onClick={() => setTab(index + 1)}
                className={`uppercase text-gray-600 pb-2 text-xs ${
                  tab === index + 1 && "border-b-[1px]"
                } flex transition-all duration-150 justify-center items-center border-gray-600 dark:border-slate-300 cursor-pointer dark:text-slate-300 dark:hover:text-slate-100 text-slate-900`}
              >
                {res?.category_title}
              </button>
            ))}
            {/* <p className='uppercase text-gray-600 pb-3 text-sm w-20 flex justify-center items-center border-gray-600 dark:border-gray-300'> </p> */}
          </div>
          {/* )} */}
        </div>
        <div
          dir="ltr"
          className="mt-6 lg:pl-20 px-10 lg:pr-10 w-full pb-10 dark:text-slate-300 text-gray-600"
        >
          {/* Videos */}
          {tab === 0 && (
            <div className="grid w-full grid-cols-12 gap-2 gap-y-4  mt-6">
              {GetAllRecommended.length > 0 ? (
                GetAllRecommended?.map((res, index) => (
                  <CardVideo data={res} key={index} />
                ))
              ) : (
                <div className="w-full">چیزی یافت نشد</div>
              )}
            </div>
          )}
          <div className="w-full">{getVideoCats}</div>
        </div>
      </Main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  // Get All Profile Data
  const resProfile = await fetch(
    `https://rasmlink.ir/api-v1/youtube_videos?video_categories_ids=${slug[0]}&is_verfied=true`,
    {
      headers: {
        Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
      },
    }
  );
  const AllProfile = await resProfile.json();

  const ressubcat = await fetch(`https://rasmlink.ir/api-v1/video_categories`, {
    headers: {
      Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
    },
  });
  const allcagegory = await ressubcat.json();
  const subcat = allcagegory.filter((res) => {
    return (
      res.main_category_info != null && res.main_category_info.id == slug[0]
    );
  });

  const recommended = await fetch(
    `https://rasmlink.ir/api-v1/youtube_videos?video_categories_ids=${slug[0]}&is_active=true&is_verfied=true`,
    {
      headers: {
        Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
      },
    }
  );
  const GetAllRecommended = await recommended.json();

  // console.log(GetAllRecommended);

  if (!AllProfile && !subcat && !GetAllRecommended) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      AllProfile,
      subcat,
      GetAllRecommended,
    },
  };
}
