import { createSlice } from "@reduxjs/toolkit";
import sections from "./data";

const directorySlice = createSlice({
    name:'directory',
    initialState:{
        sections:sections
    }
})

export default directorySlice.reducer