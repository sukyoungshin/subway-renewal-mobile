import { Spinner } from '@/components';
import { BASEURL } from '@/config';
import { vegetables } from '@/mock/food-data';
import { AmountButton, Container, Content, Header, Range, VeggieList } from './VeggieRange.style';

const Veggies = ({ step, handleAmountVeg, handleStepChange }) => {
  return (
    <Container>
      {vegetables.map(({ id, nameKor, imgSrc }) => (
        <VeggieList key={id} isMenuSelected={!(step[id] < 10)}>
          <Header>
            <AmountButton onClick={handleAmountVeg(id, 'prev')}>-</AmountButton>
            <label htmlFor={id}>{nameKor}</label>
            <AmountButton onClick={handleAmountVeg(id, 'next')}>+</AmountButton>
          </Header>
          <Content>
            <Spinner src={`${BASEURL}${imgSrc}`} alt={nameKor} />
          </Content>
          <Content>
            <Range
              id={id}
              type="range"
              min="0"
              max="100"
              step="10"
              value={step[id]}
              onChange={handleStepChange(id)}
            />
          </Content>
        </VeggieList>
      ))}
    </Container>
  );
};

export default Veggies;
