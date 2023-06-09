import "./CartIcon.scss";

import shoppingBag from "../../assets/122 shopping-bag.svg";

import { useDispatch, useSelector } from "react-redux";

import { changeVisibility } from "../../redux/cart/cartReducer";

import { cartItemsCount } from "../../redux/cart/cartSelectors";
import { BsHandbag } from "react-icons/bs";

const CartIcon = () => {
  const dispatch = useDispatch();
  const totalCartItems = useSelector((state) => cartItemsCount(state));

  return (
    <div
      className="cart-icon"
      onClick={() => {
        dispatch(changeVisibility());
      }}
    >
      <BsHandbag className="shopping-icon" />
      <span className="item-count">{totalCartItems}</span>
    </div>
  );
};

export default CartIcon;
