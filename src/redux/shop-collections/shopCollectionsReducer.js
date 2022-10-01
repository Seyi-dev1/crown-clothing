import { createSlice } from "@reduxjs/toolkit";
import shopData from "./shopData";


const shopCollectionsSlice = createSlice({
    name:'shopCollections',
    initialState:{
        collections:shopData
    }
})

export default shopCollectionsSlice.reducer