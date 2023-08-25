import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import {
  MdLocalFireDepartment,
  MdLiveTv,
  MdWhatshot,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
} from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { CategoryType } from "../Types";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Shorts", icon: <MdWhatshot />, type: "category" },
  {
    name: "Subscriptions",
    icon: <MdSubscriptions />,
    type: "category",
    divider: true,
  },
  { name: "Library", icon: <MdVideoLibrary />, type: "category" },
  {
    name: "History",
    icon: <MdHistory />,
    type: "category",
  },
  {
    name: "Liked videos",
    icon: <BiLike />,
    type: "category",
    divider: true,
  },

  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  {
    name: "Send feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
    divider: true,
  },
];

export const convertsSecondsToTime = (seconds: number) => {
  const dateObj = new Date(seconds * 1000);
  const hours = dateObj.getUTCHours();
  const mins = dateObj.getUTCMinutes();
  const secs = dateObj.getSeconds();

  const timeString = `${hours.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

  return timeString;
};

export const videoDetails = {
  author: {
    avatar: [
      {
        height: 48,
        url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s48-c-k-c0x00ffffff-no-rj",
        width: 48,
      },
      {
        height: 88,
        url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s88-c-k-c0x00ffffff-no-rj",
        width: 88,
      },
      {
        height: 176,
        url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s176-c-k-c0x00ffffff-no-rj",
        width: 176,
      },
    ],
    badges: [
      {
        text: "Verified",
        type: "VERIFIED_CHANNEL",
      },
    ],
    canonicalBaseUrl: "/@InsideEdition",
    channelId: "UC9k-yiEpRHMNVOnOi_aQK8w",
    stats: {
      subscribers: 11500000,
      subscribersText: "11.5M subscribers",
    },
    title: "Inside Edition",
  },
  captions: [
    {
      language: {
        code: "en",
        name: "English (auto-generated)",
      },
      url: "https://www.youtube.com/api/timedtext?v=fliG5x3PzRs&caps=asr&xoaf=4&hl=en&ip=0.0.0.0&ipbits=0&expire=1677846180&sparams=ip,ipbits,expire,v,caps,xoaf&signature=A6A6370F12CAF295ACA92EAF0955EDD15B65EF3A.05A71AE2B94DDCC37817D95711096EE9057C1CC3&key=yt8&kind=asr&lang=en",
    },
  ],
  cards: [],
  category: "News & Politics",
  chapters: [],
  description:
    "A New Jersey house exploded with six firefighters inside. Authorities got reports of smoke coming from the house. Body camera video from the Pompton Lakes Police Department shows police officers securing the area outside while firefighters worked inside the house. All of the firefighters were unpaid volunteers, including a lieutenant and assistant fire chief. Miraculously, all six of the firefighters survived the blast.",
  endScreen: {
    items: [
      {
        channel: {
          avatar: [
            {
              height: 250,
              url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s250-c-k-c0x00ffffff-no-rj",
              width: 250,
            },
            {
              height: 400,
              url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s400-c-k-c0x00ffffff-no-rj",
              width: 400,
            },
          ],
          channelId: "UC9k-yiEpRHMNVOnOi_aQK8w",
          description:
            "Inside Edition is television's longest-running, top-rated, and most-honored syndicated newsmagazine. #1 in News and Politics on YouTube (Tubular Labs).",
          title: "Inside Edition",
        },
        type: "channel",
      },
      {
        type: "video",
        video: {
          lengthSeconds: 202,
          stats: {
            views: 133301,
          },
          thumbnails: [
            {
              height: 94,
              url: "https://i.ytimg.com/vi/Hsk-McV9NLo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCcdXrD9etqF6kdc7VJiXCp56ijtA",
              width: 168,
            },
            {
              height: 110,
              url: "https://i.ytimg.com/vi/Hsk-McV9NLo/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBmExhkzSsbahYdF6XckQFQoPM9PA",
              width: 196,
            },
            {
              height: 138,
              url: "https://i.ytimg.com/vi/Hsk-McV9NLo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvQ1ageJpacgSBkRUTO67fvx25MA",
              width: 246,
            },
            {
              height: 188,
              url: "https://i.ytimg.com/vi/Hsk-McV9NLo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWAZWznLAtV5XGcZd4ywT2yzCNGQ",
              width: 336,
            },
            {
              height: 1080,
              url: "https://i.ytimg.com/vi/Hsk-McV9NLo/maxresdefault.jpg",
              width: 1920,
            },
          ],
          title: "Alex Murdaugh Juror Removed From Trial",
          videoId: "Hsk-McV9NLo",
        },
      },
      {
        type: "video",
        video: {
          lengthSeconds: 61,
          stats: {
            views: 33155,
          },
          thumbnails: [
            {
              height: 94,
              url: "https://i.ytimg.com/vi/fd_hfUJWZvY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBO7ZVMUyDm-GAx9t7na6fZ8XFy5Q",
              width: 168,
            },
            {
              height: 110,
              url: "https://i.ytimg.com/vi/fd_hfUJWZvY/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCwjCRitHytEJBpZDz65jLxy2LDvg",
              width: 196,
            },
            {
              height: 138,
              url: "https://i.ytimg.com/vi/fd_hfUJWZvY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChn4rloaa72KNg2h0l27QOqN7oWw",
              width: 246,
            },
            {
              height: 188,
              url: "https://i.ytimg.com/vi/fd_hfUJWZvY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlZJR6stAecxahc8n1rsdlc2bOxA",
              width: 336,
            },
            {
              height: 1080,
              url: "https://i.ytimg.com/vi/fd_hfUJWZvY/maxresdefault.jpg",
              width: 1920,
            },
          ],
          title: "Massive Sinkhole Swallows English Teacher’s SUV",
          videoId: "fd_hfUJWZvY",
        },
      },
      {
        playlist: {
          playlistId: "PLu5l82pnTRBEleiz3_bFK7J1t_ds-PFP4",
          stats: {
            videos: 13,
          },
          thumbnails: [
            {
              height: 94,
              url: "https://i.ytimg.com/vi/mqyRcKESalo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAEmzzoS1yMeGOR6efmgf8H5ykeug",
              width: 168,
            },
            {
              height: 110,
              url: "https://i.ytimg.com/vi/mqyRcKESalo/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDgL1ok7RxCNh_WMIoRS8TTaBMDTg",
              width: 196,
            },
            {
              height: 138,
              url: "https://i.ytimg.com/vi/mqyRcKESalo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEUZWQGutcAUDKFoByE9Q8GSbB2Q",
              width: 246,
            },
            {
              height: 188,
              url: "https://i.ytimg.com/vi/mqyRcKESalo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDySiBHPcByWdNvznCkgaslgPkG-Q",
              width: 336,
            },
            {
              height: 1080,
              url: "https://i.ytimg.com/vi/mqyRcKESalo/maxresdefault.jpg",
              width: 1920,
            },
          ],
          title: "This Week's Biggest Stories",
        },
        type: "playlist",
      },
    ],
  },
  isLiveContent: false,
  isLiveNow: false,
  keywords: [
    "new jersey",
    "ie newsdesk",
    "Inside Edition",
    "inside_edition",
    "New Jersey",
    "Pompton Lakes",
    "pompton lakes police department",
    "house fire",
    "house explodes",
    "body camera video",
    "first responders",
    "heroes",
    "volunteer firefighters",
    "close call",
    "wcbs",
    "fire chief",
    "rescued",
    "rescuers",
  ],
  lengthSeconds: 82,
  musics: [],
  publishedDate: "2023-03-01",
  stats: {
    comments: 472,
    likes: 4951,
    views: 182884,
  },
  superTitle: {
    items: [],
  },
  thumbnails: [
    {
      height: 94,
      url: "https://i.ytimg.com/vi/fliG5x3PzRs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAtJ2A7FwvNoIlWO0JLQHGU9U1i_A",
      width: 168,
    },
    {
      height: 110,
      url: "https://i.ytimg.com/vi/fliG5x3PzRs/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCDwvpVdUTYwIugQvURqsYCDKB7dA",
      width: 196,
    },
    {
      height: 138,
      url: "https://i.ytimg.com/vi/fliG5x3PzRs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAa2MgfTAbM87GJZWr-NlbKZzGyrg",
      width: 246,
    },
    {
      height: 188,
      url: "https://i.ytimg.com/vi/fliG5x3PzRs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFf8VArwByyfaJrxQ2OC_C4uf8zw",
      width: 336,
    },
    {
      height: 1080,
      url: "https://i.ytimg.com/vi/fliG5x3PzRs/maxresdefault.jpg",
      width: 1920,
    },
  ],
  title: "New Jersey House Explodes With 6 Firefighters Inside",
  videoId: "fliG5x3PzRs",
};

export const relatedVideos = [
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 417,
      publishedTimeText: "2 months ago",
      stats: {
        views: 9791243,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/S1ld0_QOqWM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDU6rKz84a3Bycn_ngw5R0FMacK6w",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/S1ld0_QOqWM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuaVMAWBJKYFWqW21Bgmg5sbMWjw",
          width: 336,
        },
      ],
      title: "The Most Heart-Stopping Moments of 2022",
      videoId: "S1ld0_QOqWM",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 187,
      publishedTimeText: "1 year ago",
      stats: {
        views: 10972599,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/rbXhNfbOaDo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCEcjZoUxFb0uusbAUdhmQdcFcXng",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/rbXhNfbOaDo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAotK2vcMgnpv_RnYVD7b3jhpL9Zg",
          width: 336,
        },
      ],
      title: "12-Year-Old Boy and 14-Year-Old Girl Have Shootout With Cops",
      videoId: "rbXhNfbOaDo",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 316,
      publishedTimeText: "10 months ago",
      stats: {
        views: 2340509,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/gYuYOx1TVF8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCc8r2-JkvrGg1xEBSAUE4562nxGA",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/gYuYOx1TVF8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrwqJOQda_ZQy-BwgROI0H4fAmCw",
          width: 336,
        },
      ],
      title: "These Nannies and Babysitters Are Heroes",
      videoId: "gYuYOx1TVF8",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJUJ7ALzdodkOBtc-hJujW0dNP6LeW8bmRzsbakKaw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "DW Documentary",
      },
      isLiveNow: false,
      lengthSeconds: 2547,
      publishedTimeText: "1 year ago",
      stats: {
        views: 26067915,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/KaPLylJk89w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBEGzsUYsVeRN1xhw8XdD9f9VZ-Vw",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/KaPLylJk89w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv8w0Zt2j0zhXNqQTLqIV72DAEWg",
          width: 336,
        },
      ],
      title: "The life of the super-rich in Central Africa | DW Documentary",
      videoId: "KaPLylJk89w",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJUfOfVXNfonbB33lrQOb0d5R5FQVBt87N3BFp1D9Q=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "TEDx Talks",
      },
      isLiveNow: false,
      lengthSeconds: 1081,
      publishedTimeText: "6 years ago",
      stats: {
        views: 2006056,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/XGq3MXQlRJs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDlacxpi7hkGooEKrZgE8Fc8Fw_wQ",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/XGq3MXQlRJs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6IF73lWKt5LI6ZE9H3cF8dEL7KQ",
          width: 336,
        },
      ],
      title:
        "Tinnitus: Ringing in the Brain | Josef Rauschecker | TEDxCharlottesville",
      videoId: "XGq3MXQlRJs",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 368,
      publishedTimeText: "1 year ago",
      stats: {
        views: 11115630,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/YCPWY_G__Yc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBH4DstQVZoxzEEe8Qyp3XlFq5Xfw",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/YCPWY_G__Yc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCP2vve6YSX5N75paiYIe2tN9hz6Q",
          width: 336,
        },
      ],
      title: "The Most Heart-Stopping Moments of 2021...So Far",
      videoId: "YCPWY_G__Yc",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 439,
      publishedTimeText: "11 months ago",
      stats: {
        views: 1647066,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/egSGTPg1Y40/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCnZxgVKqJEzEJkdAXc42f-MkJI8w",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/egSGTPg1Y40/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChlC1_Q_MlhG260oYeVtBLE_1Dww",
          width: 336,
        },
      ],
      title: "Outrageous Things That Happened at Birthday Parties",
      videoId: "egSGTPg1Y40",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 419,
      publishedTimeText: "7 months ago",
      stats: {
        views: 4051441,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/HhEH1lc-I3U/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBZl1XDhZO-4C9hMOk3kgFRVAHu7w",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/HhEH1lc-I3U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPgmSWBEU4XxnnJYea8V0p926f5g",
          width: 336,
        },
      ],
      title: "Tourists and Their Terrifying Brushes With Danger",
      videoId: "HhEH1lc-I3U",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVdEnUyNNPVUQzeUAB0EFmP_cNCJWUX9qnBwAdesA=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Dude Perfect",
      },
      isLiveNow: false,
      lengthSeconds: 733,
      publishedTimeText: "5 days ago",
      stats: {
        views: 7233173,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/zPlsnWq5X50/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJm2_JZRFyfz9PEJitfy2mzmy3gQ",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/zPlsnWq5X50/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgDGi_frVeK0rTG_mNSaIPSA9YCw",
          width: 336,
        },
      ],
      title: "Hotel Stereotypes",
      videoId: "zPlsnWq5X50",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 233,
      publishedTimeText: "1 month ago",
      stats: {
        views: 363063,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/OSljZdwCXxw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSyzT6-vgkgyOpSyqJU9iOSNGNKQ",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/OSljZdwCXxw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwj7IWFQWLJ2JwewjYjTnTN2Ejlg",
          width: 336,
        },
      ],
      title: "People Who Used Everyday Objects to Fight Off Bad Guys",
      videoId: "OSljZdwCXxw",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJUJ7ALzdodkOBtc-hJujW0dNP6LeW8bmRzsbakKaw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "DW Documentary",
      },
      isLiveNow: false,
      lengthSeconds: 2547,
      publishedTimeText: "10 months ago",
      stats: {
        views: 2470582,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/YH1wn3D9HNg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDaxRZy1CJlLMfxrk1AU4xGVnfAmw",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/YH1wn3D9HNg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2beAir_xmb8zbT3gNMM5lXfWaJw",
          width: 336,
        },
      ],
      title:
        "The mysterious disease that affects millions of people worldwide | DW Documentary",
      videoId: "YH1wn3D9HNg",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 442,
      publishedTimeText: "3 months ago",
      stats: {
        views: 4046856,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/x7jTVKePpI4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBcEOe9BnvDiZdXxGSnPBBhvD9zNw",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/x7jTVKePpI4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAX_sOL2hXgwBeCK_iWGT-WN_3r4g",
          width: 336,
        },
      ],
      title: "These Kids Were Accidentally Left Behind",
      videoId: "x7jTVKePpI4",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 243,
      publishedTimeText: "6 years ago",
      stats: {
        views: 13889693,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/SaVN52tvVh4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCWRjGypvQfCsENRjY6dMjLcJY-jg",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/SaVN52tvVh4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE3muptyraqJZA-jyZJFw3OcpfRg",
          width: 336,
        },
      ],
      title: "Tourists Join Cliff-Jumping Craze That Kills Dozens Each Year",
      videoId: "SaVN52tvVh4",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 28,
      publishedTimeText: "12 hours ago",
      stats: {
        views: 13161,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/ZXPMicTCF8s/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAHABwAEG8AEB-AG2CIACgA-KAgwIABABGGUgXyhDMA8=&rs=AOn4CLBzn0bNAANknqKkHkLsqi3nBigJuQ",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/ZXPMicTCF8s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhlIF8oQzAP&rs=AOn4CLDjczNlFLYkW6WUZhFFZqibMC0Ibw",
          width: 336,
        },
      ],
      title: "Firefighter Rescues Trapped Driver From California Flood #shorts",
      videoId: "ZXPMicTCF8s",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 82,
      publishedTimeText: "6 hours ago",
      stats: {
        views: 115640,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/tw2euJzOk60/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAuaH9tkHoiDV8-3b2-OVkCC2dHPA",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/tw2euJzOk60/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwksyT6MHLlB9XwoY8l0W3XPk0Ug",
          width: 336,
        },
      ],
      title: "Expert Warns About Using TikTok’s Bold Glamour Filter",
      videoId: "tw2euJzOk60",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJUvrDygrF4TCdA-ICdQi1ZGkIXfKIEvNrK6Tbq0Xw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "A&E",
      },
      isLiveNow: false,
      lengthSeconds: 1174,
      publishedTimeText: "3 years ago",
      stats: {
        views: 17553307,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/XAtzfJcuHjY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAJ4fhwbE_L8dZVzPZp3Jzg64PRZQ",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/XAtzfJcuHjY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGeyQZObBJzbadVTFcxoAzXT-XfQ",
          width: 336,
        },
      ],
      title: "Live PD: Most Viewed Moments from 2019 | A&E",
      videoId: "XAtzfJcuHjY",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV0GKUiphhltMof_In3DDi8JKx2bMEw8K-afMjn=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Inside Edition",
      },
      isLiveNow: false,
      lengthSeconds: 475,
      publishedTimeText: "2 years ago",
      stats: {
        views: 1472726,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/NqbbeKROnC0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLALVZ5ITrQQrsuB90270HfGVyb3Hg",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/NqbbeKROnC0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQqfi-30qtcLVmC0q9jujDUk7RvQ",
          width: 336,
        },
      ],
      title: "They Were Shamed and They Fought Back",
      videoId: "NqbbeKROnC0",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/FurEkbmZF6E8WdOqrQfCfFSj1-nQukSuJETL9Zv3g-eq_CbhV94kevvmf-n4VOFQHMjQITmH1Q=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "CBS New York",
      },
      isLiveNow: false,
      lengthSeconds: 118,
      publishedTimeText: "3 days ago",
      stats: {
        views: 22519,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/w9Rp7BCwDXY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCU4fQ3v0dWMuiDUkWuNNW7g9fvsg",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/w9Rp7BCwDXY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFSy8C9Z38oV-FRRQg_T4PUuRxAQ",
          width: 336,
        },
      ],
      title: "Firefighters narrowly escape house explosion in N.J.",
      videoId: "w9Rp7BCwDXY",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJUvrDygrF4TCdA-ICdQi1ZGkIXfKIEvNrK6Tbq0Xw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "A&E",
      },
      isLiveNow: false,
      lengthSeconds: 1195,
      publishedTimeText: "3 years ago",
      stats: {
        views: 26264167,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/ce28TIoa4ao/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAdXAzUfvcc2_wxdk51L8MazpPAdw",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/ce28TIoa4ao/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQEkZTesf1Zr09cvwrZcF75sukoQ",
          width: 336,
        },
      ],
      title: "Live PD: Top 4 Car Chases | A&E",
      videoId: "ce28TIoa4ao",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AL5GRJUsFGXwUMBgrTHm3r-zIE6xJDusjyI6Zetm6qaZfw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        title: "Universal Pictures All-Access",
      },
      isLiveNow: false,
      lengthSeconds: 605,
      publishedTimeText: "3 years ago",
      stats: {
        views: 4307506,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/yhDl_22DxHQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAsLOkiDG0zsQE4SRyaHyK-6mQ3EA",
          width: 168,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/yhDl_22DxHQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqj0hREJj1gkOXlkSbVHeRUM1uYA",
          width: 336,
        },
      ],
      title: "Battleship | Making First Contact",
      videoId: "yhDl_22DxHQ",
    },
  },
];

export const comments = {
  comments: [
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVQ0toWKQc8ZRqEusI8OikH6jGpHUop14TLCDGA3A=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVQ0toWKQc8ZRqEusI8OikH6jGpHUop14TLCDGA3A=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVQ0toWKQc8ZRqEusI8OikH6jGpHUop14TLCDGA3A=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCweSV9b9wgWa_2_yRwYWHNg",
        isChannelOwner: false,
        title: "@laneatkinson6441",
      },
      commentId: "UgxcVfBddtU7s5-dZot4AaABAg",
      content:
        "So glad everyone made it out alive, I wish them a swift recovery!",
      creatorHeart: false,
      cursorReplies:
        "Eg0SC2ZsaUc1eDNQelJzGAYygwEaUBIaVWd4Y1ZmQmRkdFU3czUtZFpvdDRBYUFCQWciAggAKhhVQzlrLXlpRXBSSE1OVk9uT2lfYVFLOHcyC2ZsaUc1eDNQelJzQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3hjVmZCZGR0VTdzNS1kWm90NEFhQUJBZw%3D%3D",
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 9,
        votes: 1445,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/sJrkVEWs537yCSR6pd5_mh58UV-S3vW1VN16_GtJGxA3bTMnYwqIwyqtNsmt_rrrPM-89G9UPg=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/sJrkVEWs537yCSR6pd5_mh58UV-S3vW1VN16_GtJGxA3bTMnYwqIwyqtNsmt_rrrPM-89G9UPg=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/sJrkVEWs537yCSR6pd5_mh58UV-S3vW1VN16_GtJGxA3bTMnYwqIwyqtNsmt_rrrPM-89G9UPg=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCglqnzHhsXtYt536mMCoseg",
        isChannelOwner: false,
        title: "@listenup5961",
      },
      commentId: "UgwpBVtL51QUu6Bm5Sl4AaABAg",
      content:
        "This is a reminder of the danger first responders put themselves in every day to help us. Thank you from us all!",
      creatorHeart: false,
      cursorReplies:
        "Eg0SC2ZsaUc1eDNQelJzGAYygwEaUBIaVWd3cEJWdEw1MVFVdTZCbTVTbDRBYUFCQWciAggAKhhVQzlrLXlpRXBSSE1OVk9uT2lfYVFLOHcyC2ZsaUc1eDNQelJzQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dwQlZ0TDUxUVV1NkJtNVNsNEFhQUJBZw%3D%3D",
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 10,
        votes: 644,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/2berY_izSqtBCNicdZobgs05A2zZ1mDysQn6RYoSPVDjHPFtzJMPKqh3s_hneOT2lGOWaWzOKkU=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/2berY_izSqtBCNicdZobgs05A2zZ1mDysQn6RYoSPVDjHPFtzJMPKqh3s_hneOT2lGOWaWzOKkU=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/2berY_izSqtBCNicdZobgs05A2zZ1mDysQn6RYoSPVDjHPFtzJMPKqh3s_hneOT2lGOWaWzOKkU=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCAskVA6c5cbQ4jl0UBowQVg",
        isChannelOwner: false,
        title: "@truthhurts...6574",
      },
      commentId: "UgwuOneJ-wTmKDnW1px4AaABAg",
      content:
        "Thank goodness they all lived through that. I was holding my breath waiting for the worse. Hope they all have a speedy recovery",
      creatorHeart: false,
      cursorReplies:
        "Eg0SC2ZsaUc1eDNQelJzGAYygwEaUBIaVWd3dU9uZUotd1RtS0RuVzFweDRBYUFCQWciAggAKhhVQzlrLXlpRXBSSE1OVk9uT2lfYVFLOHcyC2ZsaUc1eDNQelJzQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3d1T25lSi13VG1LRG5XMXB4NEFhQUJBZw%3D%3D",
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 8,
        votes: 609,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJXDIdFlpYZVnyCQGGumgsr_qMKWQbEP6DdMFG0A9Q=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJXDIdFlpYZVnyCQGGumgsr_qMKWQbEP6DdMFG0A9Q=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJXDIdFlpYZVnyCQGGumgsr_qMKWQbEP6DdMFG0A9Q=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UC0BDcDQgYndnfII1qifGvHQ",
        isChannelOwner: false,
        title: "@draydenferguson3128",
      },
      commentId: "Ugxnh-IBncobtCgxGK54AaABAg",
      content:
        "It's wonderful that they all made it out alive. Bless them for their service and here's to a quick recovery.",
      creatorHeart: false,
      cursorReplies:
        "Eg0SC2ZsaUc1eDNQelJzGAYygwEaUBIaVWd4bmgtSUJuY29idENneEdLNTRBYUFCQWciAggAKhhVQzlrLXlpRXBSSE1OVk9uT2lfYVFLOHcyC2ZsaUc1eDNQelJzQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3huaC1JQm5jb2J0Q2d4R0s1NEFhQUJBZw%3D%3D",
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 3,
        votes: 316,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWq-L3csc57jGZPHN2erxVEaxruZNgxx5vg9Dph=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWq-L3csc57jGZPHN2erxVEaxruZNgxx5vg9Dph=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWq-L3csc57jGZPHN2erxVEaxruZNgxx5vg9Dph=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCLJZGogSDd95ynXvYqMQe-w",
        isChannelOwner: false,
        title: "@followtheflip2172",
      },
      commentId: "UgywFxfsQHOdCG0Fybx4AaABAg",
      content:
        "Jesus! Thankfully everyone came out safe. Very thankfully for firefighters and all the work they do everyday 🙏🏽",
      creatorHeart: false,
      cursorReplies:
        "Eg0SC2ZsaUc1eDNQelJzGAYygwEaUBIaVWd5d0Z4ZnNRSE9kQ0cwRnlieDRBYUFCQWciAggAKhhVQzlrLXlpRXBSSE1OVk9uT2lfYVFLOHcyC2ZsaUc1eDNQelJzQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3l3Rnhmc1FIT2RDRzBGeWJ4NEFhQUJBZw%3D%3D",
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 5,
        votes: 135,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWd0YJOjlhUyHdBYXVcBLaGB1ISykcLTt58hVjmOw=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWd0YJOjlhUyHdBYXVcBLaGB1ISykcLTt58hVjmOw=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWd0YJOjlhUyHdBYXVcBLaGB1ISykcLTt58hVjmOw=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCfud5ThzsfVmZ0v4AdxcPVg",
        isChannelOwner: false,
        title: "@alphabloodhawk",
      },
      commentId: "UgyMfb5Cak761PCQ15Z4AaABAg",
      content:
        "Being a firefighter is like being in the army. Your life is constantly on the line when your in the field and you don't know what can happen.",
      creatorHeart: false,
      cursorReplies:
        "Eg0SC2ZsaUc1eDNQelJzGAYygwEaUBIaVWd5TWZiNUNhazc2MVBDUTE1WjRBYUFCQWciAggAKhhVQzlrLXlpRXBSSE1OVk9uT2lfYVFLOHcyC2ZsaUc1eDNQelJzQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3lNZmI1Q2FrNzYxUENRMTVaNEFhQUJBZw%3D%3D",
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 8,
        votes: 181,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJU6K-U0klU8l5UfoQ6qX2dDVpKQyr715PTf6YIwAg=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJU6K-U0klU8l5UfoQ6qX2dDVpKQyr715PTf6YIwAg=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJU6K-U0klU8l5UfoQ6qX2dDVpKQyr715PTf6YIwAg=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCG6fJWvKtKHVM8EEok_5FeQ",
        isChannelOwner: false,
        title: "@betsyb",
      },
      commentId: "UgycdHh5ESW3L1ZqTA94AaABAg",
      content:
        "an absolute miracle that they all survived, and with minimal injuries too! wishing everyone an easy recovery",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 53,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWmOnhzXaveNS08k6W23LawdhtiM-WogePHSQ=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWmOnhzXaveNS08k6W23LawdhtiM-WogePHSQ=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWmOnhzXaveNS08k6W23LawdhtiM-WogePHSQ=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCHa0aXBPvliHCnKd9_BElPQ",
        isChannelOwner: false,
        title: "@jerryhernandez1895",
      },
      commentId: "UgwUoTMizVwqH0wriNx4AaABAg",
      content: "God bless firefighters and all volunteers",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 61,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV3Mcytxwr6pHJlkUjDKrOtzzc-yWZsACDBPA=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV3Mcytxwr6pHJlkUjDKrOtzzc-yWZsACDBPA=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJV3Mcytxwr6pHJlkUjDKrOtzzc-yWZsACDBPA=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UC9DEDeLqyorcwkQuHlS-9dw",
        isChannelOwner: false,
        title: "@morganice7816",
      },
      commentId: "Ugzj-6FFCDPdufVPIgN4AaABAg",
      content:
        "Wishing them all a quick recovery 😢 they’re so lucky to be alive. Thank you for your service ❤",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 40,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWwFJXZBokCHcWRSLxjaN620Cf3fbwy0LxuPdO3gA=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWwFJXZBokCHcWRSLxjaN620Cf3fbwy0LxuPdO3gA=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJWwFJXZBokCHcWRSLxjaN620Cf3fbwy0LxuPdO3gA=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UC9aafL_b_w5CNLH2C8XlHSA",
        isChannelOwner: false,
        title: "@jpschriefer2857",
      },
      commentId: "Ugzdi09KfQn5h09OJ_B4AaABAg",
      content:
        "I'm so happy they're all alive! Our true heroes. My father was a firefighter too.",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 15,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/AlrXBAGDbyBPew2U8dC1YGSbEx7hmjPgzD02MmO06Huu-hma-IdoxX5xdaQ9_w1dSuNLdtscZw=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/AlrXBAGDbyBPew2U8dC1YGSbEx7hmjPgzD02MmO06Huu-hma-IdoxX5xdaQ9_w1dSuNLdtscZw=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/AlrXBAGDbyBPew2U8dC1YGSbEx7hmjPgzD02MmO06Huu-hma-IdoxX5xdaQ9_w1dSuNLdtscZw=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCcDA2UW16yoWCdt1_LL2KYA",
        isChannelOwner: false,
        title: "@bell-_-4265",
      },
      commentId: "UgyrfFc-g_A2oSr4nex4AaABAg",
      content:
        "Thank lord they made it out alive. My father is a volunteer fire fighter and it’s crazy how they would risk their lives just to save people and their houses. I’m so thankful for them.",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 6,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJX0lY1zK0iar7y1mK-MUIQUhLZcca0j7OfXMTsmt_0=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJX0lY1zK0iar7y1mK-MUIQUhLZcca0j7OfXMTsmt_0=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJX0lY1zK0iar7y1mK-MUIQUhLZcca0j7OfXMTsmt_0=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCzBJwkLrt1ZCUHuQFXF85pw",
        isChannelOwner: false,
        title: "@inkrie",
      },
      commentId: "Ugy183puK-OMIXQGs6d4AaABAg",
      content:
        "God I'm so happy they made it out alive, I hope they recover soon.",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 25,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJW_0qqmTRKzTVp0zGN8GE8G3HkDsgliWwHX5PXh=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJW_0qqmTRKzTVp0zGN8GE8G3HkDsgliWwHX5PXh=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJW_0qqmTRKzTVp0zGN8GE8G3HkDsgliWwHX5PXh=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCe_s_IYjnUWHYzROJfgIpMA",
        isChannelOwner: false,
        title: "@MMK86",
      },
      commentId: "UgyMZHaqrlRQIDauXYt4AaABAg",
      content: "thats just unreal, respect to all the firefighters out there",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 15,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVXPFs4Siqb_-62cZ2ZaAVbTktIwT9J35Fj2Tpr96NrdzZvmIOauUd9PxcmJGNP=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVXPFs4Siqb_-62cZ2ZaAVbTktIwT9J35Fj2Tpr96NrdzZvmIOauUd9PxcmJGNP=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVXPFs4Siqb_-62cZ2ZaAVbTktIwT9J35Fj2Tpr96NrdzZvmIOauUd9PxcmJGNP=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCGWw1MFVJDb8h-_npxJhKpw",
        isChannelOwner: false,
        title: "@greggwallace-or8kl",
      },
      commentId: "Ugyz_844etuTF1xSTzZ4AaABAg",
      content: "My prayers go out to the family 🙏",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 14,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/F_WSkY73MH7-VLAG-Skm_LmZMHUtTsaM_uavV9h28Q7vWYXXa36ePv5bMnmQp1zqw9sX1sASsg=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/F_WSkY73MH7-VLAG-Skm_LmZMHUtTsaM_uavV9h28Q7vWYXXa36ePv5bMnmQp1zqw9sX1sASsg=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/F_WSkY73MH7-VLAG-Skm_LmZMHUtTsaM_uavV9h28Q7vWYXXa36ePv5bMnmQp1zqw9sX1sASsg=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCwoD1SE8Xwgk9NuFx4GA-4w",
        isChannelOwner: false,
        title: "@maloney2886",
      },
      commentId: "UgyGExB04BAVsMVMB5Z4AaABAg",
      content:
        "I don't usually comment on these videos, but it's a miracle everyone got out safely! Wishing those heroes a speedy recovery, and the best wishes to whoever lost everything in that explosion. ❤️",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "7 hours ago",
      stats: {
        replies: 0,
        votes: 1,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVtCaGrAwgSNOfaskVVlpJfyJUMhXWACS5tPQ=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVtCaGrAwgSNOfaskVVlpJfyJUMhXWACS5tPQ=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJVtCaGrAwgSNOfaskVVlpJfyJUMhXWACS5tPQ=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCocPHEuNuQgJkzw0jfgCE-A",
        isChannelOwner: false,
        title: "@nicolaakuneme9024",
      },
      commentId: "UgyUMqRm-tkxKMawxVB4AaABAg",
      content: "It truly is a miracle that all 6 survived",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 14,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/TornuiI06cLBI-k96FogLZ6ts2-N1CNsXoo-wDfcJv0yk6BSbQ-NUBLNea4DdAJAc-ePEVcv2A=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/TornuiI06cLBI-k96FogLZ6ts2-N1CNsXoo-wDfcJv0yk6BSbQ-NUBLNea4DdAJAc-ePEVcv2A=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/TornuiI06cLBI-k96FogLZ6ts2-N1CNsXoo-wDfcJv0yk6BSbQ-NUBLNea4DdAJAc-ePEVcv2A=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCJiVkRiQeGDlVwVKzUmvFjw",
        isChannelOwner: false,
        title: "@dacrouse4129",
      },
      commentId: "Ugwi4bixQfHSI3JxkB94AaABAg",
      content: "wishing all involved a speedy recovery",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 22,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/8Ql7CeWVft9jXGZpzcJrnAvwvjg-h6Z2NiOqrslCuCXpbQXDmgwetxR0074n48ipy5l9QZn7=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/8Ql7CeWVft9jXGZpzcJrnAvwvjg-h6Z2NiOqrslCuCXpbQXDmgwetxR0074n48ipy5l9QZn7=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/8Ql7CeWVft9jXGZpzcJrnAvwvjg-h6Z2NiOqrslCuCXpbQXDmgwetxR0074n48ipy5l9QZn7=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCJPlG92rZK5qs17-XgV8JZA",
        isChannelOwner: false,
        title: "@PBondoc2020",
      },
      commentId: "Ugxxmk8JBb3mrlJ24lN4AaABAg",
      content: "I’m glad these heroes survived. Wishing them a swift recovery!",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "12 hours ago",
      stats: {
        replies: 0,
        votes: 1,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJU1uFyyaMDYkyKYC7Mrl8Sk1J1dWjsH77EI-omvCQ=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJU1uFyyaMDYkyKYC7Mrl8Sk1J1dWjsH77EI-omvCQ=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJU1uFyyaMDYkyKYC7Mrl8Sk1J1dWjsH77EI-omvCQ=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UCaIm3K8q36kbOe5XzbEz38w",
        isChannelOwner: false,
        title: "@smokeystriper",
      },
      commentId: "UgwOt4CZlFXRCzu4OWx4AaABAg",
      content:
        "Scary stuff. That almost happened to my crew.  On a call for a gas line struck by an excavator working near a dwelling. The first Engine on scene sent the officer and 3 guys in to meter the house for gas. When the officer opened the basement door his meter instantly went into alarm. They got out with seconds to spear. The engine I was in was about 1/4 mile away when we heard the officer screaming into his radio and saw the cloud shooting into the sky. Their ears were ringing and they got knocked to the ground but no one was hurt.",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago (edited)",
      stats: {
        replies: 0,
        votes: 5,
      },
    },
    {
      author: {
        avatar: [
          {
            height: 48,
            url: "https://yt3.ggpht.com/ytc/AL5GRJXcMEdSsJ-BP_Sj2j6iH6CsCTdM2rxEorFxxw=s48-c-k-c0x00ffffff-no-rj",
            width: 48,
          },
          {
            height: 88,
            url: "https://yt3.ggpht.com/ytc/AL5GRJXcMEdSsJ-BP_Sj2j6iH6CsCTdM2rxEorFxxw=s88-c-k-c0x00ffffff-no-rj",
            width: 88,
          },
          {
            height: 176,
            url: "https://yt3.ggpht.com/ytc/AL5GRJXcMEdSsJ-BP_Sj2j6iH6CsCTdM2rxEorFxxw=s176-c-k-c0x00ffffff-no-rj",
            width: 176,
          },
        ],
        badges: [],
        channelId: "UC_Y2btLuzryBbC8OBqkZ6JQ",
        isChannelOwner: false,
        title: "@silverwindfox15",
      },
      commentId: "UgykCGzRrKYWTy_0dUZ4AaABAg",
      content:
        "OMG the house exploding was scary enough. Especially since there were people still inside, the fact that they all survived is miracle! GOD was on their side that night. Here’s hoping for a speedy recovery.",
      creatorHeart: false,
      cursorReplies: null,
      paid: {
        amount: null,
        status: false,
      },
      pinned: {
        status: false,
        text: null,
      },
      publishedTimeText: "1 day ago",
      stats: {
        replies: 0,
        votes: 8,
      },
    },
  ],
  cursorNext:
    "Eg0SC2ZsaUc1eDNQelJzGAYy4AIKtgJnZXRfcmFua2VkX3N0cmVhbXMtLUNxWUJDSUFFRlJlMzBUZ2Ftd0VLbGdFSTJGOFFnQVFZQnlLTEFWc1ExM0FMalJ6ekV6NEJCZWRaZjNmcm1TcUZZMEV0MjUyLTM1U2JGVXBFdUpkZnlkcVRvbjlEQ3FYdFlVb1ZqZmd3NDhQT2dIZ0s0Q2VSWFFwRWlzaEdzVjdDV2tTcjh5SlJ6REV6M1VHSkZVU1F5NlNtZEhWdlptaElrQzByYjFvZ1Y0RFNIMXFHMm84bzJsNU9QcHJXRWtPVE1iMWtzQ0NnbDlWSXk3bVV4SVpweXhLZXdFeGdQQTBRRkJJRkNJZ2dHQUFTQlFpR0lCZ0FFZ2NJbHlBUUZCZ0JFZ1VJaVNBWUFCSUZDSWNnR0FBU0J3aUZJQkFVR0FFWUFRIhEiC2ZsaUc1eDNQelJzMAB4ASgUQhBjb21tZW50cy1zZWN0aW9u",
  filters: [
    {
      cursorFilter:
        "Eg0SC2ZsaUc1eDNQelJzGAYyJSIRIgtmbGlHNXgzUHpSczAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D",
      selected: true,
      title: "Top comments",
    },
    {
      cursorFilter:
        "Eg0SC2ZsaUc1eDNQelJzGAYyJSIRIgtmbGlHNXgzUHpSczABeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D",
      selected: false,
      title: "Newest first",
    },
  ],
  totalCommentsCount: 472,
};
