import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCTAButton = (nextUrl: string) => {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handleNextOrder = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault(); // form의 onSubmit 이벤트 막기
      navigate(nextUrl);
    },
    [navigate, nextUrl]
  );

  return { buttonDisabled, setButtonDisabled, handleNextOrder };
};
