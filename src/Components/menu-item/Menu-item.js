import './Menu-item.scss'
const MenuItem = (props)=>{
    return(
        <div 
        className={`menu-item ${props.properties.size}`}>
                    <div 
                    className="background-image"
                    style={{backgroundImage:`url(${props.properties.imageUrl})`}}>
                        
                    </div>
                    <div className="content">
                        <h1 className="title">{props.properties.title.toUpperCase()}</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
    )
}
export default MenuItem