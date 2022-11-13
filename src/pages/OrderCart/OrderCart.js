import React from "react";
import { BASEURL } from "mock/Datas";
import { FloatButton, ImgSpinner } from "components";
import { MainStyled, MenuCardStyled, SectionStyled } from "./OrderCart.style";
import { usePageMove, useReduxSelector } from "./hooks";

const OrderCart = () => {
  const { itemCount, AddedCartItem } = useReduxSelector();
  const handleOrderProcess = usePageMove();

  return (
    <MainStyled>
      {AddedCartItem.id !== undefined ? (
        <Full AddedCartItem={AddedCartItem} itemCount={itemCount} />
      ) : (
        <Empty handleOrderProcess={handleOrderProcess} />
      )}
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
        {ItemArray.map((item, index) => (
          <MenuCardStyled key={index}>
            <article className="card-img">
              <ImgSpinner
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
        ))}
      </SectionStyled>
    </>
  );
};

export default OrderCart;
