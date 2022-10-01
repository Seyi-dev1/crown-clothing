import './checkOut.scss'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { createSelector } from '@reduxjs/toolkit'
import CheckOutItem from '../../Components/checkout item/checkOutItem'
import { changeVisibility } from '../../redux/payment/paymentReducer'
import { selectPaymentVisibility } from '../../redux/payment/paymentSelectors'
import PaymentDetails from '../../Components/payment/PaymentDetails'

const CheckOutPage = ()=>{

    const dispatch = useDispatch()
    const selectallCartItems = createSelector(
        [selectCartItems],
        cartItems=>cartItems.length > 0? cartItems.map((cartItem)=>{
            return <CheckOutItem key={cartItem.id} properties={cartItem}/>
        }): <h2>Your cart is empty</h2>
    )

    const selectAllPrices = createSelector(
        [selectCartItems],
        cartItems=>cartItems.map((cartItem)=>{
            return cartItem.price * cartItem.quantity
        }).reduce((index, value)=>{ 
            return index + value
        },0)
    )

    

 const paymentVisibility = useSelector((state)=>selectPaymentVisibility(state))


    const allCartItems = useSelector(state=>selectallCartItems(state))

  const allPrices = useSelector(state=>selectAllPrices(state))


    return(
       <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {allCartItems}
        <div className="total">
            <span>TOTAL: ₦{allPrices}</span>
        </div>
        <button className='pay-now' onClick={()=>dispatch(changeVisibility())}>Pay now</button>
        {paymentVisibility && <PaymentDetails total ={allPrices}/>}
       </div>
    )
}

export default CheckOutPage