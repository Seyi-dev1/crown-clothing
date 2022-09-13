import CustomButton from '../custom-button/CustomButton'
import './CartDropdown.scss'

const CartDropdown = () =>{



    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton value='GO TO CHECK OUT'/>
            </div>
        </div>
    )
}

export default CartDropdown