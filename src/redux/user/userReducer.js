import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isSigningIn: false,
  },
  reducers: {
    googleSignInStart: (state) => {
      state.isSigningIn = true;
    },
    SignInSuccess: (state, action) => {
      state.isSigningIn = false;
      state.currentUser = action.payload;
    },
    SignInFailure: (state, action) => {
      state.isSigningIn = false;
      console.log(action.payload);
    },
    emailSignInStart: (state, action) => {
      state.isSigningIn = true;
    },
    signUpStart: (state, action) => {
      state.isSigningIn = true;
    },
    signUpSuccess: (state, action) => {},
    signUpFailure: (state, action) => {
      console.log(action.payload);
    },
    startSignOut: () => {},
    signOutSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutFailure: (state, action) => {
      console.log(action.payload);
    },
    checkUserSession: (state, action) => {},
  },
});

export const {
  googleSignInStart,
  emailSignInStart,
  SignInSuccess,
  SignInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  startSignOut,
  signOutSuccess,
  signOutFailure,
  checkUserSession,
} = userSlice.actions;

export default userSlice.reducer;
