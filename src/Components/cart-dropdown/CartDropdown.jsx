import CustomButton from '../custom-button/CustomButton'
import './CartDropdown.scss'
import { useSelector } from 'react-redux'
import CartItem from '../cart-item/CartItem'

const CartDropdown = () =>{

    const { cartItems } = useSelector((state)=>state.cart)



    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map((cartItem)=>{
                        return <CartItem key={cartItem.id} properties={cartItem}/>
                    })
                }
            </div>
            <CustomButton value='GO TO CHECK OUT'/>
        </div>
    )
}

export default CartDropdown