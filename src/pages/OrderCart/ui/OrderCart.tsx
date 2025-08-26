import usePageMove from '../hooks/usePageMove';
import useReduxSelector from '../hooks/useReduxSelector';
import CartEmpty from '../ui/CartEmpty/CartEmpty';
import CartFull from '../ui/CartFull/CartFull';
import { Container } from './OrderCart.style';

const OrderCart = () => {
  const { itemCount, AddedCartItem } = useReduxSelector();
  const handleOrderProcess = usePageMove();

  return (
    <Container>
      {AddedCartItem.id !== undefined ? (
        <CartFull itemCount={itemCount} />
      ) : (
        <CartEmpty handleOrderProcess={handleOrderProcess} />
      )}
    </Container>
  );
};

export default OrderCart;
