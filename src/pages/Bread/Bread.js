import React from "react";
import { BASEURL } from "config";
import { breads, breadOptionLists } from "mock/food-data";
import { AiOutlinePlus } from "react-icons/ai";
import { FloatButton, ImgSpinner } from "components";
import {
  ArticleStyled,
  InputRadioStyled,
  LabelRadioStyled,
  MainStyled,
  MenuGridStyled,
  MenuImgSectionStyled,
  MenuNameSectionStyled,
  OptionListStyled,
  OptionListWrapperStyled,
  OrderButtonStyled,
  SectionStyled,
} from "./Bread.style";
import { useCTAButton, useSelectBread, useSelectBreadOption } from "./hooks";

const Bread = () => {
  const { breadOptions, selectedRadio } = useSelectBreadOption(); // 빵 옵션선택 로직
  const { menuId, currentMenu, handleOrderMenu } = useSelectBread(); // 빵 선택 로직
  const { isBtnActivated, setIsBtnActivated, handleOrderProcess } =
    useCTAButton({ currentMenu, breadOptions }); // CTA버튼
  const handleSelectBread = (id) => () => {
    handleOrderMenu(id);
    setIsBtnActivated(true);
  };

  return (
    <MainStyled>
      <SectionStyled style={{ marginTop: "32px" }}>
        <h2>옵션선택</h2>
        <article>
          <ul className="option-wrapper">
            {breadOptionLists.map((list) => (
              <OptionListWrapperStyled key={list.id}>
                <span>{list.name}</span>
                <ul className="option">
                  <OptionListStyled>
                    <InputRadioStyled
                      type="radio"
                      id={list.option["option1"].text}
                      name={list.nameEng}
                      defaultChecked={list.option["option1"].default}
                      onChange={selectedRadio({
                        id: list.id,
                        name: list.nameEng,
                        nameKor: list.name,
                        bool: list.option["option1"].default,
                        price: list.option["option1"].price,
                      })}
                    />
                    <LabelRadioStyled htmlFor={list.option["option1"].text}>
                      {list.option["option1"].text}
                    </LabelRadioStyled>
                  </OptionListStyled>
                  <OptionListStyled>
                    <InputRadioStyled
                      type="radio"
                      id={list.option["option2"].text}
                      name={list.nameEng}
                      defaultChecked={list.option["option2"].default}
                      onChange={selectedRadio({
                        id: list.id,
                        nameKor: list.name,
                        name: list.nameEng,
                        bool: list.option["option2"].default,
                        price: list.option["option2"].price,
                      })}
                    />
                    <LabelRadioStyled htmlFor={list.option["option2"].text}>
                      {list.option["option2"].text}{" "}
                      {list.option["option2"].price
                        ? `(${list.option["option2"].price})`
                        : null}
                    </LabelRadioStyled>
                  </OptionListStyled>
                </ul>
              </OptionListWrapperStyled>
            ))}
          </ul>
        </article>
      </SectionStyled>
      <SectionStyled style={{ marginTop: "16px" }}>
        <h2>빵선택</h2>
        <MenuGridStyled>
          {breads.map((bread) => (
            <ArticleStyled key={bread.id} isMenuSelected={menuId === bread.id}>
              <OrderButtonStyled
                isMenuSelected={menuId === bread.id}
                onClick={handleSelectBread(bread.id)}
              >
                <AiOutlinePlus />
              </OrderButtonStyled>
              <MenuNameSectionStyled>
                <h3>{bread.nameKor}</h3>
                <p>{bread.nameEng}</p>
              </MenuNameSectionStyled>
              <MenuImgSectionStyled isMenuSelected={menuId === bread.id}>
                <ImgSpinner
                  src={`${BASEURL}${bread.imgSrc}`}
                  alt={bread.nameKor}
                />
                <span>{bread.description}</span>
              </MenuImgSectionStyled>
              <p className="menu-price">
                {bread.price ? `${bread.price}KRW` : null}
              </p>
            </ArticleStyled>
          ))}
        </MenuGridStyled>
      </SectionStyled>

      <FloatButton
        isBtnActivated={isBtnActivated}
        handleOrderProcess={handleOrderProcess}
        label="빵 선택 (2 / 7)"
      />
    </MainStyled>
  );
};

export default Bread;
