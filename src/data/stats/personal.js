import React, { useState, useEffect } from "react";

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date("1998-06-22T09:24:00");
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: "age",
    label: "Current age",
    value: <Age />,
  },
  {
    key: "location",
    label: "Current city",
    value: "College Station, TX",
  },
  {
    key: "bornin",
    label: "Birth city",
    value: "Ashford, Kent, UK",
  },
  {
    key: "favoritefood",
    label: "Favorite food",
    value: "Mochi Donuts",
  },
  {
    key: "numberofcats",
    label: "Number of cats",
    value: 3,
  },
  {
    key: "numberofhouseplants",
    label: "Number of house plants",
    value: "20+",
  },
  {
    key: "gamescreated",
    label: "Games created",
    value: 5,
  },
  {
    key: "currentincome",
    label: "Current Income",
    value: "<ERROR>",
  },
  {
    key: "favoriteprogramminglanguage",
    label: "Favorite programming language",
    value: "Python",
  },
];

export default data;
