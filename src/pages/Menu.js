import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MainWrapper } from '../common/Styled';

const Menu = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      window.alert('주문하실 매장을 선택하세요');
      return navigate(-1);
    } // 이전페이지에서 써브웨이 매장 정보가 넘어오지 않았으면 이전 페이지로 강제이동

  }, []);

  const { name, phone, url, address, distance } = location.state; // 받아온 정보 destructuring

  return (
    <MainWrapper>
      {/* 임시 출력 -> modify later */}
      매장 : { name } <br/>
      phon# : { phone } <br/>
      addr : { address } <br/>
      url : { url } <br/>
      집까지 거리 : { distance } <br/>
    </MainWrapper>
  );
};

export default Menu;