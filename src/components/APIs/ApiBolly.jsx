import React, { createContext, useState } from "react";

export const happy = createContext();
const ApiBolly = (props) => {
  const [bollywood, setBollywood] = useState([
    {
      id: 1,
      image: "images/bolly1.webp",
      name: "Kartik Aryan ",
      category: "Bollywood",
      description:
        "Kartik shared several pictures from his time in Varanasi on Instagram and captioned them, “Blessed”. The actor enjoyed sightseeing during the day as well as post sunset. He dressed up in a kurta-pyjama for the visit and soaked in the mood during the aarti. Pictures of him also show how he enjoyed his time on a boat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi! ",
      check: "Check now",
    },

    {
      id: 2,
      image: "images/deepika.webp",
      name: "Deepika Padukone",
      category: "Bollywood",
      description:
        "Deepika Padukone looks breathtaking in an orange gown as she walks the ... Ranveer Singh: I am lucky and blessed to be Deepika's man - Exclusive! Deepika Padukone provides a behind the scenes look at Chhapaak, based on the life of acid attack survivor Laxmi Agarwal, in theaters worldwide on Jan.Deepika Padukone looks breathtaking in an orange gown as she walks the ... Ranveer Singh: I am lucky and blessed to be Deepika's man - Exclusive! Deepika Padukone provides a behind the scenes look at Chhapaak, based on the life of acid attack survivor Laxmi Agarwal, in theaters worldwide on Jan.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },

    {
      id: 3,
      image: "images/bollywood3.jpg",
      name: "Nushrratt Bharuccha",
      category: "Bollywood",
      description:
        "Actress Nushrratt Bharuccha is gearing up for the release of her next film 'Janhit Mein Jaari', where she plays the role of a condom saleswoman.  Last year, Nushrratt injured herself while shooting for a Holi song sequence for the movie.Actress Nushrratt Bharuccha is gearing up for the release of her next film 'Janhit Mein Jaari', where she plays the role of a condom saleswoman.  Last year, Nushrratt injured herself while shooting for a Holi song sequence for the movie.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },

    {
      id: 4,
      image: "images/bollywood4.webp",
      name: "Aryan Khan ",
      category: "Bollywood",
      description:
        " Aryan was arrested by the NCB On October 3, along with seven others in connection with a drugs raid carried out on a Mumbai-Goa cruise. He got bail after 26 days. Sanjay Kumar Singh, Deputy Director General (Operations), NCB said in a statement...,Aryan was arrested by the NCB On October 3, along with seven others in connection with a drugs raid carried out on a Mumbai-Goa cruise.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },

    {
      id: 5,
      image: "images/bollywood5.jpg",
      name: "Kumar Akshay ",
      category: "Bollywood",
      description:
        "Akshay Kumar starrer historical drama Prithviraj has a new name now. After being demanded by Karni Sena, the film has been renamed Samrat Prithviraj. The producers have reportedly written a letter to the national president.  Akshay Kumar starrer historical drama Prithviraj has a new name now. After being demanded by Karni Sena, the film has been renamed Samrat Prithviraj... ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!",
      check: "Check now",
    },

    {
      id: 6,
      image: "images/bollywood6.webp",
      name: "Salman Khan ",
      category: "Bollywood",
      description:
        "Salman Khan’s next, which had earlier been titled Kabhi Eid Kabhi Diwali and is now being changed, has run into a number of problems of late. The first hurdle was when producer Sajid Nadiadwala backed out as the producer, but Salman Khan quickly filled in the spot...,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi! ",
      check: "Check now",
    },

    {
      id: 7,
      image: "images/bollywood7.jpg",
      name: "Alia Bhatt",
      category: "Bollywood",
      description:
        "Alia Bhatt is one of the fittest actresses in Bollywood. She is also one of the actors who love to practise Yoga and inspires many fans to follow in her footsteps. Alia Bhatt shared her picture of nailing kapotasana..,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi! ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/bollywood8.jpg",
      name: "Jacqueline Fernandez",
      category: "bollywood/fitness",
      description:
        "Jacqueline Fernandez is another actress known for her fit body. She too aces yoga asanas as nobody else does. Her Instagram is filled with videos and pictures where the Kick star is seen doing different asanas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi! ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/bollywood9.jpg",
      name: "Shilpa Shetty ",
      category: "Bollywood/Fitness",
      description:
        "Shilpa Shetty has been practising yoga for more than 18 years now. The actress has also released a DVD by the name of Shilpa’s Yoga which was a big hit.Shilpa Shetty has been practising yoga for more than 18 years now...,Shilpa Shetty has been practising yoga for more than 18 years now. The actress has also released a DVD by the name of Shilpa’s Yoga,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates qui voluptatem maiores nemo sunt ex dicta cumque aliquam consectetur, fuga repellat quae! Aut consequuntur omnis consectetur tempora provident sequi!  ",
      check: "Check now",
    },
  ]);

  return (
    <div>
      <happy.Provider value={[bollywood, setBollywood]}>
        {props.children}
      </happy.Provider>
    </div>
  );
};
export default ApiBolly;
