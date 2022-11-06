/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.userapi.com",
      },
    ],
  },
};

// domains: [
//   "sun9-87.userapi.com",
//   "sun9-4.userapi.com",
//   "sun9-68.userapi.com",
//   "sun9-70.userapi.com",
//   "sun9-56.userapi.com",
//   "sun9-82.userapi.com",
//   "sun9-82.userapi.com",
//   "sun9-77.userapi.com",
//   "sun9-29.userapi.com",
//   "sun9-74.userapi.com",
//   "sun9-23.userapi.com",
//   "sun9-88.userapi.com",
//   "sun9-57.userapi.com",
//   "sun9-36.userapi.com",
//   "sun9-6.userapi.com",
//   "sun9-65.userapi.com",
//   "sun9-78.userapi.com",
//   "sun9-58.userapi.com",
//   "sun9-76.userapi.com",
//   "sun[0-9]-[0-9][0-9].userapi.com",
//   "**.userapi.com",
// ],
