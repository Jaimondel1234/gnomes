import React from 'react';
import { ContainerStyle, TextStyle } from '../../styles/core';
import { SearchInput } from './SearchInput';
import { useSelector } from 'react-redux';
import { GnomeInformation } from '../Shared/GnomeInformation';
import { isEmpty } from 'lodash';
/*
component that displays the search screen for a gnome
*/
export const SearchScreen = () => {
  const { gnomeSearched } = useSelector((state) => state.gnome);
  return (
    <ContainerStyle m='20px'>
      <TextStyle fontSize='30px' fontWeight='bold' mb='10px'>
        Search the gnome:
      </TextStyle>
      <SearchInput />
      {!isEmpty(gnomeSearched) && <GnomeInformation {...gnomeSearched} />}
    </ContainerStyle>
  );
};
