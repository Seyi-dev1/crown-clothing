import './Category.scss'
import { useParams } from 'react-router-dom'
import { selectCollections } from '../../redux/shop-collections/shopCollectionsSelectors'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import CollectionPreviewItem from '../../Components/collectio-preview-item/CollectionPreviewItem'

 
const CollectionPage = ()=>{
    
    const { shopId }= useParams()

    const selectCollection = createSelector(
        [selectCollections],
        collections=>collections[shopId]
    )
             
    const collection = useSelector(state => selectCollection(state) )


    return(
        <div className="collection-page">
         <h2 key={collection.id} className='title'>
        {collection.title}
        </h2>  
        <div className="items">
            {collection.items.map((item)=>{
                return <CollectionPreviewItem key={item.id} properties={item}/>
            })}
        </div>
        </div>
       
    )
}

export default CollectionPage