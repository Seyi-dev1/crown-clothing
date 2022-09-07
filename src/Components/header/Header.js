import './Header.scss'
import crown from '../../assets/084 crown.svg'
import { Link } from 'react-router-dom'
const Header = ()=>{
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
              <Link className='option' to='shop'></Link>  
            </div>
        </div>
    )
}
export default Header