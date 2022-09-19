import CustomButton from '../custom-button/CustomButton'
import './CartDropdown.scss'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { changeVisibility } from '../../redux/cart/cartReducer'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () =>{

    const selectAllCartItems =  createSelector(
        [selectCartItems],
        cartItems=> cartItems.length > 0?cartItems.map((cartItem)=>{
            return <CartItem key={cartItem.id} properties={cartItem}/>
        }):<span className='empty-message'>Your cart is empty</span>
       )
    const allCartItems = useSelector(state=>selectAllCartItems(state))

    const navigate = useNavigate()
    const dispatch = useDispatch()


    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {allCartItems}
            </div>
            <CustomButton 
            value='GO TO CHECK OUT'
            onclick={()=>{
             navigate('checkout')
             dispatch(changeVisibility())}}   
            />
        </div>
    )
}

export default CartDropdown