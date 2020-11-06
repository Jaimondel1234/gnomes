import React, { useRef, useState, useEffect } from "react";
import {
  FlexStyle,
  ScrollContainer,
  PlaceHolderStyle,
} from "../../styles/core";
import { GnomeCard } from "./GnomeCard";
import { useSelector, useDispatch } from "react-redux";
import { loadGnomes } from "../../actions/gnome";
import { fill } from "lodash";
import map from "lodash/map";

let emptyArray = fill(new Array(20), 0);

const placeHolderArray = emptyArray.map((value, id) => {
  return `place_holder_${id}`;
});

export const GnomeList = () => {
  const dispatch = useDispatch();
  const { gnomes, loading } = useSelector((state) => state.gnome);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current.scrollTop >= 0.75 * ref.current.scrollHeight) {
      dispatch(loadGnomes());
    }
  };
  return (
    <ScrollContainer ref={ref} onScroll={handleScroll}>
      <FlexStyle
        alignItem="center"
        justifyContent="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        {gnomes &&
          map(gnomes, ({ id, ...props }) => <GnomeCard key={id} {...props} />)}
        {loading &&
          map(placeHolderArray, (value) => (
            <PlaceHolderStyle
              key={value}
              bg="grey"
              mr="30px"
              mb="50px"
              maxWidth="900px"
              borderRadius={10}
              pt="50px"
            />
          ))}
      </FlexStyle>
    </ScrollContainer>
  );
};
