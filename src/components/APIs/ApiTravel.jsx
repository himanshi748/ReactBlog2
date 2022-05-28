import React, { createContext, useState } from "react";

export const tra = createContext();
const ApiTravel = (props) => {
  const [travel, setTravel] = useState([
    {
      id: 10,
      image: "images/Travel1.jpg",
      name: "Aviation Safety",
      category: "Travel",
      description:
        "Aviation safety is the study and practice of managing risks in aviation. This includes preventing aviation accidents and incidents through research, educating air travel personnel, passengers and the general public, as well as the design of aircraft and aviation infrastructure. we can do something to take.. ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi! ",
      check: "Check now",
    },
    {
      id: 11,
      image: "images/Travel2.webp",
      name: "Saudi Arabia bans...",
      category: "Travel",
      description:
        "TSaudi Arabia bans : he 16 countries where the citizens of Saudi Arabia have been banned to travel apart from India include Lebanon, Syria, Turkey, Iran, Afghanistan, Yemen, Somalia, Ethiopia, syria, Turkey, etc.., the Saudi-based Arab News is the Middle East’s newspaper of record and the biggest English language daily in the Kingdom.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },

    {
      id: 12,
      image: "images/Travel3.jpg",
      name: "Char Dham Yatra",
      category: "Travel",
      description:
        "this pilgrimage circuit has a lot of religious significance in Hindu religion as it is believed that every Hindu must go on this pilgrimage once in their lifetime. People believe that Char Dham Yatra washes away sins and opens the gate of heaven.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/travel4.webp",
      name: "Alaska Railroad",
      category: "Travel",
      description:
        "Our train routes are the ideal way for passengers to visit the best of Alaska, and to do so while making their travel a highlight of their time in the state.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/travel5.webp",
      name: "Mock Aircraft Cabin",
      category: "Travel",
      description:
        "The mock cabin at Minneapolis-St. Paul International Airport will allow travelers who have sensory, physical, or cognitive disabilities to experience an aircraft before actually boarding their flight.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi! ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/travel6.webp",
      name: "Delta to 'strategically decrease' flights this summer",
      category: "Travel",
      description:
        "Delta Air Lines on Thursday announced it will cut about 100 flights a day from its schedule this summer to minimize disruptions and bounce back faster when challenges occur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/travel7.jpg",
      name: "Wild Humpback Whales",
      category: "Travel",
      description:
        "Take a wild ride on the ‘Humpback Highway’ - The southern coast of NSW is an extraordinary wonderland of balanced high adventure possibilities and refined relaxation endeavours,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/travel8.png",
      name: "MTF",
      category: "Travel",
      description:
        "The Mediterranean Tourism Foundation (MTF) has honored Skål International World President Burcin Turkkan with an invitation as a speaker at their forthcoming Mediterranean Tourism Forum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/travel9.jpeg",
      name: "Dubai reinforces status",
      category: "Travel",
      description:
        "Dubai continues to enhance its competitiveness as a global tech hub thanks to a robust regulatory framework, pro-business administration and access to talent, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/travel10.jpg",
      name: "DP World",
      category: "Travel",
      description:
        "DP World, the global end-to-end logistics provider, has announced the creation of DPMETAWORLD, a new initiative aimed at delivering cutting-edge virtual solutions to real-world supply chain challengesLorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },
  ]);

  return (
    <div>
      <tra.Provider value={[travel, setTravel]}>{props.children}</tra.Provider>
    </div>
  );
};
export default ApiTravel;
