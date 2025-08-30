import { useEffect, useRef, useState } from 'react';

const CHECKBOX = 'checkbox';
const TEXT = 'text';
const PASSWORD = 'password';

export const useFormDataHandling = () => {
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
    const width = 400;
    const height = 600;
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;

    window.open(
      '/search.html',
      'addressSearch',
      `width=${width},height=${height},left=${left},top=${top}` // 화면정중앙에 위치
    );
  };

  // Dispatch Event
  useEffect(() => {
    const receiveMessage = (event: MessageEvent<string>) => {
      if (event.origin !== window.location.origin) return;
      if ((event.source as Window)?.name !== 'addressSearch') return;

      setTempAddr(event.data);
    };

    window.addEventListener('message', receiveMessage, false);

    return () => window.removeEventListener('message', receiveMessage, false);
  }, []);

  return { tempAddr, HandlePopUp };
};
