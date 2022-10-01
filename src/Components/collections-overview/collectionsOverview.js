import './collectionsOverview.scss'
import { useSelector } from 'react-redux'
import { selectCollections } from '../../redux/shop-collections/shopCollectionsSelectors'
import { createSelector } from '@reduxjs/toolkit'
import CollectionPreview from "../collection-preview/CollectionPreview";

const CollectionsOverview = ()=>{


    const selectAllCollections = createSelector(
        [selectCollections],
        (collections)=>{return Object.keys(collections).map((key)=>{ return collections[key]
            
        }).map((collection)=>{
            return(
                <CollectionPreview
                    key={collection.id}
                    properties={collection}
                />
            )
        })
    } 
    )

    const allCollections = useSelector((state)=>selectAllCollections(state))


    return(
        <div className="collections-overview">
            {allCollections}
        </div>
    )
}

export default CollectionsOverview