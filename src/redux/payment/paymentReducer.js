import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name:'payment',
    initialState:{
        isMounted:true
    },
    reducers:{
        changeVisibility:(state)=>{
            state.isMounted=!state.isMounted
        }
    }
})

export const { changeVisibility } = paymentSlice.actions

export default paymentSlice.reducer
