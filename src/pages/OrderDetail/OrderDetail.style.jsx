import styled, { css } from 'styled-components';

export const Container = styled.main`
  padding: 16px;
  width: 100%;
  min-height: calc(100% - 136px);
  position: relative;
`;

export const Section = styled.section`
  margin-top: 16px;
  width: 100%;
  height: auto;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  p {
    line-height: 1.3rem;
    font-size: var(--font-size-12);

    span {
      display: inline-block;
      width: 16px;
      height: 16px;
    }
  }
  p.order-agreement {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 8px;
    gap: 8px;

    input {
      accent-color: var(--color-green);
    }
  }

  ul {
    padding: 8px;
    width: 100%;
    background-color: var(--color-transparent);
    border-radius: 8px;
    box-sizing: border-box;

    min-height: 56px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;

    font-size: 0;

    li {
      line-height: 1.3rem;
      color: var(--color-grey);
      font-size: var(--font-size-12);
    }
  }

  ul.addr-wrapper {
    li:nth-child(2) {
      margin-left: auto;
      justify-self: right;
    }
  }
  ul.deliver-wrapper {
    li {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      grid-gap: 8px;
      gap: 8px;
    }

    input {
      accent-color: var(--color-green);
    }
  }
`;

export const Title = styled.h2`
  color: var(--color-black);
  font-size: var(--font-size-14);

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    display: inline-block;
    color: var(--color-grey);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-normal);
  }
  span.subway-phone {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 16px;
    gap: 16px;
  }
`;

export const TextArea = styled.textarea`
  padding: 8px;
  width: 100%;
  height: 100%;
  min-height: 72px;

  border-radius: 8px;
  background-color: var(--color-transparent);

  color: var(--color-grey);
  font-size: var(--font-size-12);

  resize: none;
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 48px;

  display: inline-flex;
  flex-direction: row;
  grid-gap: 8px;
  gap: 8px;

  position: sticky; /* 부모요소에 overflow 요소가 있으면 작동안함 */
  bottom: 16px;
  left: 0;
  z-index: 100;

  transition: all 0.3s;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;

  color: var(--color-grey);
  font-weight: var(--font-weight-normal);
  background-color: var(--color-transparent);
  border: 1px solid var(--color-light-grey);
  backdrop-filter: blur(4px);
  border-radius: 8px;

  transition: all 0.3s;

  ${(props) =>
    props.isActive &&
    css`
      color: var(--color-white);
      font-weight: var(--font-weight-bold);
      background-color: var(--color-green);
      border: 1px solid var(--color-green);
    `}
`;
