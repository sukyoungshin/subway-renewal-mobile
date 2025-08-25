import LINK from '@/shared/constants/link';
import { useNavigate } from 'react-router-dom';

const usePageMove = () => {
  const navigate = useNavigate();
  const handleNavAddr = () => navigate(LINK.ADDR);

  return handleNavAddr;
};

export default usePageMove;
