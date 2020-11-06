import { gnomesMock } from "../../__mocks__/gnomesMock";
import {
  getGnomesByNumber,
  getGnomeByName,
  getListWithGenres,
  getGenreByHairColor,
} from "../../helpers/helpers";
import { API } from "../../api/API";

jest.mock("../../api/API");
const spy = jest.spyOn(API, "getGnomes").mockReturnValue(gnomesMock);
describe("Helpers test", () => {
  test("get gnomes given a number", async () => {
    expect(await getGnomesByNumber(1)).toEqual([gnomesMock[0]]);
  });
  test("get a gnome given a name", async () => {
    expect(await getGnomeByName("Fizkin Voidbuster")).toEqual([gnomesMock[1]]);
  });
  test("if the color of the hair is red it must return male", () => {
    expect(getGenreByHairColor("red")).toBe("male");
  });
  test("if the color of the hair is not red it must return female", () => {
    expect(getGenreByHairColor("blue")).toBe("female");
  });
});
