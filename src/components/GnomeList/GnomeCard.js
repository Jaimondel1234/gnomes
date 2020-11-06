import React from 'react';
import {
  PanelStyle,
  ImageStyle,
  FlexStyle,
  ContainerStyle,
  ButtonStyle,
  SpanStyle,
} from '../../styles/core';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
  Component that displays the gnome card
*/
export const GnomeCard = ({ ...props }) => {
  const { name, thumbnail } = props;
  const history = useHistory();
  const handleClick = () => {
    history.push('/gnome-detail', { ...props });
  };

  return (
    <PanelStyle
      mr='30px'
      mb='50px'
      maxWidth='900px'
      borderRadius='10px'
      pt='20px'
      mt='10px'
    >
      <FlexStyle
        alignItems='center'
        justifyContent='space-between'
        flexDirection='column'
      >
        <SpanStyle
          color='white'
          fontSize='30px'
          fontWeight='bold'
          p='15px'
          textShadow='2px 2px 4px #000000'
          borderRadius='5px'
          bg='#1E90FF'
        >
          {name}
        </SpanStyle>
        <ContainerStyle p='20px'>
          <ImageStyle
            src={thumbnail}
            width='350px'
            height='300px'
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg';
            }}
          />
        </ContainerStyle>
        <ButtonStyle
          primary
          p='12px'
          fontSize='25px'
          fontWeight='bold'
          onClick={handleClick}
          letterSpacing='3px'
          lineHeight='50px'
        >
          ... More
        </ButtonStyle>
      </FlexStyle>
    </PanelStyle>
  );
};

GnomeCard.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    age: PropTypes.number,
    genre: PropTypes.string,
    hair_color: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    professions: PropTypes.arrayOf(PropTypes.string),
    friends: PropTypes.arrayOf(PropTypes.string),
  }),
};
