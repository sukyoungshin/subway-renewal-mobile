import LINK from '@/shared/constants/link';
import { useNavigate } from 'react-router-dom';

const usePageMove = () => {
  const navigate = useNavigate();
  const handleOrderProcess = () => navigate(LINK.ADDR);

  return handleOrderProcess;
};

export default usePageMove;
