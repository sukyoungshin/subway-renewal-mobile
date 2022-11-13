import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  min-height: calc(100% - 136px);
  max-height: calc(100% - 232px);
  overflow: auto;
`;

export const SectionStyled = styled.section`
  margin-bottom: 56px;
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 32px 0 24px 0;
    text-align: center;
    color: var(--color-black);
    font-size: var(--font-size-20);
  }
`;

export const ArticleStyled = styled.article`
  width: 270px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  text-align: center;
  grid-gap: 32px;
  gap: 32px;
`;

export const DivStyled = styled.div`
  padding: 16px;
  width: 270px;
  height: 260px;

  display: inline-block;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;

  img {
    width: 235px;
    height: 135px;
  }
  h3 {
    margin: 10px 0 11px 0;
    color: var(--color-black);
    font-size: var(--font-size-14);
  }
  p {
    color: var(--color-grey);
    font-size: var(--font-size-14);
  }
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  font-size: 0;

  width: fit-content;
  height: 48px;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  img {
    width: 40px;
    height: 40px;
  }
`;
