import React from "react";
import {
  PanelStyle,
  TextStyle,
  ImageStyle,
  FlexStyle,
  ContainerStyle,
  ButtonStyle,
  SpanStyle,
} from "../../styles/core";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const GnomeCard = ({ ...props }) => {
  const { name, thumbnail } = props;
  const history = useHistory();
  const handleClick = () => {
    history.push("/gnome-detail", { ...props });
  };

  return (
    <PanelStyle
      mr="30px"
      mb="50px"
      maxWidth="900px"
      borderRadius="10px"
      pt="20px"
      mt="10px"
    >
      <FlexStyle
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
      >
        <SpanStyle
          color="white"
          fontSize="30px"
          fontWeight="bold"
          p="15px"
          textShadow="2px 2px 4px #000000"
          borderRadius="5px"
          bg="#1E90FF"
        >
          {name}
        </SpanStyle>
        <ContainerStyle p="20px">
          <ImageStyle
            src={thumbnail}
            width="350px"
            height="300px"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg";
            }}
          />
        </ContainerStyle>
        <ButtonStyle
          primary
          p="12px"
          fontSize="22px"
          fontWeight="bold"
          onClick={handleClick}
        >
          ... More
        </ButtonStyle>
      </FlexStyle>
    </PanelStyle>
  );
};
