import React from "react";
import { useNavigate } from "react-router-dom";

import useAppStore from "../../store/app";
import { useGetRootRoute, useGetRandomNumber } from "../../hooks";

import { Container, Button } from "../Layouts";

interface HeroType {}

const Hero: React.FC<HeroType> = (props) => {
  const navigate = useNavigate();

  const heros = useAppStore().landing.hero;

  const rootRoute = useGetRootRoute();

  const listToRender = heros[rootRoute === "men" ? "men" : "women"];
  const randomNumber = useGetRandomNumber({
    max: listToRender.length,
  });

  const activeHero = listToRender[randomNumber];

  return (
    <Container>
      <figure className="relative my-5 w-full">
        <img
          src={activeHero?.fig}
          alt={activeHero?.label || "asos hero"}
          className="w-full"
        />
        <Button
          label="shop now"
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          onClick={() => navigate("/women/products")}
        />
      </figure>
    </Container>
  );
};

export default Hero;
