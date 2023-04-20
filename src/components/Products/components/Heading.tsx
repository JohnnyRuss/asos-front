import React from "react";
import { useLocation } from "react-router-dom";

const Heading: React.FC = () => {
  const { state } = useLocation();

  return state?.search ? (
    <Title caption={state.search.label} />
  ) : state?.search_in ? (
    <Title caption={state.search_in.label} />
  ) : (
    <></>
  );
};

export default Heading;

const Title: React.FC<{ caption: string }> = ({ caption }) => {
  return (
    <h1 className="text-center font-semibold text-app-xl py-6 mt-2">
      {caption}
    </h1>
  );
};
