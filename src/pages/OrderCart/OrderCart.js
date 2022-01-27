import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LINK from 'constants/link';
import { BASEURL } from 'mock/Datas';
import { FloatButton } from 'components';
import { categorySelector, itemCountSelector } from 'reducers';
import { MainStyled, MenuCardStyled, SectionStyled } from './OrderCart.style';

const OrderCart = () => {
  /* 리덕스 */
  const itemCount = useSelector(itemCountSelector); // 장바구니 갯수
  const AddedCartItem = useSelector(categorySelector); // 사용자가 주문한 아이템

  /* 라우터 */
  const navigate = useNavigate();
  const handleOrderProcess = () => navigate(LINK.ROOT);

  return (
    <MainStyled>
    {
      AddedCartItem.id !== undefined
      ? <Full AddedCartItem={AddedCartItem} itemCount={itemCount} />
      : <Empty handleOrderProcess={handleOrderProcess} />
    }
    </MainStyled>
  );
};

const Empty = ({ handleOrderProcess }) => {

  return (
    <>
    <SectionStyled empty>
      <h2>장바구니가 비어있어요</h2>
    </SectionStyled>
    <FloatButton
      isBtnActivated={true}
      handleOrderProcess={handleOrderProcess}
    >
      주문하러 가기 :)
    </FloatButton>
    </>
  );
};

const Full = ({ AddedCartItem, itemCount }) => {
  const { nameKor, nameEng, imgSrc, description, price } = AddedCartItem;
  const ItemArray = new Array(itemCount).fill(null);

  return (
    <>
    <SectionStyled>
      <h2>장바구니 내역</h2>
      {
        ItemArray.map((item, index) => (
          <MenuCardStyled key={index}>
            <article className="card-img">
              <img 
                src={`${BASEURL}${imgSrc}`} 
                alt={`${nameKor}, ${nameEng}`}
              />
            </article>
            <article className="card-content">
              <h3>
                {nameKor}
                <span>{price} krw</span>
              </h3>
              <p>{description}</p>
            </article>
          </MenuCardStyled>
        ))
      }
    </SectionStyled>
    </>
  );
};

export default OrderCart;