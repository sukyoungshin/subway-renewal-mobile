import { Spinner } from '@/shared/ui';
import Title from '@/shared/ui/Title';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useCountAmountOfItems, useCTAButtons, useReduxSelector } from './hooks';



const OrderMenu = () => {
  const { order, itemAmount } = useReduxSelector();
  const { handleIncrement, handleDecrement } = useCountAmountOfItems();
  const { goToCartPage, goToOrderPage } = useCTAButtons();

  const disabled = true; // FIXME

  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <form className="h-full p-4">
        <fieldset className="mb-4 flex flex-col gap-2">
          <Title>주문메뉴</Title>
          <div className="p-2 w-full h-24 rounded-lg inline-flex flex-row">
            <article className="inline-flex items-center justify-center h-full">
              <Spinner src={order.category?.currentMenu?.imgPath} alt={order.category.nameKor} className="h-24 object-cover" />
            </article>
            <article className="pt-2 flex-1 inline-flex flex-col overflow-hidden">
              <h2 className="text-sm">
                {order.category?.currentMenu?.nameKor}
                <span className="float-right">{order.category?.currentMenu?.price} krw</span>
              </h2>
              <p className="text-xs max-h-8 u-ellipsis-multiline">
                {order.bread?.currentMenu?.nameKor},{' '}
                {/* TODO
              {order.bread?.breadOptions.map((opt) => opt.nameKor + opt.bool)},{' '} */}
                {order.cheese?.currentMenu?.nameKor}, {order.sauce?.nameKor}
              </p>

              <div className="mt-auto inline-flex flex-row justify-between">
                <div className="w-full inline-flex flex-row items-center justify-between">
                  <button type="button" onClick={handleDecrement} className="w-6 h-6 bg-white-light rounded-full text-2xs">
                    -
                  </button>
                  <span className='text-2xs font-bold'>{itemAmount}</span>
                  <button type="button" onClick={handleIncrement} className="w-6 h-6 bg-white-light rounded-full text-2xs">
                    +
                  </button>
                </div>

                <button type="button" className="w-6 h-6 bg-white-light rounded-full text-2xs ml-auto justify-self-end">
                  <RiDeleteBinLine className="w-6 h-6" />
                </button>
              </div>
            </article>
          </div>
        </fieldset>

        <fieldset className="mb-4 flex flex-col gap-2">
          <Title>결제정보</Title>
          <p className="text-xs">할인쿠폰</p>
          <p className="text-xs">결제수단</p>
          <p className="text-xs">
            총 금액
            <span className="float-right">{order.category.currentMenu?.price} krw</span>
          </p>
          <p className="text-xs">할인금액</p>
          <hr/>
          <p className="total-price">
            총 주문 금액
            <span className="float-right">{order.category.currentMenu?.price} krw</span>
          </p>
        </fieldset>

        <fieldset className="fixed left-0 bottom-[88px] w-full max-w-[440px] h-12 flex gap-[8px]">
          <button
            type="button"
            onClick={goToCartPage}
            className={`mx-auto my-0 h-full w-1/2 rounded-lg border border-solid backdrop-blur-sm transition-all duration-[0.3s] ${disabled ? 'border-grey-light bg-transparent font-light text-grey' : 'border-green bg-green font-semibold text-white'}`}
          >
            장바구니 담기
          </button>
          <button
            type="button"
            onClick={goToOrderPage}
            className={`mx-auto my-0 h-full w-1/2 rounded-lg border border-solid backdrop-blur-sm transition-all duration-[0.3s] ${disabled ? 'border-grey-light bg-transparent font-light text-grey' : 'border-green bg-green font-semibold text-white'}`}
          >
            주문정보 (1 / 2)
          </button>
        </fieldset>
      </form>
    </main>
  );
};

export default OrderMenu;
