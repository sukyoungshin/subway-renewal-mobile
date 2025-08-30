import { CTAButton } from '@/shared/ui';

const CartEmpty = ({ handleOrderProcess }: { handleOrderProcess: () => void }) => {
  return (
    <>
      <section className="mt-12 w-full min-h-[calc(100%-48px)] inline-flex flex-col justify-center items-center gap-2">
        <h2 className="text-black text-sm">장바구니가 비어있어요</h2>
      </section>
      <CTAButton disabled={true} handleNextOrder={handleOrderProcess} label="주문하러 가기 :)" />
    </>
  );
};

export default CartEmpty;
