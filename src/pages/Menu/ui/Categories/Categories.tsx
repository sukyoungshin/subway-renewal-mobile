import { MenuCategories } from '@/shared/api/mock/navigation.mock.js';
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
              <img src={imgSrc} alt={title} />
              <span>{title}</span>
            </CategoryButtonStyled>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Categories;
