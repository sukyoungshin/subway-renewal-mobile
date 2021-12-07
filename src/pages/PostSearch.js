import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { MainWrapper } from '../common/Styled'; 
import { HiOutlineChevronLeft } from "react-icons/hi";

const PostSearch = (data) => {

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    window.opener.postMessage(fullAddress);  // 주소 '/order' 페이지로 전달
    window.close(); // 현재 팝업 닫기
  };

  return (
    <MainWrapper>
      <DaumPostcode
        onComplete={handleComplete}
        // { ...props }
      />

    <button type="button">
      <HiOutlineChevronLeft />
    </button>
    </MainWrapper>
  );
};

export default PostSearch;