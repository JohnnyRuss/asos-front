import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Container } from "../";
import Arrow from "./Arrow";

interface PathType {
  title?: string;
}

const Path: React.FC<PathType> = ({ title }) => {
  const { state } = useLocation();

  return (
    <div className=" border-b border-b-app-gray-shade">
      <Container>
        <div className="flex items-center gap-2 text-app-xsm py-3">
          <Link to={`/${state?.search_for}`}>
            <span>HOME</span>
          </Link>
          <Arrow />

          <Link
            to={`/${state?.search_for}/products`}
            state={{
              search_for: state?.search_for,
              search_in: {
                label: "All",
                route: "all",
              },
              search: "",
            }}
          >
            <span className="capitalize">{state?.search_for}</span>
          </Link>
          <Arrow />

          <Link
            to={`/${state?.search_for}/products`}
            state={{
              search_for: state?.search_for,
              search_in: state?.search_in,
              search: "",
            }}
          >
            <span className="capitalize">{state?.search_in?.label}</span>
          </Link>

          {state?.search?.route && (
            <>
              <Arrow />
              <Link
                className="capitalize"
                to={`/${state?.search_for}/products`}
                state={{
                  search_for: state?.search_for,
                  search_in: state?.search_in,
                  search: state?.search,
                }}
              >
                <span>{state?.search?.label}</span>
              </Link>
            </>
          )}

          {title && (
            <>
              <Arrow />
              <span>{title}</span>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Path;
