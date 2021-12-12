import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { MapWrapper, MapSection, ButtonWrapper, DeliveryButton } from '../common/Styled'; 

const PostSearch = (data) => {

  const [ roadAddress, setRoadAddress ] = useState(''); // 도로명주소
  const [ detailAddress, setDetailAddress ] = useState(''); // 상세주소
  const [ fullAddress, setFullAddress ] = useState('');// 전체주소 (도로명 + 상세주소)
  const [ isBtnSelected, setIsBtnSelected ] = useState(false); // 입력완료버튼

  // 주소 입력
  const handleAddress = (data) => {
    let roadAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      roadAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    setRoadAddress(roadAddress); // 도로명주소만 저장
    setFullAddress(roadAddress); // 도로명주소만 저장
  };

  // 상세주소 입력
  const handleDetailAddress = (e) => {
    setDetailAddress(e.target.value); // 세부주소만 저장
    setFullAddress(`${roadAddress} ${e.target.value}`); // 전체주소 누적 저장 (도로명주소 + 세부주소)
    setIsBtnSelected(true); // 입력완료버튼 활성화
  };

  // 입력완료버튼 클릭시
  const handleComplete= () => {
    if (!isBtnSelected) return window.alert('상세 주소를 입력하세요.'); // 상세주소 입력필수

    window.opener.postMessage(fullAddress);  // 주소 '/order' 페이지로 전체주소 전달
    window.close(); // 현재 팝업창 닫기
  };

  return (
    <MapWrapper>
      <h1>배달주소 입력</h1>
      <MapSection>
        <h2>- 주소 : </h2>
        <DaumPostcode onComplete={handleAddress} />
        {
          roadAddress !== '' 
          && (
            <input 
              type="text" 
              placeholder="예) ㅇㅇ아파트 ㅇㅇ동ㅇㅇㅇ호" 
              value={roadAddress}
              readOnly
            />
          )
        }
      </MapSection>
      <MapSection>
        <h2>- 상세주소 : </h2>
        <input 
          type="text" 
          placeholder="예) ㅇㅇ아파트 ㅇㅇ동ㅇㅇㅇ호" 
          value={detailAddress}
          onChange={handleDetailAddress}
        />
      </MapSection>

      <ButtonWrapper>
        <DeliveryButton 
          type="button" 
          isBtnSelected={isBtnSelected}
          onClick={handleComplete}
        >
          입력완료
        </DeliveryButton>
      </ButtonWrapper>
    </MapWrapper>
  );
};

export default PostSearch;