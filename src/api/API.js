import { fetchConfig } from '../helpers/fetchConfig';

/*
  API
*/
export const API = {
  authorizeMock(email, password) {
    if (email === 'heroe@gmail.com' && password == 'heroe') {
      return { displayName: 'heroe', uid: '23edwdfew' };
    }
    return null;
  },
  async getGnomes() {
    const url =
      'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
    const body = await fetchConfig({
      url,
      // headers: { "Content-Type": "text/plain" },
    });
    return body.Brastlewark;
  },
};
