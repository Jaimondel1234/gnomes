import { gnomesMock } from "../../__mocks__/gnomesMock";
import { fetchConfig } from "../../helpers/fetchConfig";

describe("Fetch Config Test", () => {
  test("it must return a response if status is 200", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ gnomes: gnomesMock }),
      })
    );
    const urlFake = "http/fake-url.com";
    expect(fetchConfig(urlFake)).resolves.toEqual({ gnomes: gnomesMock });
  });
  test("if the status is different from 200 , it must throw an error", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 400,
        json: () => {},
      })
    );
    const urlFake = "http/fake-url.com";
    const returnError = new Error("Error 400");
    expect(fetchConfig(urlFake)).rejects.toThrow(returnError);
  });
});
