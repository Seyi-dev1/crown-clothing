import './Shop.scss'
import CollecttionsOverview from '../../Components/collections-overview/collectionsOverview'


const Shop = ()=>{

    
        return(
            <div className="shop-page">
            {/* <Routes>
            <Route path='shop/:params.id' element={ <CollecttionsOverview/>}/>
            </Routes> */}
            <CollecttionsOverview/>
            </div>
        )
    
}
export default Shop