import classes from './CartItem.module.css';
import {useSelector,useDispatch} from "react-redux";
import { productAction } from '../../store/product-slice';

const CartItem = (props) => {
  const items = useSelector(state=> state.product.items)
  const dispatch = useDispatch();
  const { title,id, price } = props;
  const total = items[id].totalPrice;
  const quantity = items[id].quantity;

  const handelIncrementClick=()=>{
    const item = {id,title,price} 
    dispatch(productAction.addToCart(item));
  }
  const handelDecrementClick=()=>{
    dispatch(productAction.removeFromCart(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handelDecrementClick}>-</button>
          <button onClick={handelIncrementClick}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
