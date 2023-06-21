import classes from './CartButton.module.css';
import {useDispatch,useSelector} from "react-redux";
import { cartShowAction } from '../../store/cartShow-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const product = useSelector(state=>state.product.items)

  const badge = product.length
  
  const handelCartClick=()=>{
    dispatch(cartShowAction.showCart());
  }
  return (
    <button className={classes.button} onClick={handelCartClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
