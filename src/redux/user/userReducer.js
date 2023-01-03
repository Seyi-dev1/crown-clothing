import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isSigningIn:false
    },
    reducers:{
       
        googleSignInStart: (state) =>{
            state.isSigningIn = true
        },
        googleSignInSuccess: (state, action) =>{
            state.isSigningIn = false
            state.currentUser = action.payload
        },
        googleSignInFailure: (state, action) =>{
            state.isSigningIn = false
            console.log(action.payload)

        },
        emailSignInStart: (state, action) =>{
            state.isSigningIn = true
        },
        emailSignInSuccess: (state, action) =>{
            state.isSigningIn = false
            state.currentUser = action.payload
        },
        emailSignInFailure: (state, action) =>{
            state.isSigningIn = false
            console.log(action.payload)
        },
        signUpStart: () =>{

        },
        signUpSuccess:(state, action) =>{
            state.currentUser = action.payload
        },
        signUpFailure:(state, action) =>{
            console.log(action.payload)
        },
        startSignOut:()=>{

        },
        signOutSuccess:(state, action)=>{
            state.currentUser = action.payload
        },
        signOutFailure:(state, action)=>{
            console.log(action.payload)
        }
    }
})

export const { googleSignInStart,
               googleSignInSuccess,
               googleSignInFailure,
               emailSignInStart,
               emailSignInSuccess,
               emailSignInFailure,
               signUpStart,
               signUpSuccess,
               signUpFailure,
               startSignOut,
               signOutSuccess,
               signOutFailure 
 } = userSlice.actions

export default userSlice.reducer