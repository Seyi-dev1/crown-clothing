import { all, call, put, takeLatest  } from "redux-saga/effects";
import { clearCart } from "../redux/cart/cartReducer";


export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest('user/signOutSuccess', clearCartOnSignOut)
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)])
}