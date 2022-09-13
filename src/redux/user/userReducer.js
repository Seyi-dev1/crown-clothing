import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null
    },
    reducers:{
        updateCurrentUser: (state, action) =>{
            state.currentUser = action.payload
        }
    }
})

export const { updateCurrentUser } = userSlice.actions

export default userSlice.reducer