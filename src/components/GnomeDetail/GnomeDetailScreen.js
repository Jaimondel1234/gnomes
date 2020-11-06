import React from 'react';
import { GnomeInformation } from '../Shared/GnomeInformation';
import { useLocation } from 'react-router-dom';
import { ContainerStyle } from '../../styles/core';

/*
  Component that displays the screen with the information of a gnome
*/
export const GnomeDetailScreen = () => {
  const location = useLocation();

  return (
    <ContainerStyle mt='5'>
      <GnomeInformation {...location.state} />
    </ContainerStyle>
  );
};
