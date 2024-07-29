import { DiCss3, DiReact, DiHtml5  } from "react-icons/di";

export const projects = [
  {
    title: "Cryto Tracker",
    description:
      "This is a CryptoPlace Crypto Tracker built using CoinGecko's API for real-time crypto analytics. The top 20 Cryptos are presented in a nice UI table with a search bar to navigate through over 250 Cryptos. The currency can be changed via the drop down menu in the navbar. Upon clicking a Crypto, a graph will be displayed along with other statistics using google-graphs    ",
    image: "/images/cryptoTracker.jpg",
    tags: [<DiReact size="5rem" color="#15A3C7" />, "  " , <DiCss3 size="5rem" color="#15A3C7"/>,"      ", <DiHtml5 size="5rem" color="#FF5733" />],
    source: "https://kaifscryptoplace.netlify.app/",
    visit: "https://github.com/KaifAli27/Crypto-Tracker",
    id: 0,
  },
  {
    title: "Project 2",
    description:
      "This is a code repository for the corresponding Application This is a code repository for the corresponding ApplicationThis is a code repository for the corresponding ApplicationThis is a code repository for the corresponding Application This is a code repository for the corresponding Application",
    image: "/images/2.png",
    tags: ["React", "JavaScript"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "Project 3",
    description:
      "This is a code repository for the corresponding Application This is a code repository for the corresponding Application This is a code repository for the corresponding Application This is a code repository for the corresponding Application",
    image: "/images/3.jpg",
    tags: ["React", "WebRTC"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
  {
    title: "Project 4",
    description:
      "This is a code repository for the corresponding Application This is a code repository for the corresponding Application This is a code repository for the corresponding ApplicationThis is a code repository for the corresponding Application",
    image: "/images/4.jpg",
    tags: ["React", "ChatEngine", "Firebase"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
];

export const TimeLineData = [
  { year: "Sept 2020", text: "Software Engineering @ Carleton University " },
  { year: "May 2021", text: "Data Engineering Intern @ Knockri" },
  { year: "May 2022", text: "Software Developer Intern @ Heady" },
  { year: "May 2023", text: "Software Developer Intern @ SkyTrac" },
  { year: "2024", text: "..." },
  { year: "Dec 2025", text: "Expected Graduation (B.Eng)" },
];
