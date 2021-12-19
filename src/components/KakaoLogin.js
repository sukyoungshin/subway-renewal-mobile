import React from 'react';
import { RiKakaoTalkFill } from "react-icons/ri";
import { Button } from '../common/Styled';

const KakaoLogin = () => {
  return (
    <Button type="button" bgColor={'kakao'} color={'black'}>
      <RiKakaoTalkFill /> 카카오로 시작
    </Button>
  );
};

export default KakaoLogin;