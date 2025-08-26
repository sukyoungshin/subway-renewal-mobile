import React from 'react';
import { Container } from './OAuthButtonLayout.style';

const OAuthButtonLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default OAuthButtonLayout;
