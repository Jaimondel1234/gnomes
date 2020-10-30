import React, { useEffect } from "react";
import { ContainerStyle, ScrollContainer } from "../../styles/core";
import { GnomeList } from "./GnomeList";
import { loadGnomes } from "../../actions/gnome";
import { useDispatch, useSelector } from "react-redux";

export const GnomeScreen = () => {
  const dispatch = useDispatch();
  const { scrollNumberGnomes } = useSelector((state) => state.gnome);

  useEffect(() => {
    if (scrollNumberGnomes === 0) {
      dispatch(loadGnomes());
    }
  }, [loadGnomes, dispatch, scrollNumberGnomes]);

  return (
    <ContainerStyle mt="5">
      <GnomeList />
    </ContainerStyle>
  );
};
