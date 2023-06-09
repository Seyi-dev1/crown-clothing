import "./CollectionPreviewItem.scss";
import CustomButton from "../custom-button/CustomButton";
import { addToCart } from "../../redux/cart/cartReducer";
import { useDispatch } from "react-redux";
import { BsSuitHeart } from "react-icons/bs";

const CollectionPreviewItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.properties.imageUrl})` }}
      >
        <div className="icon">
          <BsSuitHeart />
        </div>
      </div>
      <div className="collection-footer">
        <span className="name">{props.properties.name}</span>
        <span className="price">₦{props.properties.price}</span>
      </div>
      <CustomButton
        value="ADD TO CART"
        isInverted={true}
        onclick={() => dispatch(addToCart({ ...props.properties }))}
      />
    </div>
  );
};
export default CollectionPreviewItem;
