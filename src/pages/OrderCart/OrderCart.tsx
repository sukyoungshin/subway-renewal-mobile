import usePageMove from './hooks/usePageMove';
import useReduxSelector from './hooks/useReduxSelector';
import CartEmpty from './ui/CartEmpty';
import CartFull from './ui/CartFull';

const OrderCart = () => {
  const { itemCount, AddedCartItem } = useReduxSelector();
  const handleOrderProcess = usePageMove();

  return (
    <main className="p-4 w-full h-[calc(100%-136px)] min-h-[calc(100%-136px)] relative overflow-auto">
      {AddedCartItem.id !== undefined ? (
        <CartFull itemCount={itemCount} />
      ) : (
        <CartEmpty handleOrderProcess={handleOrderProcess} />
      )}
    </main>
  );
};

export default OrderCart;
