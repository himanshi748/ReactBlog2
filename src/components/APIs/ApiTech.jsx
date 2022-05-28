import React, { createContext, useState } from "react";

export const tech = createContext();
const ApiTech = (props) => {
  const [technology, setTechnology] = useState([
    {
      id: 4,
      image: "images/Technology1.jpg",
      name: "DigiLocker Services",
      category: "Technology",
      description:
        " This service will make using DigiLocker even easier as you will no longer need to use a separate application for quickly downloading and producing your original documents like Aadhaar card, Driving license and others.",
      check: "Check now",
    },

    {
      id: 5,
      image: "images/Technology2.webp",
      name: "Samsung Galaxy Tab S6 Lite",
      category: "Technology",
      description:
        "Samsung Galaxy Tab S6 Lite (2022) support page has gone live on Samsung's India website. The tablet was recently launched in Italy and is the refreshed version of the 2020 Galaxy Tab S6 Lite. tSamsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, |...",
      check: "Check now",
    },

    {
      id: 6,
      image: "images/Technology3.webp",
      name: "German hearing aid",
      category: "Technology",
      description:
        "German hearing , When Piyush Kumar Jain joined hear.com, the fastest-growing hearing aid company in the world, he didn't know that this decision would change his life forever he wear that hearing All hearing aids use the same basic parts to carry sounds from the environment into your ear and make them louder. Most hearing aids are digital, and all are powered with a.. ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/tech7.webp",
      name: "Closing the loop in digital manufacturing",
      category: "Technology",
      description:
        "Digitalized manufacturing enables a closed-loop production that results in increased efficiency, less waste and improved quality. Sandvik has rapidly expanded its digital offering to automate and connect...",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/tech8.webp",
      name: "The future is seamless",
      category: "Technology",
      description:
        "Seamless Flow, or hyperautomation, is transforming industries and societies across the world. Automated, digitalized processes and AI-enhanced... ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/tech9.webp",
      name: "5G is finally here",
      category: "Technology",
      description:
        "The 5th generation of mobile networks, 5G is the evolution of the 4G networks of today. It has been created to meet and surpass the massive...",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/tech10.webp",
      name: "A goldmine for ideas",
      category: "Technology",
      description:
        "In a time of increasingly rapid development companies are seeking new sources of innovation. Suddenly, computer-game developers can become relevant to Sandvik.",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/tech4.jpg",
      name: "300 sacked after company starts 4-day week",
      category: "Technology",
      description:
        "Just a few months ago tech start-up Bolt was the place to be, with the perk of a four-day work week. This week, it let go a third of its staff. ",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/tech5.webp",
      name: "Major city rocked by earthquake",
      category: "Technology",
      description:
        "An Australian capital city has been rocked by an earthquake which lasted for a half minute and caused buildings to shake. ",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/tech6.webp",
      name: "The first image of Sagittarius",
      category: "Technology",
      description:
        "“Throughout human history, we have wondered what was at the centre of the Milky Way. Well, now we have an image of it... ",
      check: "Check now",
    },
  ]);

  return (
    <div>
      <tech.Provider value={[technology, setTechnology]}>
        {props.children}
      </tech.Provider>
    </div>
  );
};
export default ApiTech;
