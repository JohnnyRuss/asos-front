import React from "react";
import { Link } from "react-router-dom";
import useAppStore from "../../store/app";

interface PathType {}

const Path: React.FC<PathType> = (props) => {
  const { mainQuery, title, rootRoute } = useAppStore((state) => ({
    rootRoute: state.product?.for || "",
    mainQuery: state.product?.productType?.[0] || "",
    title: state.product?.title || "",
  }));

  return (
    <div className="flex items-center gap-2 text-app-xsm py-2">
      <Link to={""}>
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
      <Link to={""}>
        <span className="capitalize">{rootRoute}</span>
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
      <Link to={""}>
        <span className="capitalize">{mainQuery}</span>
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
      <Link to={""}>
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default Path;
