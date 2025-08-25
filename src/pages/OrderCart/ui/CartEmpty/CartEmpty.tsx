import { CTAButton } from '@/shared/ui';
import { CartContainer } from './CartEmpty.style';

const CartEmpty = ({ handleOrderProcess }) => {
  return (
    <>
      <CartContainer empty>
        <h2>장바구니가 비어있어요</h2>
      </CartContainer>
      <CTAButton
        isBtnActivated={true}
        handleOrderProcess={handleOrderProcess}
        label="주문하러 가기 :)"
      />
    </>
  );
};

export default CartEmpty;
