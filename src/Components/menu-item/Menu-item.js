import { Link } from 'react-router-dom'
import './Menu-item.scss'
const MenuItem = (props)=>{
    return(
        <Link to={props.properties.linkUrl} 
        className={`menu-item ${props.properties.size}`} >
                    <div 
                    className="background-image"
                    style={{backgroundImage:`url(${props.properties.imageUrl})`}}>
                        
                    </div>
                    <div className="content">
                        <h1 className="title">{props.properties.title.toUpperCase()}</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </Link>
    )
}
export default MenuItem