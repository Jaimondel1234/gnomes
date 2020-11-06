import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { types } from "../../types/types";
import { watchSearchGnome, searchGnome } from "../../sagas/searchGnomeSaga";
import Swal from "sweetalert2";
import { getGnomeByName } from "../../helpers/helpers";
import { throwError } from "redux-saga-test-plan/providers";

describe("Test search Gnome Saga", () => {
  test("test watchSearchGnome ", (done) => {
    return expectSaga(watchSearchGnome)
      .provide([[matchers.call.fn(searchGnome), null]])
      .dispatch(types.startGnomeSearch, "gnomName")
      .call(searchGnome, "gnomeName")
      .run()
      .then(done());
  });
  test("search saga test if an error is thrown", () => {
    const spy = jest.spyOn(Swal, "fire");
    const error = new Error("error");
    return expectSaga(searchGnome)
      .provide([[matchers.call.fn(getGnomeByName), throwError(error)]])
      .run()
      .then(() => {
        expect(spy).toHaveBeenCalledWith(
          "Error",
          "Error in search for gnome",
          "error"
        );
      });
  });
});
