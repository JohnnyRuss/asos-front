import React from "react";
import { Container } from "components/Layouts";
import Dropdown from "./components/Dropdown";
import DropdownListItem from "./components/DropdownListItem";

interface FillterType {}

const Fillter: React.FC<FillterType> = (props) => {
  return (
    <div className="bg-app-gray-tint">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,300px))] gap-4 py-2">
          <Dropdown activeLabel="sort" name="SORT">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
          <Dropdown activeLabel="category" name="CATEGORY">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
          <Dropdown activeLabel="product type" name="PRODUCT_TYPE">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
          <Dropdown activeLabel="brand" name="BRAND">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
          <Dropdown activeLabel="size" name="SIZE">
            <DropdownListItem>recomended</DropdownListItem>
            <DropdownListItem>recomended</DropdownListItem>
          </Dropdown>
        </div>
      </Container>
    </div>
  );
};

export default Fillter;
