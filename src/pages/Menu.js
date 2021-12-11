import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MainWrapper } from '../common/Styled';

const Menu = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) return navigate(-1); // 이전페이지에서 써브웨이 매장 정보가 넘어오지 않았으면 이전 페이지로 강제이동
    
  }, [location.state, navigate]);

  return (
    <MainWrapper>
      {
        location.state && (
          <>
          매장 : { location.state.name } <br/>
          phon# : { location.state.phone } <br/>
          addr : { location.state.address } <br/>
          url : { location.state.url } <br/>
          집까지 거리 : { location.state.distance } <br/>
          </>
        )
      }
    </MainWrapper>
  );
};

export default Menu;