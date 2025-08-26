import { Spinner } from '@/shared/ui';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import {
  AmountButton,
  Container,
  Content,
  Header,
  Range,
  VeggieList,
} from '../VegetableList/VegetableList.style';

interface IVegetableProps {
  step: IStep;
  setStep: Dispatch<SetStateAction<IStep>>;
  handleVegetableAmount: (id: string, direction: 'prev' | 'next') => () => 0 | 100 | undefined;
  handleStepChange: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  setButtonDisabled: () => void;
  vegetableList: IVegetableList[];
}
interface IStep {
  [x: string]: number;
}
interface IVegetableList {
  id: number;
  nameKor: string;
  nameEng: string;
  description: string;
  imgPath: string;
}

const Vegetable = ({
  step,
  setStep,
  handleVegetableAmount,
  handleStepChange,
  setButtonDisabled,
  vegetableList,
}: IVegetableProps) => {
  return (
    <Container>
      {vegetableList.map(({ id, nameKor, imgPath }) => (
        <VeggieList key={id} isMenuSelected={!(step[id] < 10)}>
          <Header>
            <AmountButton onClick={handleVegetableAmount(`${id}`, 'prev')}>-</AmountButton>
            <label htmlFor={`${id}`}>{nameKor}</label>
            <AmountButton onClick={handleVegetableAmount(`${id}`, 'next')}>+</AmountButton>
          </Header>
          <Content>
            <Spinner src={imgPath} alt={nameKor} />
          </Content>
          <Content>
            <Range
              id={id}
              type="range"
              min="0"
              max="100"
              step="10"
              value={step[id]}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => {
                handleStepChange(`${id}`);
                setStep({
                  ...step,
                  [id]: e.target.valueAsNumber,
                });
                setButtonDisabled();
              }}
            />
          </Content>
        </VeggieList>
      ))}
    </Container>
  );
};

export default Vegetable;
