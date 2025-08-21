import { Button } from './SubwayButton.style';

const SubwayButton = ({ onAction, label }) => {
  return (
    <Button type="button" onClick={onAction}>
      {label}
    </Button>
  );
};

export default SubwayButton;
