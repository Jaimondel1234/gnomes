export const getGnomeByNameSelector = (gnomeList, name) => {
  console.log(gnomeList);
  return gnomeList.filter(
    (gnome) => gnome.name.toUpperCase().trim() === name.toUpperCase().trim()
  );
};

export const getGnomesByNumberSelector = (gnomeList, numberGnomes) => {
  console.log(gnomeList);
  return gnomeList.slice(0, numberGnomes);
};
