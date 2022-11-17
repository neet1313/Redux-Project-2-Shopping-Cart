import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { counterAction } from '../../store/slices/counterSlice';
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const actionDispatchHandler = () => {
    dispatch(counterAction.increment());
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
          <button onClick={actionDispatchHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
