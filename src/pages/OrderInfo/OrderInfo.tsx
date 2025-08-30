import { orderSelector } from '@/features/cart/model/selector';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import {
  useConditionAgreement,
  useCTAButtons,
  useCustomerRequest,
  useSelectDeliverOrPickUp,
} from './hooks';

const DELIVER = 'deliver';
const PICKUP = 'pickup';

const OrderInfo = () => {
  const order = useSelector(orderSelector); // 주문내역 전체
  const { isRadioChecked, handleRadioStatus } = useSelectDeliverOrPickUp();
  const { customerOrderRequest, handleOrderRequest } = useCustomerRequest();
  const { isCheckboxChecked, handleCheckboxStatus } = useConditionAgreement();
  const { isActive, setIsActive, goToPrevPage, goToPaymentPage } = useCTAButtons({
    isRadioChecked,
    isCheckboxChecked,
    customerOrderRequest,
  });

  const handleDeliverOrPickUp = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleRadioStatus(e.target.id);
  const handleAgreementAndBtnActivate = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCheckboxStatus(e);
    setIsActive((prev) => !prev);
  };

  const disabled = true; // FIXME

  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <form className="h-full p-4">
        <fieldset className="mb-4 flex flex-col gap-2">
          <h2 className="inline-flex flex-row items-center justify-between text-black text-sm">
            배송받으실 주소지
          </h2>
          <article className="mt-4 w-full h-auto inline-flex flex-col gap-2">
            <ul className="p-2 w-full bg-transparent rounded-lg box-border min-h-14 inline-flex flex-col justify-center text-0 ">
              <li className="leading-5 text-grey text-xs">{order.generalInfo?.customerInfo}</li>
              <li className="leading-5 text-grey text-xs">고객 이름, 연락처</li>
            </ul>
          </article>
        </fieldset>

        <fieldset className="mb-4 flex flex-col gap-2">
          <h2 className="inline-flex flex-row items-center justify-between text-black text-sm">
            배송방법
          </h2>
          <article className="mt-4 w-full h-auto inline-flex flex-col gap-2">
            <ul className="p-2 w-full bg-transparent rounded-lg box-border min-h-14 inline-flex flex-col justify-center text-0">
              <li className="leading-5 text-grey text-xs">
                <input
                  type="radio"
                  id="deliver"
                  value="deliver"
                  name="del-or-pickup"
                  checked={isRadioChecked === DELIVER}
                  onChange={handleDeliverOrPickUp}
                />
                <label htmlFor="deliver">고객님의 주소지로 배달</label>
              </li>
              <li className="leading-5 text-grey text-xs">
                <input
                  type="radio"
                  id="pickup"
                  value="pickup"
                  name="del-or-pickup"
                  checked={isRadioChecked === PICKUP}
                  onChange={handleDeliverOrPickUp}
                />
                <label htmlFor="pickup">매장에 직접 방문하여 수령</label>
              </li>
            </ul>
          </article>
        </fieldset>

        <fieldset className="mb-4 flex flex-col gap-2">
          <h2 className="inline-flex flex-row items-center justify-between text-black text-sm">
            주문하신 매장
            <span className="inline-block text-grey text-xs font-normal">
              {order.generalInfo?.subwayInfo.name}{' '}
              <a
                href={order.generalInfo?.subwayInfo.url}
                title={order.generalInfo?.subwayInfo.name}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '12px' }}
              >
                (🔗홈페이지)
              </a>
            </span>
          </h2>
        </fieldset>

        <fieldset className="mb-4 flex flex-col gap-2">
          <h2 className="inline-flex flex-row items-center justify-between text-black text-sm">
            매장연락처
            <span className="inline-flex flex-row items-center gap-4">
              <span>{order.generalInfo?.subwayInfo.phone}</span>
              <span>
                <BsFillTelephoneForwardFill />
              </span>
            </span>
          </h2>
        </fieldset>

        <fieldset className="mb-4 flex flex-col gap-2">
          <h2 className="inline-flex flex-row items-center justify-between text-black text-sm">
            주문 요청사항
          </h2>
          <textarea
            placeholder="매장에 요청사항이 있으시면 여기에 입력해주세요"
            value={customerOrderRequest}
            onChange={handleOrderRequest}
            className="p-2 w-full h-full min-h-[72px] rounded-lg bg-transparent text-grey text-xs resize-none"
          />
        </fieldset>

        <fieldset className="mb-4 flex flex-col gap-2">
          <p className="inline-flex flex-row items-center gap-2 leading-5 text-xs">
            <input
              type="checkbox"
              id="agreement"
              checked={isCheckboxChecked}
              onChange={handleAgreementAndBtnActivate}
              className="u-accent-color"
            />
            <label htmlFor="agreement">주문 후 제조가 시작되면 주문을 취소할 수 없습니다.</label>
          </p>
        </fieldset>

        <fieldset className="fixed left-0 bottom-[88px] w-full max-w-[440px] h-12 flex gap-[8px]">
          <button
            type="button"
            onClick={goToPrevPage}
            className={`mx-auto my-0 h-full w-1/2 rounded-lg border border-solid backdrop-blur-sm transition-all duration-[0.3s] ${disabled ? 'border-grey-light bg-transparent font-light text-grey' : 'border-green bg-green font-semibold text-white'}`}
          >
            이전페이지
          </button>
          <button
            type="button"
            onClick={goToPaymentPage}
            className={`mx-auto my-0 h-full w-1/2 rounded-lg border border-solid backdrop-blur-sm transition-all duration-[0.3s] ${!isActive ? 'border-grey-light bg-transparent font-light text-grey' : 'border-green bg-green font-semibold text-white'}`}
          >
            결제하기
          </button>
        </fieldset>
      </form>
    </main>
  );
};

export default OrderInfo;
