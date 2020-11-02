import PropTypes from "prop-types";

export const getGnomeByNameSelector = (gnomeList, name) => {
  console.log(gnomeList);
  return gnomeList.filter(
    (gnome) => gnome.name.toUpperCase().trim() === name.toUpperCase().trim()
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
