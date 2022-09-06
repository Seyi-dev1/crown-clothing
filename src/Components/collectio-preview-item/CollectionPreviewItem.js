import './CollectionPreviewItem.scss'
const CollectionPreviewItem = (props)=>{
    return(
        <div className="collection-item">
            <div className="image" 
            style={{backgroundImage:`url(${props.properties.imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <span className="name">{props.properties.name}</span>
                <span className="price">{props.properties.price}</span>
            </div>
        </div>
    )
}
export default CollectionPreviewItem