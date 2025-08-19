import { CtaButton } from '@/components';
import { useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineSearch } from 'react-icons/ai';
import {
  Button,
  Checkbox,
  Container,
  Fieldset,
  Footer,
  Form,
  Label,
  Password,
  Text,
} from './SignUp.style';
import {
  useAddrSearchButton,
  useCTAButton,
  useFormDataHadling,
  usePasswordHideAndShow,
} from './hooks';

const CHECKBOX = 'checkbox';
const Signup = () => {
  const { userInfo, setUserInfo, handleInputData } = useFormDataHadling();
  const { inputRef, isVisible, handleVisibleButton } = usePasswordHideAndShow();
  const { isBtnActivated, setIsBtnActivated, handleSubmitForm } = useCTAButton({
    userInfo,
  });
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
    <Container>
      <Form id="signup-form" onSubmit={handleSubmitForm}>
        <Fieldset>
          <Label htmlFor="username">아이디</Label>
          <Text
            type="text"
            id="username"
            placeholder="아이디를 입력해주세요."
            value={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            required
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="userpassword">비밀번호</Label>
          <Password
            type="password"
            id="userpassword"
            placeholder="비밀번호를 입력해주세요"
            value={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            ref={inputRef}
            required
          />
          <PasswordToggleIcon isVisible={isVisible} handleVisibleButton={handleVisibleButton} />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="userphone">휴대폰번호</Label>
          <Text
            type="text"
            id="userphone"
            placeholder="ex) 000 - 000 - 0000"
            value={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            required
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="useraddr">주소</Label>
          <Text
            type="text"
            id="useraddr"
            placeholder="배송받을 주소지를 직접 입력하세요."
            value={userInfo.useraddr}
            onChange={handleAgreementAndCTAbuttonActivate}
            required
          />
          <Text
            type="text"
            id="useraddrDetail"
            placeholder="세부 주소를 입력하세요."
            value={userInfo.useraddrDetail}
            onChange={handleAgreementAndCTAbuttonActivate}
          />
          <Button type="button" onClick={HandlePopUp}>
            <AiOutlineSearch />
          </Button>
        </Fieldset>
        <Fieldset>
          <Checkbox
            type="checkbox"
            id="agreement"
            className="checkbox"
            checked={userInfo.id}
            onChange={handleAgreementAndCTAbuttonActivate}
            required
          />
          <Label htmlFor="agreement" className="checkbox-label">
            본인은 만 14세 이상입니다. (필수)
          </Label>
        </Fieldset>
      </Form>

      <CtaButton
        type="submit"
        form="signup-form"
        isBtnActivated={isBtnActivated}
        label="회원가입"
      />
      <Message />
    </Container>
  );
};

const PasswordToggleIcon = ({ isVisible, handleVisibleButton }) => {
  return (
    <Button
      type="button"
      value={isVisible}
      onClick={handleVisibleButton}
      className="passwordhidden"
    >
      {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
    </Button>
  );
};

const Message = () => {
  return (
    <Footer>
      <p>
        회원가입 시 <strong>서비스 이용 약관</strong>과 <strong>개인정보보호정책</strong>에 동의하게
        됩니다.
      </p>
    </Footer>
  );
};

export default Signup;
