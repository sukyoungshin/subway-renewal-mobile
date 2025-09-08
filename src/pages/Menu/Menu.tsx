import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { ICategoryMenuDetail } from '@/shared/api/mock/food-menu.types';
import { menuCategoryList, TabContents } from '@/shared/api/mock/navigation.mock.js';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { CTAButton } from '@/shared/ui';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CategoryList from './ui/CategoryList';
import MenuList from './ui/MenuList';

const Menu = () => {
  const dispatch = useDispatch();
  const { buttonDisabled, setButtonDisabled, handleNextOrder } = useCTAButton(LINK.BREAD);
  const [categoryId, setCategoryId] = useState<number>(0); // 선택된 카테고리 인덱스#
  const [menuId, setMenuId] = useState<number>(0); // 선택된 메뉴 버튼의 인덱싱#
  const [menuList, setMenuList] = useState<ICategoryMenuDetail[] | null>(null); // 현재 선택완료된 메뉴를 저장한다

  const handleSelectMenu = useCallback(
    (id: number) => () => {
      setMenuId(id); // 선택한 메뉴의 인덱싱 저장
      setButtonDisabled(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const saveCategory = () => {
    dispatch({
      type: CART_ACTION_TYPE.CATEGORY,
      payload: { currentMenu: menuList ? menuList[menuId] : null },
    });
  };

  useEffect(() => {
    if (menuCategoryList[categoryId]) {
      const key = menuCategoryList[categoryId].titleEng;
      setMenuList(TabContents[key]);
    }
  }, [categoryId]);

  return (
    <main className="flex-1 overflow-auto pb-[96px]">
      <form className="relative min-h-[calc(100%-136px)] w-full max-w-[440px] p-4">
        <fieldset className="mb-4 inline-flex w-full flex-col gap-2">
          <CategoryList
            categoryId={categoryId}
            categoryMenuList={menuCategoryList}
            handleCategoryMenu={setCategoryId}
          />
        </fieldset>
        <fieldset className="mb-4 inline-flex w-full flex-col gap-2">
          <MenuList menuId={menuId} menuList={menuList} handleSelectMenu={handleSelectMenu} />
        </fieldset>

        <CTAButton
          label={`${
            menuList && menuList.length !== 0
              ? menuList[menuId]?.nameKor || menuList[0]?.nameKor
              : '메뉴'
          } 선택 (1 / 7)`}
          disabled={buttonDisabled}
          handleNextOrder={(e) => {
            saveCategory();
            handleNextOrder(e);
          }}
        />
      </form>
    </main>
  );
};

export default Menu;
