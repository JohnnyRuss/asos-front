/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useFilterStore } from "store";
import { useGetProductsQueryStr } from "hooks";
import detectActiveFilterLabel from "./functions/detectActiveFilterLabel";

import { Container } from "components/Layouts";
import Dropdown from "./components/Dropdown";
import DropdownListItem from "./components/DropdownListItem";

const Fillter: React.FC = () => {
  const { state } = useLocation();

  const {
    setFilter,
    resetFilter,
    filter,
    getProductsFilterQuery,
    productsFilter,
  } = useFilterStore((state) => ({
    setFilter: state.setFilter,
    filter: state.filter,
    resetFilter: state.resetFilter,
    getProductsFilterQuery: state.getProductsFilterQuery,
    productsFilter: state.productsFilter,
  }));

  const getProductsQueryString = useGetProductsQueryStr();

  useEffect(() => {
    const { search_for, search_in, search } = getProductsQueryString();

    if (!search_for || !search_in) return;

    getProductsFilterQuery({ search_for, search_in, search });
  }, [state]);

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
          <Dropdown
            dropdownName="SORT"
            isActiveFiler={filter?.sort !== ""}
            activeLabel={
              detectActiveFilterLabel(productsFilter, "sort", filter) || "sort"
            }
          >
            {productsFilter.sort?.map((option) => (
              <DropdownListItem
                name="sort"
                value={option.query}
                onClick={(key, value) => setFilter(key, value)}
                isActive={filter.sort === option.query}
                key={`dropdown-${option.label}`}
              >
                {option.label}
              </DropdownListItem>
            ))}
          </Dropdown>

          {/* PRODUCT TYPE */}
          <Dropdown
            isActiveFiler={Object.values(filter.productType).length > 0}
            dropdownName="PRODUCT_TYPE"
            activeLabel={
              detectActiveFilterLabel(productsFilter, "productType", filter) ||
              "product type"
            }
          >
            {productsFilter.productType?.map((option) => (
              <DropdownListItem
                name="productType"
                value={option.query}
                onClick={(key, value) => setFilter(key, value)}
                isActive={filter.productType.includes(option.query)}
                key={`dropdown-${option.query}`}
              >
                {option.label}
              </DropdownListItem>
            ))}
          </Dropdown>

          {/* BRAND */}
          <Dropdown
            activeLabel={
              detectActiveFilterLabel(productsFilter, "brand", filter) || "brand"
            }
            isActiveFiler={Object.values(filter.brand).length > 0}
            dropdownName="BRAND"
          >
            {productsFilter.brand?.map((option) => (
              <DropdownListItem
                name="brand"
                value={option.name}
                onClick={(key, value) => setFilter(key, value)}
                isActive={filter.brand.includes(option.name)}
                key={`dropdown-${option._id}`}
              >
                {option.name}
              </DropdownListItem>
            ))}
          </Dropdown>

          {/* SIZE */}
          <Dropdown
            dropdownName="SIZE"
            isActiveFiler={Object.values(filter.size).length > 0}
            activeLabel={
              detectActiveFilterLabel(productsFilter, "size", filter) || "size"
            }
          >
            {productsFilter.size?.map((option) => (
              <DropdownListItem
                name="size"
                value={option}
                onClick={(key, value) => setFilter(key, value)}
                isActive={filter.size.includes(option)}
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
