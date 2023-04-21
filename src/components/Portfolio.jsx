import React from "react";
import museum from "../assets/portfolio/museum.png";
import leads from "../assets/portfolio/LeadsTracker.png";
import pingPong from "../assets/portfolio/pingPong.png";
import ExpenseTracker from "../assets/portfolio/expense.png";
import simon from "../assets/portfolio/simon.png";
import foodOrder from "../assets/portfolio/foodOrder.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: museum,
      gitlink: 'https://github.com/SmritiV23/Museum-Of-Candy',
    },
    {
      id: 2,
      src: pingPong,
      gitlink: 'https://github.com/SmritiV23/Ping-Pong-Game',
      demo:''
    },
    {
      id: 3,
      src: leads,
      gitlink:'https://github.com/SmritiV23/Leads-Tracker',
      demo: 'https://github.com/SmritiV23/Leads-Tracker'
    },
    {
      id: 4,
      src: simon,
      gitlink:'https://github.com/SmritiV23/Simon-Game',
      demo:'https://voluble-pothos-5c8f52.netlify.app/'
    },
    {
      id: 5,
      src: ExpenseTracker,
      gitlink:'https://github.com/SmritiV23/ExpenseTracker',
      demo: 'https://expensetracker7.netlify.app/'
    },
    {
      id: 6,
      src: foodOrder,
      gitlink:'https://github.com/SmritiV23/ReactMeals',
      demo:'https://github.com/SmritiV23/ReactMeals'
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
          {portfolios.map(({ id, src,gitlink,demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
              
                <a href={gitlink} target="_blank">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
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
