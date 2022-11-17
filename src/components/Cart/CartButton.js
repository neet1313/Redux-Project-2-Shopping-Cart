import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { counterAction } from '../../store/slices/counterSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantityCounter = useSelector(state => state.counter.counter);

  const produceToggleHandler = () => {
    dispatch(counterAction.toggleProduct());
  }

  return (
    <button type='button' className={classes.button} onClick={produceToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantityCounter}</span>
    </button>
  );
};

export default CartButton;
