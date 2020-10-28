import React, { useRef, useEffect } from "react";
import { FlexStyle, ScrollContainer } from "../../styles/core";
import { GnomeCard } from "./GnomeCard";
import { useSelector, useDispatch } from "react-redux";
import { loadGnomes } from "../../actions/gnome";

export const GnomeList = () => {
  const dispatch = useDispatch();
  const { gnomes } = useSelector((state) => state.gnome);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current.scrollTop >= 0.75 * ref.current.scrollHeight) {
      dispatch(loadGnomes());
    }
  };
  return (
    <>
      <ScrollContainer ref={ref} onScroll={handleScroll}>
        <FlexStyle
          alignItem="center"
          justifyContent="center"
          flexDirection="row"
          flexWrap="wrap"
        >
          {gnomes &&
            gnomes.map(({ id, ...props }) => <GnomeCard key={id} {...props} />)}
        </FlexStyle>
      </ScrollContainer>
    </>
  );
};
