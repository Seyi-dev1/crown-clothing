import { createSlice } from "@reduxjs/toolkit";

// export const getCollections = createAsyncThunk(
//     'collections/getCollections',
//     async () =>{
//         const collectionRef = collection(db, 'collections')
//                 const getdocs = await getDocs(collectionRef)
//                 const documents = getdocs.docs.map((doc)=>{
//                     return doc.data()
//                 })
        
//                 const collectionsObject = documents.reduce((accumulator, collection)=>{
//                     accumulator[collection.title.toLowerCase()] = collection
//                     return accumulator
//                 }, {})

//                 return collectionsObject
//     }
//     )

const shopCollectionsSlice = createSlice({
    name:'shopCollections',
    initialState:{
        collections:{},
        isLoading:false
    },
    reducers:{
        fetchCollections:(state) => {
            state.isLoading = true
        },
        fetchCollectionsSuccess:(state, action) => {
            state.collections = action.payload
            state.isLoading = false
        },
        fetchCollectionsRejected: (state, action) => {
            state.isLoading = false
            console.log(action.payload)
        }
    },
    // extraReducers:{
    //     [getCollections.pending]:(state) => {
    //         state.isLoading = true
    //     },
    //     [getCollections.fulfilled]:(state, action) => {
    //         state.collections = action.payload
    //         state.isLoading = false
    //     },
    //     [getCollections.rejected]: (state) => {
    //         state.isLoading = false
    //     }
    // } 
})


export const { fetchCollections, fetchCollectionsSuccess, fetchCollectionsRejected } = shopCollectionsSlice.actions

export default shopCollectionsSlice.reducer