import { Spinner } from '@/shared/ui';
import { MenuCardStyled, MenuDescription, MenuImage } from './CartFullContent.style';

const CartFullContent = ({ ItemArray }) => {
  return (
    <>
      {ItemArray.map(({ imgSrc, nameKor, nameEng, price, description }) => (
        <MenuCardStyled key={imgSrc}>
          <MenuImage>
            <Spinner src={imgSrc} alt={`${nameKor}, ${nameEng}`} />
          </MenuImage>
          <MenuDescription>
            <h3>
              {nameKor}
              <span>{price} krw</span>
            </h3>
            <p>{description}</p>
          </MenuDescription>
        </MenuCardStyled>
      ))}
    </>
  );
};

export default CartFullContent;
