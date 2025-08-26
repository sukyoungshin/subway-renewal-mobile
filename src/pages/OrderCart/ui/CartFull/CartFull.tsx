import CartFullContent from '../CartFullContent/CartFullContent';
import { Container } from './CartFull.style';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartFull = ({ itemCount }: { itemCount: any }) => {
  const tempArray = new Array(itemCount).fill(null);

  return (
    <Container>
      <h2>장바구니 내역</h2>
      <CartFullContent tempArray={tempArray} />
    </Container>
  );
};

export default CartFull;
