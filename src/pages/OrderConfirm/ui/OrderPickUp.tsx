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

const OrderPickUp = ({ orderDetail }: { orderDetail: IProps }) => {
  const { orderMenu, subwayName, subwayPhone, subwayAddr, customerRequest } = orderDetail;

  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <form className="h-full p-4">
        <section className="mt-12 mb-4 w-full">
          <h2 className="text-xl">주문이 완료되었습니다!</h2>
          <p className="text-sm">픽업을 위해 40분 뒤 매장으로 방문해주세요.</p>
        </section>
        <section className="mt-12 mb-4 w-full">
          <ul className="inline-flex flex-col gap-2">
            <li className="text-sm">주문일시 : {getTodayTime()}</li>
            <li className="text-sm">주문번호 : B0XK01HG6R</li>
            <li className="text-sm">주문하신 메뉴 : {orderMenu}</li>
            <li className="text-sm">추가 요청사항 : {customerRequest}</li>
            <li className="text-sm">방문하실 매장명 : {subwayName}</li>
            <li className="text-sm">방문하실 매장 연락처: {subwayPhone}</li>
            <li className="text-sm">방문하실 매장 주소 : {subwayAddr}</li>
          </ul>
        </section>
      </form>
    </main>
  );
};

export default OrderPickUp;
