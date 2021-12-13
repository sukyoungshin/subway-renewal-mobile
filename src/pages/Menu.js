import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuWrapper, MenuSection, CategoryBtn, MenuListGrid, FloatBtn } from '../common/Styled';

const MenuCategories = [
  {
    id: 0,
    title: '즐겨찾기',
    imgSrc : '',
  },
  {
    id: 1,
    title: '샌드위치',
    imgSrc : '',
  },
  {
    id: 2,
    title: '찹샐러드',
    imgSrc : '',
  },
  {
    id: 3,
    title: '랩기타',
    imgSrc : '',
  },
  {
    id: 4,
    title: '프로모션',
    imgSrc : '',
  }
];
const SandwichLists = [

];

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state === null) return navigate(-1); // 이전페이지에서 써브웨이 매장 정보가 넘어오지 않았으면 이전 페이지로 강제이동
    console.log('@@order페이지에서 받아온 정보', location.state);
  }, [location.state, navigate]);


  const [ categoryId, setCategoryId ] = useState(0); // 선택된 카테고리 인덱스#
  const [ isBtnSelected, setIsSelected ] = useState(false); // 선택된 버튼
  const handleButtonActive = (id) => (
    () => {
      setCategoryId(id); // 선택된 버튼의 인덱싱값을 저장
      setIsSelected(prev => !prev);
    }
  );

  const [ menuId, setMenuId ] = useState(0); //선택된 메뉴 인덱스#
  const [ isMenuSelected, setIsMenuSelected ] = useState(false); // 선택된 버튼


  return (
    <MenuWrapper>
      <MenuSection style={{ marginTop: '32px' }}>
        <h2>카테고리</h2>
        <article>
          <ul>
            {
              MenuCategories.map((category) => (
                <li id={category.id}>
                  <CategoryBtn 
                    type="button"
                    isBtnSelected={category.id === categoryId}
                    onClick={handleButtonActive(category.id)}
                  >
                    <img src={category.imgSrc} alt={category.title} />
                    <span>{category.title}</span>
                  </CategoryBtn>
                </li>
              ))
            }
          </ul>
        </article>
      </MenuSection>
      <MenuSection style={{ marginTop: '16px' }}>
        <h2>메뉴선택</h2>
        <MenuListGrid>
          <div>
            1번째 상자
          </div>
            {/* <h3>이탈리안 비엠티</h3>
            <p>Italian B.M.T.™</p>
            <img src="" alt="샌드위치이미지" />
            <p>4,300 KRW</p> */}
        </MenuListGrid>
      </MenuSection>

      <FloatBtn type="button">
        메뉴 선택 (1 / 7)
      </FloatBtn>
    </MenuWrapper>
  );
};

export default Menu;