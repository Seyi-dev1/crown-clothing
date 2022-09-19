import CustomButton from '../custom-button/CustomButton'
import './CartDropdown.scss'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const CartDropdown = () =>{

    const selectAllCartItems =  createSelector(
        [selectCartItems],
        cartItems=> cartItems.map((cartItem)=>{
            return <CartItem key={cartItem.id} properties={cartItem}/>
        })
       )
    const allCartItems = useSelector(state=>selectAllCartItems(state))

    
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {allCartItems}
            </div>
            <CustomButton value='GO TO CHECK OUT'/>
        </div>
    )
}

export default CartDropdown