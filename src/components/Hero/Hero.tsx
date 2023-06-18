import React from "react";
import { useNavigate } from "react-router-dom";

import useAppStore from "store/appStore";
import { useGetRootRoute, useGetRandomNumber } from "hooks";
import { Container, Button } from "components/Layouts";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const heros = useAppStore().hero;

  const rootRoute = useGetRootRoute();
  const listToRender = heros[rootRoute.label === "men" ? "men" : "women"];
  const randomNumber = useGetRandomNumber({
    max: listToRender.length,
  });

  const activeHero = listToRender[randomNumber];

  function onShop() {
    navigate("products", {
      state: {
        search_for: rootRoute,
        search_in: {
          label: activeHero.query.search_in.label,
          query: activeHero.query.search_in.query,
        },
        search: {
          label: activeHero.query.search.label,
          query: activeHero.query.search.query,
        },
      },
    });
  }

  return (
    <Container>
      <figure className="relative my-5 w-full">
        <img
          src={activeHero?.fig}
          alt={activeHero?.fig || "asos hero"}
          className="w-full"
        />
        <Button
          label="shop now"
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          onClick={() => onShop()}
        />
      </figure>
    </Container>
  );
};

export default Hero;
