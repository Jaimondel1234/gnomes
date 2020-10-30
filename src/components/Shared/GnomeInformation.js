import React from "react";
import {
  FlexStyle,
  ImageStyle,
  PanelStyle,
  ContainerList,
  ListElement,
  SpanStyle,
} from "../../styles/core";
import styled from "styled-components";

const ListElementInformation = styled(ListElement)`
  font-weight: bold;
  color: black;
  font-size: 25px;
  padding-left: 20px;
  margin-left: 5px;
`;
export const GnomeInformation = (props) => {
  const { name, thumbnail, age, hair_color, height, weight } = props;
  return (
    <FlexStyle
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
    >
      <SpanStyle
        color="white"
        fontSize="60px"
        fontWeight="bold"
        p="15px"
        textShadow="2px 2px 4px #000000"
        borderRadius="5px"
        bg="#1E90FF"
        textAlign="center"
        mb="20px"
      >
        {name}
      </SpanStyle>
      <PanelStyle color="#ffff" borderRadius={10} p="20px">
        <FlexStyle
          alignItem="center"
          justifyContent="flex-start"
          flexDirection="row"
        >
          <ImageStyle
            p="20px"
            maxWidth="500px"
            maxHeight="600px"
            src={thumbnail}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg";
            }}
          />
          <ContainerList
            mr="20px"
            mb="15px"
            p="10px 50px 20px 50px"
            borderRadius={20}
          >
            <SpanStyle
              color="white"
              fontSize="40px"
              fontWeight="bold"
              p="15px"
              textShadow="2px 2px 4px #000000"
              borderRadius="10px"
              bg="#1E90FF"
            >
              Information
            </SpanStyle>
            <ListElementInformation mt="60px">
              Age: {age}
            </ListElementInformation>
            <ListElementInformation>
              Hair color: {hair_color}
            </ListElementInformation>
            <ListElementInformation>Height: {height}</ListElementInformation>
            <ListElementInformation>Width: {weight}</ListElementInformation>
          </ContainerList>
        </FlexStyle>
      </PanelStyle>
    </FlexStyle>
  );
};
