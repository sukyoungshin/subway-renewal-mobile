import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { loginFlagSelector, userInfoSelector } from 'reducers';
import LINK from 'constants/link';

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