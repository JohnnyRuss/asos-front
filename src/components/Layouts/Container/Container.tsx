import React from "react";

interface ContainerType {
  children: React.ReactNode;
}

const Container: React.FC<ContainerType> = ({ children }) => {
  return <div className="w-full max-w-container-lg mx-auto">{children}</div>;
};

export default Container;
