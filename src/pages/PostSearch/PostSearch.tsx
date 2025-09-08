import Title from '@/shared/ui/Title';
import DaumPostcode from 'react-daum-postcode';
import { usePostSearchAndButtons } from './hooks';

const PostSearch = () => {
  const {
    roadAddress,
    detailAddress,
    isBtnSelected,
    handleAddress,
    handleDetailAddress,
    handleComplete,
    handleClose,
  } = usePostSearchAndButtons();

  return (
    <form
      onSubmit={handleComplete}
      className="flex h-full min-h-[calc(100%-136px)] flex-col gap-4 p-4"
    >
      <Title>배달주소 입력</Title>
      <section className="address-wrapper pb-[96px]">
        <main className="flex-1">
          <div className="inline-flex w-full flex-col gap-2">
            <h2
              data-before="- "
              data-after=" : "
              className="text-xs text-grey before:content-[attr(data-before)] after:content-[attr(data-after)]"
            >
              주소
            </h2>
            <DaumPostcode onComplete={handleAddress} />
            {roadAddress !== '' && (
              <input type="text" value={roadAddress} placeholder="예) 서울시 방화대로" readOnly />
            )}
          </div>
          <div className="inline-flex w-full flex-col gap-2">
            <h2
              data-before="- "
              data-after=" : "
              className="text-xs text-grey before:content-[attr(data-before)] after:content-[attr(data-after)]"
            >
              상세주소
            </h2>
            <input
              type="text"
              placeholder="예) ㅇㅇ아파트 ㅇㅇ동ㅇㅇㅇ호"
              value={detailAddress}
              onChange={handleDetailAddress}
            />
          </div>
        </main>
      </section>

      <fieldset className="w-full max-w-[408px] h-12 flex gap-[8px]">
        <button
          type="button"
          onClick={handleClose}
          className="u-button-half h-12 flex-1 gap-[2] border-grey-light bg-transparent font-light text-grey"
        >
          창닫기
        </button>
        <button
          type="submit"
          className={`u-button-half h-12 flex-1 gap-[2] transition-all duration-[0.3s] ${isBtnSelected ? 'border-green bg-green font-semibold text-white' : 'border-grey-light bg-transparent font-light text-grey'}`}
        >
          입력완료
        </button>
      </fieldset>
    </form>
  );
};

export default PostSearch;
