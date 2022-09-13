import { createSlice } from "@reduxjs/toolkit";

const cartVisibilitySlice = createSlice({
    name:'cartVisibility',
    initialState:{
        isVisible:false
    },
    reducers:{
        changeVisibility:(state)=>{
            state.isVisible = !state.isVisible
        }
    }

})

export const { changeVisibility } = cartVisibilitySlice.actions

export default cartVisibilitySlice.reducer