import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "niihara_megumu",
    name: "Megu",
    role: "Engineer",
    bio: "生まれも育ちも宮崎県/トーフラボのEngineer",
    avatarSrc: "/avatars/niihara_megumu.jpg",
    sources: [
      "https://qiita.com/niihara_megumu/feed",
      "https://megumu.me/feed",
    ],
    includeUrlRegex: "qiita.com|megumu.me",
    twitterUsername: "lmgm_m",
    githubUsername: "niiharamegumu",
    websiteUrl: "https://megumu.me/",
    jobWebsiteUrl: "https://tofulab.jp/",
  },
  {
    id: "member_1",
    name: "Sample",
    role: "Engineer",
    bio: "サンプル",
    avatarSrc: "/avatars/member_1.jpg",
    sources: [
      "https://qiita.com/niihara_megumu/feed",
    ],
    includeUrlRegex: "qiita.com",
    twitterUsername: "lmgm_m",
    githubUsername: "niiharamegumu",
    websiteUrl: "https://megumu.me/",
    jobWebsiteUrl: "https://tofulab.jp/",
  },
];
