import React, { createContext, useState } from "react";

export const data = createContext();
const ApiAll = (props) => {
  const [home, setHome] = useState([
    {
      image: "images/bolly1.webp",
      name: "Kartik Aryan ",
      category: "Bollywood",
      description:
        "Kartik shared several pictures from his time in Varanasi on Instagram and captioned them, “Blessed”. The actor enjoyed sightseeing during the day as well as post sunset. He dressed up in a kurta-pyjama for the visit and soaked in the mood during the aarti. Pictures of him also show how he enjoyed his time on a boat. ",
      check: "Check now",
    },

    {
      image: "images/deepika.webp",
      name: "Deepika Padukone",
      category: "Bollywood",
      description:
        "Deepika Padukone looks breathtaking in an orange gown as she walks the ... Ranveer Singh: I am lucky and blessed to be Deepika's man - Exclusive! Deepika Padukone provides a behind the scenes look at Chhapaak, based on the life of acid attack survivor Laxmi Agarwal, in theaters worldwide on Jan.",
      check: "Check now",
    },

    {
      image: "images/bollywood3.jpg",
      name: "Nushrratt Bharuccha",
      category: "Bollywood",
      description:
        "Actress Nushrratt Bharuccha is gearing up for the release of her next film 'Janhit Mein Jaari', where she plays the role of a condom saleswoman.  Last year, Nushrratt injured herself while shooting for a Holi song sequence for the movie.",
      check: "Check now",
    },

    {
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
        "Samsung Galaxy Tab S6 Lite (2022) support page has gone live on Samsung's India website. The tablet was recently launched in Italy and is the refreshed version of the 2020 Galaxy Tab S6 Lite. tSamsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby s Sound, 4 GB RAM, |...",
      check: "Check now",
    },

    {
      image: "images/Technology3.webp",
      name: "German hearing aid",
      category: "Technology",
      description:
        "German hearing , When Piyush Kumar Jain joined hear.com, the fastest-growing hearing aid company in the world, he didn't know that this decision would change his life forever he wear that hearing All hearing aids use the same basic parts to carry sounds from the environment into your ear and make them louder. Most hearing aids are digital, and all are powered with a.. ",
      check: "Check now",
    },

    {
      image: "images/Fitness2.jpg",
      name: "YOGA",
      category: "Fitness",
      description:
        "Yoga : Stress has become a part of life, but instead of living with it, we must find the tools with which to combat it. Yoga is one such tool that can deal with physical, emotional and mental issues caused by stress, and give you a better perspective of life.Yoga is practised with a variety of methods by all Indian religions. In Hinduism, practices include jnana yoga, bhakti yoga, karma yoga, kundalini yoga, and hatha yoga ...",
      check: "Check now",
    },

    {
      image: "images/Fitness1.jpg",
      name: "Physical fitness",
      category: "Fitness",
      description:
        "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition .we should take proper nutrition so that Physical fitness is a state of health and well-being , ...",
      check: "Check now",
    },

    {
      image: "images/travel9.jpeg",
      name: "Dubai reinforces status",
      category: "Travel",
      description:
        "Dubai continues to enhance its competitiveness as a global tech hub thanks to a robust regulatory framework, pro-business administration and access to talent",
      check: "Check now",
    },

    {
      image: "images/bollywood5.jpg",
      name: "Kumar Akshay ",
      category: "Bollywood",
      description:
        "Akshay Kumar starrer historical drama Prithviraj has a new name now. After being demanded by Karni Sena, the film has been renamed Samrat Prithviraj. The producers have reportedly written a letter to the national president.,.. ",
      check: "Check now",
    },

    {
      image: "images/bollywood6.webp",
      name: "Salman Khan ",
      category: "Bollywood",
      description:
        "Salman Khan’s next, which had earlier been titled Kabhi Eid Kabhi Diwali and is now being changed, has run into a number of problems of late. The first hurdle was when producer Sajid Nadiadwala backed out as the producer, but Salman Khan quickly filled in the spot... ",
      check: "Check now",
    },

    {
      image: "images/travel10.jpg",
      name: "DP World",
      category: "Travel",
      description:
        "DP World, the global end-to-end logistics provider, has announced the creation of DPMETAWORLD, a new initiative aimed at delivering cutting-edge virtual solutions to real-world supply chain challenges",
      check: "Check now",
    },

    {
      image: "images/Fitness3.jpg",
      name: "Controlling blood pressure",
      category: "Fitness",
      description:
        "Physical fitness has proven to support the body's blood pressure. Staying active and exercising regularly builds a stronger heart. Physical fitness is generally achieved through proper nutrition.Healthy and unhealthy blood pressure ranges.. ",
      check: "Check now",
    },
    {
      image: "images/fitness5.jpg",
      name: "Hippocrates",
      category: "Fitness",
      description:
        "¨If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health.¨ — Hippocrates ",
      check: "Check now",
    },

    {
      image: "images/fitness6.jpeg",
      name: "Edward Stanley",
      category: "Fitness",
      description:
        "¨Those who think they have not time for bodily exercise will sooner or later have to find time for illness.¨ – Edward Stanley ",
      check: "Check now",
    },

    {
      image: "images/Travel1.jpg",
      name: "Aviation Safety",
      category: "Travel",
      description:
        "Aviation safety is the study and practice of managing risks in aviation. This includes preventing aviation accidents and incidents through research, educating air travel personnel, passengers and the general public, as well as the design of aircraft and aviation infrastructure. we can do something to take..  ",
      check: "Check now",
    },
    {
      image: "images/Travel2.webp",
      name: "Saudi Arabia bans...",
      category: "Travel",
      description:
        "TSaudi Arabia bans : he 16 countries where the citizens of Saudi Arabia have been banned to travel apart from India include Lebanon, Syria, Turkey, Iran, Afghanistan, Yemen, Somalia, Ethiopia, syria, Turkey, etc.., the Saudi-based Arab News is the Middle East’s newspaper of record and the biggest English language daily in the Kingdom.",
      check: "Check now",
    },

    {
      image: "images/tech9.webp",
      name: "5G is finally here",
      category: "Technology",
      description:
        "The 5th generation of mobile networks, 5G is the evolution of the 4G networks of today. It has been created to meet and surpass the massive...",
      check: "Check now",
    },
    {
      image: "images/tech10.webp",
      name: "A goldmine for ideas",
      category: "Technology",
      description:
        "In a time of increasingly rapid development companies are seeking new sources of innovation. Suddenly, computer-game developers can become relevant to Sandvik.",
      check: "Check now",
    },
    {
      image: "images/tech4.jpg",
      name: "300 sacked after company starts 4-day week",
      category: "Technology",
      description:
        "Just a few months ago tech start-up Bolt was the place to be, with the perk of a four-day work week. This week, it let go a third of its staff. ",
      check: "Check now",
    },
    {
      image: "images/tech5.webp",
      name: "Major city rocked by earthquake",
      category: "Technology",
      description:
        "An Australian capital city has been rocked by an earthquake which lasted for a half minute and caused buildings to shake. ",
      check: "Check now",
    },

    {
      image: "images/Travel3.jpg",
      name: "Char Dham Yatra",
      category: "Travel",
      description:
        "this pilgrimage circuit has a lot of religious significance in Hindu religion as it is believed that every Hindu must go on this pilgrimage once in their lifetime. People believe that Char Dham Yatra washes away sins and opens the gate of heaven.",
      check: "Check now",
    },
  ]);

  return (
    <div>
      <data.Provider value={[home, setHome]}>{props.children}</data.Provider>
    </div>
  );
};
export default ApiAll;
