import React from "react";
import { Container } from "../";
import Dropdown from "./components/Dropdown";
import DropdownListItem from "./components/DropdownListItem";

interface FillterType {}

const Fillter: React.FC<FillterType> = (props) => {
  return (
    <div  className="bg-app-gray-tint">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,300px))] gap-4 py-2">
          <Dropdown activeLabel="sort">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
          <Dropdown activeLabel="category">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
          <Dropdown activeLabel="product type">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
          <Dropdown activeLabel="brand">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
          <Dropdown activeLabel="size">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
        </div>
      </Container>
    </div>
  );
};

export default Fillter;
