import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { CTAButton } from '@/shared/ui';
import { useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineSearch } from 'react-icons/ai';
import { useAddrSearchButton, useFormDataHandling, usePasswordHideAndShow } from './hooks';

const CHECKBOX = 'checkbox';
const Signup = () => {
  const { userInfo, setUserInfo, handleInputData } = useFormDataHandling();
  const { inputRef, isVisible, handleVisibleButton } = usePasswordHideAndShow();
  const { buttonDisabled, setButtonDisabled, handleNextOrder } = useCTAButton(LINK.ROOT);
  const { tempAddr, HandlePopUp } = useAddrSearchButton();

  const handleAgreementAndCTAbuttonActivate = (e) => {
    const { type, checked } = e.target;
    handleInputData(e);
    if (type === CHECKBOX) {
      setButtonDisabled(checked);
    }
  };

  useEffect(() => {
    setUserInfo({
      ...userInfo,
      useraddr: tempAddr,
    });
    // eslint-disable-next-line
  }, [tempAddr]);

  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <form id="signup-form" className="relative h-full w-full p-4">
        <fieldset className="c-custom-fieldset">
          <label htmlFor="username" className="text-black text-sm">
            아이디
          </label>
          <input
            type="text"
            id="username"
            placeholder="아이디를 입력해주세요."
            value={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            className="pl-4 h-12 bg-transparent rounded-lg placeholder-grey placeholder-text-xs text-grey"
            required
          />
        </fieldset>
        <fieldset className="c-custom-fieldset">
          <label htmlFor="userpassword" className="text-black text-sm">
            비밀번호
          </label>
          <input
            id="userpassword"
            type="password"
            ref={inputRef}
            value={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            className="pl-4 h-12 bg-transparent rounded-lg placeholder-grey placeholder-text-xs text-grey"
            placeholder="비밀번호를 입력해주세요"
            required
          />
          <button
            type="button"
            value={isVisible}
            onClick={handleVisibleButton}
            className="w-6 h-6 bg-transparent text-0 absolute bottom-3 right-4"
          >
            {isVisible ? (
              <AiFillEye className="text-grey w-6 h-6" />
            ) : (
              <AiFillEyeInvisible className="text-grey w-6 h-6" />
            )}
          </button>
        </fieldset>
        <fieldset className="c-custom-fieldset">
          <label htmlFor="userphone" className="text-black text-sm">
            휴대폰번호
          </label>
          <input
            type="text"
            id="userphone"
            placeholder="ex) 000 - 000 - 0000"
            value={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            className="pl-4 h-12 bg-transparent rounded-lg placeholder-grey placeholder-text-xs text-grey"
            required
          />
        </fieldset>
        <fieldset className="c-custom-fieldset">
          <label htmlFor="useraddr" className="text-black text-sm">
            주소
          </label>
          <input
            type="text"
            id="useraddr"
            placeholder="배송받을 주소지를 입력하세요."
            value={userInfo.useraddr}
            onChange={handleAgreementAndCTAbuttonActivate}
            className="pl-4 h-12 bg-transparent rounded-lg placeholder-grey placeholder-text-xs text-grey"
            required
          />
          <button
            type="button"
            onClick={HandlePopUp}
            className="w-6 h-6 bg-transparent text-0 absolute bottom-3 right-4"
          >
            <AiOutlineSearch className="text-grey text-xl" />
          </button>
        </fieldset>
        <fieldset className="c-custom-fieldset">
          <input
            type="checkbox"
            id="agreement"
            checked={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            className="checkbox accent-green placeholder-grey placeholder-text-xs"
            required
          />
          <label htmlFor="agreement" className="text-black text-xs">
            본인은 만 14세 이상입니다. (필수)
          </label>
        </fieldset>
      </form>

      <CTAButton
        formId="signup-form"
        label="회원가입"
        handleNextOrder={(e) => {
          // TODO: 회원가입 validation 처리 필요
          window.alert(`환영합니다, ${userInfo.username}님! \n메인페이지로 이동합니다.`);
          handleNextOrder(e);
        }}
        disabled={!buttonDisabled}
      />
      <footer className="mt-6 mb-2 h-3 text-2xs">
        <p>
          회원가입 시 <strong>서비스 이용 약관</strong>과 <strong>개인정보보호정책</strong>에
          동의하게 됩니다.
        </p>
      </footer>
    </main>
  );
};

export default Signup;
