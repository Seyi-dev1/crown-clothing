import './CartItem.scss'

const CartItem = (props)=>{


    return(
        <div className="cart-item">
            <img src={props.properties.imageUrl} alt="item"/>
            <div className="item-details">
                <span className='name'>{props.properties.name}</span>
                <span className='price'>{props.properties.quantity} x  ${props.properties.price}</span>
            </div>
        </div>
    )
}

export default CartItem