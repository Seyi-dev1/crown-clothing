import './Shop.scss'
import CollecttionsOverview from '../../Components/collections-overview/collectionsOverview'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WithSpinner from '../../Components/with spinner/with-spinner'
import { selectIsLoading } from '../../redux/shop-collections/shopCollectionsSelectors'
import { fetchCollections } from '../../redux/shop-collections/shopCollectionsReducer'

const Shop = ()=>{


    const dispatch = useDispatch()

    const isLoading = useSelector((state)=>selectIsLoading(state))

    React.useEffect(
        ()=>{
          dispatch(fetchCollections())   
        },[dispatch]
    )

    
        return(
            <div className="shop-page">
            {isLoading?<WithSpinner/>:<CollecttionsOverview/>}
            </div>
        )
    
}
export default Shop