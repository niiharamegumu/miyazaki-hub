export const config = {
  siteMeta: {
    title: "Miyazaki Engineer Hub",
    teamName: "Miyazaki Engineer Blogs",
    description: "宮崎県で活躍するエンジニアたち",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://miyazaki-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://zenn.dev/catnose99/articles/cb72a73368a547756862",
    },
  ],
};
