import { IconType } from "react-icons/lib";

export type sidebarItemType =
  | { name: string; icon: JSX.Element; type: string; divider?: undefined }
  | { name: string; icon: JSX.Element; type: string; divider: boolean };

type authorType = {
  avatar: [{ height: number; url: string; width: number }];
  badges: [{ text: string; type: string }];
  canonicalBaseUrl?: string;
  channelId: string;
  title: string;
};

export type videoType = {
  author: authorType;
  badges: [string];
  descriptionSnippet: string;
  isLiveNow: boolean;
  lengthSeconds: number;
  movingThumbnails: [{ height: number; url: string; width: number }];
  publishedTimeText: string;
  stats: { views: number };
  thumbnails: [{ height: number; url: string; width: number }];
  title: string;
  videoId: string;
};

export type searchResultsType = [
  {
    type: string;
    video: videoType;
  }
];

export type videoDetailsType = {
  author: {
    avatar: [
      {
        height: number;
        url: string;
        width: number;
      }
    ];
    badges: [
      {
        text: string;
        type: string;
      }
    ];
    canonicalBaseUrl: string;
    channelId: string;
    stats: {
      subscribers: number;
      subscribersText: string;
    };
    title: string;
  };
  captions: [
    {
      language: {
        code: string;
        name: string;
      };
      url: string;
    }
  ];
  cards: [
    {
      label: string;
      type: string;
      video: {
        lengthSeconds: number;
        stats: {
          views: number;
        };
        thumbnails: [
          {
            height: number;
            url: string;
            width: number;
          }
        ];
        title: String;
        videoId: string;
      };
    }
  ];
  category: {
    id: number;
    name: string;
  };
  chapters: [];
  content: {
    definition: string;
    dimension: string;
    licensed: boolean;
    madeForKids: boolean;
    projection: string;
    rating: [];
  };
  // "date": {
  // 	"publishedDate": string | any;
  // },
  description: string | any;
  endScreen: {
    items: [];
  };
  keywords: [string];
  language: {
    defaultAudioLanguage: string;
    defaultLanguage: string;
  };
  lengthSeconds: number;
  live: {
    isLiveContent: boolean;
    isLiveNow: boolean;
    streamingDates: {
      actualEndTime: null;
      actualStartTime: null;
      scheduledStartTime: null;
    };
  };
  musics: [];
  publishedDate: string | any;
  stats: {
    comments: number | any;
    likes: number | any;
    views: number | any;
  };
  superTitle: {
    items: [string];
  };
  thumbnails: {
    default: {
      height: number;
      url: string;
      width: number;
    };
    high: {
      height: number;
      url: string;
      width: number;
    };
    maxres: {
      height: number;
      url: string;
      width: number;
    };
    medium: {
      height: number;
      url: string;
      width: number;
    };
    standard: {
      height: number;
      url: string;
      width: number;
    };
  };
  title: string;
  videoId: string;
};

export type relatedVideoType = {
  type: string;
  video: {
    author: {
      avatar: { height: number; url: string; width: number }[];
      badges: { text: string; type: string }[] | [];
      title: string;
    };
    isLiveNow: boolean;
    lengthSeconds: number;
    publishedTimeText: string | null;
    stats: {
      views: number;
    };
    thumbnails: { height: number; url: string; width: number }[];
    title: string;
    videoId: string;
  };
};

export type relatedContentsType = relatedVideoType[];

export type User = {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  displayName: string | undefined;
  photoURL: any;
};

export type CommentType = {
  timestamp: { seconds: number; nanoseconds: number };
  text: string;
  userName: string;
  photoURL: string;
  id: string;
};

export type CommentsType = CommentType[];

export type CategoryType =
  | {
      name: string;
      icon: JSX.Element;
      type: string;
      divider?: undefined;
    }
  | {
      name: string;
      icon: JSX.Element;
      type: string;
      divider: boolean;
    };
