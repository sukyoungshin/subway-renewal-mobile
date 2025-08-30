import { OAuthButtonLayout } from '@/shared/layout';
import { RiFacebookCircleFill } from 'react-icons/ri';

const FacebookLogin = () => {
  return (
    <OAuthButtonLayout>
      <button
        type="button"
        className="w-full h-full inline-flex items-center justify-center gap-2 text-sm text-white font-normal bg-facebook rounded-lg"
      >
        <RiFacebookCircleFill /> 페이스북으로 시작
      </button>
    </OAuthButtonLayout>
  );
};

export default FacebookLogin;
