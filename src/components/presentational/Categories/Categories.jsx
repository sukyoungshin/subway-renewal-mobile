import { BASEURL } from '@/config';
import { MenuCategories } from '@/mock/tab-data';
import { CategoryButtonStyled } from './Categories.style';

const Categories = ({ handleButtonActive, categoryId }) => {
  return (
    <article>
      <ul>
        {MenuCategories.map(({ id, titleEng, title, imgSrc }) => (
          <li key={id}>
            <CategoryButtonStyled
              type="button"
              isBtnSelected={id === categoryId}
              onClick={() => handleButtonActive(id, titleEng)}
            >
              <img src={`${BASEURL}${imgSrc}`} alt={title} />
              <span>{title}</span>
            </CategoryButtonStyled>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Categories;
