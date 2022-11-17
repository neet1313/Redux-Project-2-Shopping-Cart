import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const quantityCounter = useSelector(state => state.counter.counter);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantityCounter}</span>
    </button>
  );
};

export default CartButton;
