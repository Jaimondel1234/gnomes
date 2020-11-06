import { types } from '../../types/types';

describe('Types tests', () => {
  test('The types must match', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
      loginRequest: '[Auth] Login Request',

      addGnomes: '[Gnomes] Add Gnomes',
      loadGnomes: '[Gnomes] Load Gnomes',
      setLoading: '[Gnomes] Set Loading',
      setGnomeSearched: '[Gnomes] Set Gnome Searched',
      startGnomeSearch: '[Gnomes] Start Gnome Search',
      cleanGnomes: '[Gnomes] Clean Gnomes',
    });
  });
});
