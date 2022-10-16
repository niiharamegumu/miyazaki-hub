export const config = {
  siteMeta: {
    title: "Miyazaki Engineer Hub",
    teamName: "Miyazaki Engineer Blogs",
    description: "宮崎県で活動するエンジニアの集会所",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://miyazaki-e-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Members",
      href: "/members",
    },
  ],
};
