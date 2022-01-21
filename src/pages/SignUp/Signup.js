import { FloatButton } from 'components';
import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MainWrapperStyled, FormWrapperStyled, ButtonWrapperStyled, FooterStyled } from './SignUp.style';

const Signup = () => {
  return (
    <>
    <MainWrapperStyled>
      <FormWrapperStyled>
        <fieldset>
          <label htmlFor="username">아이디</label>
          <input 
            type="text" 
            id="username"
            placeholder="아이디를 입력해주세요."
          />
        </fieldset>
        <fieldset>
          <label htmlFor="usepassword">비밀번호</label>
          <input 
            type="password"
            id="usepassword"
            placeholder="비밀번호를 입력해주세요"
          />
          <AiFillEyeInvisible />
          {/* <AiFillEye /> */}
        </fieldset>
        <fieldset>
          <label htmlFor="userphone">휴대폰번호</label>
          <input 
            type="text"
            id="userphone"
            placeholder="ex) 000 - 000 - 0000"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="useraddr">주소</label>
          <input 
            type="text"
            id="useraddr"
            placeholder="배송받을 주소지를 입력하세요."
          />
          <input 
            type="text"
            id="useraddr"
            placeholder="세부 주소를 입력하세요."
          />
        </fieldset>
        <fieldset>
          <input type="checkbox" id="agreement" />
          <label htmlFor="agreement">본인은 만 14세 이상입니다. (필수)</label>
        </fieldset>
        
      </FormWrapperStyled>

      <FloatButton>
        회원가입
      </FloatButton>

      <FooterStyled>
        <p>
          회원가입 시{' '}
          <strong>서비스 이용 약관</strong>과{' '}
          <strong>개인정보보호정책</strong>에 동의하게 됩니다.
        </p>
      </FooterStyled>
      
    </MainWrapperStyled>
    </>
  );
};

export default Signup;