import LINK from '@/constants/link';
import { loginFlagSelector, userInfoSelector } from '@/reducers';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useReduxSelector = () => {
  const loginFlag = useSelector(loginFlagSelector);
  const userInfo = useSelector(userInfoSelector);

  return { loginFlag, userInfo };
};

export const usePageMove = () => {
  const navigate = useNavigate();
  const goToLoginPage = () => navigate(LINK.LOGIN);

  return goToLoginPage;
};
