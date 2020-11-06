import { gnomesMock } from '../../__mocks__/gnomesMock';
import {
  getGnomeByNameSelector,
  getGnomesByNumberSelector,
} from '../../selectors/selectors';

describe('Selector Tests', () => {
  test('filter gnome by name', () => {
    expect(getGnomeByNameSelector(gnomesMock, 'Fizkin Voidbuster')).toEqual([
      gnomesMock[1],
    ]);
  });
  test('filter gnome by number', () => {
    expect(getGnomesByNumberSelector(gnomesMock, '1')).toEqual([gnomesMock[0]]);
  });
});
