import styled from 'styled-components';

export const MainFooter = styled.footer`
    padding: 0 16px;
    width: 100%;
    height: 80px;

    color: var(--color-grey);
    font-size: var(--font-size-10);
    background-color: var(--color-black);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  address {
    width: 100%;
    word-break: break-all;
  }
`;