import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id:"0",
    title:"A book",
    description:"This is first book",
    price:10
  },
  {
    id:"1",
    title:"A second book",
    description:"This is second book",
    price:15
  },
  {
    id:"2",
    title:"A third book",
    description:"This is third first book",
    price:20
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product)=>{
          return (
            <ProductItem
            key={product.key}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
          )
        })}
       
      </ul>
    </section>
  );
};

export default Products;
