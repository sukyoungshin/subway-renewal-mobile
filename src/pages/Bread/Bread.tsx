import { CART_ACTION_TYPE } from '@/features/cart/model/actionTypes';
import { breadList, breadOptionList } from '@/shared/api/mock/food-menu.mock';
import LINK from '@/shared/constants/link';
import { useCTAButton } from '@/shared/hooks/useCTAButton';
import { useSelectMenu } from '@/shared/hooks/useSelectMenu';
import { CTAButton } from '@/shared/ui';
import { useDispatch } from 'react-redux';
import { Container, Section } from './Bread.style';
import BreadList from './ui/BreadList/BreadList';
import BreadOption from './ui/BreadOption/BreadOption';

const Bread = () => {
  const dispatch = useDispatch();
  const { menuId, currentMenu: selectedBread, handleOrderMenu } = useSelectMenu(breadList);
  const { buttonDisabled, setButtonDisabled, handleNextOrder } = useCTAButton(LINK.CHEESE);

  const selectBread = (id: number) => () => {
    handleOrderMenu(id);
    setButtonDisabled(false);
  };

  const saveBread = () => {
    dispatch({
      type: CART_ACTION_TYPE.BREAD,
      payload: {
        currentMenu: selectedBread,
        breadOptions: breadOptionList,
      },
    });
  };

  return (
    <Container>
      <Section style={{ marginTop: '32px' }}>
        <h2>옵션선택</h2>
        <article>
          <BreadOption />
        </article>
      </Section>
      <Section style={{ marginTop: '16px' }}>
        <h2>빵선택</h2>
        <BreadList menuId={menuId} breadList={breadList} handleSelectBread={selectBread} />
      </Section>

      <CTAButton
        label={`${selectedBread?.nameKor} 빵 선택 (2 / 7) `}
        disabled={buttonDisabled}
        handleNextOrder={(e) => {
          saveBread();
          handleNextOrder(e);
        }}
      />
    </Container>
  );
};

export default Bread;
