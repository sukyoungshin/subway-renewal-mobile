import React from "react";
import { CartEmpty, CartFull } from "components/container/index";
import { Container } from "./OrderCart.style";
import { usePageMove, useReduxSelector } from "./hooks";

const OrderCart = () => {
  const { itemCount, AddedCartItem } = useReduxSelector();
  const handleOrderProcess = usePageMove();

  return (
    <Container>
      {AddedCartItem.id !== undefined ? (
        <CartFull AddedCartItem={AddedCartItem} itemCount={itemCount} />
      ) : (
        <CartEmpty handleOrderProcess={handleOrderProcess} />
      )}
    </Container>
  );
};

export default OrderCart;
