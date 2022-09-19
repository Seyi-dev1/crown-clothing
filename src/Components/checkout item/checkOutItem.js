import './checkOutItem.scss'

const CheckOutItem = (props)=>{

    return(
 <div className="checkout-item">
    <div className="image-container">
        <img src={props.properties.imageUrl} alt="item" />
    </div>
    <span className='name'>{props.properties.name}</span>
    <span className='quantity'>{props.properties.quantity}</span>
    <span className='price'>{props.properties.price}</span>
    <div className="remove-button">&#10005;</div>
</div>
)
    
}

export default CheckOutItem