import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatButton } from 'components';
import LINK from 'constants/link';
import { AiFillEye, AiFillEyeInvisible, AiOutlineSearch } from 'react-icons/ai';
import { MainWrapperStyled, FormWrapperStyled, FooterStyled, ButtonStyled } from './SignUp.style';

const CHECKBOX = 'checkbox';
const TEXT = 'text';
const PASSWORD = 'password';

const Signup = () => {

  /* 입력받은 폼 데이터 관련 */
  const [ userInfo, setUserInfo ] = useState({
    username : '',
    userpassword : '',
    userphone: '',
    useraddr : '',
    useraddrDetail: '',
    agreement: false,
  });

  const handleInputData = (e) => {
    const { type, id, checked, value } = e.target;

    if (type === CHECKBOX) {
      setUserInfo({
        ...userInfo,
        [id] : checked,
      });
      setIsBtnActivated(checked);
    } else {
      setUserInfo({
        ...userInfo,
        [id] : value,
      });
    }
  };

  /* 비밀번호 숨김 버튼 */
  const inputRef = useRef();
  const [ isVisible, setIsVisible ] = useState(false);
  const handleVisibleButton = () => setIsVisible(prev => !prev);
  useEffect(() => {
    isVisible ? inputRef.current.type = TEXT : inputRef.current.type = PASSWORD;
  },[isVisible]);

  /* 검색 버튼 관련 이벤트 */
  const [ tempAddr, setTempAddr ] = useState('');
  // postMessage 
  const HandlePopUp = () => {
    window.open('search', 'addressSearch', "width=380 height=500 left=726 top=306").postMessage('message');
  };

  // Dispatch Event
  useEffect(() => {
    const receiveMessage = (e) => {
      if (e.origin !== window.location.origin) return;
      if (e.source.name !== 'addressSearch') return;
      setTempAddr(e.data);
    };

    window.addEventListener("message", receiveMessage, false);
    // eslint-disable-next-line
  }, []);

  // 주소지 업데이트
  useEffect(() => {
    setUserInfo({
      ...userInfo,
      useraddr: tempAddr,
    });
  // eslint-disable-next-line
  }, [tempAddr]);

  /* CTA 버튼 */
  const navigate = useNavigate();
  const [ isBtnActivated, setIsBtnActivated ] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    window.alert(`환영합니다, ${userInfo.username}님! \n메인페이지로 이동합니다.`);
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
            onChange={handleInputData}
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
            onChange={handleInputData}
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
            onChange={handleInputData}
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
            onChange={handleInputData}
            required
          />
          <input 
            type="text"
            id="useraddrDetail"
            placeholder="세부 주소를 입력하세요."
            value={userInfo.useraddrDetail}
            onChange={handleInputData}
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
            onChange={handleInputData}
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