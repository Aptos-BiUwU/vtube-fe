import { aptosClient } from "./aptosClient";
import Token from "@/public/assets/icons/biuwu_coin.svg"

export const streamers = [
  {
    wallet: "0x5cb66529acf4a2d38067eac1db073fc61412b51a53f0ae976de6c7f21cc36656",
    name: "Mika",
    uid: "mika",
    campaign: "2",
    banner: "/frontend/public/assets/images/mika_banner.png",
    coinAddress: "0x11187299e3764343024296aea35cadc854eb0dff01b9d9647234a27aadcf78b4",
    battleId: "2",
    streamUrl: "/frontend/public/assets/video/mika.mp4",
    game: "Chating",
    isBattle: true,
    avatar:
      "https://yt3.googleusercontent.com/4XqAP7C0r0ZNZFAQfjo2gBh1wgpJJQuyyaxqy-qaCc3mHhPhz8KVE-TsPhqlcje4TjiyS8TrDw=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl:
      "https://i.ytimg.com/vi/cGM_RapPy28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_n30uDwWlDuQqv9l6l_GGRmcmlA",
    // isPrivate: true,
    recentStreams: [
      {
        thumbnail:
          "https://i.ytimg.com/vi/SWNJiH37OuM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCT2Fu79g_gEmAVj3hLcTC40OmOkw",
        name: "Chatting with viewers",
        duration: "1:26:00",
        views: "1.2k",
        time: "2 days ago",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/gwa0dldTd-g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3aLr1sUgS8ZOU-goE6zf_y17v_Q",
        name: "Playing Co-op games",
        duration: "49:27",
        views: "2.3k",
        time: "3 days ago",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/Q_8JV73NKRM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0DK1VDkbAAufdZlfMKeir3wmvNw",
        name: "Fighting boss",
        duration: "1:00:00",
        views: "1.5k",
        time: "4 days ago",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/Q_8JV73NKRM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0DK1VDkbAAufdZlfMKeir3wmvNw",
        name: "Fighting boss",
        duration: "1:00:00",
        views: "1.5k",
        time: "4 days ago",
      },
    ],
    token: {
      symbol: "HKS",
      name: "Mika Token",
      price: "$0.026",
      hour: "0.2",
      day: "0.5",
      fdv: "$6.5B",
      volume: "$700.5M",
    },
    about:
      "Hi, I'm Mika - your energetic and super cute virtual buddy! I love playing games, singing, and just having fun while keeping things cozy and positive. You'll often find me geeking out over cute outfits, sharing wholesome vibes, and bringing lots of laughter.",
  },
  {
    wallet: "0x78f4a3964fdd729150b897d8f55f1cc10ccc392b3739d3364c496f17ede3b1f3",
    name: "Hoshino",
    uid: "hoshino",
    campaign: "3",
    coinAddress: "0x5c06977a52a6d2390bd5368151ce8fd19e5f50e0c3512e69bd8247d8274e397c",
    banner: "/frontend/public/assets/images/hoshino_banner.png",
    battleId: "2",
    streamUrl: "/frontend/public/assets/video/hoshino.mp4",
    game: "ASMR & Gaming",
    avatar:
      "https://yt3.ggpht.com/OK6xN6vJFmBvRR9PWczR27mDOj_yvE-EUJakmJK4MT-OXJBLlL3mKgc3xu9I1vrbZiLZY2Zj=s176-c-k-c0x00ffffff-no-rj-mo",
    thumbnailUrl:
      "https://i.ytimg.com/vi/s261M8vvMgM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfBBXCMKZD9A3bt-URpt2dT12GNQ",
    recentStreams: [
      {
        thumbnail:
          "https://i.ytimg.com/vi/obrj7cmE26g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQbpbpuBfxKNJTTK1h98RCFR30BA",
        name: "New challenges",
        duration: "2:03:11",
        views: "135k",
        time: "yesterday",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/PPpLuqvsRbk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBxLhAJDNh4bWq7-gfg8ZnoBY1vg",
        name: "24 Hour ASMR",
        duration: "24:21:29",
        views: "81K",
        time: "3 days ago",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/JzhSZjt5HAk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDF6GmGAQX5fRiT_Bvnq8hXFhmthg",
        name: "Music!",
        duration: "1:24:15",
        views: "104k",
        time: "5 days ago",
      },
    ],
    token: {
      symbol: "HSN",
      name: "Hoshino Token",
      price: "$0.483",
      hour: "-0.8",
      day: "3.2",
      fdv: "$10B",
      volume: "$1.2B",
    },
    isBattle: true,
    about:
      "Hey there! Hoshino's here - your lovable, fun-filled virtual pal! I'm all about spreading joy through games, cute chats, and good vibes. Whether I'm diving into exciting adventures or sharing everyday moments, I'm here to brighten your day with my kawaii energy!",
  },
  {
    name: "Kiara",
    uid: "kiara",
    game: "Watch together",
    avatar:
      "https://yt3.googleusercontent.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl:
      "https://i.ytimg.com/vi/qUIG4ng54hc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdkBNnfJcu1O0btYYPhd4Xi_PIhA",
    coinAddress: "0x0efcf0c478246f148e9c7c9e5c289040e609c969a3af64a413d9169167f3d711",
    streamUrl: "/frontend/public/assets/video/kiara.mp4",
    campaign: "4",
    isPrivate: true,
  },
  {
    name: "Shiori",
    uid: "shiori",
    game: "Horrors",
    avatar:
      "https://yt3.googleusercontent.com/ZlovVsPyh8NgS37S4dfONiCBySiboGPbT9cYuirb8JM3JhSnqlpJk-8SQUEA7jPfqXpMvjaa=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl:
      "https://i.ytimg.com/vi/_HtWxCc7JxA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBl3e3IbiEtEIlVDaxtAy4F-FC_jg",
  },
  {
    name: "Izuru",
    uid: "izuru",
    game: "Valorant",
    avatar: "https://yt3.googleusercontent.com/dlq5H2SBaaAq9ilOfgGm0QvcVGEieSICsdk0Hv6oADZFn5Q0ctV1nxNAiQAJiS8u_svx5YlasQE=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/nyrgf7YA0Uo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBL3QqZ6jf1Y4jmohDtGlqJaQNUlw"
  },
  {
    name: "Laplus",
    uid: "laplus",
    game: "Co-op games",
    avatar: "https://yt3.googleusercontent.com/roGS60A8a_lDbVakIg1JU3u3hbtjHSTilMGHMizuPKh7tuoY2nl46raxuW2f_83IKFGMjL6Z=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/pYEfOPIurcE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABwW2jMZlxXWvJ-s9Rwm7kfF5Yiw"
  },
  {
    name: "Koyori",
    uid: "koyori",
    game: "Simulator",
    avatar: "https://yt3.googleusercontent.com/WO7ItKNmy6tW_NQ82g8c1y74CZSw6GsSdynsE5s2csuEok2fHRrAaGcBV3JJO-2BxEOXXA8lvw=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/1g2bQnWe3HU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClA9QabQUnwSOJksxlKdvYw3nK9A"
  },
  {
    name: "Sora",
    uid: "sora",
    game: "The legends of Zelda",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_kT9PiLS8BWANuBdGG_-GHsNZxFqmF0YjMnzK55jISdca4=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/HrZYCpc3aso/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2dzcoVUQwIXTRH5SnWZtVuGcw2g"
  },
  {
    name: "Roboco",
    uid: "roboco",
    game: "Live Q&A",
    avatar: "https://yt3.googleusercontent.com/GF0wbwZvZAGzYg8s8d6Yh1BDcWAE9UmLAh2uf3IMJ5l_ESi3sWeRqk2XfhW3IgzMeliHpt4cAw=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/8TZYsBLTT80/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAa16a5ZH96IN5XRvSQyVGhCGIgg"
  },
  {
    name: "Suisei",
    uid: "suisei",
    game: "Grand Theft Auto V",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_kLDBK5ksSvk5-XJ6S8e0kWfjy7mVl3jyUkgDeMQ7rlCpU=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/F6TzjH6Qtac/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6J-IFtmZnMSbXnQCxgNBkJ2etfw"
  },
  {
    name: "Miko",
    uid: "miko",
    game: "Liar's Bar",
    avatar: "https://yt3.googleusercontent.com/gxXHmXJq_kkZ0bvTmz7R1deyOAV44zZr2keaF0ojSq7MeiOGLSzFTCoYgYR4PGDWTCoLR7eK=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/6-9AHqQoQcA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgm0QrAKMk5RsU3GVZP-XPhaBC5Q"
  },
  {
    name: "Fubuki",
    uid: "fubuki",
    game: "Omoriii",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_mGXEeXXCCPh-sl2jKYbYpLBuCsjEGDgJaL5RQziYhyugQ=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/Xrw7S-sYmOE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVLKMV_giwze_7IatLsUlRy9CGQg"
  },
  {
    name: "Matsuri",
    uid: "matsuri",
    game: "Super Mario Party!",
    avatar: "https://yt3.googleusercontent.com/wIqM7MWDN94PoibzPmeog7WOt8jFKTKZBOBFEbLBaiUAdKLwoqdLC_CN7B7Gby-FWH-076rN=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/rsRHK869f_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFPYoe5od-skziKaWAI5wUTOKl_w"
  },
  {
    name: "Shion",
    uid: "shion",
    game: "Sing & Chat",
    avatar: "https://yt3.googleusercontent.com/V3GVqD-sYadScSd8QYW4x1QTRfu2RyUNyKWVRb0IJxX0gj2PV6xH32d_BJHn3l0fouPLUw6Ref0=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/RpAACYRxYy8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAh3E4t8KJbNMXX7xL0MHSh93iPHg"
  },
  {
    name: "Aqua",
    uid: "aqua",
    game: "Valorant",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_kaZLtKaya9TSJr3M4lpzV95R2rWdQtGk67fwedroUfSnE=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/29o7gd8kgoc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUEW5H0S1EbvTVsOLEOhKVO6Jo1Q"
  },
  {
    name: "Hakua Lira",
    uid: "hakua",
    game: "Racing Simulator",
    avatar: "https://yt3.googleusercontent.com/Ns15zJ-FlKgvJ7TbEIXs6rtPn-Ft4OIUMJR6ff-yX4EN9Zmv3qfxZVu24m0mF2zKUbdioOrNLDE=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/3F87QWiISBg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuYeVUHJ-LTaVhWEbt1seiyo7tGg"
  },
  {
    name: "Amaya",
    uid: "amaya",
    game: "League of Legends",
    avatar: "https://yt3.googleusercontent.com/Z5-blM3tzwkjPLe-6yG01CCjExRyNRauqgXq8qGOfE3lZOUgwqfypOwWYcFFewy8kbbtpRtUBCs=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/BTz6wxffU8Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6wh8yzLmlZp3fqG-jSWxFmu70rg"
  },
  {
    name: "Tentei Forte",
    uid: "tentei",
    game: "Watch together",
    avatar: "https://yt3.googleusercontent.com/Y5bTMHiUe_0aXaDhC-h3fEQ2Xnm5QqVrdy_Qdw_HHvpkcewhavrw24DGGsmhARcvZ3iZd2LG=s160-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/LxS08Y-zaqs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDb26zw0gKBx5w0jErMQMNwAVXH0g"
  }
];

export const tokens = [
  {
    symbol: "BUU",
    address: "0x5cb66529acf4a2d38067eac1db073fc61412b51a53f0ae976de6c7f21cc36656",
    name: "BiUwU Token",
    icon: Token,
  },
  {
    symbol: "MIK",
    address: "0x11187299e3764343024296aea35cadc854eb0dff01b9d9647234a27aadcf78b4",
    name: "Mika Token",
    icon: "https://yt3.googleusercontent.com/4XqAP7C0r0ZNZFAQfjo2gBh1wgpJJQuyyaxqy-qaCc3mHhPhz8KVE-TsPhqlcje4TjiyS8TrDw=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "HSN",
    address: "0x5c06977a52a6d2390bd5368151ce8fd19e5f50e0c3512e69bd8247d8274e397c",
    name: "Hoshino Token",
    icon: "https://yt3.ggpht.com/OK6xN6vJFmBvRR9PWczR27mDOj_yvE-EUJakmJK4MT-OXJBLlL3mKgc3xu9I1vrbZiLZY2Zj=s176-c-k-c0x00ffffff-no-rj-mo"
  },
  {
    symbol: "KIA",
    address: "",
    name: "Kiara Token",
    icon: "https://yt3.googleusercontent.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "SHI",
    address: "",
    name: "Shiori Token",
    icon: "https://yt3.googleusercontent.com/ZlovVsPyh8NgS37S4dfONiCBySiboGPbT9cYuirb8JM3JhSnqlpJk-8SQUEA7jPfqXpMvjaa=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "IZU",
    address: "",
    name: "Izuru Token",
    icon: "https://yt3.googleusercontent.com/dlq5H2SBaaAq9ilOfgGm0QvcVGEieSICsdk0Hv6oADZFn5Q0ctV1nxNAiQAJiS8u_svx5YlasQE=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "LAP",
    address: "",
    name: "Laplus Token",
    icon: "https://yt3.googleusercontent.com/roGS60A8a_lDbVakIg1JU3u3hbtjHSTilMGHMizuPKh7tuoY2nl46raxuW2f_83IKFGMjL6Z=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "KOY",
    address: "",
    name: "Koyori Token",
    icon: "https://yt3.googleusercontent.com/WO7ItKNmy6tW_NQ82g8c1y74CZSw6GsSdynsE5s2csuEok2fHRrAaGcBV3JJO-2BxEOXXA8lvw=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "SOR",
    address: "",
    name: "Sora Token",
    icon: "https://yt3.googleusercontent.com/ytc/AIdro_kT9PiLS8BWANuBdGG_-GHsNZxFqmF0YjMnzK55jISdca4=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "ROB",
    address: "",
    name: "Roboco Token",
    icon: "https://yt3.googleusercontent.com/GF0wbwZvZAGzYg8s8d6Yh1BDcWAE9UmLAh2uf3IMJ5l_ESi3sWeRqk2XfhW3IgzMeliHpt4cAw=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "SUI",
    address: "",
    name: "Suisei Token",
    icon: "https://yt3.googleusercontent.com/ytc/AIdro_kLDBK5ksSvk5-XJ6S8e0kWfjy7mVl3jyUkgDeMQ7rlCpU=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "MIK",
    address: "",
    name: "Miko Token",
    icon: "https://yt3.googleusercontent.com/gxXHmXJq_kkZ0bvTmz7R1deyOAV44zZr2keaF0ojSq7MeiOGLSzFTCoYgYR4PGDWTCoLR7eK=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "FUB",
    address: "",
    name: "Fubuki Token",
    icon: "https://yt3.googleusercontent.com/ytc/AIdro_mGXEeXXCCPh-sl2jKYbYpLBuCsjEGDgJaL5RQziYhyugQ=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "MAT",
    address: "",
    name: "Matsuri Token",
    icon: "https://yt3.googleusercontent.com/wIqM7MWDN94PoibzPmeog7WOt8jFKTKZBOBFEbLBaiUAdKLwoqdLC_CN7B7Gby-FWH-076rN=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "SHI",
    address: "",
    name: "Shion Token",
    icon: "https://yt3.googleusercontent.com/V3GVqD-sYadScSd8QYW4x1QTRfu2RyUNyKWVRb0IJxX0gj2PV6xH32d_BJHn3l0fouPLUw6Ref0=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "AQU",
    address: "",
    name: "Aqua Token",
    icon: "https://yt3.googleusercontent.com/ytc/AIdro_kaZLtKaya9TSJr3M4lpzV95R2rWdQtGk67fwedroUfSnE=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "HAK",
    address: "",
    name: "Hakua Token",
    icon: "https://yt3.googleusercontent.com/Ns15zJ-FlKgvJ7TbEIXs6rtPn-Ft4OIUMJR6ff-yX4EN9Zmv3qfxZVu24m0mF2zKUbdioOrNLDE=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "AMA",
    address: "",
    name: "Amaya Token",
    icon: "https://yt3.googleusercontent.com/Z5-blM3tzwkjPLe-6yG01CCjExRyNRauqgXq8qGOfE3lZOUgwqfypOwWYcFFewy8kbbtpRtUBCs=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    symbol: "TEN",
    address: "",
    name: "Tentei Token",
    icon: "https://yt3.googleusercontent.com/Y5bTMHiUe_0aXaDhC-h3fEQ2Xnm5QqVrdy_Qdw_HHvpkcewhavrw24DGGsmhARcvZ3iZd2LG=s160-c-k-c0x00ffffff-no-rj"
  },
];

export const chats = [
  {
    uid: "hikuso",
    messages: [
      {
        id: "1",
        sender: "hikuso",
        content: "Hello",
        timestamp: "2022-03-01T08:00:00Z",
      },
      {
        id: "2",
        sender: "wildeuth",
        content: "Hi",
        timestamp: "2022-03-01T08:01:00Z",
      },
      {
        id: "3",
        sender: "hikuso",
        content: "How are you?",
        timestamp: "2022-03-01T08:02:00Z",
      },
    ],
  },
];

export const users = [
  {
    wallet: "0x49f8b871ea822a0502eef51e4ce5575e55ce0efadf2b64b946dc316566d10051",
    name: "winprn",
  },
];

export const categories = [
  {
    name: "ASMR",
    image:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/462558701_567259562486320_3678509100982494859_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=KM7QA8VD-lcQ7kNvgGYh76x&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AJ7Fw3I-dupfVvHz6H4iz8h&oh=03_Q7cD1QFSRoafcaEjjQSiq1hTOvSkEFwjx76DpaU_wCJb9LQiAA&oe=67362447",
  },
  {
    name: "Wuthering Waves",
    image:
      "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/441013682_2349333685416259_2836216971090538702_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=eZv19po2tWgQ7kNvgHtariu&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=AgqGcOYe8owaO8Jl_X219sW&oh=03_Q7cD1QGRhhguE84iuBr_F9HLKMbbF7D1x36Xc52R4ENnpQgcNA&oe=67361179",
  },
  {
    name: "FGO",
    image:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/420252091_367519126222606_6207590237237596392_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=82NI9vifPzEQ7kNvgHqCny6&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AX1NnO-kNBQNPKkYeXWedGd&oh=03_Q7cD1QF0exTRl9hBH5VQgeyb5NupOEcr_BDl_Lb9DjVN9o2FBg&oe=67361643",
  },
  {
    name: "HI 3",
    image:
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/462545927_531103986195581_5258463023914986797_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=KJLaEQQPmvcQ7kNvgFYlQPQ&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=AjRQP6TNlH38Su-cKGbQ6mi&oh=03_Q7cD1QEG1b37fYSa8vat87hyAlyzD36LiPfmDsdZ-qkFR6h4FA&oe=67360EC4",
  },
];

export const getRandomCategory = () => {
  const result = new Set();
  const length = Math.floor(Math.random() * 4) + 1;
  for (let i = 0; i < length; i++) {
    result.add(categories[Math.floor(Math.random() * categories.length)]);
  }

  return result;
};

// export const leaderboards = [
//   {
//     name: "Mika",
//     subscribers: "9.4k",
//     totalEarnings: "1.2M",
//     fanTokenPrice: "$0.026",
//     avatar:
//       "https://yt3.googleusercontent.com/4XqAP7C0r0ZNZFAQfjo2gBh1wgpJJQuyyaxqy-qaCc3mHhPhz8KVE-TsPhqlcje4TjiyS8TrDw=s160-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     name: "Hoshino",
//     subscribers: "8.2k",
//     totalEarnings: "1.5M",
//     fanTokenPrice: "$0.483",
//     avatar:
//       "https://yt3.ggpht.com/OK6xN6vJFmBvRR9PWczR27mDOj_yvE-EUJakmJK4MT-OXJBLlL3mKgc3xu9I1vrbZiLZY2Zj=s176-c-k-c0x00ffffff-no-rj-mo",
//   },
//   {
//     name: "Kiara",
//     subscribers: "7.5k",
//     totalEarnings: "1.1M",
//     fanTokenPrice: "$0.004",
//     avatar:
//       "https://yt3.googleusercontent.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s160-c-k-c0x00ffffff-no-rj",
//   },
//   {
//     name: "Shiori",
//     subscribers: "6.3k",
//     totalEarnings: "900k",
//     fanTokenPrice: "$0.035",
//     avatar:
//       "https://yt3.googleusercontent.com/ZlovVsPyh8NgS37S4dfONiCBySiboGPbT9cYuirb8JM3JhSnqlpJk-8SQUEA7jPfqXpMvjaa=s160-c-k-c0x00ffffff-no-rj",
//   },
// ];

export const leaderboards = [
  {
    name: "Hoshino",
    subscribers: "10.2k",
    totalEarnings: "1.5M",
    fanTokenPrice: "$0.483",
    avatar: "https://yt3.ggpht.com/OK6xN6vJFmBvRR9PWczR27mDOj_yvE-EUJakmJK4MT-OXJBLlL3mKgc3xu9I1vrbZiLZY2Zj=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    name: "Mika",
    subscribers: "9.4k",
    totalEarnings: "1.2M",
    fanTokenPrice: "$0.026",
    avatar: "https://yt3.googleusercontent.com/4XqAP7C0r0ZNZFAQfjo2gBh1wgpJJQuyyaxqy-qaCc3mHhPhz8KVE-TsPhqlcje4TjiyS8TrDw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Kiara",
    subscribers: "8.8k",
    totalEarnings: "1.1M",
    fanTokenPrice: "$0.004",
    avatar: "https://yt3.googleusercontent.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Shiori",
    subscribers: "7.6k",
    totalEarnings: "900k",
    fanTokenPrice: "$0.035",
    avatar: "https://yt3.googleusercontent.com/ZlovVsPyh8NgS37S4dfONiCBySiboGPbT9cYuirb8JM3JhSnqlpJk-8SQUEA7jPfqXpMvjaa=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Izuru",
    subscribers: "7.1k",
    totalEarnings: "850k",
    fanTokenPrice: "$0.065",
    avatar: "https://yt3.googleusercontent.com/dlq5H2SBaaAq9ilOfgGm0QvcVGEieSICsdk0Hv6oADZFn5Q0ctV1nxNAiQAJiS8u_svx5YlasQE=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Laplus",
    subscribers: "6.9k",
    totalEarnings: "750k",
    fanTokenPrice: "$0.030",
    avatar: "https://yt3.googleusercontent.com/roGS60A8a_lDbVakIg1JU3u3hbtjHSTilMGHMizuPKh7tuoY2nl46raxuW2f_83IKFGMjL6Z=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Koyori",
    subscribers: "6.2k",
    totalEarnings: "700k",
    fanTokenPrice: "$0.021",
    avatar: "https://yt3.googleusercontent.com/WO7ItKNmy6tW_NQ82g8c1y74CZSw6GsSdynsE5s2csuEok2fHRrAaGcBV3JJO-2BxEOXXA8lvw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Sora",
    subscribers: "5.9k",
    totalEarnings: "650k",
    fanTokenPrice: "$0.010",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_kT9PiLS8BWANuBdGG_-GHsNZxFqmF0YjMnzK55jISdca4=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Roboco",
    subscribers: "5.5k",
    totalEarnings: "600k",
    fanTokenPrice: "$0.018",
    avatar: "https://yt3.googleusercontent.com/GF0wbwZvZAGzYg8s8d6Yh1BDcWAE9UmLAh2uf3IMJ5l_ESi3sWeRqk2XfhW3IgzMeliHpt4cAw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Suisei",
    subscribers: "5.1k",
    totalEarnings: "580k",
    fanTokenPrice: "$0.045",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_kLDBK5ksSvk5-XJ6S8e0kWfjy7mVl3jyUkgDeMQ7rlCpU=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Miko",
    subscribers: "4.9k",
    totalEarnings: "550k",
    fanTokenPrice: "$0.028",
    avatar: "https://yt3.googleusercontent.com/gxXHmXJq_kkZ0bvTmz7R1deyOAV44zZr2keaF0ojSq7MeiOGLSzFTCoYgYR4PGDWTCoLR7eK=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Fubuki",
    subscribers: "4.5k",
    totalEarnings: "520k",
    fanTokenPrice: "$0.040",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_mGXEeXXCCPh-sl2jKYbYpLBuCsjEGDgJaL5RQziYhyugQ=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Matsuri",
    subscribers: "4.2k",
    totalEarnings: "500k",
    fanTokenPrice: "$0.025",
    avatar: "https://yt3.googleusercontent.com/wIqM7MWDN94PoibzPmeog7WOt8jFKTKZBOBFEbLBaiUAdKLwoqdLC_CN7B7Gby-FWH-076rN=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Shion",
    subscribers: "4.0k",
    totalEarnings: "480k",
    fanTokenPrice: "$0.032",
    avatar: "https://yt3.googleusercontent.com/V3GVqD-sYadScSd8QYW4x1QTRfu2RyUNyKWVRb0IJxX0gj2PV6xH32d_BJHn3l0fouPLUw6Ref0=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Aqua",
    subscribers: "3.8k",
    totalEarnings: "460k",
    fanTokenPrice: "$0.020",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_kaZLtKaya9TSJr3M4lpzV95R2rWdQtGk67fwedroUfSnE=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Hakua Lira",
    subscribers: "3.6k",
    totalEarnings: "440k",
    fanTokenPrice: "$0.038",
    avatar: "https://yt3.googleusercontent.com/Ns15zJ-FlKgvJ7TbEIXs6rtPn-Ft4OIUMJR6ff-yX4EN9Zmv3qfxZVu24m0mF2zKUbdioOrNLDE=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Amaya",
    subscribers: "3.2k",
    totalEarnings: "420k",
    fanTokenPrice: "$0.017",
    avatar: "https://yt3.googleusercontent.com/Z5-blM3tzwkjPLe-6yG01CCjExRyNRauqgXq8qGOfE3lZOUgwqfypOwWYcFFewy8kbbtpRtUBCs=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Tentei Forte",
    subscribers: "3.0k",
    totalEarnings: "400k",
    fanTokenPrice: "$0.023",
    avatar: "https://yt3.googleusercontent.com/Y5bTMHiUe_0aXaDhC-h3fEQ2Xnm5QqVrdy_Qdw_HHvpkcewhavrw24DGGsmhARcvZ3iZd2LG=s160-c-k-c0x00ffffff-no-rj",
  },
];

export const collections = [
  {
    uid: "mika",
    name: "First collection",
    sc_name: "Mika Collection 1",
    floor: "0.04",
    volume: "2,133",
    image: "/frontend/public/assets/images/mika/collection1.jpg",
    bestOffer: "0.05",
    listed: "2%",
    owner: "2%",
    items: [
      {
        id: "1",
        name: "Item 1",
        floor: "0.2",
        volume: "12",
        image: "/frontend/public/assets/images/mika/item1.1.jpg",
      },
      {
        id: "2",
        name: "Item 2",
        floor: "0.034",
        volume: "7",
        image: "/frontend/public/assets/images/mika/item1.2.jpg",
      },
      {
        id: "3",
        name: "Item 3",
        floor: "0.025",
        volume: "4",
        image: "/frontend/public/assets/images/mika/item1.3.jpg",
      },
    ],
  },
  {
    uid: "mika",
    name: "Second collection",
    sc_name: "Mika Collection 2",
    floor: "0.6",
    volume: "34",
    image: "/frontend/public/assets/images/mika/collection2.jpg",
    bestOffer: "0.7",
    listed: "3%",
    owner: "3%",
    items: [
      {
        id: "1",
        name: "Item 1",
        floor: "0.4",
        volume: "19",
        image: "/frontend/public/assets/images/mika/item2.1.jpg",
      },
      {
        id: "2",
        name: "Item 2",
        floor: "0.17",
        volume: "11",
        image: "/frontend/public/assets/images/mika/item2.2.jpg",
      },
    ],
  },
  {
    uid: "hoshino",
    name: "First collection",
    floor: "1.3",
    volume: "203",
    image: "/frontend/public/assets/images/hoshino/collection1.jpg",
    bestOffer: "0.7",
    listed: "3%",
    owner: "3%",
    items: [
      {
        name: "Item 1",
        floor: "0.2",
        volume: "19",
        image: "/frontend/public/assets/images/hoshino/item1.1.jpg",
      },
      {
        name: "Item 2",
        floor: "0.4",
        volume: "15",
        image: "/frontend/public/assets/images/hoshino/item1.2.jpg",
      },
    ],
  },
  {
    uid: "hoshino",
    name: "Second collection",
    floor: "1.3",
    volume: "203",
    image: "/frontend/public/assets/images/hoshino/collection2.jpg",
    bestOffer: "0.7",
    listed: "3%",
    owner: "3%",
    items: [
      {
        name: "Item 1",
        floor: "0.2",
        volume: "19",
        image: "/frontend/public/assets/images/hoshino/item2.1.jpg",
      },
      {
        name: "Item 2",
        floor: "0.4",
        volume: "15",
        image: "/frontend/public/assets/images/hoshino/item2.2.jpg",
      },
      {
        name: "Item 3",
        floor: "0.4",
        volume: "15",
        image: "/frontend/public/assets/images/hoshino/item2.3.jpg",
      },
    ],
  },
];

export const getCollections = (uid: string) => {
  return collections.filter((collection) => collection.uid === uid.toLowerCase());
};

export const getItems = async (uid: string, collection_index: number, collection: string) => {
  const aptos = aptosClient();
  const listedCollections = await aptos.view({ payload: {
    function: `${NFT_WALLET}::digital_asset::get_all_collection_listed`,
    functionArguments: [],
    typeArguments: [],
  }})

  const listedItems = await aptos.view({ payload: {
    function: `${NFT_WALLET}::digital_asset::get_all_token_id_listed`,
    functionArguments: [],
    typeArguments: [],
  }})

  const collections = getCollections(uid);

  const result = [];
  if (!collection) {
    return result;
  }
  console.log(collections[collection_index].items);


  (listedCollections[0] as Array<string>).forEach((listedCollection, index) => {
    if (listedCollection.includes(collection)) {
      console.log(index, listedItems[0][index]);

      result.push(collections[collection_index].items.filter(item => item.id === listedItems[0][index])[0]);
    }
  })

  console.log(result);
  return result;
}

export const NFT_WALLET = "0x914b6a301adf912cc838c6808448c3c3f3ad5fa93bd98e32726f30447fd3039c"
