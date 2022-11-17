import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { counterAction } from '../../store/slices/counterSlice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const quantityCounter = useSelector(state => state.counter.counter);
  const { title, price } = props.item;

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  }

  const decrementHandler = () => {
    quantityCounter > 0 && dispatch(counterAction.decrement());
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * quantityCounter).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantityCounter}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
