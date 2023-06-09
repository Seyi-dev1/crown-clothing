import "./Header.scss";
import crown from "../../assets/084 crown.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { createSelector } from "reselect";
import { startSignOut } from "../../redux/user/userReducer";
import { selectCartVisibility } from "../../redux/cart/cartSelectors";

const Header = () => {
  const dispatch = useDispatch();

  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser
  );

  const user = useSelector((state) => userSelector(state));

  const cartVisibilitySelector = createSelector(
    [selectCartVisibility],
    (isVisible) => isVisible
  );

  const cartVisibility = useSelector((state) => cartVisibilitySelector(state));

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={crown} alt="crown" />
        <h2>Crown Clothing</h2>
      </Link>
      <div className="links">
        <div className="logo">
          <h2>CROWN CLOTHING</h2>
        </div>
        <div className="categories">
          <p>Women</p>
          <p>Men</p>
          <p>Kids</p>
          <p>Babies</p>
        </div>
      </div>
      <div className="options">
        {/* <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="shop">
          CONTACT
        </Link> */}
        {user ? (
          <div className="option" onClick={() => dispatch(startSignOut())}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartVisibility && <CartDropdown />}
    </div>
  );
};
export default Header;
