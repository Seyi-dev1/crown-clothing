import './Category.scss'
import { useParams } from 'react-router-dom'
import { selectCollections } from '../../redux/shop-collections/shopCollectionsSelectors'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import CollectionPreviewItem from '../../Components/collectio-preview-item/CollectionPreviewItem'
import React from 'react'
import { fetchCollections } from '../../redux/shop-collections/shopCollectionsReducer'
import WithSpinner from '../../Components/with spinner/with-spinner'

 
const CollectionPage = ()=>{
    
    const { shopId }= useParams()

    const dispatch = useDispatch()

    const selectCollection = createSelector(
        [selectCollections],
        collections=>collections[shopId]
    )
             
    const collection = useSelector(state => selectCollection(state) )

    React.useEffect(
        () => {
            collection === undefined && dispatch(fetchCollections())
        }, [dispatch, collection]
    )

    return( collection !== undefined?
        <div className="collection-page">
         <h2 key={collection.id} className='title'>
        {collection.title}
        </h2>  
        <div className="items">
            {collection.items.map((item)=>{
                return <CollectionPreviewItem key={item.id} properties={item}/>
            })}
        </div>
        </div>:
        <WithSpinner/>
       
    )
}

export default CollectionPage