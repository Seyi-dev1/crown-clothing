import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name:'payment',
    initialState:{
        isMounted:false
    },
    reducers:{
        changeVisibility:(state)=>{
            state.isMounted=!state.isMounted
        }
    }
})

export const { changeVisibility } = paymentSlice.actions

export default paymentSlice.reducer
