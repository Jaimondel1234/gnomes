export const API = {
  authorizeMock(email, password) {
    if (email === "heroe@gmail.com" && password == "heroe") {
      return { displayName: "heroe", uid: "23edwdfew" };
    }
    return null;
  },
  async getGnomes(numberGnomes) {
    const url =
      "http://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
    const resp = await fetch(url, {
      method: "GET",
    });
    const body = await resp.json();
    return body.Brastlewark.slice(0, numberGnomes);
  },
};
