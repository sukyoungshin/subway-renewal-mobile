import { BASEURL } from "config";
import { Spinner } from "components/container/index";
import {
  MenuCardStyled,
  MenuImage,
  MenuDescription
} from "./CartFullContent.style";

const CartFullContent = ({ ItemArray }) => {
  return (
    <>
      {ItemArray.map(({ imgSrc, nameKor, nameEng, price, description }) => (
        <MenuCardStyled key={imgSrc}>
          <MenuImage>
            <Spinner
              src={`${BASEURL}${imgSrc}`}
              alt={`${nameKor}, ${nameEng}`}
            />
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
