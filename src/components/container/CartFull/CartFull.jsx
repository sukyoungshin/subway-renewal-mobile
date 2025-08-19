import { CartFullContent } from '@/components/presentational/index';
import { Container } from './CartFull.style';

const CartFull = ({ AddedCartItem, itemCount }) => {
  const ItemArray = new Array(itemCount).fill(null);

  return (
    <Container>
      <h2>장바구니 내역</h2>
      <CartFullContent ItemArray={ItemArray} AddedCartItem={AddedCartItem} />
    </Container>
  );
};

export default CartFull;
