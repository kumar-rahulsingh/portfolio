import React from "react";
import studyNotion from "../assets/portfolio/studyNotion.png";
import women from "../assets/portfolio/womem.png";
import netflix from "../assets/portfolio/netflix.png";
import Shopshy from "../assets/portfolio/Shopshy.png";
import resto from "../assets/portfolio/resto.png";
import health from "../assets/portfolio/health.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: studyNotion,
      demo: "https://rahulstudynotion.netlify.app", 
      code: "https://github.com/kumar-rahulsingh/studyNotion", 
    },
    {
      id: 2,
      src: Shopshy,
      demo: "https://shop-shy.netlify.app", 
      code: "https://github.com/kumar-rahulsingh/React-shop", 
    },
    
    {
      id: 3,
      src: health,
      demo: "https://healthies-hub.netlify.app/", 
      code: "https://github.com/kumar-rahulsingh/HEALTH-HUB",
    },
    
    {
      id: 4,
      src: resto,
      demo: "https://foodiees.netlify.app/", 
      code: "https://github.com/kumar-rahulsingh/Foodies", 
    },
    {
      id: 5,
      src: women,
      demo: "https://rahule-shop.netlify.app", 
      code: "https://github.com/kumar-rahulsingh/e-shop", 
    },
    {
      id: 3,
      src: netflix,
      demo: "https://netfliexclon.netlify.app", 
      code: "https://github.com/kumar-rahulsingh/Netflixclone", 
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
