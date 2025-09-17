import Title from '@/shared/ui/Title';

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

const CategoryList = ({ categoryId, categoryMenuList, handleCategoryMenu }: ICategory) => {
  return (
    <>
      <Title>카테고리</Title>
      <ul className="inline-flex w-full flex-row gap-5 rounded-lg bg-transparent text-[0]">
        {categoryMenuList?.map(({ id, title, imgPath }) => {
          const selected = id === categoryId;

          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleCategoryMenu(id)}
                className={`inline-flex h-[104px] w-full min-w-[65px] flex-col items-center justify-end gap-6  rounded-lg border border-solid border-grey-light p-2 text-xs transition-all duration-[0.3s]
              ${
                selected
                  ? 'bg-green font-semibold text-white'
                  : 'bg-[rgba(233,233,233,0.4)] font-light text-grey'
              }`}
              >
                <img
                  src={imgPath}
                  alt={title}
                  className={`h-full w-full object-cover transition-transform delay-[0s] duration-[0.3s] ease-[ease] ${selected ? 'c-category-filter scale-150' : ''}`}
                />
                <span
                  className={`text-xs ${selected ? 'font-semibold text-white' : 'font-light text-grey'}`}
                >
                  {title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoryList;
