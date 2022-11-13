import React, { useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { sauces, sauceOptionLists } from "mock/food-data";
import { BASEURL } from "config";
import { FloatButton, ImgSpinner } from "components";
import {
  MainStyled,
  SectionStyled,
  MenuListGridStyled,
  MenuArticleStyled,
  OrderButtonStyled,
  OptionListStyled,
  InputRadioStyled,
  LabelRadioStyled,
} from "./Sauce.style";
import { useCTAButton, useSelectOptionAndMenu } from "./hooks";

const Sauce = () => {
  const { menuId, currentMenu, isChecked, handleOrderMenu, selectedRadio } =
    useSelectOptionAndMenu();
  const { isBtnActivated, setIsBtnActivated, handleOrderProcess } =
    useCTAButton({ currentMenu });
  // eslint-disable-next-line
  const handleSelectSauce = useCallback(
    ({ id, nameKor, description, imgSrc, defaultChecked }) =>
      () => {
        handleOrderMenu({
          id: id,
          nameKor: nameKor,
          description: description,
          imgSrc: imgSrc,
          defaultChecked: defaultChecked,
        });
        setIsBtnActivated(true);
      }
  );

  return (
    <MainStyled>
      <SectionStyled style={{ marginTop: "32px" }}>
        <h2>옵션선택 (다중선택)</h2>
        <article>
          <ul className="option-wrapper">
            {sauceOptionLists.map((list) => (
              <OptionListStyled key={list.id}>
                <InputRadioStyled
                  type="radio"
                  id={list.id}
                  name={list.radioGroup}
                  checked={isChecked === list.id}
                  onChange={selectedRadio(list.id)}
                />
                <LabelRadioStyled htmlFor={list.radioGroup}>
                  {list.name}
                </LabelRadioStyled>
              </OptionListStyled>
            ))}
          </ul>
        </article>
      </SectionStyled>

      <SectionStyled>
        <h2>소즈/시즈닝 선택</h2>
        <MenuListGridStyled>
          {sauces.map((sauce) => (
            <MenuArticleStyled
              key={sauce.id}
              isMenuSelected={menuId === sauce.id}
            >
              <OrderButtonStyled
                isMenuSelected={menuId === sauce.id}
                onClick={handleSelectSauce(sauce)}
              >
                <AiOutlinePlus />
              </OrderButtonStyled>
              <div className="menu-name-wrapper">
                <h3 className="menu-name-kor">{sauce.nameKor}</h3>
                <p className="menu-name-eng">{sauce.nameEng}</p>
              </div>
              <div className="menu-img-wrapper">
                <ImgSpinner
                  src={`${BASEURL}${sauce.imgSrc}`}
                  alt={sauce.nameKor}
                />
                <span className="menu-description">{sauce.description}</span>
              </div>
              <p className="menu-price">
                {sauce.price ? `${sauce.price}KRW` : null}
              </p>
            </MenuArticleStyled>
          ))}
        </MenuListGridStyled>
      </SectionStyled>

      <FloatButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
        label="소스 선택 (5 / 7)"
      />
    </MainStyled>
  );
};

export default Sauce;
