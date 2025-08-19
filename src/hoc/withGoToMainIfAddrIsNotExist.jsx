import LINK from '@/constants/link';
import { NoMatch } from '@/pages/index';
import { addrSelector } from '@/reducers/index';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const withGoToMainIfAddrIsNotExistHOC = (Component) => {
  return () => {
    /* 리덕스 및 라우터 */
    const addr = useSelector(addrSelector);
    const navigate = useNavigate();

    useEffect(() => {
      if (addr === undefined) {
        setTimeout(() => navigate(LINK.ROOT), 1000);
      }
      // eslint-disable-next-line
    }, []);
    if (addr === undefined) return <NoMatch />;

    return <Component />;
  };
};

export default withGoToMainIfAddrIsNotExistHOC;
