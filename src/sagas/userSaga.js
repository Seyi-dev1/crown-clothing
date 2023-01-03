import { takeLatest, put, call, all} from "redux-saga/effects";
import { auth, provider, createUserProfileDocument } from "../firebase/firebase.utils";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDoc } from "firebase/firestore/lite";
import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from "../redux/user/userReducer";


export function* signInWithGoogle() {
    try {
        const {user} = yield  signInWithPopup(auth,provider)
        
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield getDoc(userRef)
        yield put(googleSignInSuccess({
            id:userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (error) {
       yield put(googleSignInFailure(error))
    }
}

export function* signInwithEmail({payload}) {
    try {
    const   {user}  =  yield signInWithEmailAndPassword( auth, payload.email, payload.password)
    const userRef = yield call (createUserProfileDocument, user)
    const userSnapshot = yield getDoc(userRef)
    yield put(emailSignInSuccess({
        id:userSnapshot.id,
        ...userSnapshot.data()
    }))
    } catch (error) {
       yield put(emailSignInFailure(error)) 
    }
}


export function* signUp({ payload }) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, payload.email, payload.password)
        yield console.log(user)
        const userRef = yield call (createUserProfileDocument, user, payload.displayName)
        const userSnapshot = yield getDoc(userRef)
        yield put(signUpSuccess({
            id:userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}
  



export function* signUserOut(){
    try {
     yield auth.signOut()
        yield put(signOutSuccess(null))
    } catch (error) {
        yield put(signOutFailure(error))
    }
}
   




export function* onGoogleSignInStart() {
    yield takeLatest('user/googleSignInStart', signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest('user/emailSignInStart', signInwithEmail)
}

export function* onSignUpStart() {
    yield takeLatest('user/signUpStart', signUp)
}

export function* onSignOutStart(){
    yield takeLatest('user/startSignOut', signUserOut)
}


export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignOutStart), call(onSignUpStart)])
}


