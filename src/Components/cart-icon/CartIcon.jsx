import './CartIcon.scss'

import shoppingBag from '../../assets/122 shopping-bag.svg'

import { useDispatch, useSelector } from 'react-redux'

import { changeVisibility } from '../../redux/cart/cartReducer'

const CartIcon = ()=>{

    const dispatch = useDispatch()

    const { currentUser } = useSelector((state) => state.user)
    const { cartItems } = useSelector((state) => state.cart)



    return(
        <div className="cart-icon" onClick={()=>{
            currentUser?dispatch(changeVisibility()):alert('Please sign in to view cart.')
        } }>
            <img src={shoppingBag} alt="shopping Icon" 
            className='shopping-icon'/>
            <span className='item-count'>{cartItems.length}</span>
        </div>
    )
}

export default CartIcon