import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cartSaga";
import shopSaga from "./shopSagas";
import { userSagas } from "./userSaga";


export default function* rootSaga() {
    yield all([call(shopSaga), call(userSagas), call(cartSagas)])
}