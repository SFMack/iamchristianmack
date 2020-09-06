import marketingOgImg from "../images/marketingOgScreenshot.png";
import chatApplicationImg from "../images/chatApplicationScreenshot.png";

// passing an array of objects to projects component
// to control carousel items dynamically
const CarouselItems = [
  {
    imageSrc: marketingOgImg,
    projectName: "Marketing OG Revamp",
    projectDescription: "Here is my lengthy project description",
    altText: "Marketing OG Website Creation Exhibition",
    source: "https://www.google.com",
    live: "https://www.marketingog.com/",
  },
  {
    imageSrc: chatApplicationImg,
    projectName: "React Chat App with Socket.io",
    projectDescription: "Here is my lengthy project description",
    altText: "Second slide",
    source: "https://www.google.com",
    live: "https://hopeful-mccarthy-478463.netlify.app/",
  },
  // {
  //   imageSrc: "https://via.placeholder.com/800x400",
  //   projectName: "Project 3",
  //   projectDescription: "Here is my lengthy project description",
  //   altText: "Third slide",
  //   githubLink: "https://www.google.com",
  //   srcCodeLink: "https://www.github.com/SFMack",
  // },
];

export default CarouselItems;
