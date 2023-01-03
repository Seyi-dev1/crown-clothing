import { call, put, takeLatest } from 'redux-saga/effects'
import { db } from '../firebase/firebase.utils'
import { collection, getDocs, } from 'firebase/firestore/lite'
import { fetchCollectionsSuccess, fetchCollectionsRejected } from '../redux/shop-collections/shopCollectionsReducer'


export const getCollections = 
        async () =>{
            const collectionRef = collection(db, 'collections')
                    const getdocs = await getDocs(collectionRef)
                    const documents = getdocs.docs.map((doc)=>{
                        return doc.data()
                    })
            
                    const collectionsObject = documents.reduce((accumulator, collection)=>{
                        accumulator[collection.title.toLowerCase()] = collection
                        return accumulator
                    }, {})
    
                    return collectionsObject
        }
          


function* getFetchCollections() {

    try {
        const getdocs = yield  call(getCollections)

        yield put(fetchCollectionsSuccess(getdocs))  
        
    }
     catch (error) {
        yield put(fetchCollectionsRejected(error.message))
    }
    
}


function* shopSaga() {
    yield takeLatest('shopCollections/fetchCollections', getFetchCollections)
}

export default shopSaga