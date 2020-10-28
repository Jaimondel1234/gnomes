import React from "react";
import {
  PanelStyle,
  TextStyle,
  ImageStyle,
  FlexStyle,
  ContainerStyle,
  ButtonStyle,
} from "../../styles/core";

export const GnomeCard = ({ name, thumbnail }) => {
  return (
    <PanelStyle
      bg="#1E90FF"
      mr="30px"
      mb="50px"
      maxWidth="900px"
      borderRadius={10}
      pt="50px"
    >
      <FlexStyle
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
      >
        <TextStyle
          color="white"
          fontSize="30px"
          fontWeight="bold"
          textShadow="2px 2px 4px #000000"
        >
          {name}
        </TextStyle>
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
        <ButtonStyle primary p="12px" fontSize="22px" fontWeight="bold">
          Send
        </ButtonStyle>
      </FlexStyle>
    </PanelStyle>
  );
};
