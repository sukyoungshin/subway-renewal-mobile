/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTodayTime } from '@/shared/utils/common-utils';
interface IProps {
  orderMenu: any;
  customerAddr: any;
  subwayName: any;
  subwayAddr: any;
  subwayPhone: any;
  customerRequest: any;
}

const OrderDeliver = ({ orderDetail }: { orderDetail: IProps }) => {
  const { orderMenu, customerAddr, subwayName, subwayPhone, customerRequest } = orderDetail;

  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <form className="h-full p-4">
        <fieldset className="mb-4 flex flex-col gap-2">
          <section className="mt-12 mb-4 w-full">
            <h2 className="text-xl">주문이 완료되었습니다!</h2>
            <p className="text-sm">주문하신 음식이 약 40분 내에 도착할 예정입니다,</p>
          </section>
        </fieldset>
        <fieldset className="mb-4 flex flex-col gap-2">
          <ul className="inline-flex flex-col gap-2">
            <li className="text-sm">주문일시 : {getTodayTime()}</li>
            <li className="text-sm">주문번호 : B0XK01HG6R</li>
            <li className="text-sm">주문하신 메뉴 : {orderMenu}</li>
            <li className="text-sm">추가 요청사항 : {customerRequest}</li>
            <li className="text-sm">배달받으실 주소 : {customerAddr}</li>
            <li className="text-sm">배달 매장명 : {subwayName}</li>
            <li className="text-sm">배달 매장 연락처: {subwayPhone}</li>
          </ul>
        </fieldset>
      </form>
    </main>
  );
};

export default OrderDeliver;
