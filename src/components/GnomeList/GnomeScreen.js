import React, { useEffect } from 'react';
import { ContainerStyle, ScrollContainer } from '../../styles/core';
import { GnomeList } from './GnomeList';
import { loadGnomes } from '../../actions/gnome';
import { useDispatch, useSelector } from 'react-redux';

/*
  Component that displays the screen with list gnomes
*/
export const GnomeScreen = () => {
  const dispatch = useDispatch();
  const { scrollNumberGnomes } = useSelector((state) => state.gnome);
  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    if (scrollNumberGnomes === 0 && uid) {
      dispatch(loadGnomes());
    }
  }, [loadGnomes, dispatch, scrollNumberGnomes, uid]);

  return (
    <ContainerStyle mt='5'>
      <GnomeList />
    </ContainerStyle>
  );
};
