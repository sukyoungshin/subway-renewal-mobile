import React from 'react';
import { NoMatch } from 'pages';
import { useSelector } from 'react-redux';
import { addrSelector } from 'reducers';
import { useNavigate } from 'react-router-dom';
import LINK from 'constants/link';
import { useEffect } from 'react';

const goToMainIfAddrIsNotExistHOC = (Component) => {
  
  return () => {
    /* 리덕스 및 라우터 */
    const addr = useSelector(addrSelector);
    const navigate = useNavigate();

    useEffect(() => {
      if (addr === undefined) {
        setTimeout(() => navigate(LINK.ROOT), 1000)
      }
    // eslint-disable-next-line
    }, []);
    if (addr === undefined) return <NoMatch />;

    return <Component />;
  }
};

export default goToMainIfAddrIsNotExistHOC;