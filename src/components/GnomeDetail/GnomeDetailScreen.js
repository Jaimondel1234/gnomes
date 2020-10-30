import React from "react";
import { GnomeInformation } from "../Shared/GnomeInformation";
import { useLocation } from "react-router-dom";
import { ContainerStyle } from "../../styles/core";

export const GnomeDetailScreen = () => {
  const location = useLocation();

  return (
    <ContainerStyle mt="5">
      <GnomeInformation {...location.state} />
    </ContainerStyle>
  );
};
