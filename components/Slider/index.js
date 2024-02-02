"use client";

import React, { useState } from "react";
import {
  StyledContainer,
  StyledCardHolder,
  PrevCard,
  CurrentCard,
  NextCard,
} from "./style.js";
import Image from "next/image";
import galaxy from "@/public/shishkat.jpg";
import winter from "@/public/winter.jpg";
import nature from "@/public/nature.jpg";

const Slider = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Define your card data here
  const cards = [
    {
      imageSrc: "https://source.unsplash.com/Z8dtTatMVMw",
      name: "Highlands",
      location: "Scotland",
      description: "The mountains are calling",
    },
    {
      imageSrc: "https://source.unsplash.com/9dmycbFE7mQ",
      name: "Machu Pichu",
      location: "Peru",
      description: "Adventure is never far away",
    },
    {
      imageSrc: "https://source.unsplash.com/m7K4KzL5aQ8",
      name: "Chamonix",
      location: "France",
      description: "Let your dreams come true",
    },
  ];

  return (
    <React.Fragment>
      <PrevCard>
        <Image src={winter} alt="pic" />
      </PrevCard>
      <CurrentCard>
        <Image src={galaxy} alt="pic" />
      </CurrentCard>
      <NextCard>
        <Image src={nature} alt="pic" />
      </NextCard>
    </React.Fragment>
  );
};

export default Slider;
