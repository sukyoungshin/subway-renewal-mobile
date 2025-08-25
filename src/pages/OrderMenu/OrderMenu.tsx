import { Spinner } from '@/shared/ui';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useCountAmountOfItems, useCTAButtons, useReduxSelector } from './hooks';
import {
  AmountButtonWrapperStyled,
  Button,
  ButtonStyled,
  ButtonWrapper,
  Container,
  DeleteButtonStyled,
  MenuCardStyled,
  Section,
} from './OrderMenu.style';

const OrderMenu = () => {
  const { order, itemAmount } = useReduxSelector();
  const { handleIncrement, handleDecrement } = useCountAmountOfItems();
  const { goToCartPage, goToOrderPage } = useCTAButtons();

  return (
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <h2>주문메뉴</h2>

        <MenuCardStyled>
          <article className="card-img">
            <Spinner src={order.category?.currentMenu?.imgPath} alt={order.category.nameKor} />
          </article>
          <article className="card-content">
            <h2>
              {order.category?.currentMenu?.nameKor}
              <span>{order.category?.currentMenu?.price} krw</span>
            </h2>
            <p>
              {order.bread?.currentMenu?.nameKor},{' '}
              {/* TODO
              {order.bread?.breadOptions.map((opt) => opt.nameKor + opt.bool)},{' '} */}
              {order.cheese?.currentMenu?.nameKor}, {order.sauce?.nameKor}
            </p>

            <AmountButtonWrapperStyled>
              <div className="button-wrapper">
                <ButtonStyled type="button" onClick={handleDecrement}>
                  -
                </ButtonStyled>
                <span>{itemAmount}</span>
                <ButtonStyled type="button" onClick={handleIncrement}>
                  +
                </ButtonStyled>
              </div>

              <DeleteButtonStyled type="button">
                <RiDeleteBinLine />
              </DeleteButtonStyled>
            </AmountButtonWrapperStyled>
          </article>
        </MenuCardStyled>
      </Section>

      <Section style={{ marginTop: '24px' }}>
        <h2>결제정보</h2>
        <p>할인쿠폰</p>
        <p>결제수단</p>
        <p>
          총 금액
          <span>{order.category.currentMenu.price} krw</span>
        </p>
        <p>할인금액</p>
        <p className="total-price">
          총 주문 금액
          <span>{order.category.currentMenu.price} krw</span>
        </p>
      </Section>

      <CTAButtons goToCartPage={goToCartPage} goToOrderPage={goToOrderPage} />
    </Container>
  );
};

interface IButtonProps {
  goToCartPage: () => void;
  goToOrderPage: () => void;
}

const CTAButtons = ({ goToCartPage, goToOrderPage }: IButtonProps) => {
  return (
    <ButtonWrapper>
      <Button type="button" onClick={goToCartPage}>
        장바구니 담기
      </Button>
      <Button type="button" onClick={goToOrderPage}>
        주문정보 (1 / 2)
      </Button>
    </ButtonWrapper>
  );
};

export default OrderMenu;
