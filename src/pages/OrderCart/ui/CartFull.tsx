import { Spinner } from '@/shared/ui';

const CartFull = ({ itemCount }: { itemCount: number }) => {
  const tempArray = new Array(itemCount).fill(null);

  return (
    <section className="mt-12 w-full min-h-[calc(100%-48px)] inline-flex flex-col justify-start gap-2">
      <h2 className="text-black text-sm">장바구니 내역</h2>
      {tempArray.map(({ imgPath, nameKor, nameEng, price, description }) => (
        <section key={imgPath} className="p-2 w-full h-28 bg-white inline-flex gap-4">
          <article className="inline-flex items-center justify-center max-w-24 h-full">
            <Spinner
              src={imgPath}
              alt={`${nameKor}, ${nameEng}`}
              className="min-w-24 h-24 object-cover text-xs"
            />
          </article>
          <article className="pt-2 flex-1 inline-flex flex-col gap-2 overflow-hidden">
            <h3 className="text-sm font-bold">
              {nameKor}
              <span className="float-right text-xs">{price} krw</span>
            </h3>
            <p className="text-xs max-h-8 overflow-hidden relative">{description}</p>
          </article>
        </section>
      ))}
    </section>
  );
};

export default CartFull;
