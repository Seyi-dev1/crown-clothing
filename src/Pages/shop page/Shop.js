import { Component } from "react";
import './Shop.scss'
import shopData from "./shopData";
import CollectionPreview from "../../Components/collection-preview/CollectionPreview";
class Shop extends Component{
    constructor (){
        super()
        
        this.state = {
            collections:shopData
        }
    }

    render(){
        return(
            <div className="shop-page">
            {this.state.collections.map((collection)=>{
                return(
                    <CollectionPreview
                        key={collection.id}
                        properties={collection}
                    />
                )
            })}
            </div>
        )
    }
}
export default Shop