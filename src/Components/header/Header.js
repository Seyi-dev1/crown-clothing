import './Header.scss'
import crown from '../../assets/084 crown.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { createSelector } from 'reselect'
import { selectCartVisibility } from '../../redux/cart/cartSelectors'


const Header = ()=>{



  const userSelector = createSelector(
    [selectCurrentUser],
    currentUser=>currentUser
  )

  const user = useSelector(state=>userSelector(state))

  const cartVisibilitySelector = createSelector(
    [selectCartVisibility],
    isVisible=>isVisible
  )

  const cartVisibility = useSelector(state=>cartVisibilitySelector(state))


    return(
        <div className="header">
            <Link className='logo-container' to='/'>
            <img src={crown} alt="crown" />
            </Link>
            <div className="options">
              <Link className='option' to='shop'>
              SHOP
              </Link>
              <Link className='option' to='shop'>
                CONTACT
              </Link>
              {
               user?
    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
    :
    <Link className='option' to='signin'>
      SIGN IN
    </Link>
              }
              <CartIcon/> 
            </div>
            {cartVisibility && <CartDropdown/>}
        </div>
    )
}
export default Header