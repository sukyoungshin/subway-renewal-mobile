import styled from 'styled-components';

export const MainStyled = styled.main`
  padding: 16px;
  width: 100%;
  min-height: calc(100% - 136px);
  position: relative;
`;

export const SectionStyled = styled.section`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;

  h2 {
    color: var(--color-black);
    font-size: var(--font-size-14);
  }
  .description {
    font-size: var(--font-size-12);
  }

  p {
    color: var(--color-black);

    span {
      float: right;
    }
  }
  p:not(total-price) {
    font-size: var(--font-size-12);
  }
  p.total-price {
    margin-top: 16px;
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-bold);
  }

  ul {
    width: 100%;
    background-color: var(--color-transparent);
    border-radius: 8px;

    font-size: 0; /* removed unexpected space */
  }
  ul:not(option-wrapper) {
    display: inline-flex;
    flex-direction: row;
    grid-gap: 20px;
    gap: 20px;
  }
  ul.option-wrapper{
    min-height: 104px;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 8px;
    gap: 8px;
  }
`;

export const MenuCardStyled = styled.section`
  padding: 8px;
  width: 100%;
  height: 112px;
  background-color: #F6F5F5;

  display: inline-flex;
  flex-direction: row;
  grid-gap: 16px;
  gap: 16px;

  .card-img {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 96px;
    height: 100%;

    img {
      min-width: 96px;
      height: 96px;
      object-fit: cover;
      font-size: var(--font-size-12);
    }
  }
  .card-content {
    padding-top: 8px;
    flex: 1;

    display: inline-flex;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;

    overflow: hidden;

    h2 {
      font-size: var(--font-size-14);
      span {
        float: right;
      }
    }
    p {
      font-size: var(--font-size-12);
      max-height: 32px;
      overflow: hidden;
      position: relative;

      &::after {
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
`;

export const AmountButtonWrapperStyled = styled.div`
  margin-top: auto;
  justify-self: end;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;

  .button-wrapper {
    width: 100%;
    max-width: 112px;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: 0;

    span {
      font-size: var(--font-size-10);
      font-weight: var(--font-weight-bold);
    }
    button {
      width: 24px;
      height: 24px;
      background-color: #C4C4C4;
      border-radius: 50%;

      font-size: var(--font-size-10);
    }
    .menu-delete {
      font-size: var(--font-size-14);
    }
  }

  .menu-delete {
    margin-left: auto;
    justify-self: end;
    font-size: 0;

    svg {
      font-size: var(--font-size-24);
    }
  }
`;

export const FloatButtonWrapperStyled = styled.div`
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

export const HalfSizeCTAButtonStyled = styled.button`
  width: 100%;
  height: 100%;

  color: var(--color-grey);
  font-weight: var(--font-weight-normal);
  background-color: var(--color-transparent);
  border: 1px solid var(--color-light-grey);
  backdrop-filter: blur(4px);
  border-radius: 8px;

  transition: all 0.3s;

  &:focus,
  &:active {
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
    border: 1px solid var(--color-green);
    background-color: var(--color-green);
  }
`;

