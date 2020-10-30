import {
  getGnomeByNameSelector,
  getGnomesByNumberSelector,
} from "../selectors/selectors";
import { API } from "../api/API";

export async function getGnomeByName(name) {
  const listGnomes = await API.getGnomes();
  return getGnomeByNameSelector(listGnomes, name);
}

export async function getGnomesByNumber(numberGnomes) {
  const listGnomes = await API.getGnomes();
  return getGnomesByNumberSelector(listGnomes, numberGnomes);
}
