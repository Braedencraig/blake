/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Inter } from "next/font/google";
import {
  FaTiktok,
  FaInstagram,
  FaImdb,
  FaYoutube,
  FaStore,
} from "react-icons/fa";
import cameo from "../cameo.png";

export default function Home() {
  const socials = [
    {
      url: "https://www.instagram.com/blakejohnstagram/",
      icon: <FaInstagram />,
    },
    {
      url: "https://www.youtube.com/@BlakeJohnstonComedy/shorts",
      icon: <FaYoutube />,
    },
    {
      url: "https://www.tiktok.com/@blakecomedy",
      icon: <FaTiktok />,
    },
    {
      url: "https://www.imdb.me/blakejohnston",
      icon: <FaImdb />,
    },
    {
      url: "https://blakejohnstore.myshopify.com/",
      icon: <FaStore />,
    },
    {
      url: "https://www.cameo.com/blakejohnstagram?utm_campaign=profile_share",
      icon: <img src={cameo.src} alt="Social Icon" />,
    },
  ];
  const Card = ({ url, icon }) => {
    return (
      <a className="link" href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    );
  };
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blake Johnston</title>
        <meta name="description" content="Blake Johnston" />
        <meta property="og:title" content="Blake Johnston" />
        <meta property="og:description" content="Blake Johnston" />
        <meta property="og:url" content="http://blakeconnorjohnston.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://blakeconnorjohnston.com/main.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:title" content="Blake Johnston" />
        <meta name="twitter:description" content="Blake Johnston" />
        <meta
          name="twitter:image"
          content="http://blakeconnorjohnston.com/main.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div class="header">
          <h1>Blake Johnston</h1>
          <figure class="logo">
            <img
              src="/main.png"
              loading="lazy"
              alt="Blake Johnston"
              class="image-logo"
            />
          </figure>
        </div>
        <div class="links">
          <div class="w-layout-grid grid">
            {socials.map((social, i) => {
              return <Card key={i} url={social.url} icon={social.icon} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
