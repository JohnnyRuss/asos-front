import React from "react";
import { Link } from "react-router-dom";

import useAppStore from "../../../store/app";

import { Container } from "../../Layouts";

import { NestedNavRouteT } from "../../../interface/app.types";

interface SubNavPopUpType {
  listOf: "men" | "women";
  listRoute: string;
  rootRoute: string;
}

const SubNavPopUp: React.FC<SubNavPopUpType> = ({
  listOf,
  listRoute,
  rootRoute,
}) => {
  const nav = useAppStore().navigation.sub.find(
    (block) => block.route === listRoute
  )?.nestedNav;

  return (
    <div className="absolute z-10 left-0 right-0 h-screen bg-app-black-tr">
      <Container>
        <div
          data-sub-nav-list
          className="flex max-h-max py-3 bg-app-white text-app-black"
        >
          {nav &&
            nav.map((block, i) => {
              const routes = block.routes[listOf];
              const title = block.title;

              if (block.listType === "TEXT_ONLY")
                return (
                  <TextOnlyList
                    routes={routes}
                    title={title || ""}
                    query={{
                      search_for: rootRoute,
                      search_in: listRoute,
                    }}
                    key={`sub-nav--list__${block.listType}-${i}`}
                  />
                );
              else if (block.listType === "ROUNDED_FIG_X")
                return (
                  <FigXList
                    routes={routes}
                    title={title || ""}
                    query={{
                      search_for: rootRoute,
                      search_in: listRoute,
                    }}
                    key={`sub-nav--list__${block.listType}-${i}`}
                  />
                );
              else if (block.listType === "ROUNDED_FIG_Y")
                return (
                  <FigYList
                    routes={routes}
                    title={title || ""}
                    query={{
                      search_for: rootRoute,
                      search_in: listRoute,
                    }}
                    key={`sub-nav--list__${block.listType}-${i}`}
                  />
                );
              else if (block.listType === "FIG_ONLY")
                return (
                  <FigOnlyList
                    routes={routes}
                    title={title || ""}
                    query={{
                      search_for: rootRoute,
                      search_in: listRoute,
                    }}
                    key={`sub-nav--list__${block.listType}-${i}`}
                  />
                );
              else return <></>;
            })}
        </div>
      </Container>
    </div>
  );
};

export default SubNavPopUp;

function ListTitle({ title }: { title: string }) {
  return (
    <span className="self-start underline font-semibold uppercase">
      {title}
    </span>
  );
}

interface NestedListQueryT {
  search_for: string;
  search_in: string;
}

interface NestedListT {
  routes: NestedNavRouteT[];
  title: string;
  query: NestedListQueryT;
}

function TextOnlyList({ routes, title, query }: NestedListT) {
  return (
    <div className="flex-1 flex flex-col items-start gap-4 border-x border-x-app-gray-shade px-5">
      <ListTitle title={title} />
      {routes.length > 15 ? (
        <div className="flex gap-16">
          <TextOnlyListEl
            query={query}
            routes={routes.slice(0, routes.length / 2)}
          />
          <TextOnlyListEl
            query={query}
            routes={routes.slice(routes.length / 2)}
          />
        </div>
      ) : (
        <TextOnlyListEl query={query} routes={routes} />
      )}
    </div>
  );
}

function TextOnlyListEl({
  routes,
  query,
}: {
  routes: NestedNavRouteT[];
  query: NestedListQueryT;
}) {
  return (
    <ul className="text-app-sm capitalize flex flex-col gap-3 w-full">
      {routes.map((route, i) => (
        <li
          key={`nested-nav--route__text-only__${i}-${route.route}--${route.label}`}
        >
          <Link
            className="inline-block w-full"
            to={`/${query.search_for}/products`}
            state={{
              search_for: query.search_for,
              search_in: query.search_in,
              search: route.route,
            }}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FigXList({ routes, title }: NestedListT) {
  return (
    <div className="flex-1 flex flex-col items-start gap-4 border-x border-x-app-gray-shade px-5">
      <ListTitle title={title} />
      {routes.length > 6 ? (
        <div className="flex gap-16">
          <FigXListEl routes={routes.slice(0, 6)} />
          <FigXListEl routes={routes.slice(6)} />
        </div>
      ) : (
        <FigXListEl routes={routes} />
      )}
    </div>
  );
}

function FigXListEl({ routes }: { routes: NestedNavRouteT[] }) {
  return (
    <ul className="flex flex-col gap-3 text-app-sm capitalize">
      {routes.map((route, i) => (
        <li
          className="flex items-center gap-2"
          key={`nested-nav--route__fig-x__${i}-${route.route}`}
        >
          <figure className="min-w-[40px] w-10 h-10 min-h-[40px] aspect-square rounded-full overflow-hidden border border-app-gray-shade">
            <img
              src={route.fig}
              alt={route.label}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </figure>
          <span className="h-full flex items-center border-b border-b-app-gray w-full">
            {route.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function FigYList({ routes, title }: NestedListT) {
  return (
    <div className="flex-1 flex flex-col items-center gap-4 border-x border-x-app-gray-shade px-5">
      <ListTitle title={title} />
      <ul className="grid grid-cols-2 gap-x-14 gap-y-10 text-app-sm capitalize">
        {routes.map((route, i) => (
          <li
            className="flex flex-col items-center gap-2"
            key={`nested-nav--route__fig-y__${i}-${route.route}`}
          >
            <figure className="min-w-[80px] w-20 h-20 min-h-[80px] aspect-square rounded-full overflow-hidden border border-app-gray-shade">
              <img
                src={route.fig}
                alt={route.label}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </figure>
            <span>{route.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FigOnlyList({ routes, title }: NestedListT) {
  return (
    <div className="flex flex-col gap-4 border-x border-x-app-gray-shade px-5">
      <ListTitle title={title} />
      <ul className="flex flex-col gap-4 capitalize">
        {routes.map((route, i) => (
          <li
            className="flex flex-col items-center gap-2 relative"
            key={`nested-nav--route__fig-only__${i}-${route.route}`}
          >
            <figure className="h-auto overflow-hidden">
              <img
                src={route.fig}
                alt={route.label}
                className="w-auto h-auto object-contain object-center"
                loading="lazy"
              />
            </figure>
            <span className="absolute bottom-4 uppercase font-semibold">
              {route.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
