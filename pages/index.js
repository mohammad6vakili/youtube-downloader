import NavBar from "../components/NavBar";
import Head from "next/head";
import Main from "@/components/layouts/Main";
import Header from "../components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Env from "../constant/env.json";

export default function Home({ AllVideo, AllCategory, AllChannel }) {
  return (
    <div className="relative">
      <Head>
        <title>Uncutino - Unblocked Videos from Youtube for Iran</title>
        <meta name="description" content="Uncutino" />
        <link rel="icon" href="/youtube-svgrepo-com.svg" />
      </Head>
      <Main dir="ltr">
        <Header
          AllVideo={AllVideo}
          AllCategory={AllCategory}
          AllChannel={AllChannel}
        />
      </Main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Get All Video
  process.env;
  const resvideo = await fetch(
    `${Env.baseUrl}/youtube_videos?is_special=true&video_status=1&is_active=true&order_by=asc`,
    {
      headers: {
        Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
      },
    }
  );
  const AllVideo = await resvideo.json();
  // Get All Category
  const resCategory = await fetch(`${Env.baseUrl}/video_categories`, {
    headers: {
      Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
    },
  });
  const spereadChannel = await resCategory.json();
  const AllCategory = spereadChannel.filter((res) => {
    return res.main_category_info == null;
  });
  // Get All Channel
  const resChannel = await fetch(
    `${Env.baseUrl}/youtube_channels?is_special=true&is_verfied=true`,
    {
      headers: {
        Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
      },
    }
  );
  const AllChannel = await resChannel.json();

  if (!AllVideo && !AllCategory && !AllChannel) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    revalidate: 60,
    props: {
      AllVideo,
      AllCategory,
      AllChannel,
    },
  };
}
