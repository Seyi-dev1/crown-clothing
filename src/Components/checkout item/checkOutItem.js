import './checkOutItem.scss'
import { useDispatch } from 'react-redux'
import { 
     removeFromCart,
     increaseCartItemQuantity,
     decreaseCartItemQuantity } from '../../redux/cart/cartReducer'


const CheckOutItem = (props)=>{

    const dispatch = useDispatch()

    return(
 <div className="checkout-item">
    <div className="image-container">
        <img src={props.properties.imageUrl} alt="item" />
    </div>
    <span className='name'>{props.properties.name}</span>
    <span className='quantity'>
    <div className="arrow"
    onClick={()=>{
        props.properties.quantity > 1? dispatch(decreaseCartItemQuantity(props.properties.id))
        :dispatch(removeFromCart(props.properties.id))
    }}
    >&#10094;</div>
    <span className='value'>{props.properties.quantity}</span>
    <div className="arrow"
    onClick={()=>{dispatch(increaseCartItemQuantity(props.properties.id))}}>&#10095;</div>
    </span>
    <span className='price'>{props.properties.price}</span>
    <div 
    className="remove-button"
    onClick={()=>{dispatch(removeFromCart(props.properties.id))}}
    >
    &#10005;
    </div>
</div>
)
    
}

export default CheckOutItem