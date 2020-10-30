import React from "react";
import {
  ContainerStyle,
  InputStyle,
  TextStyle,
  SpanStyle,
} from "../../styles/core";
import { useForm } from "../../hooks/useForm";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { startGnomeSearch } from "../../actions/gnome";

/** Style of input of search */
const SearchInputStyle = styled(InputStyle)`
  border-radius: 7px;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 12px;
`;

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    searchText: "",
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    if (event.key === "Enter") {
      dispatch(startGnomeSearch(searchText));
    }
  };

  return (
    <SearchInputStyle
      type="text"
      placeholder="Tobus Quickwhistle"
      name="searchText"
      autoComplete="off"
      value={searchText}
      onChange={handleInputChange}
      onKeyPress={handleSearch}
    />
  );
};
