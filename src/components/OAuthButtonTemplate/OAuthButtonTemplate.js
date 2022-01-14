import { BtnContainerStyled } from './OAuthButtonTemplate.style';

const OAuthButtonTemplate = ({ children }) => {
  return (
    <BtnContainerStyled>
      {children}
    </BtnContainerStyled>
  );
};

export default OAuthButtonTemplate;