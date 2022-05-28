import React, { createContext, useState } from "react";

export const fit = createContext();
const ApiFit = (props) => {
  const [fitness, setFitness] = useState([
    {
      id: 7,
      image: "images/Fitness2.jpg",
      name: "YOGA",
      category: "Fitness",
      description:
        "Yoga : Stress has become a part of life, but instead of living with it, we must find the tools with which to combat it. Yoga is one such tool that can deal with physical, emotional and mental issues caused by stress, and give you a better perspective of life.Yoga is practised with a variety of methods by all Indian religions. In Hinduism, practices include jnana yoga, bhakti yoga, karma yoga, kundalini yoga, and hatha yoga ...",
      check: "Check now",
    },

    {
      id: 8,
      image: "images/Fitness1.jpg",
      name: "Physical fitness",
      category: "Fitness",
      description:
        "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition .we should take proper nutrition so that Physical fitness is a state of health and well-being , ...",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/Fitness3.jpg",
      name: "Controlling blood pressure",
      category: "Fitness",
      description:
        "Physical fitness has proven to support the body's blood pressure. Staying active and exercising regularly builds a stronger heart. Physical fitness is generally achieved through proper nutrition.Healthy and unhealthy blood pressure ranges.. ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/fitness4.webp",
      name: "Brooke Tuatao",
      category: "Fitness",
      description:
        "Brooke Tuatao sets her alarm for a 3.50am wake up. She lives in a small apartment with husband, Siaosi, and their 16-year-old daughter, Taleia, above a Mount Smart warehouse they’ve recently converted into a gym. ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/fitness5.jpg",
      name: "Hippocrates",
      category: "Fitness",
      description:
        "¨If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health.¨ — Hippocrates ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/fitness6.jpeg",
      name: "Edward Stanley",
      category: "Fitness",
      description:
        "¨Those who think they have not time for bodily exercise will sooner or later have to find time for illness.¨ – Edward Stanley .Brooke Tuatao sets her alarm for a 3.50am wake up. She lives in a small apartment with husband, Siaosi, and their 16-year-old daughter, Taleia, above a Mount Smart warehouse they’ve recently converted into a gym ",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/fitness7.webp",
      name: "Diet",
      category: "Fitness",
      description:
        "the Mediterranean diet is often ranked the top overall diet by multiple news outlets, few studies have relied on biomarkers to determine the impact of the Mediterranean diet on longevityBrooke Tuatao sets her alarm for a 3.50am wake up. She lives in a small apartment with husband, Siaosi, and their 16-year-old daughter, Taleia, above a Mount Smart warehouse they’ve recently converted into a gym. ",
      check: "Check now",
    },
    {
      id: 9,
      image: "images/fitness8.webp",
      name: "Diet",
      category: "Fitness",
      description:
        "While Italy, Greece, and Spain may come to mind at the mention of the Mediterranean diet, it is important to note the diversity of the countries bordering the actual body of water..,Brooke Tuatao sets her alarm for a 3.50am wake up. She lives in a small apartment with husband, Siaosi, and their 16-year-old daughter, Taleia, above a Mount Smart warehouse they’ve recently converted into a gym ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/fitness10.jpeg",
      name: "Nutrients",
      category: "Fitness",
      description:
        "Nutrients that are considered in NPI ratings include sugar, sodium, calories, saturated fat, fiber, and protein. Foods are rated on a scale from zero (least nutritious) to 100 (mo..,Brooke Tuatao sets her alarm for a 3.50am wake up. She lives in a small apartment with husband, Siaosi, and their 16-year-old daughter, Taleia, above a Mount Smart warehouse they’ve recently converted into a gym ",
      check: "Check now",
    },

    {
      id: 9,
      image: "images/fitness9.webp",
      name: "Short Run May Improve Brain Function",
      category: "Fitness",
      description:
        "While any joyful movement can be beneficial, new research suggests that a short, moderate-intensity run can improve brain function. Here ...,Brooke Tuatao sets her alarm for a 3.50am wake up. She lives in a small apartment with husband, Siaosi, and their 16-year-old daughter, Taleia, above a Mount Smart warehouse they’ve recently converted into a gym ",
      check: "Check now",
    },
  ]);

  return (
    <div>
      <fit.Provider value={[fitness, setFitness]}>
        {props.children}
      </fit.Provider>
    </div>
  );
};
export default ApiFit;
