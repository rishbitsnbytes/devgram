import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Stephanie",
    lastName: "Dawn",
    username: "stephaniedawn",
    password: "stephaniedawn123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "A Passionate Full Stack Developer",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
    website: "https://www.stephaniedawn.me/",
    followers: [
      {
        firstName: "Rishabh",
        lastName: "Rathore",
        username: "rishabhrathore",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
      },
      {
        firstName: "teresa",
        lastName: "maddison",
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
    ],
    following: [
      {
        firstName: "Rishabh",
        lastName: "Rathore",
        username: "rishabhrathore",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
      },
      {
        firstName: "teresa",
        lastName: "maddison",
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
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
      {
        firstName: "Akshay",
        lastName: "Sinha",
        username: "akshaysinha",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",
      },
      {
        firstName: "Warren",
        lastName: "Wong",
        username: "warrenwong",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957150/devgram/users/warrenwong_gbcsot.jpg",
      },
      {
        firstName: "Ansh",
        lastName: "Verma",
        username: "anshverma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957139/devgram/users/anshverma_mgrihf.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Rishabh",
    lastName: "Rathore",
    username: "rishabhrathore",
    password: "rishabhrathore123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Loves Code, Books, Coffee, and Songs in no particular order!",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
    website: "https://rishbitsnbytes.netlify.app/",
    followers: [
      {
        firstName: "Stephanie",
        lastName: "Dawn",
        username: "stephaniedawn",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
      },
      {
        firstName: "teresa",
        lastName: "maddison",
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
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
      {
        firstName: "Akshay",
        lastName: "Sinha",
        username: "akshaysinha",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",
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
    ],
    following: [
      {
        firstName: "Stephanie",
        lastName: "Dawn",
        username: "stephaniedawn",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
      },
      {
        firstName: "teresa",
        lastName: "maddison",
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
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
      {
        firstName: "Akshay",
        lastName: "Sinha",
        username: "akshaysinha",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",
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
    ],
  },
  {
    _id: uuid(),
    firstName: "Teresa",
    lastName: "Maddison",
    username: "teresamaddison",
    password: "teresamaddison123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Developer, Explorer, Travel Enthusiast!",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
    website: "https://www.teresamaddison.me/",
    followers: [
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
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
    ],
    following: [
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
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Himani",
    lastName: "Verma",
    username: "himaniverma",
    password: "himaniverma123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "UI/ UX Design | Frontend",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/himaniverma_umt1ml.jpg",
    website: "https://www.himaniverma.me/",
    followers: [
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
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
      {
        firstName: "Akshay",
        lastName: "Sinha",
        username: "akshaysinha",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",
      },
    ],
    following: [
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
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
      {
        firstName: "Akshay",
        lastName: "Sinha",
        username: "akshaysinha",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Pranjalika",
    lastName: "Pradhan",
    username: "pranjalikapradhan",
    password: "pranjalikapradhan123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Web Developer",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/pranjalikapradhan_yjm3t3.jpg",
    website: "https://www.pranjalikapradhan.me/",
    followers: [
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
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
      {
        firstName: "Akshay",
        lastName: "Sinha",
        username: "akshaysinha",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",
      },
    ],
    following: [
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
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Krati",
    lastName: "Singh",
    username: "kratisingh",
    password: "kratisingh123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Web Developer",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
    website: "https://www.kratisingh.me/",
    followers: [
      {
        firstName: "Karan",
        lastName: "Singh",
        username: "karansingh",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957143/devgram/users/karansingh_bkeyyx.jpg",
      },
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
      {
        firstName: "Akshay",
        lastName: "Sinha",
        username: "akshaysinha",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",
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
        firstName: "Rishabh",
        lastName: "Rathore",
        username: "rishabhrathore",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
      },
    ],
    following: [
      {
        firstName: "Karan",
        lastName: "Singh",
        username: "karansingh",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957143/devgram/users/karansingh_bkeyyx.jpg",
      },
      {
        firstName: "Harshit",
        lastName: "Sharma",
        username: "harshitsharma",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
      },
      {
        firstName: "Akshay",
        lastName: "Sinha",
        username: "akshaysinha",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",
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
        firstName: "Rishabh",
        lastName: "Rathore",
        username: "rishabhrathore",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957557/devgram/users/rishabhrathore_xbzgt6.png",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Karan",
    lastName: "Singh",
    username: "karansingh",
    password: "karansingh123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Software Architect | Backend",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957143/devgram/users/karansingh_bkeyyx.jpg",
    website: "https://karansingh.me/",
    followers: [
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
    ],
    following: [
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
  },
  {
    _id: uuid(),
    firstName: "Harshit",
    lastName: "Sharma",
    username: "harshitsharma",
    password: "harshitsharma123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Java | Spring Boot | Python",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/harshitsharma_muhahg.jpg",
    website: "https://harshitsharma.me/",
    followers: [
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
    ],
    following: [
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
    ],
  },
  {
    _id: uuid(),
    firstName: "Akshay",
    lastName: "Sinha",
    username: "akshaysinha",
    password: "akshaysinha123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Passionate Frontend Developer | React",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/akshaysinha_xqetbq.jpg",
    website: "https://akshaysinha.me/",
    followers: [
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
        firstName: "Krati",
        lastName: "Singh",
        username: "kratisingh",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
      },
    ],
    following: [
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
    ],
  },
  {
    _id: uuid(),
    firstName: "Ansh",
    lastName: "Verma",
    username: "anshverma",
    password: "anshverma123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Designer by passion, Fontend Engineer by profesion!",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957139/devgram/users/anshverma_mgrihf.jpg",
    website: "https://anshverma.me/",
    followers: [
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
        firstName: "Krati",
        lastName: "Singh",
        username: "kratisingh",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957144/devgram/users/kratisingh_xhorw9.jpg",
      },
    ],
    following: [
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
    ],
  },
  {
    _id: uuid(),
    firstName: "Warren",
    lastName: "Wong",
    username: "warrenwong",
    password: "warrenwong123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Developer with 7 years of experience in Mobile App Development with React Native",
    website: "https://warrenwong.me",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957150/devgram/users/warrenwong_gbcsot.jpg",
    followers: [
      {
        firstName: "Stephanie",
        lastName: "Dawn",
        username: "stephaniedawn",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957146/devgram/users/stephaniedawn_xvzzj7.jpg",
      },
      {
        firstName: "Teresa",
        lastName: "Maddison",
        username: "tersamaddison",
        profileImage:
          "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957148/devgram/users/teresamaddison_yqly61.jpg",
      },
    ],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Clarke",
    username: "johnclarke",
    password: "johnclarke123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Technical Writer, Developer Advocate",
    website: "https://johnclarke.me/",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957147/devgram/users/johnclarke_hkh4i6.jpg",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Scott",
    lastName: "Wilson",
    username: "scottwilson",
    password: "scottwilson123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Creative User Experience and Interface Designer",
    website: "https://scottwilson.me/",
    profileImage:
      "https://res.cloudinary.com/dpkrhg0er/image/upload/v1664957149/devgram/users/scottwilson_knrmte.jpg",
    followers: [
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
    ],
    following: [
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
    ],
  },
];
