import React, { useEffect } from 'react';
import { FloatButton } from 'components';
import { AiFillEye, AiFillEyeInvisible, AiOutlineSearch } from 'react-icons/ai';
import { MainWrapperStyled, FormWrapperStyled, FooterStyled, ButtonStyled } from './SignUp.style';
import { useAddrSearchButton, useCTAButton, useFormDataHadling, usePasswordHideAndShow } from './hooks';

const CHECKBOX = 'checkbox';
const Signup = () => {

  const { userInfo, setUserInfo, handleInputData } = useFormDataHadling();
  const { inputRef, isVisible, handleVisibleButton } = usePasswordHideAndShow();
  const { isBtnActivated, setIsBtnActivated, handleSubmitForm } = useCTAButton({ userInfo });
  const { tempAddr, HandlePopUp } = useAddrSearchButton();
  const handleAgreementAndCTAbuttonActivate = (e) => {
    const { type, checked } = e.target;
    handleInputData(e);
    if (type === CHECKBOX) {
      setIsBtnActivated(checked);
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
    <MainWrapperStyled>
      <FormWrapperStyled id="signup-form" onSubmit={handleSubmitForm}> 
        <fieldset>
          <label htmlFor="username">아이디</label>
          <input 
            type="text" 
            id="username"
            placeholder="아이디를 입력해주세요."
            value={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="userpassword">비밀번호</label>
          <input 
            type="password"
            id="userpassword"
            placeholder="비밀번호를 입력해주세요"
            value={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            ref={inputRef}
            required
          />
          <HideButton 
            isVisible={isVisible} 
            handleVisibleButton={handleVisibleButton}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="userphone">휴대폰번호</label>
          <input 
            type="text"
            id="userphone"
            placeholder="ex) 000 - 000 - 0000"
            value={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="useraddr">주소</label>
          <input 
            type="text"
            id="useraddr"
            placeholder="배송받을 주소지를 직접 입력하세요."
            value={userInfo.useraddr} 
            onChange={handleAgreementAndCTAbuttonActivate}
            required
          />
          <input 
            type="text"
            id="useraddrDetail"
            placeholder="세부 주소를 입력하세요."
            value={userInfo.useraddrDetail}
            onChange={handleAgreementAndCTAbuttonActivate}
          />
          <ButtonStyled 
            type="button" 
            onClick={HandlePopUp}
          >
            <AiOutlineSearch />
          </ButtonStyled>
        </fieldset>
        <fieldset>
          <input 
            type="checkbox" 
            id="agreement" 
            className='checkbox' 
            checked={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            required
          />
          <label htmlFor="agreement">본인은 만 14세 이상입니다. (필수)</label>
        </fieldset>
        
      </FormWrapperStyled>

      <FloatButton 
        type="submit"
        form="signup-form"
        isBtnActivated={isBtnActivated} 
      >
        회원가입
      </FloatButton>

      <FooterMessage />
    </MainWrapperStyled>
  );
};

const HideButton = ({ isVisible, handleVisibleButton }) => {
  return (
    <ButtonStyled 
      type="button" 
      value={isVisible}
      onClick={handleVisibleButton} 
      className='passwordhidden'
    >
      { isVisible ? <AiFillEye /> : <AiFillEyeInvisible /> }
    </ButtonStyled>
  );
};

const FooterMessage = () => {
  return (
    <FooterStyled>
    <p>
      회원가입 시{' '}
      <strong>서비스 이용 약관</strong>과{' '}
      <strong>개인정보보호정책</strong>에 동의하게 됩니다.
    </p>
  </FooterStyled>
  );
};

export default Signup;