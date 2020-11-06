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
import PropTypes from "prop-types";
import map from "lodash/map";

const ListElementInformation = styled(ListElement)`
  font-weight: bold;
  color: black;
  font-size: 25px;
  padding-left: 20px;
  margin-left: 5px;
`;

const SquareListElementInformation = styled(ListElementInformation)`
  margin-left: 40px;
  list-style-type: square;
`;
export const GnomeInformation = ({
  name,
  thumbnail,
  age,
  genre,
  hair_color,
  height,
  weight,
  professions,
  friends,
}) => {
  return (
    <FlexStyle
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      mb="5px"
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
        Gnome Information
      </SpanStyle>
      <PanelStyle
        color="#ffff"
        borderRadius={10}
        p="10px 10px 20px 20px"
        mr="10px"
        ml="10px"
      >
        <SpanStyle
          color="white"
          fontSize="40px"
          fontWeight="bold"
          p="15px"
          textShadow="2px 2px 4px #000000"
          borderRadius="10px"
          bg="#1E90FF"
          m="5px auto"
        >
          {name}
        </SpanStyle>
        <FlexStyle
          alignItems="center"
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
            <ListElementInformation mt="60px">
              Age: {age}
            </ListElementInformation>
            <ListElementInformation>Genre: {genre}</ListElementInformation>
            <ListElementInformation>
              Hair color: {hair_color}
            </ListElementInformation>
            <ListElementInformation>Height: {height}</ListElementInformation>
            <ListElementInformation>Width: {weight}</ListElementInformation>

            {professions && professions.length > 0 && (
              <>
                <ListElementInformation>Professions:</ListElementInformation>
                {map(professions, (profession, i) => (
                  <SquareListElementInformation key={i}>
                    {profession}
                  </SquareListElementInformation>
                ))}
              </>
            )}

            {friends && friends.length > 0 && (
              <>
                <ListElementInformation>Professions:</ListElementInformation>
                {map(friends, (friend, i) => (
                  <SquareListElementInformation key={i}>
                    {friend}
                  </SquareListElementInformation>
                ))}
              </>
            )}
          </ContainerList>
        </FlexStyle>
      </PanelStyle>
    </FlexStyle>
  );
};

GnomeInformation.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  age: PropTypes.number,
  genre: PropTypes.string,
  hair_color: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
  professions: PropTypes.arrayOf(PropTypes.string),
  friends: PropTypes.arrayOf(PropTypes.string),
};
