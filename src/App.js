import { useSelector } from 'react-redux'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showProd = useSelector(state => state.counter.showProduct)

  return (
    <Layout>
      <Products />
      {showProd && <Cart />}
    </Layout>
  );
}

export default App;
