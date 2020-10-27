export const API = {
  authorizeMock(email, password) {
    if (email === "heroe@gmail.com" && password == "heroe") {
      return { displayName: "heroe", uid: "23edwdfew" };
    }
    return null;
  },
};
