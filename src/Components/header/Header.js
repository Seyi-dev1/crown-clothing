import './Header.scss'
import crown from '../../assets/084 crown.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'


const Header = ()=>{

  const { currentUser } = useSelector((state) => state.user)

  const { isVisible } = useSelector((state) => state.cartVisibility)


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
                currentUser?
                <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='signin'>
                  SIGN IN
                </Link>
              }
              <CartIcon/> 
            </div>
            {isVisible && <CartDropdown/>}
        </div>
    )
}
export default Header