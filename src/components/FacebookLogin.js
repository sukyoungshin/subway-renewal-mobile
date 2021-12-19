import React from 'react';
import { RiFacebookCircleFill } from "react-icons/ri";
import { Button } from '../common/Styled';

function FacebookLogin() {
  return (
    <Button type="button" bgColor={'facebook'}>
      <RiFacebookCircleFill /> 페이스북으로 시작
    </Button>
  );
};

export default FacebookLogin;