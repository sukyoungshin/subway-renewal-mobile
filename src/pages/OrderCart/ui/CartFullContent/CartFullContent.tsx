import { Spinner } from '@/shared/ui';
import { MenuCardStyled, MenuDescription, MenuImage } from './CartFullContent.style';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartFullContent = ({ tempArray }: {tempArray: any[]}) => {
  return (
    <>
      {tempArray.map(({ imgPath, nameKor, nameEng, price, description }) => (
        <MenuCardStyled key={imgPath}>
          <MenuImage>
            <Spinner src={imgPath} alt={`${nameKor}, ${nameEng}`} />
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
