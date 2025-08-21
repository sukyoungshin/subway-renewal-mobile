import LINK from '@/constants/link';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CHECKBOX = 'checkbox';
const TEXT = 'text';
const PASSWORD = 'password';

export const useFormDataHadling = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    userpassword: '',
    userphone: '',
    useraddr: '',
    useraddrDetail: '',
    agreement: false,
  });

  const handleInputData = (e) => {
    const { type, id, checked, value } = e.target;

    if (type === CHECKBOX) {
      setUserInfo({
        ...userInfo,
        [id]: checked,
      });
      // setIsBtnActivated(checked);
    } else {
      setUserInfo({
        ...userInfo,
        [id]: value,
      });
    }
  };

  return { userInfo, setUserInfo, handleInputData };
};

export const usePasswordHideAndShow = () => {
  const inputRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibleButton = () => setIsVisible((prev) => !prev);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isVisible ? (inputRef.current.type = TEXT) : (inputRef.current.type = PASSWORD);
  }, [isVisible]);

  return { inputRef, isVisible, handleVisibleButton };
};

export const useAddrSearchButton = () => {
  const [tempAddr, setTempAddr] = useState('');
  // postMessage
  const HandlePopUp = () => {
    window
      .open('search', 'addressSearch', 'width=380 height=500 left=726 top=306')
      .postMessage('message');
  };

  // Dispatch Event
  useEffect(() => {
    const receiveMessage = (e) => {
      if (e.origin !== window.location.origin) return;
      if (e.source.name !== 'addressSearch') return;
      setTempAddr(e.data);
    };

    window.addEventListener('message', receiveMessage, false);
  }, []);

  return { tempAddr, HandlePopUp };
};

export const useCTAButton = ({ userInfo }) => {
  const navigate = useNavigate();
  const [isBtnActivated, setIsBtnActivated] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    window.alert(`환영합니다, ${userInfo.username}님! \n메인페이지로 이동합니다.`);
    navigate(LINK.ROOT);
  };

  return { isBtnActivated, setIsBtnActivated, handleSubmitForm };
};
