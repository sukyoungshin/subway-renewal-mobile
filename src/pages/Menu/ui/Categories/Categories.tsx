import { CategoryButtonStyled } from './Categories.style';

interface ICategory {
  categoryId: number;
  categoryMenuList: ICategoryMenuList[] | undefined;
  handleCategoryMenu: (id: number) => void;
}
interface ICategoryMenuList {
  id: number;
  title: string;
  titleEng: string;
  imgPath: string;
}

const Categories = ({ categoryId, categoryMenuList, handleCategoryMenu }: ICategory) => {
  return (
    <article>
      <ul>
        {categoryMenuList?.map(({ id, title, imgPath }) => (
          <li key={id}>
            <CategoryButtonStyled
              type="button"
              isBtnSelected={id === categoryId}
              onClick={() => handleCategoryMenu(id)}
            >
              <img src={imgPath} alt={title} />
              <span>{title}</span>
            </CategoryButtonStyled>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Categories;
