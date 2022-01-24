import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LINK from 'constants/link';
import { FloatButton } from 'components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MainWrapperStyled, FormWrapperStyled, FooterStyled, HideButtonStyled } from './SignUp.style';

const Signup = () => {

  /* 유저 정보 관련 */
  const [ userInfo, setUserInfo ] = useState({
    username : '',
    userpassword : '',
    userphone: '',
    useraddr : '',
    agreement: false,
  });

  const handleUserInput = (e) => {
    if (e.target.type === 'checkbox') {
      setUserInfo({
        ...userInfo,
        [e.target.id] : e.target.checked,
      });
      setIsBtnActivated(e.target.checked);
    } else {
      setUserInfo({
        ...userInfo,
        [e.target.id] : e.target.value,
      });
    }
  };

  /* 비밀번호 숨김 버튼 */
  const inputRef = useRef();
  const [ isVisible, setIsVisible ] = useState(false);
  const handleVisibleButton = () => {
    setIsVisible(prev => !prev);
  };
  useEffect(() => {
    isVisible ? inputRef.current.type = 'text' : inputRef.current.type = 'password';
  },[isVisible]);

  /* CTA 버튼 */
  const navigate = useNavigate();
  const [ isBtnActivated, setIsBtnActivated ] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    /* 
    todo : 
    차후 firebase 이용하여 userInfo Object db연동하여,
    로그인 및 회원가입 기능구현 완료
    */
    navigate(LINK.ROOT);
  };

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
            onChange={handleUserInput}
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
            onChange={handleUserInput}
            ref={inputRef}
            required
          />
          <HideButton 
            isVisible={isVisible} 
            handleVisibleButton={handleVisibleButton}
          />
          {/* */}
        </fieldset>
        <fieldset>
          <label htmlFor="userphone">휴대폰번호</label>
          <input 
            type="text"
            id="userphone"
            placeholder="ex) 000 - 000 - 0000"
            value={userInfo.id}
            onChange={handleUserInput}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="useraddr">주소</label>
          <input 
            type="text"
            id="useraddr"
            placeholder="배송받을 주소지를 입력하세요."
            value={userInfo.id}
            onChange={handleUserInput}
            required
          />
          <input 
            type="text"
            placeholder="세부 주소를 입력하세요."
            readOnly
          />
        </fieldset>
        <fieldset>
          <input 
            type="checkbox" 
            id="agreement" 
            className='checkbox' 
            checked={userInfo.id}
            onChange={handleUserInput}
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

      <Footer />
    </MainWrapperStyled>
  );
};

const HideButton = ({ isVisible, handleVisibleButton }) => {
  return (
    <HideButtonStyled 
      type="button" 
      value={isVisible}
      onClick={handleVisibleButton} 
      className='passwordhidden'
    >
      { isVisible ? <AiFillEye /> : <AiFillEyeInvisible /> }
    </HideButtonStyled>
  );
};

const Footer = () => {
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