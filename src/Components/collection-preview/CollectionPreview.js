import CollectionPreviewItem from '../collectio-preview-item/CollectionPreviewItem'
import './CollectionPreview.scss'
const CollectionPreview = (props)=>{
    return(
        <div className="collection-preview">
            <h1 className='title'>{props.properties.title.toUpperCase()}</h1>
            <div className="preview">
                {props.properties.items.filter((item, index)=>{
                    return index < 4
                }).map((item)=>{
                    return(
                       <CollectionPreviewItem
                        key={item.id}
                        properties={item}
                       />
                    )
                })}
            </div>
        </div>
    )
}
export default CollectionPreview