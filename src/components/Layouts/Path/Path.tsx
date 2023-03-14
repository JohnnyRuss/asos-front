import React from "react";
import { Link, useLocation } from "react-router-dom";

interface PathType {
  title?: string;
}

const Path: React.FC<PathType> = ({ title }) => {
  const { state } = useLocation();

  return (
    <div className="flex items-center gap-2 text-app-xsm py-2">
      <Link to={`/${state?.search_for}`}>
        <span>HOME</span>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
      </svg>

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
      </svg>

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>

          <span>{title}</span>
        </>
      )}
    </div>
  );
};

export default Path;
