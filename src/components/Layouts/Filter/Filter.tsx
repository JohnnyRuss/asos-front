/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useFilterStore } from "store";

import { Container } from "components/Layouts";
import Dropdown from "./components/Dropdown";
import DropdownListItem from "./components/DropdownListItem";

const Fillter: React.FC = () => {
  const { setFilter, resetFilter, filter } = useFilterStore((state) => ({
    setFilter: state.setFilter,
    filter: state.filter,
    resetFilter: state.resetFilter,
  }));

  useEffect(() => {
    return () => {
      resetFilter();
    };
  }, []);

  return (
    <div className="bg-app-gray-tint">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,300px))] gap-4 py-2">
          {/* SORT */}
          <Dropdown activeLabel={filter.sort || "sort"} dropdownName="SORT">
            {["new", "price high to low", "price low to high"].map((option) => (
              <DropdownListItem
                onClick={({ key, value }) => setFilter(key, value)}
                name="sort"
                value={option}
                key={`dropdown-${option}`}
              >
                {option}
              </DropdownListItem>
            ))}
          </Dropdown>

          {/* CATEGORY */}
          <Dropdown
            activeLabel={filter.category || "category"}
            dropdownName="CATEGORY"
          >
            {["tops", "t-shirts"].map((option) => (
              <DropdownListItem
                onClick={({ key, value }) => setFilter(key, value)}
                name="category"
                value={option}
                key={`dropdown-${option}`}
              >
                {option}
              </DropdownListItem>
            ))}
          </Dropdown>

          {/* PRODUCT TYPE */}
          <Dropdown
            activeLabel={filter.productType || "product type"}
            dropdownName="PRODUCT_TYPE"
          >
            {["co-ords", "jeans"].map((option) => (
              <DropdownListItem
                onClick={({ key, value }) => setFilter(key, value)}
                name="productType"
                value={option}
                key={`dropdown-${option}`}
              >
                {option}
              </DropdownListItem>
            ))}
          </Dropdown>

          {/* BRAND */}
          <Dropdown activeLabel={filter.brand || "brand"} dropdownName="BRAND">
            {["nike", "adidas"].map((option) => (
              <DropdownListItem
                onClick={({ key, value }) => setFilter(key, value)}
                name="brand"
                value={option}
                key={`dropdown-${option}`}
              >
                {option}
              </DropdownListItem>
            ))}
          </Dropdown>

          {/* SIZE */}
          <Dropdown activeLabel={filter.size || "size"} dropdownName="SIZE">
            {["xs", "s"].map((option) => (
              <DropdownListItem
                onClick={({ key, value }) => setFilter(key, value)}
                name="size"
                value={option}
                key={`dropdown-${option}`}
              >
                {option}
              </DropdownListItem>
            ))}
          </Dropdown>
        </div>
      </Container>
    </div>
  );
};

export default Fillter;
