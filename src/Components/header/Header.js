import './Header.scss'
import crown from '../../assets/084 crown.svg'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
const Header = (props)=>{
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
                props.currentUser?
                <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='signin'>
                  SIGN IN
                </Link>
              } 
            </div>
        </div>
    )
}
export default Header