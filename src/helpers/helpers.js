import {
  getGnomeByNameSelector,
  getGnomesByNumberSelector,
} from '../selectors/selectors';
import { API } from '../api/API';
import map from 'lodash/map';
import PropTypes from 'prop-types';

/* 
   Helpers
 */

export async function getGnomeByName(name) {
  const listGnomes = await API.getGnomes();
  return getGnomeByNameSelector(listGnomes, name);
}

getGnomeByName.propTypes = {
  name: PropTypes.string,
};

export async function getGnomesByNumber(numberGnomes) {
  const listGnomes = await API.getGnomes();
  return getGnomesByNumberSelector(listGnomes, numberGnomes);
}

getGnomesByNumber.propTypes = {
  numberGnomes: PropTypes.number,
};

export function getListWithGenres(gnomes) {
  return map(gnomes, (gnome) => {
    return { ...gnome, genre: getGenreByHairColor(gnome.hair_color) };
  });
}

getListWithGenres.propTypes = {
  gnomes: PropTypes.arrayOf(PropTypes.object),
};

export function getGenreByHairColor(hair_color) {
  return hair_color.toLowerCase() === 'red' ? 'male' : 'female';
}

getGenreByHairColor.propTypes = {
  hair_color: PropTypes.string,
};
