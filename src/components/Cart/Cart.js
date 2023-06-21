import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = (props) => {
  const products = useSelector(state=>state.product.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map((product)=>{
          return(
              <CartItem
                key= {product.id}
                id = {product.id}
                title = {product.title}
                price = {product.price}
            />
          )
        })}
      </ul>
    </Card>
  );
};

export default Cart;
