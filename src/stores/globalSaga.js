import { put, takeLatest } from "redux-saga/effects";
import { setTestDataSucces } from "./globalSlice";

export const getGlobalState = (state) => state.global;
export const getShopState = (state) => state.shopSlice;

function* setTestData({ payload }) {
  console.log(payload, "payload");
  yield put(
    setTestDataSucces({
      ...payload,
    })
  );
}
function* globalSaga() {
  yield takeLatest("SET_TEST_DATA", setTestData);
}

export default globalSaga;
