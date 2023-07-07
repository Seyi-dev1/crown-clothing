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
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import React from "react";
// import crown2 from "../../assets/crown/icons8-crown-40.png";

const Header = () => {
  const dispatch = useDispatch();

  const [isMenu, setIsMenu] = React.useState(false);
  const [logout, setLogout] = React.useState(false);

  const menuToggle = () => {
    setIsMenu((prev) => !prev);
  };
  const toggleLogout = () => {
    setLogout((prev) => !prev);
  };

  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser
  );

  const user = useSelector((state) => userSelector(state));
  const getLetter = () => {
    let letter;
    if (user) {
      const { email } = user;
      letter = email.charAt(0).toUpperCase();
    }
    return letter;
  };
  const cartVisibilitySelector = createSelector(
    [selectCartVisibility],
    (isVisible) => isVisible
  );

  const cartVisibility = useSelector((state) => cartVisibilitySelector(state));

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={crown} alt="crown" />
        <h2>Regal</h2>
      </Link>
      <div className="links">
        <div className="logo">
          <h2>REGAL CLOTHING</h2>
        </div>
        <div className="categories">
          <p>Women</p>
          <p>Men</p>
          <p>Hats</p>
          <p>Sneakers</p>
        </div>
      </div>
      <div className="options">
        <CartIcon />
        {user ? (
          <div className="option" onClick={toggleLogout}>
            <div className="name">
              <p>{getLetter()}</p>
            </div>
          </div>
        ) : (
          <Link className="option" to="signin">
            <AiOutlineUser />
          </Link>
        )}
        <BiMenu onClick={menuToggle} className="menu" />
      </div>
      {cartVisibility && <CartDropdown />}
      {isMenu && (
        <div className="modal">
          <div className="modalContent">
            <div className="modalLogo">
              <img src={crown} alt="crown" />
              <h1>Regal Clothing.</h1>
            </div>
            <RxCross1 onClick={menuToggle} className="menu" />
            <Link onClick={menuToggle} to="/">
              <h2>Home</h2>
            </Link>
            <Link onClick={menuToggle} to="/shop/womens">
              <h2>Womens</h2>
            </Link>
            <Link onClick={menuToggle} to="/shop/mens">
              <h2>Mens</h2>
            </Link>
            <Link onClick={menuToggle} to="/shop/hats">
              <h2>Hats</h2>
            </Link>
            <Link onClick={menuToggle} to="/shop/sneakers">
              <h2>Sneakers</h2>
            </Link>
          </div>
        </div>
      )}
      {logout && (
        <div className="logout">
          <div className="content">
            <p
              onClick={() => {
                dispatch(startSignOut());
                toggleLogout();
              }}
            >
              <span>Sign Out</span> <MdLogout className="out" />
            </p>
            <div className="line"></div>
            <Link className="home" to={"/"} onClick={toggleLogout}>
              <span>Home</span> <AiOutlineHome className="house" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
