import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from "react-redux";
import { productAction } from '../../store/product-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description,id} = props;

  const handelProductClick =(e)=>{
    e.preventDefault();
    const item = {id,title,price}
    console.log(item);
    dispatch(productAction.addToCart(item));

  }


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handelProductClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
