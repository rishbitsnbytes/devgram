import { v4 as uuid, validate } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Well...",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085642/devgram/posts/meme-10_gnb1kj.png",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "Teresa",
          lastName: "Maddison",
          username: "tersamaddison",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        },
        {
          firstName: "Himani",
          lastName: "Verma",
          username: "himaniverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
        },
        {
          firstName: "Pranjalika",
          lastName: "Pradhan",
          username: "pranjalikapradhan",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/pranjalikapradhan_yjm3t3.jpg",
        },
        {
          firstName: "Krati",
          lastName: "Singh",
          username: "kratisingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        },
        {
          firstName: "Karan",
          lastName: "Singh",
          username: "karansingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957143/devgram/users/karansingh_bkeyyx.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "rishabhrathore",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
    createdAt: new Date("Apr 02, 2022 20:10:05"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "kratisingh",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        text: "Haha, so true!",
        createdAt: new Date("May 12, 2022 22:42:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "teresamaddison",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        text: "Lol, damn hilarious!",
        createdAt: new Date("May 13, 2022 16:15:05"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Close...",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085637/devgram/posts/meme-1_hyfbbn.png",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Stephanie",
          lastName: "Dawn",
          username: "stephaniedawn",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
        },
        {
          firstName: "Rishabh",
          lastName: "Rathore",
          username: "rishabhrathore",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
        },
        {
          firstName: "Teresa",
          lastName: "Maddison",
          username: "tersamaddison",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        },
        {
          firstName: "Himani",
          lastName: "Verma",
          username: "himaniverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
        },
      ],
      dislikedBy: [],
    },

    username: "scottwilson",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.pnghttps://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/scottwilson_knrmte.jpg",

    createdAt: new Date("March 27 2021 11:47:26"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rishabhrathore",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
        text: "Lol",
        createdAt: new Date("March 29 2021 08:06:17"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "kratisingh",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        text: "Very close...",
        createdAt: new Date("March 30 2021 15:16:26"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Daily ritual...",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085637/devgram/posts/meme-2_gwftfd.jpg",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "Stephanie",
          lastName: "Dawn",
          username: "stephaniedawn",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
        },
        {
          firstName: "Rishabh",
          lastName: "Rathore",
          username: "rishabhrathore",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
        },
        {
          firstName: "Teresa",
          lastName: "Maddison",
          username: "tersamaddison",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        },
        {
          firstName: "Himani",
          lastName: "Verma",
          username: "himaniverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
        },
        {
          firstName: "Krati",
          lastName: "Singh",
          username: "kratisingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        },
      ],
      dislikedBy: [],
    },

    username: "teresamaddison",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",

    createdAt: new Date("June 27 2021 11:47:26"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rishabhrathore",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
        text: "Lol",
        createdAt: new Date("June 29 2021 08:06:17"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "kratisingh",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        text: "Very close...",
        createdAt: new Date("June 30 2021 15:16:26"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "I am mentally healthy though, trust me...",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085636/devgram/posts/meme-3_vrarey.jpg",
    likes: {
      likeCount: 7,
      likedBy: [
        {
          firstName: "Stephanie",
          lastName: "Dawn",
          username: "stephaniedawn",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
        },
        {
          firstName: "Rishabh",
          lastName: "Rathore",
          username: "rishabhrathore",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
        },
        {
          firstName: "Teresa",
          lastName: "Maddison",
          username: "tersamaddison",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        },
        {
          firstName: "Himani",
          lastName: "Verma",
          username: "himaniverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
        },
        {
          firstName: "Krati",
          lastName: "Singh",
          username: "kratisingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        },
        {
          firstName: "John",
          lastName: "Clarke",
          username: "johnclarke",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957147/devgram/users/johnclarke_hkh4i6.jpg",
        },
        {
          firstName: "Scott",
          lastName: "Wilson",
          username: "scottwilson",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/scottwilson_knrmte.jpg",
        },
      ],
      dislikedBy: [],
    },

    username: "rishabhrathore",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",

    createdAt: new Date("July 27 2021 11:47:26"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rishabhrathore",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
        text: "Most relatable post of the day...",
        createdAt: new Date("July 29 2021 08:06:17"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "anshverma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957139/devgram/users/anshverma_mgrihf.jpg",
        text: "We trust you...",
        createdAt: new Date("July 30 2021 15:16:26"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Still proud...",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085637/devgram/posts/meme-4_yiznjo.jpg",
    likes: {
      likeCount: 10,
      likedBy: [
        {
          firstName: "Stephanie",
          lastName: "Dawn",
          username: "stephaniedawn",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
        },
        {
          firstName: "Rishabh",
          lastName: "Rathore",
          username: "rishabhrathore",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
        },
        {
          firstName: "Teresa",
          lastName: "Maddison",
          username: "tersamaddison",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        },
        {
          firstName: "Himani",
          lastName: "Verma",
          username: "himaniverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
        },
        {
          firstName: "Krati",
          lastName: "Singh",
          username: "kratisingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        },
        {
          firstName: "John",
          lastName: "Clarke",
          username: "johnclarke",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957147/devgram/users/johnclarke_hkh4i6.jpg",
        },
        {
          firstName: "Scott",
          lastName: "Wilson",
          username: "scottwilson",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/scottwilson_knrmte.jpg",
        },
        {
          firstName: "Ansh",
          lastName: "Verma",
          username: "anshverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957139/devgram/users/anshverma_mgrihf.jpg",
        },
        {
          firstName: "Warren",
          lastName: "Wong",
          username: "warrenwong",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957150/devgram/users/warrenwong_gbcsot.jpg",
        },
        {
          firstName: "Pranjalika",
          lastName: "Pradhan",
          username: "pranjalikapradhan",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/pranjalikapradhan_yjm3t3.jpg",
        },
      ],
      dislikedBy: [],
    },

    username: "kratisingh",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",

    createdAt: new Date("January 27 2021 11:47:26"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rishabhrathore",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
        text: "Lol...",
        createdAt: new Date("January 29 2021 08:06:17"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "anshverma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957139/devgram/users/anshverma_mgrihf.jpg",
        text: "True, the satisfaction though...",
        createdAt: new Date("January 30 2021 15:16:26"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "He wasn't lying though...",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085638/devgram/posts/meme-5_egjac8.png",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "John",
          lastName: "Clarke",
          username: "johnclarke",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957147/devgram/users/johnclarke_hkh4i6.jpg",
        },
        {
          firstName: "Scott",
          lastName: "Wilson",
          username: "scottwilson",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/scottwilson_knrmte.jpg",
        },
        {
          firstName: "Ansh",
          lastName: "Verma",
          username: "anshverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957139/devgram/users/anshverma_mgrihf.jpg",
        },
        {
          firstName: "Warren",
          lastName: "Wong",
          username: "warrenwong",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957150/devgram/users/warrenwong_gbcsot.jpg",
        },
        {
          firstName: "Krati",
          lastName: "Singh",
          username: "kratisingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        },
      ],
      dislikedBy: [],
    },

    username: "stephaniedawn",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",

    createdAt: new Date("December 27 2021 11:47:26"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "tersamaddison",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        text: "Deceptions....",
        createdAt: new Date("December 29 2021 08:06:17"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "himaniverma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
        text: "Hahaha!",
        createdAt: new Date("December 30 2021 15:16:26"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "It hurts...",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085637/devgram/posts/meme-6_th7qea.png",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "John",
          lastName: "Clarke",
          username: "johnclarke",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957147/devgram/users/johnclarke_hkh4i6.jpg",
        },
        {
          firstName: "Scott",
          lastName: "Wilson",
          username: "scottwilson",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/scottwilson_knrmte.jpg",
        },
        {
          firstName: "Ansh",
          lastName: "Verma",
          username: "anshverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957139/devgram/users/anshverma_mgrihf.jpg",
        },
        {
          firstName: "Warren",
          lastName: "Wong",
          username: "warrenwong",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957150/devgram/users/warrenwong_gbcsot.jpg",
        },
        {
          firstName: "Krati",
          lastName: "Singh",
          username: "kratisingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        },
      ],
      dislikedBy: [],
    },

    username: "akshaysinha",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",

    createdAt: new Date("June 27 2021 11:47:26"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
        text: "Ouch!",
        createdAt: new Date("June 29 2021 08:06:17"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "kratisingh",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        text: "Hahaha!",
        createdAt: new Date("June 30 2021 15:16:26"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Speak up please...",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085638/devgram/posts/meme-7_evwebx.png",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "Teresa",
          lastName: "Maddison",
          username: "tersamaddison",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        },
        {
          firstName: "Himani",
          lastName: "Verma",
          username: "himaniverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
        },
        {
          firstName: "Pranjalika",
          lastName: "Pradhan",
          username: "pranjalikapradhan",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/pranjalikapradhan_yjm3t3.jpg",
        },
        {
          firstName: "Krati",
          lastName: "Singh",
          username: "kratisingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        },
        {
          firstName: "Karan",
          lastName: "Singh",
          username: "karansingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957143/devgram/users/karansingh_bkeyyx.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "rishabhrathore",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
    createdAt: new Date("Apr 02, 2022 20:10:05"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "kratisingh",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        text: "Haha, please say something...",
        createdAt: new Date("May 12, 2022 22:42:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "teresamaddison",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        text: "Lmao!!!",
        createdAt: new Date("May 13, 2022 16:15:05"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Be advised...",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085637/devgram/posts/meme-8_deepnb.png",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "Teresa",
          lastName: "Maddison",
          username: "tersamaddison",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        },
        {
          firstName: "Himani",
          lastName: "Verma",
          username: "himaniverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
        },
        {
          firstName: "Pranjalika",
          lastName: "Pradhan",
          username: "pranjalikapradhan",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/pranjalikapradhan_yjm3t3.jpg",
        },
        {
          firstName: "Krati",
          lastName: "Singh",
          username: "kratisingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        },
        {
          firstName: "Karan",
          lastName: "Singh",
          username: "karansingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957143/devgram/users/karansingh_bkeyyx.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "rishabhrathore",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
    createdAt: new Date("Apr 02, 2022 20:10:05"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "stephaniedawn",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
        text: "trueFuckingStory..",
        createdAt: new Date("May 12, 2022 22:42:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "teresamaddison",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        text: "Hahaha, I wish I was taught this way....",
        createdAt: new Date("May 13, 2022 16:15:05"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Oopss....",
    postImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1665085638/devgram/posts/meme-9_ma9lka.png",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "Teresa",
          lastName: "Maddison",
          username: "tersamaddison",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        },
        {
          firstName: "Himani",
          lastName: "Verma",
          username: "himaniverma",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
        },
        {
          firstName: "Pranjalika",
          lastName: "Pradhan",
          username: "pranjalikapradhan",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/pranjalikapradhan_yjm3t3.jpg",
        },
        {
          firstName: "Krati",
          lastName: "Singh",
          username: "kratisingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
        },
        {
          firstName: "Karan",
          lastName: "Singh",
          username: "karansingh",
          profileImage:
            "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957143/devgram/users/karansingh_bkeyyx.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "scottwilson",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/scottwilson_knrmte.jpg",
    createdAt: new Date("Apr 02, 2022 20:10:05"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "stephaniedawn",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
        text: "Revelation...",
        createdAt: new Date("May 12, 2022 22:42:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "teresamaddison",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
        text: "Hahaha.....",
        createdAt: new Date("May 13, 2022 16:15:05"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
