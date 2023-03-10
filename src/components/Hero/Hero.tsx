import React from "react";

import useAppStore from "../../store/app";
import { useGetRootRoute, useGetRandomNumber } from "../../hooks";

import { Container, Button } from "../Layouts";

interface HeroType {}

const Hero: React.FC<HeroType> = (props) => {
  const heros = useAppStore().landing.hero;

  const rootRoute = useGetRootRoute();

  const listToRender = heros[rootRoute === "men" ? "men" : "women"];
  const randomNumber = useGetRandomNumber({
    max: listToRender.length,
  });

  const activeHero = listToRender[randomNumber];

  return (
    <Container>
      <figure className="relative my-5">
        <img src={activeHero?.fig} alt={activeHero?.label || "asos hero"} />{" "}
        <Button
          label="shop now"
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        />
      </figure>
    </Container>
  );
};

export default Hero;
