import PropTypes from 'prop-types';
import filter from 'lodash/filter';

/* 
  Selectors
*/

export const getGnomeByNameSelector = (gnomeList, name) => {
  return filter(
    gnomeList,
    (gnome) => gnome.name.toUpperCase().trim() === name.toUpperCase().trim(),
  );
};

getGnomeByNameSelector.propTypes = {
  gnomeList: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
};

export const getGnomesByNumberSelector = (gnomeList, numberGnomes) => {
  return gnomeList.slice(0, numberGnomes);
};

getGnomesByNumberSelector.propTypes = {
  gnomeList: PropTypes.arrayOf(PropTypes.object),
  numberGnomes: PropTypes.number,
};
