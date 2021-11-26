import React from "react";
import styled from 'styled-components';

// STYLE
const MainFooter = styled.footer`
    width: 100vw;
    height: 80px;
    font-size: 10px;
    color: var(--color-white);
    background-color: var(--color-black);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  address {
    width: 270px;
  }
`;

// COMPONENT
const Footer = () => {
  return (
    <MainFooter>
      <address>
        SUBWAY® is a Registered Trademark of Subway IP LLC. © 2021 Subway IP
        LLC. All Rights Reserved.
      </address>
    </MainFooter>
  );
};

export default Footer;
